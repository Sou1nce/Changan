function toggleNavigation() {
    var navigation = document.getElementById('navigation');
    var menuButton = document.getElementById('menu-button');
    var menu = document.getElementById('menu');

    // Если экран меньше или равен 1199px, скрываем навигацию и показываем кнопку меню
    if (window.innerWidth <= 1199) {
        navigation.style.display = 'none';
        menuButton.style.display = 'block';
    } else {
        // Иначе показываем навигацию и скрываем кнопку меню
        navigation.style.display = 'block';
        menuButton.style.display = 'none';
        // Также скрываем меню, если оно открыто
        menu.style.display = 'none';
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = toggleNavigation;
window.onresize = toggleNavigation;

// Обработчик клика по кнопке открытия меню
document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menu-button').style.display = 'none'

});

// Обработчик клика по кнопке закрытия меню
document.getElementById('close-menu-button').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-button').style.display = 'block'

});