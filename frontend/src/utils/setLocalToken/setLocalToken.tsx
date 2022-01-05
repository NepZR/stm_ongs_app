export const setLocalToken = (token: string) => {
    const bearerToken = `Bearer ${token}`;
    localStorage.setItem("stmongs-token", bearerToken)
}