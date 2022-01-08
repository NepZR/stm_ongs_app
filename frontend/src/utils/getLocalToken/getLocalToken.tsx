export const getLocalToken = () => {
    const token = localStorage.getItem("stmongs-token");
    return token;
}