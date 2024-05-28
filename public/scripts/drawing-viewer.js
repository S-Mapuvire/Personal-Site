let viewer = document.querySelector('#viewer');
let viewerImage = document.querySelector('#viewer-image');

function turnon(element){
    viewerImage.src = element.src;
    viewer.style.visibility = 'visible';
}
function turnoff(){
    viewer.style.visibility = 'hidden';
}

console.log(viewerImage);