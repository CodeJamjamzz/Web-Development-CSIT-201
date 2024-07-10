// Set the date we're counting down
// What's the date of the event? When does the summer starts? or When does school ends?
const countdown_date = new Date("June 1, 2024 00:00:00").getTime();

// variables
const countdown_days = document.getElementById("days");
const countdown_hours = document.getElementById("hours");
const countdown_minutes = document.getElementById("minutes");
const countdown_seconds = document.getElementById("seconds");

// Update the countdown for every 1 second
let x = setInterval(function () {
    // current date and time
    let date_today = new Date().getTime();

    // Compute the number of days left between current date to the countdown date
    let days_left = countdown_date - date_today;

    // several mathematical operations
    // Calculate individually how many days, hours, minutes, and seconds left
    let days = Math.floor(days_left / (1000 * 60 * 60 * 24));
    let hours = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((days_left % (1000 * 60)) / 1000);

    countdown_days.innerHTML = days;
    countdown_hours.innerHTML = hours;
    countdown_minutes.innerHTML = minutes;
    countdown_seconds.innerHTML = seconds;

    // don't forget to add a condition or else it will keep on looping and output negative values
    if (days_left < 0) {
        clearInterval(x);
        // remove them 
        countdown_days.innerHTML = "00";
        countdown_hours.innerHTML = "00";
        countdown_minutes.innerHTML = "00";
        countdown_seconds.innerHTML = "00";
    }
}, 1000);

console.log("index.js has successfully connected to index.html");

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("Name").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".message").value = "";

    // document.getElementById('id01').style.display='block';
});

document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("popup-1").classList.toggle("active");
});

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("popup-1").classList.toggle("active");
});


const initializeSlider = () => {
  const imgList = document.querySelector(".slider-wrap .img-list");
  const slideBtns = document.querySelectorAll(".slider-wrap .slide-btn");
  const scrollCont = document.querySelector(".prod-cont .scroll-cont");
  const scrollThumb = document.querySelector(".scroll-thumb");

  const maxScrollLeft = imgList.scrollWidth - imgList.clientWidth;

  scrollThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollThumb.offsetLeft;
      const maxThumbPosition = scrollCont.getBoundingClientRect().width - scrollThumb.offsetWidth;

      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollThumb.style.left = `${boundedPosition}px`;
          imgList.scrollLeft = scrollPosition;
      }

      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  slideBtns.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-btn" ? -1 : 1;
          const scrollAmount = imgList.clientWidth * direction;
          imgList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      })
  });

  const handleSlideButtons = () => {
      slideBtns[0].style.display = imgList.scrollLeft <= 0 ? "none" : "flex";
      slideBtns[1].style.display = imgList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  const updateScrollThumbPosition = () => {
      const scrollPosition = imgList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (scrollCont.clientWidth - scrollThumb.offsetWidth);
      scrollThumb.style.left = `${thumbPosition}px`;
  }

  imgList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  })
}

window.addEventListener("resize", initializeSlider);
window.addEventListener("load", initializeSlider);