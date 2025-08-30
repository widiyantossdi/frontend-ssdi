
import React from 'react';
import { Service, NewsArticle, FaqItem } from './types';

const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0" />
    </svg>
);

const AcademicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const ELearningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7" />
    </svg>
);

const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);


export const SERVICES: Service[] = [
  {
    icon: <AcademicIcon />,
    title: 'Sistem Informasi Akademik',
    description: 'Akses terpusat untuk nilai, jadwal kuliah, dan administrasi akademik mahasiswa dan dosen.',
  },
  {
    icon: <WifiIcon />,
    title: 'Pengelolaan Wi-Fi Kampus',
    description: 'Menyediakan dan mengelola jaringan internet nirkabel yang cepat dan stabil di seluruh area kampus.',
  },
  {
    icon: <EmailIcon />,
    title: 'Layanan Email Resmi',
    description: 'Penyediaan akun email resmi dengan domain kampus untuk seluruh civitas akademika.',
  },
  {
    icon: <SupportIcon />,
    title: 'Dukungan Teknis',
    description: 'Layanan bantuan untuk mengatasi masalah teknis terkait perangkat keras dan lunak.',
  },
  {
    icon: <ELearningIcon />,
    title: 'Platform E-Learning',
    description: 'Mengelola platform pembelajaran online untuk mendukung kegiatan perkuliahan daring.',
  },
  {
    icon: <WebDevIcon />,
    title: 'Pengembangan Website',
    description: 'Pengembangan dan pemeliharaan website resmi fakultas, program studi, dan unit kerja.',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'peningkatan-server-siakad-2024',
    imageUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=1200&auto=format&fit=crop',
    category: 'Pembaruan Sistem',
    title: 'Peningkatan Server SIAKAD untuk Kinerja Lebih Cepat',
    date: '15 Juli 2024',
    excerpt: 'Kami telah berhasil melakukan upgrade server Sistem Informasi Akademik (SIAKAD) untuk meningkatkan kecepatan akses dan stabilitas.',
    fullContent: `<p>Dalam upaya berkelanjutan untuk meningkatkan kualitas layanan akademik, UPT SSDI telah berhasil menyelesaikan proses peningkatan (upgrade) server untuk Sistem Informasi Akademik (SIAKAD). Pembaruan ini bertujuan untuk mengatasi peningkatan beban akses selama periode KRS dan ujian, serta memberikan pengalaman pengguna yang lebih cepat dan responsif.</p><p>Peningkatan ini mencakup penambahan kapasitas RAM, penggunaan storage SSD NVMe yang lebih cepat, dan optimalisasi konfigurasi database. Diharapkan dengan adanya pembaruan ini, seluruh civitas akademika dapat mengakses informasi akademik dengan lebih lancar dan efisien. Kami terus berkomitmen untuk menyediakan infrastruktur terbaik bagi kemajuan UNUGHA Cilacap.</p>`
  },
  {
    slug: 'waspada-phishing-email-kampus',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    category: 'Keamanan',
    title: 'Waspada Phishing: Lindungi Akun Email Kampus Anda',
    date: '10 Juli 2024',
    excerpt: 'SSDI mengimbau seluruh civitas akademika untuk berhati-hati terhadap upaya phishing yang mengatasnamakan universitas.',
    fullContent: `<p>Sehubungan dengan meningkatnya upaya penipuan online (phishing), kami mengimbau seluruh mahasiswa, dosen, dan staf untuk selalu waspada. Phishing seringkali datang dalam bentuk email yang seolah-olah berasal dari pihak universitas, meminta Anda untuk memasukkan username dan password pada halaman palsu.</p><p>Ingatlah beberapa hal penting ini:</p><ul class="list-disc list-inside pl-4 mt-4 space-y-2"><li>SSDI tidak akan pernah meminta password Anda melalui email.</li><li>Selalu periksa alamat URL pada browser Anda sebelum login. Pastikan alamatnya adalah <strong>unugha.ac.id</strong>.</li><li>Jangan mengklik tautan yang mencurigakan dari pengirim yang tidak dikenal.</li><li>Gunakan password yang kuat dan unik.</li></ul><p>Jika Anda menerima email yang mencurigakan, segera laporkan ke helpdesk kami.</p>`
  },
  {
    slug: 'perluasan-wifi-gedung-baru',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    category: 'Infrastruktur',
    title: 'Perluasan Jangkauan Wi-Fi di Area Gedung Baru',
    date: '5 Juli 2024',
    excerpt: 'Jaringan Wi-Fi kampus kini telah tersedia di seluruh area gedung perkuliahan yang baru diresmikan.',
    fullContent: `<p>Kami dengan gembira mengumumkan bahwa proyek perluasan jaringan Wi-Fi kampus telah selesai. Kini, akses internet nirkabel yang cepat dan stabil telah mencakup seluruh area Gedung Al-Ghozali 2, termasuk ruang kelas, laboratorium, dan area komunal.</p><p>Pemasangan access point terbaru dengan teknologi Wi-Fi 6 akan memastikan konektivitas yang lebih baik untuk mendukung kegiatan belajar mengajar dan riset. Silakan hubungkan perangkat Anda ke SSID <strong>UNUGHA-WiFi</strong> menggunakan akun SIAKAD Anda.</p>`
  },
  {
    slug: 'jadwal-pemeliharaan-sistem-agustus-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    category: 'Pengumuman',
    title: 'Jadwal Pemeliharaan Sistem Rutin Bulan Agustus',
    date: '28 Juli 2024',
    excerpt: 'Akan ada jadwal pemeliharaan sistem pada hari Sabtu, 3 Agustus 2024, yang mungkin akan berdampak pada beberapa layanan.',
    fullContent: `<p>Dalam rangka menjaga performa dan keamanan sistem, kami akan melakukan pemeliharaan rutin pada beberapa server utama. Kegiatan ini akan dilaksanakan pada:</p><ul class="list-disc list-inside pl-4 mt-4 space-y-2"><li><strong>Tanggal:</strong> Sabtu, 3 Agustus 2024</li><li><strong>Waktu:</strong> 22:00 - 02:00 WIB</li></ul><p>Selama periode tersebut, beberapa layanan seperti E-Learning (LMS) dan portal Helpdesk mungkin akan mengalami gangguan singkat. Layanan SIAKAD dan Email Kampus akan tetap berjalan normal. Mohon maaf atas ketidaknyamanannya.</p>`
  },
  {
    slug: 'peluncuran-aplikasi-presensi-mobile',
    imageUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop',
    category: 'Inovasi',
    title: 'Segera Hadir: Aplikasi Presensi Mobile untuk Mahasiswa',
    date: '25 Juli 2024',
    excerpt: 'SSDI sedang mengembangkan aplikasi mobile baru untuk mempermudah proses presensi perkuliahan secara digital.',
    fullContent: `<p>Sebagai bagian dari inisiatif Smart Campus, UPT SSDI sedang dalam tahap akhir pengembangan aplikasi presensi mobile. Aplikasi ini akan memungkinkan mahasiswa melakukan presensi perkuliahan langsung dari smartphone mereka menggunakan teknologi QR Code yang aman.</p><p>Fitur utama aplikasi ini antara lain:</p><ul class="list-disc list-inside pl-4 mt-4 space-y-2"><li>Presensi cepat dengan scan QR Code.</li><li>Rekapitulasi kehadiran per mata kuliah.</li><li>Notifikasi jadwal kuliah.</li></ul><p>Aplikasi ini dijadwalkan akan diuji coba pada semester ganjil mendatang. Informasi lebih lanjut mengenai cara penggunaan dan instalasi akan diumumkan segera.</p>`
  },
  {
    slug: 'tips-mengelola-penyimpanan-email',
    imageUrl: 'https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?q=80&w=1200&auto=format&fit=crop',
    category: 'Tips & Trik',
    title: 'Tips Efektif Mengelola Ruang Penyimpanan Email Kampus',
    date: '22 Juli 2024',
    excerpt: 'Kapasitas email Anda hampir penuh? Ikuti beberapa tips sederhana dari kami untuk mengelolanya secara efektif.',
    fullContent: `<p>Setiap akun email kampus memiliki kuota penyimpanan. Agar tidak cepat penuh dan mengganggu penerimaan email baru, berikut adalah beberapa tips yang bisa Anda terapkan:</p><ul class="list-disc list-inside pl-4 mt-4 space-y-2"><li><strong>Hapus Email Lama:</strong> Hapus secara berkala email yang sudah tidak relevan, terutama yang ada di folder "Sent" dan "Trash".</li><li><strong>Cari Lampiran Besar:</strong> Gunakan fitur pencarian di email Anda untuk menemukan email dengan lampiran berukuran besar, lalu unduh dan hapus jika tidak lagi diperlukan di server.</li><li><strong>Gunakan Google Drive:</strong> Untuk berbagi file besar, unggah file tersebut ke layanan penyimpanan awan seperti Google Drive (jika tersedia) atau Simpan UNUGHA, lalu bagikan tautannya melalui email, bukan sebagai lampiran.</li><li><strong>Arsipkan Email:</strong> Manfaatkan fitur arsip untuk menyimpan email penting tanpa harus menampilkannya di inbox utama.</li></ul><p>Dengan pengelolaan yang baik, akun email Anda akan lebih terorganisir dan terhindar dari masalah kapasitas penuh.</p>`
  },
  {
    slug: 'update-sistem-operasi-lab-komputer',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697302047?q=80&w=1200&auto=format&fit=crop',
    category: 'Akademik',
    title: 'Pembaruan Sistem Operasi di Laboratorium Komputer',
    date: '18 Juli 2024',
    excerpt: 'Seluruh komputer di laboratorium telah diperbarui dengan sistem operasi dan perangkat lunak terbaru untuk semester baru.',
    fullContent: `<p>Menyambut semester ganjil yang akan datang, tim SSDI telah menyelesaikan pembaruan massal pada seluruh unit komputer di laboratorium pusat. Pembaruan ini mencakup instalasi sistem operasi Windows 11 versi terbaru, paket Microsoft Office 2021, dan perangkat lunak pendukung perkuliahan lainnya seperti SPSS, Adobe Creative Suite, dan software pemrograman.</p><p>Pembaruan ini bertujuan untuk memastikan mahasiswa mendapatkan pengalaman belajar terbaik dengan perangkat lunak yang relevan dengan industri saat ini. Kami juga telah melakukan pembersihan dan pengecekan hardware untuk memastikan semua unit berfungsi secara optimal.</p>`
  },
  {
    slug: 'sosialisasi-penggunaan-lms-efektif',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
    category: 'Pelatihan',
    title: 'Sosialisasi Penggunaan E-Learning (LMS) untuk Dosen',
    date: '16 Juli 2024',
    excerpt: 'SSDI akan mengadakan sesi pelatihan bagi para dosen untuk memaksimalkan penggunaan platform E-Learning dalam perkuliahan.',
    fullContent: `<p>Untuk meningkatkan kualitas pembelajaran daring, UPT SSDI akan menyelenggarakan sesi sosialisasi dan pelatihan mengenai pemanfaatan fitur-fitur pada platform E-Learning (LMS) kita. Pelatihan ini ditujukan bagi seluruh dosen, terutama dosen baru.</p><p>Materi yang akan dibahas meliputi:</p><ul class="list-disc list-inside pl-4 mt-4 space-y-2"><li>Manajemen kelas dan materi ajar.</li><li>Pembuatan kuis dan tugas online.</li><li>Pemanfaatan forum diskusi.</li><li>Penilaian dan rekapitulasi nilai otomatis.</li></ul><p>Jadwal detail dan tautan pendaftaran akan dikirimkan melalui email resmi dalam waktu dekat. Partisipasi Bapak/Ibu dosen sangat kami harapkan.</p>`
  },
  {
    slug: 'kebijakan-baru-keamanan-password',
    imageUrl: 'https://images.unsplash.com/photo-1550643759-408239058656?q=80&w=1200&auto=format&fit=crop',
    category: 'Keamanan',
    title: 'Pemberlakuan Kebijakan Keamanan Password Baru',
    date: '12 Juli 2024',
    excerpt: 'Mulai 1 Agustus 2024, akan diberlakukan kebijakan baru mengenai kompleksitas password untuk seluruh akun di sistem UNUGHA.',
    fullContent: `<p>Demi meningkatkan keamanan data seluruh civitas akademika, UPT SSDI akan memberlakukan kebijakan standar password baru yang lebih kuat. Kebijakan ini akan berlaku efektif mulai 1 Agustus 2024 untuk semua akun yang terhubung dengan sistem Single Sign-On (SSO) UNUGHA, termasuk SIAKAD, Email, dan Wi-Fi.</p><p>Syarat password baru adalah sebagai berikut:</p><ul class="list-disc list-inside pl-4 mt-4 space-y-2"><li>Minimal 12 karakter.</li><li>Harus mengandung kombinasi huruf besar, huruf kecil, angka, dan simbol (misal: !@#$).</li><li>Tidak boleh mengandung kata yang mudah ditebak seperti "unugha" atau nama pengguna.</li></ul><p>Pengguna akan diminta untuk memperbarui password mereka saat login pertama kali setelah tanggal pemberlakuan. Terima kasih atas kerja samanya dalam menjaga keamanan akun kita bersama.</p>`
  },
  {
    slug: 'layanan-helpdesk-via-whatsapp',
    imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1200&auto=format&fit=crop',
    category: 'Layanan',
    title: 'Kini Hadir! Layanan Helpdesk Cepat via WhatsApp',
    date: '8 Juli 2024',
    excerpt: 'Untuk kemudahan dan kecepatan respons, layanan helpdesk SSDI kini dapat diakses langsung melalui WhatsApp.',
    fullContent: `<p>Kami memahami kebutuhan akan respons yang cepat untuk kendala teknis yang Anda hadapi. Oleh karena itu, UPT SSDI dengan gembira meluncurkan kanal layanan helpdesk baru melalui WhatsApp.</p><p>Anda dapat langsung memulai percakapan dengan tim support kami dengan mengirimkan pesan ke nomor resmi yang tertera di halaman kontak kami. Layanan ini dirancang untuk menangani pertanyaan umum dan permintaan bantuan tingkat pertama, seperti reset password, kendala koneksi Wi-Fi, atau pertanyaan seputar penggunaan sistem.</p><p>Layanan ini melengkapi portal helpdesk dan kunjungan langsung yang sudah ada. Kami berharap inovasi ini dapat semakin mempermudah Anda dalam mendapatkan dukungan teknis yang dibutuhkan.</p>`
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Bagaimana cara mendapatkan akun email kampus?',
    answer: 'Mahasiswa baru akan otomatis mendapatkan akun email setelah proses registrasi selesai. Dosen dan staf dapat mengajukan permohonan melalui portal layanan SSDI.',
  },
  {
    question: 'Saya lupa password akun SIAKAD, apa yang harus dilakukan?',
    answer: 'Anda dapat menggunakan fitur "Lupa Password" pada halaman login SIAKAD. Jika mengalami kendala, silakan hubungi helpdesk kami melalui WhatsApp atau kunjungi kantor kami.',
  },
  {
    question: 'Bagaimana cara terhubung ke Wi-Fi kampus?',
    answer: 'Pilih SSID "UNUGHA-WiFi", kemudian masukan username dan password yang sama dengan akun SIAKAD Anda. Pastikan perangkat Anda mendukung WPA2-Enterprise.',
  },
  {
    question: 'Apakah SSDI menyediakan layanan perbaikan laptop pribadi?',
    answer: 'SSDI menyediakan layanan konsultasi dan diagnosis masalah perangkat keras/lunak. Untuk perbaikan komponen, kami akan merekomendasikan layanan pihak ketiga yang terpercaya.',
  },
];
