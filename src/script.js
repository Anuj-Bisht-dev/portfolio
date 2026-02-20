const navbarListButton = document.getElementById("navbar_list_button");
const navbarHomeLink = document.getElementById("nav_home_link");
const navbarProjectLink = document.getElementById("nav_project_link");
const navbarAboutLink = document.getElementById("nav_about_link");
const navbarContactLink = document.getElementById("nav_contact_link");
const navbarDefaultBtn = document.getElementById("navbar-default-button");
const navbarCustomBtn = document.getElementById("navbar-custom-button");

navbarListButton.addEventListener("click", () => {
    setTimeout(() => {
        navbarHomeLink.classList.toggle("translate-x-[160px]");
    }, 100)
    setTimeout(() => {
        navbarProjectLink.classList.toggle("translate-x-[160px]");
    }, 250);
    setTimeout(() => {
        navbarAboutLink.classList.toggle("translate-x-[160px]");
    }, 500);
    setTimeout(() => {
        navbarContactLink.classList.toggle("translate-x-[160px]");
    }, 750);
});

navbarDefaultBtn.addEventListener("click", () => {
    navbarDefaultBtn.classList.toggle("hidden");
    navbarCustomBtn.classList.toggle("hidden");
});

navbarCustomBtn.addEventListener("click", () => {
    navbarDefaultBtn.classList.toggle("hidden");
    navbarCustomBtn.classList.toggle("hidden");
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

const messageSendingBtn = document.getElementById("message_send_button");
const queriesSection = document.getElementById("queries_section");

messageSendingBtn.addEventListener("click", () => {
    setTimeout(() => {
        messageSendingBtn.classList.add("ml-[375px]");
        messageSendingBtn.classList.remove("ml-[350px]");
        messageSendingBtn.innerText = "Sending";
    }, 500);
    setTimeout(() => {
        queriesSection.classList.add("ml-[120px]");
        queriesSection.classList.add("mt-20");
        queriesSection.innerText = "Thank You For Your Valuable Time!";
    }, 2000);
    setTimeout(() => {
        messageSendingBtn.innerText = "Sended";
        messageSendingBtn.classList.add("pointer-events-none");
    }, 2500);
})


// let firstSections = document.getElementsByTagName("section")[1];

let allSections = document.getElementsByTagName("section");
const observe = new IntersectionObserver((entites) => {
    entites.forEach((value) => {
        if (value.isIntersecting) {
            value.target.classList.add("animate-fade-in");
        }
    });
});

for (let section of allSections) {
    observe.observe(section);
}

// script for large screen

const navSection = document.getElementById("nav-section");
const homeSection = document.getElementById("home-page");
window.onscroll.addEventListener(() => {
    if (window == navSection) {
        navSection.classList.remvove("xl:z-10");
    }
    navSection.classList.add("xl:z-10");
});

