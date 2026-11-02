document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("zoomedImg");
    const closeBtn = document.querySelector(".close-btn");
    
    const images = document.querySelectorAll(".zoomable");

    images.forEach(img => {
        img.addEventListener("click", function() {
            modalImg.src = this.src;
            modal.classList.add("show");
        });
    });

    const closeModal = () => {
        modal.classList.remove("show");
        // Beri jeda sebentar sebelum display: none agar animasi fade out terlihat
        setTimeout(() => {
            if (!modal.classList.contains("show")) {
                modalImg.src = "";
            }
        }, 300);
    };

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});