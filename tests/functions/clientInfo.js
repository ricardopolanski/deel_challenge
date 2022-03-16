function clientInfo() {
    const name = "New Client"
    const email = "teste@hotmail.com"
    const wrongEmail = "newcliente@hotmail"
    const password = "Ricochete123$"
    const shortPassword = "Ricochete"
    const wrongPassword = "asdfasdf"
    return {
        name,
        email,
        password,
        shortPassword,
        wrongPassword,
        wrongEmail
    };
}
module.exports = {clientInfo}