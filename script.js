const btnAltoContraste = document.getElementById('altoContrasteBtn');
let altoContrasteAtivado = false;

btnAltoContraste.addEventListener('click', () => {
    altoContrasteAtivado = !altoContrasteAtivado;

    if (altoContrasteAtivado) {
        document.body.classList.add('alto-contraste');
        btnAltoContraste.textContent = 'Normal';
    } else {
        document.body.classList.remove('alto-contraste');
        btnAltoContraste.textContent = 'Alto Contraste';
    }
});