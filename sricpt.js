function nextPage() {
  alert("Halaman 2 sedang disiapkan! 🌙");
  // nanti bisa diarahkan ke page2.html misalnya:
  // window.location.href = "page2.html";
}// 🌟 Efek bintang biru muncul di halaman 3
if (window.location.pathname.includes("page3.html")) {
  document.addEventListener("DOMContentLoaded", createStars);
}

function createStars() {
  const starContainer = document.getElementById("star-container");
  const numStars = 60; // jumlah bintang

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 4 + 2; // ukuran acak
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starContainer.appendChild(star);
  }
}