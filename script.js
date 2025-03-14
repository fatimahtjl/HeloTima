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