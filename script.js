const button = document.getElementById("myButton");
const image = document.getElementById("imageDisplay");

// Array of image file names
const images = ["310979492_525138566204097_1768569217715538846_n_525138559537431.jpg", "336209306_3083272958633559_2951261417773891911_n_3083272955300226.jpg", "353809520_6713319132034864_904183102522874335_n_6713319118701532.jpg"];
let index = 0;

button.addEventListener("click", () => {
  // Toggle button style
  button.classList.toggle("clicked");

  // Animate image out
  image.style.opacity = 0;
  image.style.transform = "scale(0.95)";

  // After short delay, change image source
  setTimeout(() => {
    index = (index + 1) % images.length; // cycle through images
    image.src = images[index];

    // Animate image back in
    image.style.opacity = 1;
    image.style.transform = "scale(1)";
  }, 300);

  // Change button text (optional)
  button.textContent = button.classList.contains("clicked") ? "Next Image" : "Next Image";
});
