```javascript
/* ==========================================================
   MAIN.JS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Mobile Navigation
    =============================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

    /* ===============================
       Scroll To Top
    =============================== */

    const scrollBtn = document.getElementById("scroll-top");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /* ===============================
       Active Navigation Link
    =============================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {

                link.classList.add("active");

            }

        });

    });

    /* ===============================
       Footer Year
    =============================== */

    document.getElementById("year").textContent =
        new Date().getFullYear();

    /* ===============================
       Scroll Reveal Animation
    =============================== */

    const hiddenElements =
        document.querySelectorAll(
            ".section,.project-card,.skill-card,.timeline-item,.info-card"
        );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

    /* ===============================
   Contact Form (EmailJS)
=============================== */

emailjs.init({
    publicKey: "8eQt8JUQ1t7vWxKG2",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "service_wad6pno",
        "template_w8kqcic",
        this
    )

    .then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    })

    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message. Please try again.");

    })

    .finally(() => {

        button.disabled = false;
        button.textContent = originalText;

    });

});
});
```

