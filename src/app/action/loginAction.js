function checkLogin(usernam, pass) {

    if (pass === "admin") {
        console.log("login action successfull");
        return {
            type: "LOG_IN",
            payload: new Promise((resolve, reject) => {
                resolve({
                    username: usernam,
                    password: pass,
                    status: true
                })
            })
        }
    } else {
        return { type: "ERROR" }
    }

}

function logout() {
    return {
        type: "LOG_OUT"
    }
}

export {
    checkLogin,
    logout
}

