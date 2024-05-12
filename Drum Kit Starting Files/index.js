let snare = new Audio('sounds/snare.mp3');
let top1 = new Audio('sounds/tom-1.mp3');
let top2 = new Audio('sounds/tom-2.mp3');
let top3 = new Audio('sounds/tom-3.mp3');
let top4 = new Audio('sounds/tom-4.mp3');
let crash = new Audio('sounds/crash.mp3');
let kickBass = new Audio('sounds/kick-bass.mp3');
document.querySelector('.w').addEventListener('click', () => {
    snare.play()
})
document.querySelector('.a').addEventListener('click', () => {
    top1.play()

})
document.querySelector('.s').addEventListener('click', () => {
    top2.play()
})
document.querySelector('.d').addEventListener('click', () => {
    top3.play()
})
document.querySelector('.j').addEventListener('click', () => {
    top4.play()
})
document.querySelector('.k').addEventListener('click', () => {
    kickBass.play()
})
document.querySelector('.l').addEventListener('click', () => {
    crash.play()
})