/* ===== INTRO CONTROL ===== */
window.addEventListener("load", () => {
    const intro = document.querySelector(".intro");
    setTimeout(() => {
        intro.style.display = "none";
    }, 5000);
});

/* ===== SMOOTH NAV SCROLL ===== */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* ===== ACTIVE NAV LINK ===== */
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 120;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));
            document
                .querySelector(`nav a[href="#${id}"]`)
                ?.classList.add("active");
        }
    });
});

/* ===== SCROLL ANIMATION ===== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeUp 1s ease forwards";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".container").forEach(el => observer.observe(el));

/* ===== SCROLL TO TOP BUTTON ===== */
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.padding = "12px 16px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#facc15";
scrollBtn.style.color = "#020617";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "18px";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
