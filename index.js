var swiper = new Swiper(".slider-container", {
   autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });


  var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
      loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
     navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });



  // gallery section
  const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });


// gallery lightbox
 function openLightbox(event, element) {
  event.preventDefault();
  document.body.classList.add('lightbox-open');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  lightboxImg.src = element.href;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.body.classList.remove('lightbox-open');
  document.getElementById('lightbox').style.display = 'none';
}

//
//
//testimonial section
//
//

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  const cardCount = cards.length;
  const cardWidth = cards[0].offsetWidth;
  let currentIndex = 0;

  // Initialize pagination buttons
  const pagination = document.querySelector('.pagination');
  for (let i = 0; i < cardCount; i++) {
    const button = document.createElement('button');
    //  button.textContent = i + 1; 
    button.addEventListener('click', function () {
      goToCard(i);
    });
    pagination.appendChild(button);
  }

  const paginationButtons = document.querySelectorAll('.pagination button');

  // Handle drag and touch events
  let startX = 0;

  carousel.addEventListener('mousedown', handleDragStart);
  carousel.addEventListener('touchstart', handleDragStart);

  carousel.addEventListener('mouseup', handleDragEnd);
  carousel.addEventListener('touchend', handleDragEnd);

  // Initial setup
  updateCarousel();

  function handleDragStart(e) {
    startX = e.pageX || e.touches[0].pageX;
  }

  function handleDragEnd(e) {
    const endX = e.pageX || e.changedTouches[0].pageX;
    const diffX = endX - startX;

    if (diffX > 50) {
      goToCard(currentIndex - 1);
    } else if (diffX < -50) {
      goToCard(currentIndex + 1);
    }
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    cards.forEach(card => card.style.opacity = 0.5);
    cards[currentIndex].style.opacity = 1;
    paginationButtons.forEach(button => button.classList.remove('active'));
    paginationButtons[currentIndex].classList.add('active');
  }

  function goToCard(index) {
    if (index < 0) {
      currentIndex = cardCount - 1;
    } else if (index >= cardCount) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    updateCarousel();
  }
});


// dropdown select option

function toggleOptions() {
  var options = document.getElementById("options");
  options.style.display = options.style.display === "block" ? "none" : "block";
}

function selectOption(option, value) {
  var selectedText = option.innerText;
  var styledSelect = document.querySelector(".select-styled");
  styledSelect.innerText = selectedText;
  
  // Update the hidden input with the selected value
  document.getElementById("selectedValue").value = value;
  
  toggleOptions();
}

// Close options when clicking outside the custom select
document.addEventListener("click", function(event) {
  var customSelect = document.querySelector(".custom-select");
  if (!customSelect.contains(event.target)) {
    var options = document.getElementById("options");
    options.style.display = "none";
  }
});