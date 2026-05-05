const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const leadForms = document.querySelectorAll("[data-lead-form]");

const syncHeader = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

if (navToggle && nav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

leadForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = form.querySelector("[data-form-status]");
    const phoneInput = form.querySelector('input[type="tel"]');
    const phone = phoneInput ? phoneInput.value.trim() : "";

    if (status) {
      status.textContent = phone
        ? `Solicitud registrada. Te llamaríamos al ${phone}.`
        : "Solicitud registrada. Te llamaríamos lo antes posible.";
    } else {
      alert("Solicitud registrada. Te llamaríamos lo antes posible.");
    }

    form.reset();
  });
});

const revealItems = document.querySelectorAll(
  ".section-heading, .service-card, .page-grid article, .link-grid a, .split-content, .trust-band > div, .contact-copy, .contact-form, .side-panel"
);

revealItems.forEach((item, index) => {
  item.dataset.reveal = "";
  item.style.setProperty("--reveal-index", String(index % 8));
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
