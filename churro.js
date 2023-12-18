function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0)";
    document.getElementById("mySidenav").style.overflowY = "auto";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-350px)";
    document.getElementById("mySidenav").style.overflowY = "hidden";


  }

    
    
  const carouselSlide = document.querySelector('.carousel-slide');
  let counter = 0;
  const cardWidth = carouselSlide.firstElementChild.clientWidth;
  const totalCards = carouselSlide.children.length;
  
  function nextSlide() {
      if (counter < (totalCards - 6)) {
          counter++;
          carouselSlide.style.transform = `translateX(${-counter * cardWidth}px)`;
      } else {
          counter = 0;
          carouselSlide.style.transform = `translateX(0)`;
      }
  }
  
  const intervalId = setInterval(nextSlide, 3000);
  
//   carouselSlide.addEventListener('mouseover', () => {
//       clearInterval(intervalId);
//   });
  
//   carouselSlide.addEventListener('mouseout', () => {
//       intervalId = setInterval(nextSlide, 3000);
//   });
  