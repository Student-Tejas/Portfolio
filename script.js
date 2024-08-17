// Testimonials slider functionality
// const slides = document.querySelectorAll('.testimonial-slide');
// let currentSlide = 0;

// document.querySelector('.arrow-right').addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// });

// document.querySelector('.arrow-left').addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active');
// });




let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const wrapper = document.querySelector('.testimonial-wrapper');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial display of the first slide
showSlide(currentSlide);





//update greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const timeOfDay = document.getElementById("timeOfDay");
    if (hour >= 12 && hour < 17) {
        timeOfDay.textContent = "Afternoon";
    } else if (hour >= 17 || hour < 5) {
        timeOfDay.textContent = "Evening";
    } else {
        timeOfDay.textContent = "Morning";
    }
}

updateGreeting();

const button = document.getElementById('colorButton');
const colorCombos = [
    { top: '#FF5733', bottom: '#33FF57' },
    { top: '#3357FF', bottom: '#FF33A1' },
    { top: '#F3FF33', bottom: '#3357FF' },
    { top: '#FF33A1', bottom: '#F3FF33' },
    { top: '#33FF57', bottom: '#FF5733' }
];
let currentColorIndex = 0;

button.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colorCombos.length;
    button.style.backgroundColor = colorCombos[currentColorIndex].top;
    button.style.boxShadow = `-10px 10px 0px 0px ${colorCombos[currentColorIndex].bottom}, 0px 10px 20px rgba(0, 0, 0, 0.2)`;
});


