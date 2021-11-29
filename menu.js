let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggle i');
let menu = document.getElementById('idmenu');

menuToggle.addEventListener('click', _e => {
    menu.classList.toggle('show');

    if(menu.Classlist.contains('show')){
        menuToggleIcon.setAtribute('class', 'fa fa-times');
    }else{
        menuToggleIcon.setAtribute('class', 'fa fa-bars');
    }
});