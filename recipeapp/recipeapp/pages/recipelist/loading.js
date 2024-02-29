  // Slider JS
  const carousel = document.querySelector(".carousel");
  firstImg = carousel.querySelectorAll("img")[0];
  arrowIcons = document.querySelectorAll(".wrapper i");

  let isDragStart = false,prevPageX,prevScrollLeft;
 
 
  const showHideIcons = () => {
      let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
      arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
  }


  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 180;
      carousel.scrollLeft += icon.id == "leftbtn" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60);
   });
  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("touchend", dragStop);




  



  // 3d Image Slider JS

  const galleryContainer = document.querySelector('.gallery-container');
  const galleryControlsContainer = document.querySelector('.gallery-controls');
  const galleryControls = ['previous', 'next'];
  const galleryItems = document.querySelectorAll('.gallery-item');

  class Carousel {

    constructor(container, items, controls){
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];

    }

    updateGallery(){
      this.carouselArray.forEach(el => {
        el.classList.remove('gallery-item-1');
        el.classList.remove('gallery-item-2');
        el.classList.remove('gallery-item-3');
        el.classList.remove('gallery-item-4');
        el.classList.remove('gallery-item-5');
      });

      this.carouselArray.slice(0, 5).forEach((el , i) => {
        el.classList.add(`gallery-item-${i+1}`);

      });

    }

      setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
          this.carouselArray.unshift(this.carouselArray.pop());
        }else{
          this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();

    }

    setControls(){
      this.carouselControls.forEach(control => {
        galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
        document.querySelector(`.gallery-controls-${control}`).innerText = control;
      });
    }
      
    useControls(){
      const triggers = [...galleryControlsContainer.childNodes];
      triggers.forEach(control => {
        control.addEventListener('click', e => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });
    }

  }

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();








// Loading Animation JS 

function appearP2() {
  var Loading = document.querySelector('.Loading');
  var Loading2 = document.querySelector('.Loading2');
  var Loading3 = document.querySelector('.Loading3');
  var Homepage = document.querySelector('.Homepage');
  var Mainpage = document.querySelector('.Mainpage');

  // Hide Mainpage immediately
  Mainpage.style.display = 'none';

  // Add a class to trigger the animation
  Loading.style.left = "0";
  Loading2.style.left = "0";
  Loading3.style.left = "0";

  // After 3000 ms (3 seconds), execute the following code
  setTimeout(function () {
      // Reset positions of loading elements
      Loading.style.left = "-100%";
      Loading2.style.left = "-100%";
      Loading3.style.left = "-100%";

      // Show Mainpage when the transition to Loading3 is complete
      Mainpage.style.display = 'block';
  }, 3000);
}

function appearP1() {
  var Loading = document.querySelector('.Loading');
  var Loading2 = document.querySelector('.Loading2');
  var Loading3 = document.querySelector('.Loading3');
  var Homepage = document.querySelector('.Homepage');
  var Mainpage = document.querySelector('.Mainpage');

  // Hide Mainpage immediately
  Mainpage.style.display = 'none';

  // Add a class to trigger the animation
  Loading.style.left = "0";
  Loading2.style.left = "0";
  Loading3.style.left = "0";

  // After 3000 ms (3 seconds), execute the following code
  setTimeout(function () {
      // Reset positions of loading elements
      Loading.style.left = "-100%";
      Loading2.style.left = "-100%";
      Loading3.style.left = "-100%";

      // Show Mainpage when the transition to Loading3 is complete
      Homepage.style.display = 'block';
  }, 3000);
}
