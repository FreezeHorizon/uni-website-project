function showSides() {
  document.getElementById("playButton").style.display = "none";
  document.getElementById("sidesContainer").style.display = "block";

  const sides = document.querySelectorAll(".side");
  sides.forEach((side, index) => {
    setTimeout(() => {
      side.classList.add("animate");
    }, index * 400); // Delay each side's animation by 200ms
  });

  const body = document.body;
  body.style.opacity = 0;
  setTimeout(() => {
    body.style.opacity = 1;
  });
}

function changeBackgroundColor(imageUrl) {
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}
