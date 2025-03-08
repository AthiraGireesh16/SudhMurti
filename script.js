const quotes = [
    "She believed she could, so she did.",
    "The future belongs to those who believe in their dreams.",
    "A strong woman looks a challenge in the eye and gives it a wink.",
    "Women are the real architects of society."
];

// Auto-change quotes
setInterval(() => {
    let quote = document.querySelector(".download-btn");
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
}, 5000);

// Swiper Carousel
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
