class LoginElements {

    emailField = () => {
        return '[id="mui-1"]'
    }

    passwdField = () => {
        return '[id="mui-2"]'
    }
    btnLogin = () => {
        return '[data-qa="log-in"]'
    }
}

module.exports = {LoginElements}