'use strict';


// get the follower element,
let follow = document.getElementById('follower');
let inc_follower = 0;


// when user clicks on the follow btn, so go inside

const clicker = (call) => {
      return  call.addEventListener('click', () => {
        inc_follower++;
        call.innerHTML = inc_follower;
    });
}

// Call by default;
clicker(follower);


// get the like element
let liker = document.getElementById('liker');
clicker(liker);

// Update inc_follower evey second later,
setInterval(() => {
    follow.click();
    liker.click();
},1000);




// get the post element

let post = document.getElementById('poster');

clicker(post);

setInterval( () => {
    post.click();
}, 3000 );