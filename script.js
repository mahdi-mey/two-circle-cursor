let cursor = document.querySelector('.cursor')
let cursor2 = document.querySelector('.cursor2')

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if(!isTouchDevice){
    // mouse move on document function
    document.addEventListener('mousemove', e => {

        cursor.style.display = 'block'
        cursor2.style.display = 'block'

        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
        cursor2.style.left = `${e.clientX}px`
        cursor2.style.top = `${e.clientY}px`
    })
}
// delets cursor when mouse leaves
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none'
    cursor2.style.display = 'none'
})