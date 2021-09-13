export const TOKEN_KEY = "x-access-token";


export const isAuthenticated = () => {
  return document.cookie.split(';').some(c => {
    return c.trim().startsWith(TOKEN_KEY + '=')
  })
}

export const getToken = () =>  document.cookie.split('=')[1];

export const setToken = (token: string) => document.cookie = TOKEN_KEY + '=' + token + ';' + 'Path' + '=' + '/' + ';' + 'Domain' + '=' + 'localhost' + ';' + 'Expires' + '=' + '1m'

export const logout = () => {
  if( isAuthenticated() ) {
    document.cookie = TOKEN_KEY + '=' + ';' + 'Path' + '=' + '/' + ';' + 'Domain' + '=' + 'localhost' + ';' + 'Expires' + '=' + 'Thu, 01 Jan 1970 00:00:01 GMT'
  }
}