export const isTrueRegExp = new RegExp(/(true|on|yes|1)/, 'gi');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

export function isEnabled(key: string = ''): boolean {
  return key && (key in process.env) && isTrueRegExp.test(process.env[key]);
}

export function isDev(): boolean {
  return !('NODE_ENV' in process.env) || (process.env.NODE_ENV === DEVELOPMENT);
}

export function isProd(): boolean {
  return ('NODE_ENV' in process.env) && (process.env.NODE_ENV === PRODUCTION);
}
