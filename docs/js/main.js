// Mobile Navigation Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }

  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinksAll = document.querySelectorAll(".nav-menu a");

  navLinksAll.forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});

// Gallery Lightbox Functionality
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");

  if (galleryItems.length > 0 && lightbox) {
    const lightboxImg = lightbox.querySelector("img");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    // Open lightbox when clicking on gallery item
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const img = item.querySelector("img");
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });

    // Close lightbox when clicking close button
    if (lightboxClose) {
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      });
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    // Close lightbox with Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
});

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
