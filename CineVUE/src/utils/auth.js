const login = async (username, pass) => {
    const response = await fetch('api/sessions/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, pass})
    });

    return await response.json();
}

const logout = async () => {
    const response = await fetch('api/sessions/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return await response.json();
}

const isLogged = async () => {
    const response = await fetch('api/sessions/isLogged');
    return await response.json();
}

export {
    login,
    logout,
    isLogged
}