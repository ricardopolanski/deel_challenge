
function login(cliente) {
    oldClient = 'rpolanski@live.com'
    oldPasswd = 'Testdeel123$'
    newClient = 'live@live.com'
    newPasswd = 'Ricochete123$'
    if (cliente == "new") {
        const email = newClient;
        const passwd = newPasswd;
        return {
            email,
            passwd
        }
    } else {
        const email = oldClient;
        const passwd = oldPasswd;
        return {
            email,
            passwd
        }
    }
};

module.exports = {
    login
}