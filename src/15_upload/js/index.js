'use strict';


// ge the Dropzone element.

let dropZone = document.getElementsByClassName('dropzone')[0];


// Stop going outside from the page

dropZone.addEventListener('drop', (e) => {

    // prevent
    e.preventDefault();
    e.stopPropagation();
});

// to change the background color on the drag

dropZone.addEventListener('dragover' || 'dragenter', () => {

    // add dragover class to content element

    dropZone.getElementsByClassName('content')[0].classList.add('dragover');

});

// to set the default background color on the drag leave

dropZone.addEventListener('dragleave', () => {
    
    // Invoke the drag_event()

    drag_event('drop', 'content');
    drag_event('dragend', 'content');
    drag_event('dragleave', 'content');


});

const drag_event = (event, eleName, className) => {

    dropZone.addEventListener(event, () => {
    
        // remove the dragover class from the content element
    
       dropZone.getElementsByClassName(eleName)[0].classList.remove('dragover');

    });
}


/**  Getting File name and render it to DOM on drop event */

let droppedFiles = false;

dropZone.ondrop = (e) => {

    // get the file name 
    // and render it in the filename element

    droppedFiles = e.dataTransfer.files;
    document.getElementsByClassName('filename')[0].innerHTML = droppedFiles[0].name;

    // and hide the upload element
    document.getElementsByClassName('upload')[0].style.display = 'none';
}




// Now Upload the file //
// get the upload button 

let upload_btn = document.getElementsByClassName('upload-file')[0];


// when user clicks on the button, so take action mean start progress bar

upload_btn.onclick = () => {

        // prevent clicking when we're done, it would work after getting file uploaded
        if( upload_btn.textContent === 'Done' )
            return;

    // first validate, if the file name exists, if no, so stop, otherwise go on!

    if ( droppedFiles != '' && droppedFiles )
    {
        // change the button text to uploading....
        upload_btn.innerHTML = 'Uploading...';
        dropZone.style.display = 'none';
        let syn = document.getElementsByClassName('syncing')[0];
        syn.style.display = 'block';

        // start progress bar
        document.getElementsByClassName('bar')[0].classList.add('active');

        // check as uploaded
        setTimeout(() => {
            // hide the syncing image, show the check mark image, and put done in button
            syn.style.display = 'none';
            document.getElementsByClassName('checkmark')[0].style.display = 'block';
            upload_btn.innerHTML = 'Done';
        }, 2000);
    }



}





// $button.bind('click', function() {
// 	startUpload();
// });

// $("input:file").change(function (){
// 	fileName = $(this)[0].files[0].name;
// 	$('.filename').html(fileName);
// 	$('.dropzone .upload').hide();
// });