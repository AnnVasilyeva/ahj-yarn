export default function getCell(cells) {
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');

  [...cells].forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.classList.contains('cell_has-goblin')) {
        dead.textContent++;
      } else {
        lost.textContent++;
      }

      if (dead.textContent == 10) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert('Победа!');
      } else if (lost.textContent == 5) {
        lost.textContent = 0;
        dead.textContent = 0;
        alert('Вы проиграли');
      }
    });
  });
}
