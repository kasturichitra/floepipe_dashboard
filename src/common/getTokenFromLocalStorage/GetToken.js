const gettingTokenFromLocalStorage = () => {
    const tokenFromStorage = JSON.parse(localStorage.getItem("token"))

    return tokenFromStorage;
}

export default gettingTokenFromLocalStorage;