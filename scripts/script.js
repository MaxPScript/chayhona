log = console.log
log(55)
// test window scroll;
// window.onscroll = () => {
    // log('scroll')
    // log(body1.offsetTop)
    // log(body1.scrollTop)
// }
window.onscroll = () => {
    // log(window.pageYOffset)
    // body1.scrollTop = 100;
    // headerDomRect = header1.getBoundingClientRect()
    // log(`y: ${headerDomRect.y}`)    
    // log(`top: ${headerDomRect.top}`)    
    rectHeroImgBottom = heroImg.getBoundingClientRect().bottom
    log(`heroImg bottom is: ${rectHeroImgBottom}`)
    // if( rectHeroImgBottom < 0) {
    //     headerH1.style.fontSize ='8px'
    // }
    // if(rectHeroImgBottom > 0) {
    //     headerH1.style.fontSize ='64px'
    // }
}
// rectHeroImgBottom = heroImg.getBoundingClientRect().bottom

window.onresize = () => {
    rectHeroImgBottom = heroImg.getBoundingClientRect().bottom
    log(`heroImg bottom is: ${rectHeroImgBottom}`)
    // if( rectHeroImgBottom < 0) {
    //     headerH1.style.fontSize ='8px'
    // } 
    // if(rectHeroImgBottom > 0) {
    //     headerH1.style.fontSize ='64px'
    // }
}
// log(headerDomRect)
log(body1.offsetParent)
// test window scroll;
// draw segment
function drawSegment() {
    parseWidth = parseInt(`${svg1.style.width}`)
    log(parseWidth)
    halfOfSvgWidth = (parseInt(svg1.width))/2
    log(`halfOfSvgWidth: ${halfOfSvgWidth}`)
}
drawSegment()
// draw segment

arr1 = [body1, svg1, path2]
arr2 = []

function getCompStyleObj(el) {
    return window.getComputedStyle(el)
}

for(el of arr1) {
    arr2.push(getCompStyleObj(el))
    // log(el)
}
log(arr2[0].width)
log(arr2[1])

p1.innerText += ` ${arr2[0].width}`
p2.innerText += ` ${arr2[1].width}`

// input type radio
inp1.onclick = () => {
    log('inp1')
    // path1.style.d = "M 100 75 L 200 75 A 10 10 0 0 0 100 75"
    path1.setAttribute('d', 'M 100 75 L 200 75 A 10 10 0 0 0 100 75')
    log(arr2[2])
}
// input type radio


