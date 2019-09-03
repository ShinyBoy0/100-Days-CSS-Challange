'use strict';

// Get the Search icon

let search_icon = document.getElementsByClassName('search-icon')[0];

// When User clicks on the search_icon, so go inside
search_icon.addEventListener('click', () => {

        // get the search input field
        let input = document.getElementsByClassName('search-input')[0];
        input.classList.toggle('active');
        console.log('input')
});


// Get the menu icon

let menu_icon = document.getElementsByClassName('menu-icon')[0];


// If your clicks on the menu icon, 
menu_icon.addEventListener('click', () => {

    document.getElementsByClassName('panel')[0].classList.toggle('active');
    document.getElementsByClassName('menu')[0].classList.toggle('menu-show');

});