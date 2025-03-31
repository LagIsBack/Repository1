let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
        // After the last slide, show the invitation
        setTimeout(() => {
            document.getElementById("invitation").style.display = "block";
            document.querySelector('.slideshow-container').style.display = 'none'; // Hide slideshow
        }, 1000); // Show invitation after 1 second
        return; // Exit the function
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();