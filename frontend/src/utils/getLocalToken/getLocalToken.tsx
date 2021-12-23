export const getLocalToken = () => {
    const token = localStorage.getItem("stmongs-token");
    const bearerToken = `Bearer ${token}`;
    return bearerToken;
}