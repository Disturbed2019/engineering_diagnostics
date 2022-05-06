import Swiper, {Navigation, Pagination, Scrollbar, Mousewheel} from "swiper";


const swiper = new Swiper(".services__gallery", {
    modules:[Navigation,Pagination, Mousewheel],
    direction: "horizontal",

    mousewheel: true,
    // centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        type: 'progressbar'
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1367:{
            slidesPerView: 3,
            spaceBetween: 80,
        }
    }
});