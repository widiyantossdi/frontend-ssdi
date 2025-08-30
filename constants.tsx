
import React from 'react';
import { Service, NewsArticle, FaqItem } from './types';

const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0" />
    </svg>
);

const AcademicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const ELearningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7" />
    </svg>
);

const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
    category: 'Pembaruan Sistem',
    title: 'Peningkatan Server SIAKAD untuk Kinerja Lebih Cepat',
    date: '15 Juli 2024',
    excerpt: 'Kami telah berhasil melakukan upgrade server Sistem Informasi Akademik (SIAKAD) untuk meningkatkan kecepatan akses dan stabilitas.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
    category: 'Keamanan',
    title: 'Waspada Phishing: Lindungi Akun Email Kampus Anda',
    date: '10 Juli 2024',
    excerpt: 'SSDI mengimbau seluruh civitas akademika untuk berhati-hati terhadap upaya phishing yang mengatasnamakan universitas.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
    category: 'Infrastruktur',
    title: 'Perluasan Jangkauan Wi-Fi di Area Gedung Baru',
    date: '5 Juli 2024',
    excerpt: 'Jaringan Wi-Fi kampus kini telah tersedia di seluruh area gedung perkuliahan yang baru diresmikan.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Bagaimana cara mendapatkan akun email kampus?',
    answer: 'Mahasiswa baru akan otomatis mendapatkan akun email setelah proses registrasi selesai. Dosen dan staf dapat mengajukan permohonan melalui portal layanan SSDI.',
  },
  {
    question: 'Saya lupa password akun SIAKAD, apa yang harus dilakukan?',
    answer: 'Anda dapat menggunakan fitur "Lupa Password" pada halaman login SIAKAD. Jika mengalami kendala, silakan kunjungi helpdesk kami di Gedung Rektorat lantai 2.',
  },
  {
    question: 'Bagaimana cara terhubung ke Wi-Fi kampus?',
    answer: 'Pilih SSID "UnivCyberjaya-WiFi", kemudian masukan username dan password yang sama dengan akun SIAKAD Anda. Pastikan perangkat Anda mendukung WPA2-Enterprise.',
  },
  {
    question: 'Apakah SSDI menyediakan layanan perbaikan laptop pribadi?',
    answer: 'SSDI menyediakan layanan konsultasi dan diagnosis masalah perangkat keras/lunak. Untuk perbaikan komponen, kami akan merekomendasikan layanan pihak ketiga yang terpercaya.',
  },
];
