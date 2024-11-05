// Seleciona o display onde os números e operadores serão exibidos
const display = document.getElementById('display');

// Seleciona todos os botões com a classe "btn" e armazena em um array
const botoes = Array.from(document.getElementsByClassName('btn'));

// Adiciona um evento de clique para cada botão
botoes.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Limpa o display se o botão " " for pressionado
        if (value === ' ') {
            display.innerText = '0';
        } 
        // Calcula o valor se o botão "=" for pressionado
        else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Erro';
            }
        } 
        // Se o display estiver em 0, substitui pelo valor do botão pressionado
        else {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});