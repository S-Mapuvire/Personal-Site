const imageList = ["1 isle in mist - far (1).jpg", "20230612_164537.jpg", "=maybe crop？.jpg", "Arrow of Light.jpg", "Blue Candidate #1.jpg", "Coldplay Day - Behind the Shed (4).jpg","Diurnal Fall (3).jpg", "early morning fence (3).jpg", "Gate to the World.jpg", "In the Shadow.jpg", "Into the painting.jpg", "light over the land (4).jpg", "macro shot 2.jpg", "misty morning (4).jpg", "Puddle.jpg", "red eye over yonder (2).jpg", "silver light morning (10).jpg", "smoky grass fire - panorama - far shot - edit.jpg", "smoky grass fire - panorama - near shot - edit.jpg", "spectral path (1).jpg", "This Exit's Taken.jpg", "towers-2.jpg", "watch the limit (2).jpg"];

const imageFolder = "../public/images/photos/";

let container = document.querySelector('#viewer-section');
let previewContainer = document.querySelector('#holder');

// const sprockets = '<svg height="30" width="30"><circle cx="20" cy="20" r="10" fill="white" /></svg>';
const sprockets = '<img src="../public/images/sprocket-hole-2.svg" height="30" width="30">';
const sprocketSection = `<div class="sprocket-section">${sprockets.repeat(19)}</div>`; 
const empty = `<div id="empty"></div>`;
//make else for empty or image

let photoSection = ``;
let previews = ``;

for(let count = 0; count < imageList.length; count++)
{
    image = imageFolder + imageList[count];
    
    let picture = `<div class="picture-holder" id="${imageList[count]}"><img class="picture" src="${image}" alt="image of ${image}"></div>`;
    let photo = sprocketSection + picture + sprocketSection;
    photoSection = photoSection + `<div class="photo-section">${photo}</div>`

    previews = previews + `<a href="#${imageList[count]}"><img class="photoframe" src="${image}"></a>`;
}

container.innerHTML = photoSection;

previewContainer.innerHTML = `<div id="toplink"><a href="">Back to Top</a></div><div id="rule"></div>` + previews;

console.log(document.querySelector('#holder').firstChild);