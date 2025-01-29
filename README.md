# 🍽️ PlatePathApp
PlatePathApp adalah aplikasi katalog restoran yang dirancang untuk memberikan informasi detail mengenai berbagai restoran. Aplikasi ini menyediakan fitur eksplorasi restoran, daftar restoran favorit, ulasan pengguna, serta artikel terbaru seputar kuliner.

## 🚀 Fitur Utama
### 📌 Navigasi
PlatePathApp memiliki tiga halaman utama yang dapat diakses melalui __AppBar Navigation:__
1. __Home__ - Halaman utama yang berisi daftar restoran dan artikel terbaru.
2. __Favorite__ - Halaman yang menampilkan restoran yang telah disukai pengguna.
3. __About Us__ - Halaman yang menampilkan informasi pengembang dengan tautan ke LinkedIn.

## 🏠 Home Page
1. __Hero Section__
- Menampilkan elemen visual untuk menyambut pengguna.
2. __Explore Restaurants__
- Daftar restoran yang ditampilkan dalam bentuk kartu.
- Setiap kartu restoran menampilkan:
  - __Foto restoran__
  - __Nama restoran__
  - __Kota lokasi restoran__
  - __Rating restoran__
  - __Deskripsi singkat restoran__
  - __Tombol "View Details"__ untuk melihat informasi lengkap restoran.
3. __Latest Articles__
- Bagian yang menampilkan artikel terbaru seputar kuliner.
- Setiap kartu artikel berisi:
  - __Gambar artikel__
  - __Judul artikel__
  - __Penjelasan singkat__
  - __Tombol "Read More"__ untuk membaca artikel lebih lanjut.
  
## 🍽️ Detail Restaurant
Ketika pengguna mengklik __"View Details"__ pada salah satu restoran, mereka akan diarahkan ke halaman detail restoran, yang berisi:
- __Gambar restoran__
- __Nama restoran__
- __Alamat lengkap restoran__
- __Deskripsi detail tentang restoran__
- __Food Menu & Drink Menu__ (menu makanan dan minuman)
- __Customer Reviews__ (ulasan pelanggan), setiap ulasan menampilkan:
  - __Nama pengguna__
  - __Komentar/review__ terhadap restoran

### ✍️ Add a Review
Pengguna dapat menambahkan ulasan melalui form review, yang terdiri dari:
- __Your Name__ (Nama pengguna, wajib diisi)
- __Your Review__ (Isi ulasan, wajib diisi)
- __Tombol Submit__ untuk mengirimkan ulasan

⚠️ Jika kolom __Your Name__ atau __Your Review__ kosong, maka ulasan tidak bisa dikirim.

### ❤️ Tombol Sukai (Favorite Button)
- Tersedia di halaman detail restoran.
- Berbentuk ikon hati ❤️ untuk menyukai atau batal menyukai restoran.
- Jika restoran disukai, maka akan masuk ke halaman __Favorite Restaurants.__

## ⭐ Favorite Restaurants
- Menampilkan daftar restoran yang telah disukai pengguna.
- Struktur tampilan __Your Favorite Restaurants__ sama seperti __Explore Restaurants__, tetapi hanya berisi restoran yang telah ditambahkan ke favorit.

## ℹ️ About Us
Menampilkan tautan __LinkedIn Developer__ dari pengembang PlatePathApp.

## 🛠️ Teknologi yang Digunakan
PlatePathApp dibangun dengan berbagai teknologi modern untuk memastikan performa dan pengalaman pengguna yang optimal:
- __Webpack__ – Bundler untuk mengoptimalkan aset dan kode.
- __CodeceptJS__ – Framework pengujian end-to-end.
- __ESLint__ – Linter untuk memastikan kualitas kode.
- __Fake IndexedDB__ – Penyimpanan sementara untuk pengujian.
- __Imagein & Sharp__ – Optimasi gambar.
- __Jest__ – Framework pengujian unit.
- __Playwright__ – Automasi browser untuk pengujian UI.
- __Workbox__ – Implementasi Service Worker untuk caching.
- __Lazysizes__ – Lazy loading gambar untuk meningkatkan performa.
- __SweetAlert2__ – Notifikasi dan alert yang lebih interaktif.

## 🧪 Pengujian
Aplikasi ini telah diuji menggunakan berbagai metode pengujian untuk memastikan stabilitasnya:
- __Unit Testing:__ Menggunakan __Jest__ untuk menguji fungsi aplikasi.
- __End-to-End Testing:__ Menggunakan __CodeceptJS__ dan __Playwright__ untuk memastikan setiap fitur bekerja dengan baik.
- __Linting:__ Menggunakan __ESLint__ untuk memastikan kualitas kode tetap terjaga.

Terima kasih telah menggunakan __PlatePathApp!__ Jika Anda memiliki saran atau ingin berkontribusi, silakan buat __issue__ atau __pull request. 🚀🍽️__






