function mudarCor() {
    const cores = ['#e0f7fa', '#fce4ec', '#f3e5f5', '#e8f5e9', '#fff3e0'];
    const corAtual = window.getComputedStyle(document.body).backgroundColor;

    let novaCor = cores[Math.floor(Math.random() * cores.length)];

    while (novaCor === corAtual) {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    }

    document.body.style.backgroundColor = novaCor;
}
function criarCoração() {
    const coração = document.createElement('div');
    coração.classList.add('coração');

    // posição aleatória horizontal (0 a 100vw)
    coração.style.left = Math.random() * 100 + 'vw';

    // posição aleatória vertical (0 a 100vh)
    coração.style.top = Math.random() * 100 + 'vh';
    
    // Tamanho aleatório
    const tamanho = 10 + 10;
    coração.style.width = tamanho + 'px';
    coração.style.height = tamanho + 'px';
    coração.style.red = '#ff69b4';

    document.getElementById('corações-container').appendChild(coração);

    // Remover após animação
    setTimeout(() => {
        coração.remove();
    }, 199000);
}

let intervaloCorações;

function iniciarCorações() {
    if (intervaloCorações) return;
    intervaloCorações = setInterval(criarCoração, 10);
}

document.getElementById('botao-corações').addEventListener('click', iniciarCorações);