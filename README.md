# Quizify

https://death1478.github.io/Ryan-projek-QUIZIFY/

**Quizify** adalah platform edukasi interaktif yang dirancang untuk:
- Mempermudah akses belajar di bidang multimedia (Pemrograman, Desain, dan Jaringan) melalui modul terarah.
- Meningkatkan interaktivitas belajar dengan kuis berbasis pengetahuan.
- Memberikan evaluasi kemajuan dengan sistem penilaian otomatis dalam bentuk persentase.

Dengan **Quizify**, pengguna dapat mempelajari topik-topik penting dan menguji kemampuan mereka melalui pengalaman yang menyenangkan dan terstruktur.

## Komponen Bootstrap yang Digunakan

### 1. Navbar
- **Fungsi**: Membantu pengguna menavigasi ke berbagai bagian web dengan mudah, seperti modul pembelajaran, kuis, dan progres.
- **Detail**:
  - Menggunakan class `navbar`, `navbar-expand-md`, dan `bg-dark` untuk desain responsif dan tema gelap.
  - Tombol "Log In" disematkan menggunakan class `btn btn-primary`.

### 2. Hero Carousel
- **Fungsi**: Memberikan tampilan awal yang menarik dan menjadi "wajah" utama website, dilengkapi dengan ajakan bertindak (CTA).
- **Detail**:
  - Gambar latar penuh menggunakan `img-fluid w-100`.
  - Ajakan bertindak berupa tombol besar dengan class `btn btn-primary btn-lg`.

### 3. Cards
- **Fungsi**: Menyediakan wadah fleksibel untuk menampilkan modul pembelajaran dengan struktur yang rapi dan responsif.
- **Detail**:
  - Menggunakan komponen `card` untuk menyusun elemen seperti gambar, judul, dan deskripsi.

### 4. Accordion
- **Fungsi**: Menyajikan materi secara terstruktur dalam format yang ringkas dan dapat diperluas.
- **Detail**:
  - Menggunakan komponen `accordion` untuk menyederhanakan tampilan materi modul.
  - Membantu pengguna fokus pada satu topik dalam satu waktu.

### 5. Modal dan Form Check
- **Fungsi**:
  - **Modal** digunakan untuk menampilkan kuis secara terpisah, memberikan pengalaman yang terfokus bagi pengguna.
  - **Form check** digunakan untuk membuat pertanyaan pilihan ganda yang memeriksa jawaban pengguna.
- **Detail**:
  - Modal (modal, modal-dialog, modal-content) untuk menampilkan kuis.
  - Form check (form-check, form-check-input, form-check-label) untuk membuat kuis pilihan ganda.
  - Tombol `btn-close` digunakan untuk menutup modal dengan cepat.

### 6. Progress Bar dan Badge
- **Fungsi**:
  - **Progress bar** digunakan untuk mencatat dan menampilkan kemajuan belajar pengguna secara visual.
  - **Badge** digunakan untuk memberikan penilaian dalam bentuk teks tambahan setelah menyelesaikan bagian tertentu.
- **Detail**:
  - Progress bar (`progress`, `progress-bar`) untuk mengindikasikan persentase kemajuan.
  - Badge (`badge`, `bg-info`) untuk menampilkan skor atau status.

## Fitur Utama yang Berhasil Diimplementasikan

### 1. Halaman Utama: Daftar Modul Pembelajaran dalam Grid
- **Deskripsi**: Halaman utama dirancang untuk menampilkan semua modul pembelajaran yang tersedia secara terorganisasi dalam format grid. Setiap modul memiliki representasi visual berupa kartu yang menarik, yang memuat ikon, judul modul, dan tombol untuk mengakses materi.
- **Keunggulan**:
  - Tata letak grid memudahkan pengguna untuk menjelajahi berbagai modul.
  - Elemen yang responsif membuat tampilan tetap rapi di perangkat dengan ukuran layar berbeda.
- **Komponen yang Digunakan**:
  - **Bootstrap Card** untuk setiap modul.
  - **Row** dan **Col** untuk pengaturan grid yang fleksibel.

### 2. Accordion untuk Materi Modul
- **Deskripsi**: Komponen accordion digunakan untuk menyembunyikan atau menampilkan detail materi dalam setiap modul pembelajaran. Setiap modul dipecah menjadi sub-materi untuk memudahkan pengguna memahami konten secara bertahap.
- **Keunggulan**:
  - Pengguna dapat memilih materi tertentu tanpa harus melihat keseluruhan isi modul.
  - Mempermudah navigasi dalam satu halaman.
- **Komponen yang Digunakan**:
  - **Accordion Bootstrap** untuk menyusun materi dalam format yang dapat di-expand atau collapsed.

