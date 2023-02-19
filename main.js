const crash = document.querySelector('.crash')
const car1 = document.querySelector('.car1')
const car2 = document.querySelector('.car2')
const call = document.querySelector('.call')
const police = document.querySelector('.police')
crash.addEventListener("click", function () {
    car1.style.animation = "car1 1.5s forwards"
    car2.style.animation = "car2 1.5s forwards"
});
call.addEventListener("click", function () {
    police.style.transform = "scale(1)"
});