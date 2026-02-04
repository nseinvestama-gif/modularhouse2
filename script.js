// Data Rumah Modular Modular House
const products = [
    {
        id: 1,
        name: "Modular Standart (1 Unit)",
        category: "standart",
        price: "Rp 15.000.000",
        area: "18", // 3x6
        rooms: "1 Ruang Serbaguna",
        image: "images/modular-standart.jpeg",
        description: "Unit modular standar ukuran 3x6 meter. Cocok untuk kantor lapangan, mess karyawan, atau booth usaha. Dilengkapi instalasi listrik lengkap dan insulasi panas.",
        specs: [
            "Ukuran: 3 x 6 meter",
            "Dinding: Sandwich Rockwool 5cm (Tahan Api & Suara)",
            "Atap: Galvalum dengan insulasi Glasswool",
            "Lantai: Fiber semen + Vinyl/PVC",
            "Termasuk: 1 Pintu, 2 Jendela, Instalasi Listrik (2 Lampu, 1 Saklar, 3 Stop Kontak, MCB)"
        ]
    },
    {
        id: 2,
        name: "Paket 2 Unit (6x6)",
        category: "custom",
        price: "Rp 30.000.000",
        area: "36",
        rooms: "2-3 Ruang",
        image: "images/paket-2-unit.jpeg",
        description: "Gabungan 2 unit modular membentuk ruang seluas 36m². Ideal untuk rumah tinggal kecil atau kantor yang lebih luas. Tata letak fleksibel.",
        specs: [
            "Ukuran Total: 6 x 6 meter",
            "Gabungan 2 unit standar",
            "Fleksibilitas sekat ruangan",
            "Semua spesifikasi standar termasuk"
        ]
    },
    {
        id: 3,
        name: "Paket 3 Unit (6x12)",
        category: "custom",
        price: "Rp 45.000.000",
        area: "54", 
        rooms: "3-4 Ruang",
        image: "images/paket-3-unit.jpeg",
        description: "Rumah modular luas dengan konfigurasi 3 unit. Bisa disusun memanjang atau melebar (misal L-shape). Solusi hunian instan untuk keluarga.",
        specs: [
            "Ukuran Variabel (Total ~54m²)",
            "Konfigurasi 3 unit modular",
            "Cocok untuk hunian keluarga",
            "Instalasi cepat tanpa IMB"
        ]
    },
    {
        id: 4,
        name: "Paket 10 Unit (Mess/Proyek)",
        category: "project",
        price: "Rp 150.000.000",
        area: "180",
        rooms: "Multi-room",
        image: "images/paket-10-unit.jpg",
        description: "Solusi untuk mess karyawan atau barak proyek. Pembelian paket 10 unit dengan harga spesial.",
        specs: [
            "Total 10 Unit Standar",
            "Ideal untuk asrama/kantor proyek",
            "Bisa disusun bertingkat (perlu struktur tambahan)",
            "Harga spesial bulk order"
        ]
    },
    {
        id: 5,
        name: "Kamar Mandi Modular (Full Set)",
        category: "addon",
        price: "Rp 5.000.000",
        area: "2.25", 
        rooms: "Toilet + Shower",
        image: "images/kamar-mandi-modular.png",
        description: "Unit kamar mandi siap pakai. Praktis dan higienis. Tinggal sambung ke saluran air dan septic tank.",
        specs: [
            "Termasuk: Kloset Duduk, Shower, Wastafel",
            "Pintu PVC tahan air",
            "Instalasi pipa air dalam dinding",
            "Tidak termasuk septic tank"
        ]
    },
    {
        id: 6,
        name: "Add-on: Pintu Kaca 3m",
        category: "addon",
        price: "Rp 15.000.000",
        area: "-",
        rooms: "-",
        image: "images/addon-pintu-kaca.webp",
        description: "Upgrade tampilan modular Anda dengan pintu kaca lebar 3 meter. Memberikan pencahayaan alami maksimal dan kesan mewah.",
        specs: [
            "Lebar: 3 meter",
            "Material: Aluminium + Kaca Tempered",
            "Sistem geser (sliding) atau lipat"
        ]
    },
    {
        id: 7,
        name: "Tangga Baja (Akses Lt.2)",
        category: "addon",
        price: "Rp 5.000.000",
        area: "-",
        rooms: "-",
        image: "images/tangga-baja.jpeg",
        description: "Tangga baja kokoh untuk akses ke lantai 2 unit modular bertingkat. Dilengkapi railing pengaman.",
        specs: [
            "Material: Baja Hollow Galvanis",
            "Finishing: Cat Anti Karat",
            "Tinggi: Disesuaikan standar modul (3m)",
            "Termasuk railing dan bordes"
        ]
    },
    {
        id: 8,
        name: "Teras Baja (3x3m)",
        category: "addon",
        price: "Rp 1.000.000",
        area: "9",
        rooms: "Outdoor",
        image: "images/teras-baja.jpeg",
        description: "Teras tambahan struktur baja ringan untuk area santai di depan unit modular.",
        specs: [
            "Ukuran: 3 x 3 meter",
            "Rangka: Baja Ringan / Hollow",
            "Lantai: Plat Bordes / Kayu WPC (Opsional)",
            "Atap: Spandek / Polycarbonate (Opsional)"
        ]
    }
];

// DOM Elements
const grid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalBackdrop = document.getElementById('modal-backdrop');

// Render Products
function renderProducts(filter = 'all') {
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col h-full';
        card.innerHTML = `
            <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src='https://via.placeholder.com/800x600?text=Image+Not+Found'">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                    ${product.category}
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">${product.name}</h3>
                </div>
                <p class="text-accent font-bold text-lg mb-4">${product.price}</p>
                <div class="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        ${product.area} m²
                    </span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        ${product.rooms}
                    </span>
                </div>
                <button class="w-full mt-auto border border-primary text-primary font-semibold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    Lihat Spesifikasi
                </button>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(product));
        grid.appendChild(card);
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => {
            b.classList.remove('bg-primary', 'text-white');
            b.classList.add('bg-white', 'text-gray-600');
        });
        
        // Add active class to clicked
        btn.classList.remove('bg-white', 'text-gray-600');
        btn.classList.add('bg-primary', 'text-white');
        
        const filterValue = btn.getAttribute('data-filter');
        renderProducts(filterValue);
    });
});

// Modal Logic
function openModal(product) {
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-price').innerText = product.price;
    document.getElementById('modal-desc').innerText = product.description;
    document.getElementById('modal-area').innerText = `${product.area} m²`;
    document.getElementById('modal-rooms').innerText = product.rooms;
    
    // Specs
    const specsList = document.getElementById('modal-specs');
    if (specsList) {
        specsList.innerHTML = '';
        if (product.specs) {
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.className = 'flex items-center text-gray-600';
                li.innerHTML = `<span class="w-2 h-2 bg-accent rounded-full mr-2"></span>${spec}`;
                specsList.appendChild(li);
            });
        }
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', hideModal);
modalBackdrop.addEventListener('click', hideModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        hideModal();
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('bg-opacity-0', 'bg-white');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Initial Render
renderProducts();