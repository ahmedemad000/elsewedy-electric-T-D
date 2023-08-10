const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// for slider navigation video 
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// see more function on cards
const cards = document.querySelectorAll(".card2");

//  Disable see more function from the text contents
//  that the height is less than the minimum visible height
//   of a text content on page load
window.onload = function () {
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text");

        if (textContent.scrollHeight == textContent.clientHeight) {
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }
        else {
            card.classList.add("gradient");
        }
    });
}



cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");

    seeMoreBtn.addEventListener("click", () => {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if (card.classList.contains("active")) {
            seeMoreBtn.innerHTML = "See Less";
            textContent.style.height = textContent.scrollHeight + "px";
        }
        else {
            seeMoreBtn.innerHTML = "See More";
            textContent.style.height = "100px";
        }
    });
});

// Javascript for play & pause video card thumbnails on mouseover/mouseleave
const video_thumbs = document.querySelectorAll(".thumb-video");

video_thumbs.forEach((video_thumb) => {
    video_thumb.addEventListener("mouseover", function () {
        this.style.opacity = 1;
        this.play();
        this.playbackRate = 2.0;
    });
});
video_thumbs.forEach((video_thumb) => {
    video_thumb.addEventListener("mouseleave", function () {
        this.style.opacity = 0;
        //this.style.opacity = 0;
        this.style.opacity = 0;
        this.pause();
    });
});

//Jquery for go through each long title to short it with "..."
$(".video-card-title").each(function () {
    if ($(this).text().length > 50) {
        $(this).html($(this).text().substring(0, 75) + "...");
    }
});

//Javascript for popup video modal screens on click the cards
const video_modalScreens = document.querySelectorAll(".video-modal-screen");
const video_cards = document.querySelectorAll(".video-card-body");
const modal_closeBtns = document.querySelectorAll(".vid-modal-close-btn");

var videoModal = function (modalClick) {
    video_modalScreens[modalClick].classList.add("active");
}

video_cards.forEach((video_card, i) => {
    video_card.addEventListener("click", () => {
        videoModal(i);
    });
});
//Javascript for modal close buttons

modal_closeBtns.forEach((modal_closeBtns) => {
    modal_closeBtns.addEventListener("click", () => {
        video_modalScreens.forEach((video_modalScreen) => {
            video_modalScreen.classList.remove("active");
        });
    });
});



















