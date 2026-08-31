/* ==========================================================================
   ADVENTSAKSJONEN – SCRIPT.JS
   --------------------------------------------------------------------------
   Denne filen gjør kun ÉN ting: viser/gjemmer menyen på mobil når man
   trykker på hamburger-knappen (de tre strekene øverst til høyre).

   Du trenger ikke endre noe her for å redigere tekst, bilder eller farger
   – det gjør du i HTML- og CSS-filene.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (!toggle || !links) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
