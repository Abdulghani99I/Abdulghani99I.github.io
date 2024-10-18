document.addEventListener("click", handleOpen);

let lightbox = document.querySelector(".lightbox");
let closeButton = document.querySelector(".lightbox .close");
let moveNext = document.querySelector(".lightbox .next");
let movePrev = document.querySelector(".lightbox .prev");
let CurruntImg = null;
console.log(closeButton);

lightbox.addEventListener("click", CloseFromLightbox);
closeButton.addEventListener("click", closeLightbox);
moveNext.addEventListener("click", nextImage);
movePrev.addEventListener("click", prevImage);

function OpenImage() {
  document.getElementById("lightbox-image").src = CurruntImg.src;
  document.getElementById("lightbox").style.display = "flex";
}

function handleOpen(e) {
  if (e.target.parentNode.classList.contains("images-container")) {
    CurruntImg = e.target;
    OpenImage();
  }
}

function CloseFromLightbox(e) {
  if (e.target.classList.contains("lightbox")) {
    closeLightbox();
  }
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  CurruntImg = null;
}

function nextImage() {
  if (
    CurruntImg.nextElementSibling != null &&
    CurruntImg.nextElementSibling.tagName === "IMG"
  ) {
    CurruntImg = CurruntImg.nextElementSibling;
    OpenImage();
  }
}
function prevImage() {
  if (
    CurruntImg.previousElementSibling != null &&
    CurruntImg.previousElementSibling.tagName === "IMG"
  ) {
    CurruntImg = CurruntImg.previousElementSibling;
    OpenImage();
  }
}


 // جلب الزر
 var backToTopBtn = document.getElementById("backToTopBtn");

 // إظهار الزر عند النزول 20 بكسل للأسفل
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         backToTopBtn.style.display = "block";
     } else {
         backToTopBtn.style.display = "none";
     }
 }

 // عند الضغط على الزر، الانتقال إلى أعلى الصفحة
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }

 