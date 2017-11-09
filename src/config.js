export const Config = {
  API_URI: process.env.API_URI,
  API_WRITABLE: process.env.API_WRITABLE,
  BASE_APP_PATH: process.env.BASE_APP_PATH,
  SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME || '',
  USE_HASH_BROWSING: !process.env.PROD
}
export default Config
