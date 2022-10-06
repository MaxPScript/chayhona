log = console.log;
log('test')

// log(typeof rectHeroImgBottom)
// rectHeroImgHeight = heroImg.getBoundingClientRect().height;

window.onscroll = () => {
    // rectHeroImgBottom = heroImg.getBoundingClientRect().bottom
    // x = (1/rectHeroImgBottom)*5000 
    // log(x)
    // log(headerH1.style.top)
    // headerH1.style.top = x + 'px'
    heroImg()
    getWindowPageYOffset()
    getWindowScrollY()
    getOffsetTopMain()
}
function getWindowPageYOffset() {
    windowPageYOffset = window.pageYOffset;
    test__p1.textContent = ''
    test__p1.textContent += `${windowPageYOffset}`
}
function getWindowScrollY() {
    windowScrollY = window.scrollY;
    test__p2.textContent = ''
    test__p2.textContent += `${windowScrollY}`
}

i = 0
function heroImg() {
    heroImgEl = document.getElementById('heroImg')
    offset = window.pageYOffset + 1;
    scaleX = 1 - offset * 0.001
    scaleY = 1 - offset * 0.001
    // i++
    // heroImg.style.width = '\`150-${i}\`+%' 
    if(scaleX != 0 && scaleY != 0) {
        heroImgEl.style.transform = `scale(${scaleX}, ${scaleY})`;
    }
}
function getOffsetTopMain() {
    let main = document.querySelector('.main')
    mainOffsetTop = main.offsetTop
    test__p3.textContent = ''
    test__p3.textContent = `${mainOffsetTop}`
}

