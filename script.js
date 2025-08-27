document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos HTML
    const body = document.body;
    const accessibilityBox = document.querySelector('.accessibility-box');
    const toggleButton = document.getElementById('accessibility-toggle');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const lightIcon = document.querySelector('.light-icon');
    const darkIcon = document.querySelector('.dark-icon');

    // Variável para controlar o tamanho da fonte
    let currentFontSize = 16; 

    // 1. Carrega as preferências do usuário salvas no navegador (LocalStorage)
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    } else {
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
    }

    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        body.style.fontSize = `${currentFontSize}px`;
    }

    // 2. Adiciona os eventos de clique

    // NOVO: Botão para abrir e fechar a caixa de acessibilidade
    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        accessibilityBox.classList.toggle('is-open');
    });

    // Botão para Aumentar a Fonte
    increaseFontButton.addEventListener('click', () => {
        if (currentFontSize < 24) { 
            currentFontSize += 2;
            body.style.fontSize = `${currentFontSize}px`;
            localStorage.setItem('fontSize', currentFontSize);
        }
    });

    // Botão para Diminuir a Fonte
    decreaseFontButton.addEventListener('click', () => {
        if (currentFontSize > 12) { 
            currentFontSize -= 2;
            body.style.fontSize = `${currentFontSize}px`;
            localStorage.setItem('fontSize', currentFontSize);
        }
    });

    // Botão para Alternar o Tema (Claro/Escuro)
    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        } else {
            localStorage.setItem('theme', 'light');
            lightIcon.style.display = 'inline';
            darkIcon.style.display = 'none';
        }
    });
});
