function toggleNavigation() {
    var navigation = document.getElementById('navigation');
    var menuButton = document.getElementById('menu-button');
    var menu = document.getElementById('menu');

   
    if (window.innerWidth <= 1199) {
        navigation.style.display = 'none';
        menuButton.style.display = 'block';
    } else {
      
        navigation.style.display = 'block';
        menuButton.style.display = 'none';
 
        menu.style.display = 'none';
    }
}


window.onload = toggleNavigation;
window.onresize = toggleNavigation;


document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menu-button').style.display = 'none'

});


document.getElementById('close-menu-button').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-button').style.display = 'block'

});
