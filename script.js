
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    // Fungsi untuk menampilkan atau menyembunyikan navbar
    menuToggle.addEventListener("click", function (event) {
        navbar.classList.toggle("active");
        event.stopPropagation(); // Mencegah event klik dari menyebar ke document
    });

    // Fungsi untuk menyembunyikan navbar saat klik di luar area menu
    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutTitle = document.querySelector('.about-title');

    function checkScroll() {
        const rect = aboutTitle.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
            aboutTitle.classList.add('show');
        } else {
            aboutTitle.classList.remove('show'); // Reset animasi saat keluar layar
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Cek saat pertama kali halaman dimuat
});


document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah reload halaman

            const targetId = this.getAttribute('href'); // Ambil href misalnya #about
            const targetSection = document.querySelector(targetId); // Temukan section yang sesuai

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 100; // Sesuaikan dengan tinggi navbar

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                // Hapus class 'show' supaya animasi bisa diputar ulang saat muncul kembali
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".about-container, .about-img, .about-content").forEach((el) => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Hapus class 'active' dari semua link
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Tambahkan class 'active' ke link yang diklik
            this.classList.add("active");
        });
    });
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});




document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in, .skills-title h1, .skills-container, .skills-left, .skills-right, .divider');

    function checkScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                el.classList.add('show'); // Tambah class saat elemen masuk viewport
            } else {
                el.classList.remove('show'); // Hapus class saat elemen keluar dari viewport
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat pertama kali load
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsTitle = document.querySelector('.projects-title');

    function checkScroll() {
        const rect = projectsTitle.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
            projectsTitle.classList.add('show');
        } else {
            projectsTitle.classList.remove('show'); // Reset animasi saat keluar layar
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Cek saat pertama kali halaman dimuat
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');  // Supaya animasi bisa muncul lagi saat di-scroll ulang
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Cek saat pertama kali load
});



document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card-big");

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: "0px",
        threshold: 0.2 // Elemen terlihat 20% baru akan ditrigger
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card);
    });
});

 
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah refresh halaman
    
    // Tampilkan modal
    document.getElementById("thank-you-modal").style.display = "flex";
    
    // Reset form setelah submit
    this.reset();
});

function closeModal() {
    document.getElementById("thank-you-modal").style.display = "none";
}
 
