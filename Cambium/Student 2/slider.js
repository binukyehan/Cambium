const bannerDetails = [
    {
      title: "ECOSYSTEM",
      description:
        "With biotic (living) and abiotic (non-living) components that interact with one another and their surroundings, ecosystems are intricate, interrelated systems. The size of these ecosystems varies from small ecosystems such as ponds or small woods to large ecosystems such as oceans or tropical rainforests.",
      link: "Student2-Ecosystems.html",
    },

    {
      title: "Human Impact",
      description:
        "Many human activities have affected the current environment we live in. In this content page, we are going to explore these activities. Even though there are numerous types of human activities that cause environmental issues, we will be focusing on some of the main activities out of those.",
      link: "../Student 1/Content(Student 1)/st1content.html",
    },

    {
      title: "Endangered Species",
      description:
        "Sri Lanka is the home to both migratory and endemic species. The high diversity of ecosystems and biodiversity has provided habitats for plethora of wildlife. Many species are facing the threat of extinction due to habitat loss, human impact and climatic changes. This content page shows the mostly endangered flora and fauna in Sri Lanka.",
      link: "../Student 4/content page/endangered.html",
    },

    {
      title: "Conservation",
      description:
        "Conservation of the environment involves the practice of protecting and responsibly managing natural resources and ecosystems for present and future generations. It includes strategies for minimizing human impact and promoting harmony among living organisms.",
      link: "../Student 3/content-st3.html",
    },
  ];
  
  const btns = document.querySelectorAll(".slide-btn");
  const slider = document.querySelectorAll(".img-bg");
  const bannerTitle = document.getElementById("banner-title");
  const bannerDescription = document.getElementById("banner-description");
  const bannerLink = document.getElementById("banner-link");
  
  var slideimg = function (index) {
    const item = bannerDetails[index];
    console.log(item);
    bannerTitle.innerHTML = item.title;
    bannerDescription.innerHTML = item.description;
    bannerLink.setAttribute("onclick", "window.location.href='"+item.link+"'");
  
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    slider.forEach((slide) => {
      slide.classList.remove("active");
    });
    btns[index].classList.add("active");
    slider[index].classList.add("active");
  };
  
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      slideimg(i);
    });
  });