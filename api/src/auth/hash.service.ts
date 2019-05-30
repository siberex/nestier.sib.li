import { randomBytes, scrypt as scryptCallback, ScryptOptions, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

type ScryptFn = (
  password: string | Buffer | NodeJS.TypedArray | DataView,
  salt: string | Buffer | NodeJS.TypedArray | DataView,
  keylen: number,
  options?: ScryptOptions,
) => Promise<Buffer>;

const scrypt: ScryptFn = promisify(scryptCallback);

// https://nodejs.org/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback
const SALT_LENGTH = 24;
const SCRYPT_KEY_LENGTH = 32;

// Must be a power of two greater than one. Default is 2**14 = 16384
const SCRYPT_OPT_COST = 2 ** 15;
// Default is 8
const SCRYPT_OPT_BLOCK_SIZE = 8;
const SCRYPT_OPT_PARALLELIZE = 1;
// Memory upper bound.
// It is an error when (approximately) 128 * COST * BLOCK_SIZE > MAXMEM.
// Default: 32 * 1024 * 1024.
const SCRYPT_OPT_MAXMEM = 256 * SCRYPT_OPT_COST * SCRYPT_OPT_BLOCK_SIZE; // 64 * 1024 * 1024;

export type HashOptions = ScryptOptions & {
  saltLen?: number;
  hashLen?: number;
};

export const DefaultOptions: HashOptions = {
  N: SCRYPT_OPT_COST,
  r: SCRYPT_OPT_BLOCK_SIZE,
  p: SCRYPT_OPT_PARALLELIZE,
  maxmem: SCRYPT_OPT_MAXMEM,
  saltLen: SALT_LENGTH,
  hashLen: SCRYPT_KEY_LENGTH,
};

export class HashService {

  protected static _applyOptions(options: HashOptions): HashOptions {
    const result: HashOptions = Object.assign({}, DefaultOptions);
    for (const k in options) {
      if (k in DefaultOptions) {
        result[k] = options[k];
      }
    }
    return result;
  }

  protected static async _hash(
    password: string | Buffer | NodeJS.TypedArray | DataView,
    salt: string | Buffer | NodeJS.TypedArray | DataView,
    options: HashOptions = DefaultOptions,
  ): Promise<Buffer> {
    return await scrypt(password, salt, options.hashLen, options);
  }

  /**
   * Key Derivation Function
   *
   * Usage:
   *   await HashService.hash('AmazingPassword123');
   *
   * Example output:
   *   '5Uvh9yKdstm8zaVH1lGBd/ok7N96DT38.wpyY+XGeeVmTxDXs2degUJMBZWKib2gTrNewpcJvUjU='
   *
   * IMPORTANT:
   * Denial of Service attacks are possible if called with exceptionally-long password string.
   * Those should be mitigated by controllers with password length constraint in place.
   *
   * @param password
   * @param options?
   * @return base64-encoded salt.hash pair separated with dot (.)
   */
  static async hash(password: string, options?: HashOptions): Promise<string> {
    const opts: HashOptions = HashService._applyOptions(options);

    const salt = randomBytes(opts.saltLen);
    const hash = await HashService._hash(password, salt, opts);

    return [
      salt.toString('base64'),
      hash.toString('base64'),
    ].join('.');
  }

  /**
   * Password verification.
   *
   * Usage:
   *   await HashService.verify( 'AmazingPassword123',
   *     '5Uvh9yKdstm8zaVH1lGBd/ok7N96DT38.wpyY+XGeeVmTxDXs2degUJMBZWKib2gTrNewpcJvUjU=' );
   *
   * Will return true for the correct password and salt.hash combination.
   *
   * IMPORTANT:
   * Denial of Service attacks are possible if called with exceptionally-long password string.
   * Those should be mitigated by controllers with password length constraint in place.
   *
   * Timing attacks (and probably padding attacks) are possible on verify,
   * but only with malformed hash (saltWithHash) string, not with password input.
   * So hash should always come from DB, etc. and not from user input.
   *
   * @param checkPassword
   * @param saltWithHash base64-encoded salt.hash pair separated with dot (.)
   * @param options?
   * @return false on password mismatch or decoding error
   */
  static async verify(checkPassword: string, saltWithHash: string, options?: HashOptions): Promise<boolean> {
    try {
      const opts: HashOptions = HashService._applyOptions(options);

      const [b64salt, b64hash] = saltWithHash.split('.');

      const salt = Buffer.from(b64salt, 'base64');
      const hash = Buffer.from(b64hash, 'base64');

      const checkHash = await HashService._hash(checkPassword, salt, opts);

      return timingSafeEqual(checkHash, hash);
    } catch (e) {
      return false;
    }
  }

}
