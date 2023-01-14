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
const bonxToggleDownRevealItemContainer = document.querySelector(
  ".bonx-toggle-down-reveal-item-container"
);
const bonxToggleDownButton = document.querySelector(".bonx-toggle-down-button");
const hiddenElements = document.querySelectorAll(".hidden-elements");

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
  bonxHomePageArticleGameCarouselContainer.scrollLeft -= 500;
  // console.log(bonxHomePageArticleGameCarouselContainer.offsetWidth);
  // console.log(bonxHomePageArticleGameCarouselContainer.scrollLeft);
});
nextBtn.addEventListener("click", () => {
  bonxHomePageArticleGameCarouselContainer.scrollLeft += 500;
  if (
    // bonxHomePageArticleGameCarouselContainer.scrollWidth <
    bonxHomePageArticleGameCarouselContainer.scrollLeft > 3000
  ) {
    bonxHomePageArticleGameCarouselContainer.scrollLeft -=
      bonxHomePageArticleGameCarouselContainer.scrollWidth;
  }
  // console.log(bonxHomePageArticleGameCarouselContainer.offsetWidth);
  // console.log(bonxHomePageArticleGameCarouselContainer.scrollLeft);
});

//To stop the scrolling effect when the mouse cursor moves over the carousel container.
// bonxHomePageMainContainer.addEventListener("mouseover", () => {
//   clearInterval(autoplay);
// });

//To create an automatic scrooling carousel when the site is fully loaded
// window.addEventListener("load", () => {
//   autoplay = setInterval(() => {
//     bonxHomePageArticleGameCarouselContainer.scrollLeft += 1;

//     //   if(bonxHomePageArticleGameCarouselContainer.)
//   }, 50);
// });

const carouselImages = [
  {
    src: "./BonxImages/daysgone.png",
  },
  {
    src: "./BonxImages/crisiscore.png",
  },
  {
    src: "./BonxImages/eldenring.png",
  },
  {
    src: "./BonxImages/fallout.png",
  },
  {
    src: "./BonxImages/fifa23.png",
  },
  {
    src: "./BonxImages/godOfWar.png",
  },
  {
    src: "./BonxImages/COD.png",
  },
  {
    src: "./BonxImages/destiny.png",
  },
  {
    src: "./BonxImages/hogwart.png",
  },
  {
    src: "./BonxImages/madden.png",
  },
  {
    src: "./BonxImages/MortalKombat.png",
  },
  {
    src: "./BonxImages/redDead.png",
  },
  {
    src: "./BonxImages/sonicFrontiers.png",
  },
  {
    src: "./BonxImages/StarWars.png",
  },
  {
    src: "./BonxImages/Stray.png",
  },
  {
    src: "./BonxImages/titanfall.png",
  },
];

function addCarouselItem(arr) {
  let carouselImageItem = arr
    .map((item) => {
      return ` <div class="bonx-home-page-article-item">
    <img
      src="${item.src}"
      class="bonx-home-page-carousel-image"
      alt=""
    />
  </div>`;
    })
    .join("");
  bonxHomePageArticleGameCarouselContainer.innerHTML = carouselImageItem;
  // console.log(carouselImageItem);
}

window.addEventListener("DOMContentLoaded", () => {
  addCarouselItem(carouselImages);
});

const bonxHomePageGame = document.querySelector(".bonx-home-page-game").src;
const bonxHomePageGameDescriptionParagraph = document.querySelector(
  ".bonx-home-page-game-description-paragraph"
);
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const bonxHomePageGameDescriptionContainer = document.querySelector(
  ".bonx-home-page-game-description-container"
);

// let count = 0;
// window.onload = function loadImage() {};
// window.addEventListener("load", () => {
//   bonxHomePageGame = carouselImages[count].src;
// });

// prevButton.addEventListener("click", () => {
//   count--;
// });

const bonxHeaderNavList = document.querySelector(".bonx-header-nav-list");
const bonxHeaderNavContainer = document.querySelector(
  ".bonx-header-nav-container"
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    bonxHeaderNavContainer.classList.remove("list-item-hide");
    bonxHeaderNavContainer.classList.add("list-item-show");
  } else {
    bonxHeaderNavContainer.classList.remove("list-item-show");
    bonxHeaderNavContainer.classList.add("list-item-hide");
  }

  hiddenElements.forEach((item) => {
    if (window.innerWidth > 600) {
      item.classList.remove("show-me");
      item.classList.add("hide-me");
    } else if (window.innerWidth < 600) {
      item.classList.remove("hide-me");
      item.classList.add("show-me");
    }
  });
});

bonxToggleDownButton.addEventListener("click", () => {
  bonxToggleDownRevealItemContainer.classList.toggle("visibility");
});

// window.addEventListener("click", (e) => {
//   if (!e.currentTarget == bonxToggleDownButton) {
//     bonxToggleDownRevealItemContainer.classList.add("hide-list");
//   }
// });

// bonxToggleDownButton.addEventListener("blur", () => {
//   if (bonxToggleDownRevealItemContainer.classList.contains("hide-list")) {
//     bonxToggleDownRevealItemContainer.classList.add("show-list");
//   } else {
//     bonxToggleDownRevealItemContainer.classList.remove("show-list");
//     bonxToggleDownRevealItemContainer.classList.add("hide-list");
//   }
// });
