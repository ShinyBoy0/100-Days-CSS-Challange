'use strict';


// Get the profile element as button, and detail element as well

let profile = document.getElementsByClassName('profile');
let detail = document.getElementsByClassName('detail')[0];



// get each element of the Array

for ( const single_btn of profile )
{
    // and, when user click on that sing icon, as we get here single_btn
    single_btn.addEventListener('click', () => {

        // add css class in detail        
        detail.classList.add('active');

    });
}


// For closing the Details section
// get the close button

let close = document.getElementsByClassName('close')[0];

close.onclick = () => {

    // get the deatil element
    detail.classList.remove('active');

}