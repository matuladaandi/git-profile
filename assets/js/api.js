/**
 * @author matuladaandi <matuladaandi@gmail.com>
 * @copyright matuladaandi 2024
 */

"use strict";

/**
 * Fecth data from server
 * @param {*} url API Url [required]
 * @param {*} successCallback Success callback [required]
 * @param {*} errorCallback Error callback [optional]
 */

// Mendefinisikan fungsi asinkron bernama fetchData yang diekspor untuk digunakan di modul lain
export async function fetchData(url, successCallback, errorCallback) {
  // Melakukan permintaan HTTP ke URL yang diberikan menggunakan fetch
  const responese = await fetch(url);

  // Memeriksa apakah permintaan berhasil dengan memeriksa properti ok dari responese
  if (responese.ok) {
    // mengambil data yang dikirim oleh server dalam format JSON dan mengubahnya menjadi objek JavaScript yang dapat digunakan
    const data = await responese.json();

    // Memanggil callback sukses dengan data yang diambil
    successCallback(data);
  } else {
    // Mengurai respons JSON jika permintaan gagal
    const error = await responese.json();
    
    // Memanggil callback kesalahan jika didefinisikan
    errorCallback && errorCallback(error);
  }
}
