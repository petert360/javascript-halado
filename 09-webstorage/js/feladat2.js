(function () {
    // Example:
    const saveCookie = (name, content, expireDate = new Date()) => {
        document.cookie = `${name}=${content}; expires=${expireDate}`;
    };

    const expire = new Date(new Date().getTime()) + 15 * 60 * 1000;
    saveCookie('token', 'hfdgrdhg',)

    // Cookie handler object
    const cookieHandler = {

        getCookie(name) {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith(name))
                .split('='[1]);
        },
        removeCookie(name) {
            document.cookie = 
        }
    
    }

})();
