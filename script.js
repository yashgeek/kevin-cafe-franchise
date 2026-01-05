document.addEventListener("DOMContentLoaded", () => {
  console.log("Kevin Missal Café Website Loaded");
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});


const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;
const totalSlides = slider.children.length;

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

const form = document.getElementById("franchiseForm");
const successMsg = document.getElementById("successMsg");

const scriptURL = "https://script.google.com/macros/s/AKfycbyqwinheKofiWjagzbhPHfTVcXAc_ZtP3NRjLnEkYVRYLR633DEkbwt3YWG4ZIhneCgIw/exec"; 

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    city: form.city.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
    .then(() => {
      successMsg.style.display = "block";
      form.reset();
    })
    .catch(err => console.error("Error!", err));
});



// Deployment successfully updated.
// Version 2 on 5 Jan 2026, 14:18
// Deployment ID
// AKfycbyqwinheKofiWjagzbhPHfTVcXAc_ZtP3NRjLnEkYVRYLR633DEkbwt3YWG4ZIhneCgIw
// Web app
// URL
// https://script.google.com/macros/s/AKfycbyqwinheKofiWjagzbhPHfTVcXAc_ZtP3NRjLnEkYVRYLR633DEkbwt3YWG4ZIhneCgIw/exec
