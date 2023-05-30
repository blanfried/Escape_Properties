const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const leftArrow = document.querySelector('.slider-arrow.left');
const rightArrow = document.querySelector('.slider-arrow.right');
let currentPosition = 0;

function adjustContainerSize() {
  const currentImage = sliderItems[currentPosition].querySelector('img');
  sliderContainer.style.width = `${currentImage.offsetWidth}px`;
}

function showCurrentSlide() {
  sliderItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentPosition);
  });
}

function slideLeft() {
  currentPosition = (currentPosition - 1 + sliderItems.length) % sliderItems.length;
  showCurrentSlide();
  adjustContainerSize();
}

function slideRight() {
  currentPosition = (currentPosition + 1) % sliderItems.length;
  showCurrentSlide();
  adjustContainerSize();
}

leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);

window.addEventListener('resize', adjustContainerSize);
window.addEventListener('load', adjustContainerSize);

    // JavaScript to control dropdown menu behavior
    document.addEventListener("DOMContentLoaded", function(event) {
      var dropdown = document.querySelector(".dropdown");
      var dropdownContent = document.querySelector(".dropdown-content");

      dropdown.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
      });

      window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropbtn")) {
          if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
          }
        }
      });
    });