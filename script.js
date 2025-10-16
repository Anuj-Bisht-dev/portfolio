const navbarListButton = document.getElementById("navbar_list_button");
const navbarHomeLink = document.getElementById("nav_home_link");
const navbarProjectLink = document.getElementById("nav_project_link");
const navbarAboutLink = document.getElementById("nav_about_link");
const navbarContactLink = document.getElementById("nav_contact_link");

navbarListButton.addEventListener("click", () => {
    navbarHomeLink.classList.toggle("translate-x-[160px]");
    setTimeout(() => {
        navbarProjectLink.classList.toggle("translate-x-[160px]");
    }, 400);
    setTimeout(() => {
        navbarAboutLink.classList.toggle("translate-x-[160px]");
    }, 800);
    setTimeout(() => {
        navbarContactLink.classList.toggle("translate-x-[160px]");
    }, 1200);
});

const projectFrontSections = document.querySelectorAll(".project-front-section");
const projectBackSections = document.querySelectorAll(".project-back-section");

projectFrontSections.forEach((frontSection, index) => {
  const backSection = projectBackSections[index];

  frontSection.addEventListener("click", () => {
      frontSection.classList.toggle("translate-y-[300px]");
      backSection.classList.toggle("translate-x-[0px]");
  });

  backSection.addEventListener("click", () => {
    frontSection.classList.toggle("translate-y-[300px]");
    backSection.classList.toggle("translate-x-[0px]");
  });
});