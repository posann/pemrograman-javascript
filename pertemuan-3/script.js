// ini adalah variabel nama untuk inputan nama
let nama = prompt("Masukkan nama kamu")

// ini adalah variabel kehadiran untuk inputan kehadiran
let kehadiran = prompt("Masukkan 1 jika hadir, masukkan 0 jika tidak hadir")

// ini adalah variabel cek untuk mengecek apakah data sudah benar
let cek = confirm("apakah sudah benar?")


// ini adalah variabel hasil untuk mengecek apakah kamu hadir atau tidak kemudian memberikan output
let hasil = kehadiran == "1" ? "Kamu hadir" : "Kamu tidak hadir"

// ini adalah output berupa alert
document.getElementsByTagName("h3")[0].innerText = hasil