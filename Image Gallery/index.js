const element1 = document.querySelectorAll("div.thumbBar img");

for (let i = 0; i < element1.length; i++) {
  element1[i].addEventListener("click", function () {
    changeImage(element1[i].src);
  });
}

function changeImage(picture) {
  document.getElementById("Image").src = picture;
}
