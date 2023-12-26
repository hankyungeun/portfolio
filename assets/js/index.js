if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

let isFlipped = false;

document.getElementById('flip-container').addEventListener('click', () => {
  isFlipped = !isFlipped;

  const myImage = document.getElementById('myImage');
  const overlay = document.getElementById('overlay');

  if (isFlipped) {
    myImage.style.transform = 'rotateY(180deg)';
    overlay.classList.add('active');
  } else {
    myImage.style.transform = 'rotateY(0deg)';
    overlay.classList.remove('active');
  }
});
