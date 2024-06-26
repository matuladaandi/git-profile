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
