let cursor = document.querySelector('.cursor')
let cursor2 = document.querySelector('.cursor2')

document.addEventListener('mousemove', e => {
    
    cursor.style.display = 'block'
    cursor2.style.display = 'block'

    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
    cursor2.style.left = `${e.clientX}px`
    cursor2.style.top = `${e.clientY}px`
})
document.addEventListener('mouseleave', () => {

})