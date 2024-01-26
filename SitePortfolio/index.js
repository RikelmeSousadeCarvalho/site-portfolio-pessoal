function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let logoImage = document.querySelector('.logo img'); 
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
        logoImage.style.display = 'block'; 
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
        logoImage.style.display = 'none';
    }
}

