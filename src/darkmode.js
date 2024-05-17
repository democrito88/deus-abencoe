export function darkmode(botao) {
    botao.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', botao.checked);
    });
}