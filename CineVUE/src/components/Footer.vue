<template>
    <footer>
        <p>© 2025 Cineva</p>
        <p>Realizzato da Fabio Pili e Michele Faedda</p>
        <p>Per assistenza: <a href="mailto:cineva@email.com">cineva@email.com</a></p>
    </footer>
</template>

<style scoped>
footer {
    background: radial-gradient(circle, var(--primary) 35%, var(--tertiary));
    color: var(--white);
    text-align: center;
    padding: 20px;
    font-size: 14px;
    line-height: 1.6;
    border-top: 4px solid var(--tertiary);
}

footer a {
    color: var(--secondary);
    text-decoration: none;
    font-weight: bold;
}

footer a:hover {
    text-decoration: underline;
    color: var(--tertiary);
}
</style>
