/**
 * @author matuladaandi <matuladaandi@gmail.com>
 * @copyright matuladaandi 2024
 */

"use strict";

/**
 * Add eventlistener on multiple elements
 * @param {NodeList} $elements
 * @param {String} eventType String
 * @param {Function} callback Function
 */

const addEventOnElements = function ($elements, eventType, callback) {
  for (const $item of $elements) {
    $item.addEventListener(eventType, callback);
  }
};

/**
 * Header scroll state
 */

const /**{NodeElement} */ header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Search toggle
 */

const /**{NodeElement} */ searchToggler = document.querySelector(
    "[data-search-toggle]"
  );
const /**{NodeELement} */ searchField = document.querySelector(
    "[data-search-field]"
  );
let /** {Boolean} */ isExpanded = false;

searchToggler.addEventListener("click", function () {
  header.classList.toggle("search-active");
  isExpanded = isExpanded ? false : true;
  this.setAttribute("aria-expanded", isExpanded);
  searchField.focus();
});

/**
 * Tap navigation
 */

const /**{NodeList} */ tabBtns = document.querySelectorAll("[data-tab-btn]");
const /**{NodeList} */ tabPanels =
    document.querySelectorAll("[data-tab-panel]");

// Mengambil elemen pertama dari tabBtns dan menamainya lastActiveTabBtn
let /**{NodeList} */ [lastActiveTabBtn] = tabBtns;

// Mengambil elemen pertama dari tabPanels dan menamainya lastActiveTabPanel
let /**{NodeList} */ [lastActiveTabPanel] = tabPanels;

addEventOnElements(tabBtns, "click", function () {
  // SetAttribute (name aria-selected, value false)
  // Menetapkan atribut aria-selected menjadi false untuk lastActiveTabBtn
  lastActiveTabBtn.setAttribute("aria-selected", false);

  // Menetapkan atribut hidden pada lastActiveTabPanel
  lastActiveTabPanel.setAttribute("hidden", "");

  // Menetapkan atribut aria-selected menjadi true untuk element yang diklik
  this.setAttribute("aria-selected", true);

  // Mengambil elemen yang dikontrol oleh tab yang diklik
  const /**{NodeList} */ currentTabPanel = document.querySelector(
      `#${this.getAttribute("aria-controls")}`
    );

  // Menghapus atribut hidden dari panel saat ini
  currentTabPanel.removeAttribute("hidden");

  // Mengupdate lastActiveTabBtn dengan elemen yang diklik
  lastActiveTabBtn = this;

  // Mengupdate lastActiveTabPanel dengan panel saat ini
  lastActiveTabPanel = currentTabPanel;
});

/**
 * keyboard accessibility for tab buttons
 */

// Menambahkan event listener "keydown" pada setiap elemen dalam tabBtns
addEventOnElements(tabBtns, "keydown", function (e) {
  // Mendeklarasikan variabel nextElement yang merujuk pada elemen saudara berikutnya dari elemen yang memicu event
  const /** {NodeElement} */ nextElement = this.nextElementSibling;

  // Mendeklarasikan variabel previousElement yang merujuk pada elemen saudara sebelumnya dari elemen yang memicu event
  const /** {NodeElement} */ previousElement = this.previousElementSibling;

  if (e.key === "ArrowRight" && nextElement) {
    this.setAttribute("tabindex", "-1");
    nextElement.setAttribute("tabindex", "0");
    nextElement.focus();
  } else if (e.key === "ArrowLeft" && previousElement) {
    this.setAttribute("tabindex", "-1");
    previousElement.setAttribute("tabindex", "0");
    previousElement.focus();
  }
});
