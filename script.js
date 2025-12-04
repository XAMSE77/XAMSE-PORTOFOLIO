/* ================= DARK & LIGHT MODE ================= */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.innerHTML = "🌙";
    } else {
        toggleBtn.innerHTML = "☀️";
    }
});


/* ================= TYPING EFFECT ================= */
const text = "Xamse Caataye Portfolio";
let index = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (index < text.length) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(type, 100);
    }
}

window.onload = () => {
    type();
};


/* ================= SCROLL REVEAL ================= */
const sections = document.querySelectorAll("section");

function revealOnScroll() {
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


/* ================= CONTACT FORM ================= */
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        console.log("Message Sent:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        alert("Message Sent Successfully!");

        form.reset();
    });
                   }
