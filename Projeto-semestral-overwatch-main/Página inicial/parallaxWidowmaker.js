const tela = document.querySelector('.tela');
const windowImage = document.querySelector('.window');

tela.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / tela.offsetWidth) * 20; // Ajuste o valor conforme necessário
    const yOffset = (e.clientY / tela.offsetHeight) * 20; // Ajuste o valor conforme necessário

    windowImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

