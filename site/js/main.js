// Aimway landing page: header state, mobile menu, reveal-on-scroll. No dependencies.
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  var hero = document.querySelector(".hero");

  // Header turns solid once the dark hero has scrolled past.
  function updateHeader() {
    var limit = hero ? hero.offsetHeight - 80 : 40;
    header.classList.toggle("is-solid", window.scrollY > limit);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mobile menu
  function setMenu(open) {
    nav.classList.toggle("open", open);
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.querySelector("use").setAttribute("href", open ? "#i-x" : "#i-menu");
  }
  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 861px)").addEventListener("change", function (m) {
    if (m.matches) setMenu(false);
  });

  // Reveal sections as they scroll into view.
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
