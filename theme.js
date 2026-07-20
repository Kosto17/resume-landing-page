```javascript
/* ==========================================================
   THEME.JS
========================================================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

/* ===============================
   Load Saved Theme
=============================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}

/* ===============================
   Toggle Theme
=============================== */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    if (isDark) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

/* ===============================
   Optional: Match System Theme
   (Only if no saved preference)
=============================== */

if (!savedTheme) {

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDark.matches) {

        body.classList.add("dark-mode");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }

    prefersDark.addEventListener("change", (event) => {

        if (!localStorage.getItem("theme")) {

            if (event.matches) {

                body.classList.add("dark-mode");

                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");

            } else {

                body.classList.remove("dark-mode");

                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");

            }

        }

    });

}
```

