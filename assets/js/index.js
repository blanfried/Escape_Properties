function createSlider(id) {
  const sliderContainer = document.querySelector(`#${id} .slider-container`);
  const sliderWrapper = document.querySelector(`#${id} .slider-wrapper`);
  const sliderItems = document.querySelectorAll(`#${id} .slider-item`);
  const leftArrow = document.querySelector(`#${id} .slider-arrow.left`);
  const rightArrow = document.querySelector(`#${id} .slider-arrow.right`);
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
}

createSlider('slider19');
createSlider('slider20');
createSlider('slider21');
createSlider('slider33');
createSlider('slider02');
createSlider('slider13');
createSlider('slider14');
createSlider('slider28');
createSlider('slider30');
createSlider('slider29');
createSlider('slider32');
// create more sliders as needed


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


// Get references to the HTML elements for Beach
const beachButton = document.querySelector('.beach-button');
const beachContent = document.querySelector('.beach-stuff');
const beachSlider = document.querySelector('.slider-container'); // Assuming the slider has a common class

// Add click event listener for Beach
beachButton.addEventListener('click', () => toggleContentAndSlider(beachContent, beachSlider));

// Function to toggle the visibility of content and slider
function toggleContentAndSlider(contentElement, sliderElement) {
   if (contentElement.style.display === 'none' || contentElement.style.display === '') {
      contentElement.style.display = 'block'; // Show the content
      sliderElement.style.display = 'block'; // Show the slider
   } else {
      contentElement.style.display = 'none'; // Hide the content
      sliderElement.style.display = 'none'; // Hide the slider
   }
}

// Get references to the HTML elements for Desert
const desertButton = document.querySelector('.desert-button');
const desertContent = document.querySelector('.desert-content');

// Add click event listener for Desert
desertButton.addEventListener('click', () => toggleContent(desertContent));

// Get references to the HTML elements for Farm
const farmButton = document.querySelector('.farm-button');
const farmContent = document.querySelector('.farm-content');

// Add click event listener for Farm
farmButton.addEventListener('click', () => toggleContent(farmContent));

// Function to toggle the visibility of content
function toggleContent(contentElement) {
   if (contentElement.style.display === 'none' || contentElement.style.display === '') {
      contentElement.style.display = 'block'; // Show the content
   } else {
      contentElement.style.display = 'none'; // Hide the content
   }
}
