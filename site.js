(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".site-nav");

  function setMenu(open) {
    if (!header || !menuButton) return;
    header.dataset.menuOpen = String(open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (header && menuButton && menu) {
    menuButton.addEventListener("click", function () {
      setMenu(header.dataset.menuOpen !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.dataset.menuOpen === "true") {
        setMenu(false);
        menuButton.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 639) setMenu(false);
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wordmarks = document.querySelectorAll("[data-animated-wordmark]");

  if (!reduceMotion) {
    wordmarks.forEach(function (wordmark) {
      const scripts = wordmark.querySelectorAll(".wordmark-script");
      let active = 0;

      window.setInterval(function () {
        scripts[active].setAttribute("aria-hidden", "true");
        active = active === 0 ? 1 : 0;
        scripts[active].setAttribute("aria-hidden", "false");
      }, 4000);
    });
  }

  const typedTitle = document.querySelector("[data-typed-title]");

  if (typedTitle) {
    const text = typedTitle.dataset.typedTitle;
    const textNode = typedTitle.querySelector(".typed-copy");
    const caret = typedTitle.querySelector(".typing-caret");

    if (reduceMotion) {
      textNode.textContent = text;
      caret.hidden = true;
    } else {
      let position = 0;
      textNode.textContent = "";
      caret.hidden = false;

      window.setTimeout(function typeNextCharacter() {
        position += 1;
        textNode.textContent = text.slice(0, position);

        if (position < text.length) {
          window.setTimeout(typeNextCharacter, 55);
        } else {
          window.setTimeout(function () {
            caret.hidden = true;
          }, 1400);
        }
      }, 350);
    }
  }

  const revealItems = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  document.querySelectorAll("[data-contact-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      const subject = "Project inquiry from " + (name || "website");
      const body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      window.location.href = "mailto:contact@indic.software?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  });
})();
