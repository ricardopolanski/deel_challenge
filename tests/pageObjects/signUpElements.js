class SignUp {

    btnClient = () => {
        return 'button:has-text("As a clientI want to pay my contractors/employees")'
    }

    btnContinue = () => {
        // Click button:has-text("continue")
        return 'button:has-text("continue")'
    }
    clientNameField = () => {
        // Click input[name="name"]
        return 'input[name="name"]'
    }

    clientEmail = () => {
        // Click [placeholder="example\@example\.com"]
        return '[placeholder="example\\@example\\.com"]'
    }

    password = () => {
        // Click input[name="password"]
        return 'input[name="password"]'
    }

    passwordConfirm = () => {
        // Click input[name="confirmPassword"]
        return 'input[name="confirmPassword"]'
    }

    hearAboutDeel = () => {
        // Click .select__value-container
        return '.select__value-container'
    }

    hearAboutDeelSelect = () => {
        // Click #react-select-2-option-1
        return '#react-select-2-option-1'
    }
    btnCreate = () => {
        // Click button:has-text("create your deel account")
        return 'button:has-text("create your deel account")'
    }
};

module.exports = {SignUp}