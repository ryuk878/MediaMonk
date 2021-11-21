
// variables// 
let backgroundImg = document.getElementById("background");
let forward = document.getElementById("forward")
let backward = document.getElementById("backward")
let slide = 0
let slider = document.getElementById("slider");
let loader = document.getElementById("loader");
let smallSlider = document.getElementById("smallSlider")

let content0 = document.getElementById('content0')
let content1 = document.getElementById('content1')
let content2 = document.getElementById('content2')
let content3 = document.getElementById('content3')
let content4 = document.getElementById('content4')
let content5 = document.getElementById('content5')
let content6 = document.getElementById('content6')
let content7 = document.getElementById('content7')
let content8 = document.getElementById('content8')
let content9 = document.getElementById('content9')
let smallSlider1 = document.getElementById('smallSlider1')
let smallSlider2 = document.getElementById('smallSlider2')
let smallSlider3 = document.getElementById('smallSlider3')
let smallSlider4 = document.getElementById('smallSlider4')
let smallSlider5 = document.getElementById('smallSlider5')
let smallSlider6 = document.getElementById('smallSlider6')
let smallSlider7 = document.getElementById('smallSlider7')
let smallSlider8 = document.getElementById('smallSlider8')
let smallSlider9 = document.getElementById('smallSlider9')
let smallSlider10 = document.getElementById("smallSlider10")
let logo = document.getElementById("logo")

// timeout for slider will show up after 4.5 seconds// 
setTimeout(() => {
    slider.style.display = "block"
    setTimeout(() => {
        loader.style.display = "none";
        slider.style.opacity = "1";
        smallSlider.style.opacity = "1";
        logo.style.opacity = "1"
    }, 750);
}, 4500);
// buttons // 

forward.onclick = function () {
    slide++;
    slideIndex(slide);
};
backward.onclick = function () {
    slide--;
    slideIndex(slide);

};
smallSlider1.onclick = function () {
    slide = 0
    slideIndex(slide)
}

// slider function, dividing backgrounds, adding text & disabling buttons when @ the beginning or end // 

function slideIndex(i) {
    slide = i;
    slide_background();
    disableButton();
    addText();


}

//cut image in 9 pieces based on width//
function slide_background() {
    const distance = (backgroundImg.width / 9.75) * (-slide);
    backgroundImg.style.transform = `translate(${distance}px)`;
    console.log(distance)

}
// disable buttons//
function disableButton() {
    switch (slide) {
        case 0:
            backward.style.display = "none";
            forward.style.display = "block";
            break;
        case 9:
            forward.style.display = "none";
            break;
        default:
            backward.style.display = "block";
            forward.style.display = "block";
            console.log(slide)
    }
}
// terrible way of adding the text to the background//
function addText() {
    switch (slide) {
        case 0:
            content0.style.display = "block"
            content1.style.display = "none"
            smallSlider1.style.background = "white"
            smallSlider2.style.background = "none"




            break;
        case 1:
            content0.style.display = "none"
            content1.style.display = "block"
            content2.style.display = "none"
            smallSlider3.style.background = "none"
            smallSlider2.style.background = "white"
            smallSlider1.style.background = "none"
            break;
        case 2:
            content2.style.display = "block"
            content1.style.display = "none"
            content3.style.display = "none"
            smallSlider4.style.background = "none"
            smallSlider3.style.background = "white"
            smallSlider2.style.background = "none"

            break;
        case 3:
            content3.style.display = "block"
            content2.style.display = "none"
            content4.style.display = "none"
            smallSlider5.style.background = "none"
            smallSlider4.style.background = "white"
            smallSlider3.style.background = "none"
            break;
        case 4:
            content4.style.display = "block"
            content3.style.display = "none"
            content5.style.display = "none"
            smallSlider6.style.background = "none"
            smallSlider5.style.background = "white"
            smallSlider4.style.background = "none"
            break;
        case 5:
            content5.style.display = "block"
            content4.style.display = "none"
            content6.style.display = "none"
            smallSlider7.style.background = "none"
            smallSlider6.style.background = "white"
            smallSlider5.style.background = "none"
            break;
        case 6:
            content6.style.display = "block"
            content5.style.display = "none"
            content7.style.display = "none"
            smallSlider8.style.background = "none"
            smallSlider7.style.background = "white"
            smallSlider6.style.background = "none"
            break;
        case 7:
            content7.style.display = "block"
            content6.style.display = "none"
            content8.style.display = "none"
            smallSlider9.style.background = "none"
            smallSlider8.style.background = "white"
            smallSlider7.style.background = "none"
            break;
        case 8:
            content9.style.display = "none"
            content8.style.display = "block"
            content7.style.display = "none"
            smallSlider10.style.background = "none"
            smallSlider9.style.background = "white"
            smallSlider8.style.background = "none"
            break;
        case 9:
            content9.style.display = "block"
            content8.style.display = "none"
            smallSlider10.style.background = "white"
            smallSlider9.style.background = "none"
            break;
        default:



    }


}



// make sure first text is visible after that it repeats in the slider function //
addText()
