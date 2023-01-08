//major declarations are made here.
const sideBarNav = document.querySelector("#sidebarNav");
const bonxHomePageMainContainer = document.querySelector(
  ".bonx-home-page-main-container"
);
const sideBarToggleIcon = document.querySelector("#sideBarToggleIcon");
const sideBarRemove = document.querySelector("#sideBarRemove");
const bonxHomePageSection = document.querySelector(".bonx-home-page-section");
const arrowUpButton = document.querySelector(".arrow-up-button");
const bonxHomePageArticleGameCarouselContainer = document.querySelector(
  ".bonx-home-page-article-game-carousel-container"
);

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

sideBarToggleIcon.addEventListener("click", () => {
  sideBarNav.style.width = "50%";
});

sideBarRemove.addEventListener("click", () => {
  sideBarNav.style.width = 0;
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > bonxHomePageSection.offsetHeight) {
    arrowUpButton.style.opacity = 1;
  } else {
    arrowUpButton.style.opacity = "";
  }
});

arrowUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  bonxHomePageArticleGameCarouselContainer.scrollLeft -= 1000;
  console.log(bonxHomePageArticleGameCarouselContainer.offsetWidth);
  console.log(bonxHomePageArticleGameCarouselContainer.scrollLeft);
});
nextBtn.addEventListener("click", () => {
  bonxHomePageArticleGameCarouselContainer.scrollLeft += 1000;
  if (
    // bonxHomePageArticleGameCarouselContainer.scrollWidth <
    bonxHomePageArticleGameCarouselContainer.scrollLeft > 3000
  ) {
    bonxHomePageArticleGameCarouselContainer.scrollLeft -=
      bonxHomePageArticleGameCarouselContainer.scrollWidth;
  }
  console.log(bonxHomePageArticleGameCarouselContainer.offsetWidth);
  console.log(bonxHomePageArticleGameCarouselContainer.scrollLeft);
});

bonxHomePageMainContainer.addEventListener("mouseover", () => {
  clearInterval(autoplay);
});

window.addEventListener("load", () => {
  autoplay = setInterval(() => {
    bonxHomePageArticleGameCarouselContainer.scrollLeft += 1;

    //   if(bonxHomePageArticleGameCarouselContainer.)
  }, 50);
});
