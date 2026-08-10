// 1. EFEK TRANSISI SCROLL (REVEAL ANIMATION)
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Trigger sekali saat halaman pertama kali di-load
revealOnScroll();


// 2. LIGHTBOX / POPUP FOTO SAAT GAMBAR DIKLIK
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

// Tutup modal jika pengguna mengklik area luar gambar
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}