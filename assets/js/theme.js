/**
 * @author M.Andi.Matulada <matuladaandi@gmail.com>
 * @copyright matuladaandi 2024
 */

/* Build Your First GitHub App with JavaScript and GitHub API: Easy and Fast */

"use strict";

// Mendapatkan elemen HTML utama dari dokumen
const /** {NodeElement} */ htmlElement = document.documentElement;

// Memeriksa apakah preferensi skema warna pengguna adalah 'dark'
// Menggunakan window.matchMedia untuk mengetahui preferensi warna dari sistem pengguna
const /** {Boolean} */ isDark = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

// Memeriksa apakah ada item 'theme' yang disimpan di sessionStorage
if (sessionStorage.getItem("theme")) {
  // Jika ada, atur atribut data-theme dari elemen HTML sesuai dengan nilai yang disimpan
  htmlElement.dataset.theme = sessionStorage.getItem("theme");
} else {
  // Jika tidak ada, atur atribut data-theme sesuai dengan preferensi warna dari sistem
  htmlElement.dataset.theme = isDark ? "dark" : "light";
}

let /** {Boolean} */ isPressed = false;

const changeTheme = function () {
  // Menggunakan operator ternary untuk mengubah nilai 'isPressed'.
  // Jika 'isPressed' adalah true, maka akan diubah menjadi false.
  // Jika 'isPressed' adalah false, maka akan diubah menjadi true.
  isPressed = isPressed ? false : true;

  this.setAttribute("aria-pressed", isPressed);
  // Mengubah atribut 'data-theme' pada elemen HTML utama ('htmlElement').
  // Jika nilai atribut 'data-theme' saat ini adalah 'light', maka akan diubah menjadi 'dark'.
  // Jika nilai atribut 'data-theme' saat ini adalah 'dark', maka akan diubah menjadi 'light'.

  htmlElement.setAttribute(
    "data-theme",
    htmlElement.dataset.theme === "light" ? "dark" : "light"
  );

  // Menyimpan preferensi tema pengguna di 'sessionStorage'.
  // Menyimpan nilai dari atribut 'data-theme' yang baru diatur pada 'htmlElement'.
  sessionStorage.setItem("theme", htmlElement.dataset.theme);
};

// ketika semuanya(document HTML,image, dll.) selesai di load/muat
window.addEventListener("load", function () {
  const themeBtn = document.querySelector("[data-theme-btn]");

  themeBtn.addEventListener("click", changeTheme);
});
