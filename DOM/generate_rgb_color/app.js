window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById('root');
  const randomBtn = document.getElementById('random__btn');

  randomBtn.addEventListener('click', function () {
    root.style.backgroundColor = generateRGBColor();
  });
}

function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
