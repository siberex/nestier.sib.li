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

export class HashService {

  protected static async _hash(
    password: string | Buffer | NodeJS.TypedArray | DataView,
    salt: string | Buffer | NodeJS.TypedArray | DataView,
  ): Promise<Buffer> {
    const options: ScryptOptions = {
      N: SCRYPT_OPT_COST,
      r: SCRYPT_OPT_BLOCK_SIZE,
      p: SCRYPT_OPT_PARALLELIZE,
      maxmem: SCRYPT_OPT_MAXMEM,
    };

    return await scrypt(password, salt, SCRYPT_KEY_LENGTH, options);
  }

  /**
   * Key Derivation Function
   * @param password
   * @return base64-encoded salt.hash pair separated with dot (.)
   */
  static async hash(password: string): Promise<string> {
    const salt = randomBytes(SALT_LENGTH);
    const hash = await HashService._hash(password, salt);

    return [
      salt.toString('base64'),
      hash.toString('base64'),
    ].join('.');
  }

  /**
   *
   * @param checkPassword
   * @param saltWithHash base64-encoded salt.hash pair separated with dot (.)
   * @return false on password mismatch or decoding error
   */
  static async verify(checkPassword: string, saltWithHash: string): Promise<boolean> {
    try {
      const[b64salt, b64hash] = saltWithHash.split('.');

      const salt = Buffer.from(b64salt, 'base64');
      const hash = Buffer.from(b64hash, 'base64');

      const checkHash = await HashService._hash(checkPassword, salt);

      return timingSafeEqual(checkHash, hash);
    } catch (e) {
      return false;
    }
  }

}
