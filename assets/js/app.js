

// social icons display on click
const hornBtn = document.querySelector('.social-icons span');
hornBtn.addEventListener('click', () => {
    document.querySelector('.social-icons-list').classList.toggle('socialIconsToggle');
});

// navbar collapse
const navbarCollapse = document.querySelector('.navbar-collapse');
const navShowBtn = document.getElementById('navbar-toggler');
const navCloseBtn = document.getElementById('nav-close-btn');
const modal = document.getElementById('modal');

navShowBtn.addEventListener('click', () => {
    navbarCollapse.classList.add('show-navbar-collapse');
    modal.classList.add('fullscreenModal');
});

navCloseBtn.addEventListener('click', () => {
    navbarCollapse.classList.remove('show-navbar-collapse');
    modal.classList.remove('fullscreenModal');
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        navbarCollapse.classList.remove('show-navbar-collapse');
        modal.classList.remove('fullscreenModal');
    }
});


// faq collapsible
const faqHeadIcons = document.querySelectorAll('.faq-head span');
const faqHeadTitles = document.querySelectorAll('.faq-head h3');
const faqBodyContents = document.querySelectorAll('.faq-body');

faqBodyContents[0].classList.add('show-faq-body');
faqHeadIcons[0].innerHTML = '<img src = "assets/icons/up.svg">';

// while clicking title 
faqHeadTitles.forEach((title) => {
    title.addEventListener('click', () => {
        faqBodyHide();
        faqIconReset();
        title.parentElement.nextElementSibling.classList.add('show-faq-body');
        title.previousElementSibling.innerHTML = '<img src = "assets/icons/up.svg">';
    });
});

// while clicking icon
faqHeadIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        faqBodyHide();
        faqIconReset();
        icon.parentElement.nextElementSibling.classList.add('show-faq-body');
        icon.innerHTML = '<img src = "assets/icons/up.svg">';
    })
});


function faqBodyHide(){
    faqBodyContents.forEach((body) => {
        body.classList.remove('show-faq-body');
    });
}

function faqIconReset(){
    faqHeadIcons.forEach((icon) => {
        icon.innerHTML = '<img src = "assets/icons/down.svg">';
    });
}


/// Search Queries
let query = document.querySelector(".search-query")
let searchBtn = document.querySelector(".search-btn")


searchBtn.onclick = () =>{
    let url = "https://duckduckgo.com/?q=" + query.value;
    window.open(url); 
}

