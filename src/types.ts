export interface HeroSlide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string; // 'Minimalis' | 'Tropis' | 'Vertical Garden' | 'Kolam Hias' | 'Hardscape'
  imageUrl: string;
  sizeClass?: string; // for masonry variation if needed
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
  avatarUrl: string;
}

export interface WorkflowItem {
  step: number;
  title: string;
  description: string;
}

export interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    subtitle: "RUMAH INDAH ALAMI",
    title: "Kreasi Landscape Taman Idaman",
    description: "Wujudkan suasana asri nan menyejukkan di hunian Anda bersama tim perancang profesional Trio Taman Sehati.",
    imageUrl: "https://dpa79oyyyfxcd.cloudfront.net/laravel/design/20b70250-67fa-43ee-a247-41a22a23dd0f.png"
  },
  {
    id: 2,
    subtitle: "KOLAM KOI PREMIUM",
    title: "Kolam Hias Alami & Gemercik Air",
    description: "Redam stres dengan keindahan gerakan koi dan suara gemercik air kolam hias batu alam yang artistik.",
    imageUrl: "https://platinumadisentosa.com/wp-content/uploads/2025/02/Ternyata-Begini-Cara-Membuat-Kolam-Ikan-Ideal-dan-Nyaman-1536x864.jpg"
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "minimalis",
    title: "Taman Minimalis",
    iconName: "Trees",
    description: "Desain taman modern yang memanfaatkan lahan kecil dengan efisien, menghadirkan estetika bersih, ringkas, dan minim perawatan.",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518442/taman_minimalis2_m9anif.jpg"
  },
  {
    id: "tropis",
    title: "Taman Tropis",
    iconName: "Palmtree",
    description: "Menghadirkan rimbunnya hutan tropis ke pekarangan rumah Anda dengan aneka tanaman berdaun lebar eksotis dan atmosfer sejuk.",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518439/taman_tropis1_cc8yeg.jpg"
  },
  {
    id: "kering",
    title: "Taman Kering",
    iconName: "Mountain",
    description: "Gaya taman ala Jepang (Zen Garden) menggunakan batuan premium, kerikil hias, dan tanaman tahan panas yang sangat estetik dan hampir tanpa siram.",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518452/taman_kering_twdnj8.jpg"
  },
  {
    id: "vertical",
    title: "Vertical Garden",
    iconName: "Layers",
    description: "Solusi penghijauan modern untuk dinding rumah atau gedung dengan memanfaatkan keterbatasan lahan secara vertikal agar tetap rindang.",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518429/vertical_garden_lftjsp.jpg"
  },
  {
    id: "kolam",
    title: "Kolam Hias & Air Mancur",
    iconName: "Droplet",
    description: "Pembuatan kolam koi artistik dengan filter air modern, air terjun buatan, serta relief tebing batu alam untuk melengkapi kesempurnaan taman Anda.",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518460/kolam_hias_ca6nfj.jpg"
  },
  {
    id: "hardscape",
    title: "Gazebo & Hardscape",
    iconName: "Hammer",
    description: "Instalasi gazebo kayu/bambu berkualitas, jalan setapak (stepping stones), lantai carport bermotif, pagar kayu, serta pengerjaan sipil taman lainnya.",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518464/hardscape_agt8eu.jpg"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Taman Minimalis Depan Teras Rumah",
    category: "Minimalis",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518442/taman_minimalis2_m9anif.jpg"
  },
  {
    id: 2,
    title: "Taman Minimalis Belakang Rumah Modern",
    category: "Minimalis",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518447/taman_minimalis1_bzcvo2.jpg"
  },
  {
    id: 3,
    title: "Taman Tropis Modern Asri & Rimbun",
    category: "Tropis",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518439/taman_tropis1_cc8yeg.jpg"
  },
  {
    id: 4,
    title: "Taman Kering Jepang Elegance Zen",
    category: "Minimalis", // fallback / also fits Minimalis
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518452/taman_kering_twdnj8.jpg"
  },
  {
    id: 5,
    title: "Vertical Garden Dinding Pembatas Rumah",
    category: "Vertical Garden",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518429/vertical_garden_lftjsp.jpg"
  },
  {
    id: 6,
    title: "Desain Kolam Koi Eksklusif & Filter Modern",
    category: "Kolam Hias",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518460/kolam_hias_ca6nfj.jpg"
  },
  {
    id: 7,
    title: "Gazebo Dan Hardscape Setapak Batu Alam",
    category: "Hardscape",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518464/hardscape_agt8eu.jpg"
  },
  {
    id: 8,
    title: "Desain Kolam Hias Luar Rumah Koi Sehat",
    category: "Kolam Hias",
    imageUrl: "https://platinumadisentosa.com/wp-content/uploads/2025/02/Ternyata-Begini-Cara-Membuat-Kolam-Ikan-Ideal-dan-Nyaman-1536x864.jpg"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "bpk. rudi hermawan",
    location: "Sektor 7, Bintaro Jaya",
    review: "Trio Taman Sehati merancang taman minimalis depan rumah kami dengan sangat profesional. Hasil pengerjaannya sangat rapi dan pengerjaan tepat waktu sesuai dengan rancangan 3D yang disepakati.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ibu Maya Kartika",
    location: "Sentul Alaya, Bogor",
    review: "Sangat puas dengan vertical garden bikinan tim Sehati! Rumah jadi terasa sangat dingin dan sejuk meskipun siang hari terik. Perawatannya juga dibantu diajarkan sampai paham.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "bpk. andi prayoga",
    location: "Grand Depok City, Depok",
    review: "Kolam hias koi buatan Trio Taman Sehati luar biasa indah. Suara gemercik air terjunnya bikin rileks sepulang kerja. Kualitas material batu alamnya premium serta rapi luar biasa.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

export const WORKFLOW_STEPS: WorkflowItem[] = [
  {
    step: 1,
    title: "Konsultasi & Kebutuhan",
    description: "Diskusikan taman impian Anda secara gratis langsung dari WhatsApp. Kami akan mendengarkan kebutuhan, jenis tanaman favorit, dan preferensi desain Anda."
  },
  {
    step: 2,
    title: "Survey Lokasi & Estimasi",
    description: "Tim ahli kami mendatangi lokasi Anda untuk mengukur lahan, mengecek pencahayaan matahari, kondisi tanah, serta memberikan estimasi rancangan anggaran."
  },
  {
    step: 3,
    title: "Desain Detil & Rincian",
    description: "Kami membuat gambaran desain landscape (baik coretan sketsa maupun modeling) beserta rincian material batu, kayu, dan daftar nama vegetasi secara transparan."
  },
  {
    step: 4,
    title: "Pengerjaan Profesional",
    description: "Proses tanam & penataan hardscape dikerjakan oleh tukang taman profesional berpengalaman cepat, rapi, dan menggunakan tanah gembur subur kualitas nomor satu."
  },
  {
    step: 5,
    title: "Finishing & Perawatan",
    description: "Pembersihan menyeluruh, pemberian pupuk, instruksi siram berkala, serta garansi tumbuh tanaman untuk memastikan taman Anda beradaptasi sempurna."
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 1,
    title: "5 Cara Merawat Taman Minimalis Agar Selalu Segar dan Rapi",
    excerpt: "Memiliki taman minimalis membutuhkan tips perawatan khusus. Simak rahasia memangkas ranting, memilih pupuk, dan menjaga tanah tetap subur di lahan terbatas.",
    date: "02 Juni 2026",
    readTime: "4 mnt baca",
    category: "Perawatan Taman",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518442/taman_minimalis2_m9anif.jpg"
  },
  {
    id: 2,
    title: "Panduan Memilih Kolam Hias yang Tepat untuk Pekarangan Sempit",
    excerpt: "Apakah kolam minimalis, kolam relief tebing batu, atau kolam kaca modern yang cocok untuk Anda? Temukan panduan desain dan sistem filtrasi air koi terbaik.",
    date: "28 Mei 2026",
    readTime: "5 mnt baca",
    category: "Kolam Hias",
    imageUrl: "https://platinumadisentosa.com/wp-content/uploads/2025/02/Ternyata-Begini-Cara-Membuat-Kolam-Ikan-Ideal-dan-Nyaman-1536x864.jpg"
  },
  {
    id: 3,
    title: "Mengenal Vertical Garden: Solusi Rumah Asri Tanpa Lahan Luas",
    excerpt: "Pelajari cara kerja sistem irigasi otomatis, pemilihan jenis tanaman gantung tahan panas, dan teknik penempelan rangka vertical garden terbaik untuk rumah modern.",
    date: "15 Mei 2026",
    readTime: "6 mnt baca",
    category: "Vertical Garden",
    imageUrl: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518429/vertical_garden_lftjsp.jpg"
  }
];

export const CONTACT_INFO = {
  name: "Trio Taman Sehati",
  whatsapp: "+62 823-1230-7261",
  whatsappFormatted: "+6282312307261",
  address: "Villa Citayam Blok D2 No.11, RT.005/RW.005, Kel. Susukan, Kec. Bojong Gede, Kota Jawa Barat, Kab. Bogor",
  coverage: "Jabodetabek & Seluruh Jawa Barat",
  instagram: "triotamansehati"
};
