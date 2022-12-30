log = console.log;
log('test')

window.onload = () => {

}
// log(typeof rectHeroImgBottom)
// rectHeroImgHeight = heroImg.getBoundingClientRect().height;
window.onresize = () => {
    p1.textContent = `window inner width: ${window.innerWidth}`
    p2.textContent = `window inner height: ${window.innerHeight}`

}
enter_glow_id.addEventListener('pointerdown', e => {
    log(e.isPrimary)
    header__overlay_id.style.opacity = 0;
    setTimeout(() => {
        header__overlay_id.style.display = 'none';
    }, 2500)
    // enter_id.style.opacity = 0
    enter_glow_id.style.display = 'none'
    body1.style.background = 'hsl(224 83% 5%)'
    // header_h1_id.style.fontSize = '48px'
    header_h1_id.style.fontSize = '12vw'
    header_h1_id.style.marginTop = '1rem'
    header_h1_id.style.letterSpacing = '0.4rem'
    header_h1_id.style.color = 'hsl(223 59% 55%)'
    header_h1_id.style.textShadow = '-1px 2px hsl(73 50% 5%)'
    header_img_id.style.filter = 'brightness(1.1)'
})
window.onscroll = () => {
    // rectHeroImgBottom = heroImg.getBoundingClientRect().bottom
    // x = (1/rectHeroImgBottom)*5000 
    // log(x)
    // log(headerH1.style.top)
    // headerH1.style.top = x + 'px'
    // heroImg()
    // getWindowPageYOffset()
    // getWindowScrollY()
    // getOffsetTopMain()
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
    if (scaleX != 0 && scaleY != 0) {
        heroImgEl.style.transform = `scale(${scaleX}, ${scaleY})`;
    }
}
function getOffsetTopMain() {
    let main = document.querySelector('.main')
    mainOffsetTop = main.offsetTop
    test__p3.textContent = ''
    test__p3.textContent = `${mainOffsetTop}`
}

