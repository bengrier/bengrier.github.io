// Open the modal when an image is clicked
function openModal(clickedImage) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-image").src = clickedImage.src;
}

// Close the modal when the user clicks outside the image
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Attach click event listener to each gallery item
var galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(function(item) {
  var image = item.querySelector("img");
  image.addEventListener("click", function() {
    openModal(this);
  });
});