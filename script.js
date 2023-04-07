let imgSlider = document.querySelector('.image-slider')

let position = 0;

function nextImage() {
    if(position < 6){
        position += 1;
        var offset = position * 37.5;
        imgSlider.style.transform = "translateX(-" + offset + "vmin)";
    } else {
        clearInterval()
        position = -1;
    }          
}

setInterval(nextImage, 3000);
