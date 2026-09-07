// ===============================
// ABDULAZIZ ABDUG'ANIYEV WEBSITE
// ===============================


// INTRO → MAIN

const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const mainSite = document.getElementById("mainSite");

enterBtn.addEventListener("click", () => {

    intro.classList.add("exit");

    intro.style.transition = "1s ease";
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.15)";

    setTimeout(() => {

        intro.style.display = "none";

        mainSite.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// MENU LINK CLICK

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// RANDOM FACTS

const factBtn = document.getElementById("factBtn");
const randomFact = document.getElementById("randomFact");

const facts = [

    "Inson miyasi juda katta miqdordagi ma'lumotni qayta ishlashga qodir.",

    "Internetdagi ma'lumotlar dunyoning turli nuqtalaridagi serverlarda saqlanadi.",

    "Yer Quyosh atrofini taxminan 365 kunda bir marta aylanib chiqadi.",

    "Birinchi video o'yinlar zamonaviy o'yinlardan ancha sodda bo'lgan.",

    "Smartfonlar hozirgi kunda kompyuter kabi juda ko'p vazifalarni bajara oladi.",

    "Koinot kengayishda davom etmoqda.",

    "Dasturlash orqali saytlar, o'yinlar va turli dasturlar yaratish mumkin."

];


factBtn.addEventListener("click", () => {

    const randomIndex =
        Math.floor(Math.random() * facts.length);

    randomFact.style.opacity = "0";
    randomFact.style.transform = "translateY(10px)";

    setTimeout(() => {

        randomFact.textContent =
            facts[randomIndex];

        randomFact.style.opacity = "1";
        randomFact.style.transform = "translateY(0)";

    }, 250);

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(
    ".info-card, .fact, .help-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "1s ease";

    observer.observe(card);

});


// PARALLAX EFFECT

window.addEventListener("mousemove", (event) => {

    const orb = document.querySelector(".orb");

    if (!orb) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    orb.style.marginLeft = `${x}px`;
    orb.style.marginTop = `${y}px`;

});


// CURRENT YEAR

const footer = document.querySelector("footer");

footer.innerHTML = footer.innerHTML.replace(
    "2026",
    new Date().getFullYear()
);
