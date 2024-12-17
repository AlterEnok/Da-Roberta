document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("_active");
        menu.classList.toggle("_active");
    });

    // Устанавливаем язык по умолчанию
    changeLanguage("en");
    document.getElementById("lang-en").classList.add("active");
});

// Обновленный translations с HTML
const translations = {
    en: {
        navHome: "Home",
        navMenu: "Menu",
        navAbout: "About Us",
        navContact: "Contact",
        heroTitle: 'Da <span>R</span>oberta',
        heroDescription:
            "Da Roberta – a cozy Italian restaurant with delicious pizzas, pastas, fine wines, and southern hospitality. Every day is a celebration!",
        heroButton: "Menu",
    },
    lv: {
        navHome: "Sākums",
        navMenu: "Ēdienkarte",
        navAbout: "Par Mums",
        navContact: "Kontakti",
        heroTitle: 'Da <span>R</span>oberta',
        heroDescription:
            "Da Roberta – mājīgs itāļu restorāns ar gardām picām, pastām, izcilu vīnu un dienvidu viesmīlību. Pie mums katra diena ir svētki!",
        heroButton: "Ēdienkarte",
    },
};

function changeLanguage(lang) {
    // Навигация
    document.querySelectorAll(".header__menu li a")[0].textContent = translations[lang].navHome;
    document.querySelectorAll(".header__menu li a")[1].textContent = translations[lang].navMenu;
    document.querySelectorAll(".header__menu li a")[2].textContent = translations[lang].navAbout;
    document.querySelectorAll(".header__menu li a")[3].textContent = translations[lang].navContact;

    // Текст в hero с сохранением структуры HTML
    document.querySelector(".hero__title").innerHTML = translations[lang].heroTitle;
    document.querySelector(".hero__description").textContent = translations[lang].heroDescription;
    document.querySelector(".hero__button").textContent = translations[lang].heroButton;

    // Мобильное меню
    document.querySelectorAll(".menu__link")[0].textContent = translations[lang].navHome;
    document.querySelectorAll(".menu__link")[1].textContent = translations[lang].navMenu;
    document.querySelectorAll(".menu__link")[2].textContent = translations[lang].navAbout;
    document.querySelectorAll(".menu__link")[3].textContent = translations[lang].navContact;

    // Смена активного языка
    document.getElementById("lang-en").classList.remove("active");
    document.getElementById("lang-lit").classList.remove("active");

    if (lang === "en") {
        document.getElementById("lang-en").classList.add("active");
    } else if (lang === "lv") {
        document.getElementById("lang-lit").classList.add("active");
    }
}

document.getElementById("lang-en").addEventListener("click", () => {
    changeLanguage("en");
});

document.getElementById("lang-lit").addEventListener("click", () => {
    changeLanguage("lv");
});