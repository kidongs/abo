const body = document.querySelector('body');

const IMG_COUNT = 4;


function printImg(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber+1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);

  // document.body.style.backgroundImage = "url('image.src')";
}

function getRandom(){
  const number = Math.floor(Math.random() * IMG_COUNT);
  return number;
}

function runit() {
    const img = getRandom();
    printImg(img);
}

runit();
