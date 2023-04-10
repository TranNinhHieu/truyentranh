export const setAccessToken = (accessToken) => {
    localStorage.setItem('user_access_token', JSON.stringify(accessToken))
}
export const getAccessToken = () => {
    return JSON.parse(localStorage.getItem('user_access_token'))
}

export const removeAccessToken = () => {
    localStorage.removeItem('user_access_token')
}
