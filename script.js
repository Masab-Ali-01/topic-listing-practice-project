
// cards swction show or hide
let design_cards = document.querySelector(".design-cards")
let markeeting_cards = document.querySelector(".markeeting-cards")
let finance_cards = document.querySelector(".Finance-cards")
let music_cards = document.querySelector(".Music-cards")
let education_cards = document.querySelector(".Education-cards")

// card section links
let designCardsLink = document.querySelector(".design-cards-link")
let markeetingCardsLink = document.querySelector(".markeeting-cards-link")
let financeCardsLink = document.querySelector(".finance-cards-link")
let musicCardsLink = document.querySelector(".music-cards-link")
let educationCardsLink = document.querySelector(".education-cards-link")

designCardsLink.addEventListener("click", () => {
    design_cards.classList.add("show");
    finance_cards.classList.remove("show")
    finance_cards.classList.add("hide")
    markeeting_cards.classList.remove("show")
    markeeting_cards.classList.add("hide")
    music_cards.classList.remove("show")
    music_cards.classList.add("hide")
    education_cards.classList.remove("show")
    education_cards.classList.add("hide")
})

markeetingCardsLink.addEventListener("click", () => {
    markeeting_cards.classList.add("show");
    design_cards.classList.remove("show");
    design_cards.classList.add("hide");
    finance_cards.classList.remove("show")
    finance_cards.classList.add("hide")
    music_cards.classList.remove("show")
    music_cards.classList.add("hide")
    education_cards.classList.remove("show")
    education_cards.classList.add("hide")
})

financeCardsLink.addEventListener("click", () => {
    finance_cards.classList.add("show");
    design_cards.classList.remove("show");
    design_cards.classList.add("hide");
    markeeting_cards.classList.remove("show")
    markeeting_cards.classList.add("hide")
    music_cards.classList.remove("show")
    music_cards.classList.add("hide")
    education_cards.classList.remove("show")
    education_cards.classList.add("hide")
})

musicCardsLink.addEventListener("click", () => {
    music_cards.classList.add("show")
    design_cards.classList.remove("show");
    design_cards.classList.add("hide");
    markeeting_cards.classList.remove("show")
    markeeting_cards.classList.add("hide")
    finance_cards.classList.remove("show")
    finance_cards.classList.add("hide")
    education_cards.classList.remove("show")
    education_cards.classList.add("hide")
})

educationCardsLink.addEventListener("click", () => {
    education_cards.classList.add("show")
    design_cards.classList.remove("show");
    design_cards.classList.add("hide");
    markeeting_cards.classList.remove("show")
    markeeting_cards.classList.add("hide")
    finance_cards.classList.remove("show")
    finance_cards.classList.add("hide")
    music_cards.classList.remove("show")
    music_cards.classList.add("hide")
})


// FAQ's
let A1 = document.querySelector(".answer-1");
let A2 = document.querySelector(".answer-2");
let A3 = document.querySelector(".answer-3");
let Q1 = document.querySelector(".question-1");
let Q2 = document.querySelector(".question-2");
let Q3 = document.querySelector(".question-3");

Q1.addEventListener("click", () => {
    A1.classList.toggle("show-answer");
    Q1.classList.toggle("active");
    A2.classList.remove("show-answer");
    Q2.classList.remove("active");
    Q3.classList.remove("show-answer");
    A3.classList.remove("active");
})
Q2.addEventListener("click", () => {
    A2.classList.toggle("show-answer");
    Q2.classList.toggle("active");
    A1.classList.remove("show-answer");
    Q1.classList.remove("active");
    A3.classList.remove("show-answer");
    Q3.classList.remove("active");
})
Q3.addEventListener("click", () => {
    A3.classList.toggle("show-answer");
    Q3.classList.toggle("active");
    A1.classList.remove("show-answer");
    Q1.classList.remove("active");
    A2.classList.remove("show-answer");
    Q2.classList.remove("active");
})


// languages
let languages_button = document.querySelector(".dropdown-button");
let dropdown = document.querySelector(".dropdown");
languages_button.addEventListener("click", () => {
    dropdown.classList.toggle("language-show")
    dropdown.classList.toggle("dropdown")

})


// navbar toggle
let navbar_toggler =document.querySelector(".navbar-toggle-icon-container");
navbar_toggler.addEventListener("click",()=>{
    let nav_items = document.querySelector(".nav-items");
    nav_items.classList.toggle("nav-items-show")
    let nav_toggle_icon =document.querySelector(".navbar-toggle-icon-container");
    nav_toggle_icon.classList.toggle("nav-toggle-transition-1");
    nav_toggle_icon.classList.toggle("nav-toggle-transition-2");
}) 


