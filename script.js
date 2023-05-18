function toggleMenu() {
    var menu = document.getElementById('menu');
    var toggleBtn = document.querySelector('.toggle-btn');

    menu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
}
