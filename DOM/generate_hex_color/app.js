window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById('root');
  const randomBtn = document.getElementById('random__btn');
  const hexValue = document.getElementById('hex__value');

  randomBtn.addEventListener('click', function () {
    const randomColor = generateHexColor();
    root.style.backgroundColor = randomColor;
    hexValue.value = randomColor;
    hexValue.style.color = randomColor;
  });
}

function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
