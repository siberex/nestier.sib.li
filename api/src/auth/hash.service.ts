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
const SALT_LENGTH = 32;
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
   */
  static async hash(password: string): Promise<string> {
    const salt = randomBytes(SALT_LENGTH);
    const hash = await HashService._hash(password, salt);

    // Derived key structure definition
    const buffer = new ArrayBuffer(SALT_LENGTH + SCRYPT_KEY_LENGTH);
    const struct = {
      salt: new Uint8Array(buffer, 0, SALT_LENGTH),
      hash: new Uint8Array(buffer, SALT_LENGTH, SCRYPT_KEY_LENGTH),
    };

    struct.salt.set(salt);
    struct.hash.set(hash);

    return Buffer.from(buffer).toString('base64');
  }

  /**
   *
   * @param checkPassword
   * @param hash
   */
  static async verify(checkPassword: string, hash: string): Promise<boolean> {
    try {
      const buffer = Buffer.from(hash, 'base64');
      const stored = {
        salt: new Uint8Array(buffer, 0, SALT_LENGTH),
        hash: new Uint8Array(buffer, SALT_LENGTH, SCRYPT_KEY_LENGTH),
      };

      const checkHash = await HashService._hash(checkPassword, stored.salt);

      return timingSafeEqual(checkHash, stored.hash);
    } catch (e) {
      return false;
    }
  }

}
