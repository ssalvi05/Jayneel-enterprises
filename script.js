const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((0.5 - y / rect.height) * 7);
    card.style.transform = `translateY(-9px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const inquiryForm = document.querySelector("#inquiryForm");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(inquiryForm);
    const lines = [
      "Jayneel Enterprises Inquiry",
      `Name: ${formData.get("name") || ""}`,
      `Mobile: ${formData.get("mobile") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Service: ${formData.get("service") || ""}`,
      `Message: ${formData.get("message") || ""}`
    ];
    const subject = encodeURIComponent("Jayneel Enterprises Inquiry");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@jayneelenterprises.com?subject=${subject}&body=${body}`;
  });
}

// Carousel functionality
function moveCarousel(button, direction) {
  const carousel = button.closest(".card-carousel");
  const images = carousel.querySelectorAll(".carousel-image");
  const dots = carousel.querySelectorAll(".dot");
  const activeImage = carousel.querySelector(".carousel-image.active");
  const currentIndex = Array.from(images).indexOf(activeImage);
  let nextIndex = (currentIndex + direction + images.length) % images.length;
  
  images.forEach(img => img.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  
  images[nextIndex].classList.add("active");
  dots[nextIndex].classList.add("active");
}

function goToSlide(dot, index) {
  const carousel = dot.closest(".card-carousel");
  const images = carousel.querySelectorAll(".carousel-image");
  const dots = carousel.querySelectorAll(".dot");
  
  images.forEach(img => img.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  
  images[index].classList.add("active");
  dots[index].classList.add("active");
}
