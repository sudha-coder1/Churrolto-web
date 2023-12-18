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
          // Reset to the beginning if at the end
          counter = 0;
          carouselSlide.style.transform = `translateX(0)`;
      }
  }
  
  // Set interval for automatic transition every 3 seconds (adjust as needed)
  const intervalId = setInterval(nextSlide, 3000);
  
  // Optionally, stop the automatic transition on mouseover
  carouselSlide.addEventListener('mouseover', () => {
      clearInterval(intervalId);
  });
  
  // Optionally, resume the automatic transition on mouseout
  carouselSlide.addEventListener('mouseout', () => {
      intervalId = setInterval(nextSlide, 3000);
  });
  