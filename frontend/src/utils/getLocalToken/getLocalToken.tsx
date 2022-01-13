export const getLocalToken = () => {
    const token = localStorage.getItem("stmongs-token");
    console.log(token)
    return token;
}