### 3. Quiz Sederhana: Form Interaktif
- **Deskripsi**: Fitur kuis interaktif digunakan untuk menguji pemahaman pengguna terhadap materi yang telah dipelajari. Pengguna memilih jawaban dari pilihan ganda, dan sistem memverifikasi jawaban mereka.
- **Keunggulan**:
  - Membantu pengguna mengukur sejauh mana mereka memahami materi.
  - Memberikan pengalaman belajar yang lebih menyenangkan dan menantang.
- **Komponen yang Digunakan**:
  - **Modal** untuk menampilkan kuis dalam bentuk pop-up.
  - **Form Check** untuk membuat pertanyaan pilihan ganda.

### 4. Progress Bar untuk Kemajuan Belajar
- **Deskripsi**: Fitur ini menampilkan sejauh mana pengguna telah menyelesaikan modul pembelajaran. Kemajuan dihitung dalam bentuk persentase, yang divisualisasikan dengan progress bar.
- **Keunggulan**:
  - Memotivasi pengguna untuk menyelesaikan semua materi.
  - Memberikan gambaran yang jelas mengenai pencapaian pengguna.
- **Komponen yang Digunakan**:
  - **Progress Bar** untuk visualisasi kemajuan.
  - **Badge** untuk menampilkan skor setelah kuis selesai.

## Instruksi Penggunaan

### 1. Navigasi Website
- **Deskripsi**: Gunakan **Navbar** di bagian atas untuk berpindah antarhalaman dengan mudah.
- **Instruksi**:
  1. Klik salah satu tautan di navbar:
     - **Modul Pembelajaran**: Untuk membuka daftar modul yang tersedia.
     - **Kuis**: Untuk langsung menuju halaman kuis.
     - **Progres**: Untuk melihat kemajuan belajar Anda.
  2. Pengguna tidak akan diarahkan ke halaman lain, tetapi tetap berada di halaman yang sama dan langsung menuju ke poin yang sesuai.

### 2. Membaca Materi Modul
- **Deskripsi**: Materi modul disajikan dalam bentuk grid dengan detail yang bisa diakses menggunakan accordion.
- **Instruksi**:
  1. Pilih modul yang diinginkan dari daftar pada halaman utama. Klik tombol **Lihat Modul** pada kartu modul.
  2. Setelah halaman modul terbuka, klik judul sub-materi di accordion untuk menampilkan detail isi materi.
  3. Untuk kembali ke halaman utama, tekan logo di kiri atas halaman.

### 3. Mengikuti Kuis Interaktif
- **Deskripsi**: Kuis tersedia untuk menguji pemahaman Anda terhadap materi yang telah dipelajari.
- **Instruksi**:
  1. Navigasikan ke bagian **Kuis** melalui navbar atau tombol **Mulai Kuis** di halaman utama.
  2. Pilih kuis sesuai kategori (misalnya: Pemrograman, Desain, Jaringan).
  3. Klik tombol **Mulai Kuis** untuk memulai. Kuis akan muncul dalam bentuk modal pop-up.
  4. Jawab setiap pertanyaan dengan memilih salah satu opsi yang disediakan.
  5. Setelah selesai, klik tombol **Selesai** untuk melihat hasil Anda.
  6. Skor Anda akan ditampilkan dalam bentuk **Badge** dan progress bar dengan persentase.

### 4. Melacak Progres Belajar
- **Deskripsi**: Progres belajar Anda akan dicatat dalam bentuk persentase berdasarkan jumlah materi yang telah diselesaikan dan kuis yang telah dijawab.
- **Instruksi**:
  1. Akses bagian **Progres** melalui navbar.
  2. Lihat grafik progres dalam bentuk **Progress Bar** untuk setiap kategori modul (Pemrograman, Desain, Jaringan).
  3. Badge skor kuis akan muncul jika Anda telah menyelesaikan kuis untuk kategori tertentu.
  4. Gunakan informasi ini untuk melanjutkan materi yang belum selesai.

### 5. Tips untuk Penggunaan Optimal
- **Gunakan di Perangkat Apapun**: Website ini telah dirancang responsif, sehingga nyaman diakses di laptop, tablet, atau ponsel.
- **Belajar Terarah**: Mulai dari modul dasar sebelum beralih ke modul tingkat lanjut untuk memahami materi dengan baik.
- **Selesaikan Kuis**: Gunakan kuis sebagai alat evaluasi untuk memastikan Anda telah memahami materi.
- **Cek Progres Secara Berkala**: Lihat sejauh mana Anda telah maju dan terus tingkatkan skor Anda.
- **Mengulang Kuis**: Jika Anda tidak puas dengan hasil kuis, Anda dapat mengulang kuis untuk memperbaiki skor.
