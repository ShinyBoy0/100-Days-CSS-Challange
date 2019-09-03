'use strict';

/** Get the menu-icon element */
let menu = document.getElementsByClassName('menu-icon')[0];

/** when user clicks on the menu block, go inside  */
menu.addEventListener('click', () => {

    // remove all the no-animation class from div element
    let noAnimation = menu.getElementsByTagName('div');

    // Get all element from array, --
    for( let singleEle of noAnimation )
        singleEle.classList.remove('no-animation');

    // add toggel active class
    menu.classList.toggle('active');

});