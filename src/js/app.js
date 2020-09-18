document.addEventListener('DOMContentLoaded', () => {
  const cells = document.getElementsByTagName('td');
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');

  let selectedCellIndex = 0;
  let newCellIndex = 0;
  let isClick = false; // был клик по клетке?

  function getCell(cubes) {
    [...cubes].forEach((cube) => {
      cube.addEventListener('click', () => {
        if (cube.classList.contains('cell_has-goblin')) {
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
        isClick = true; // был клик по клетке
      });
    });
  }

  getCell(cells);

  function getRandom(cellsArr) {
    const num = Math.floor(Math.random() * cellsArr.length);
    return num;
  }

  setInterval(() => {
    while (selectedCellIndex === newCellIndex) {
      selectedCellIndex = getRandom(cells);
    }

    if (newCellIndex >= 0) {
      cells[newCellIndex].innerHTML = '';

      // если по клетке не кликнули, то ставится промах
      if (!isClick) {
        lost.textContent++;
        if (lost.textContent == 5) {
          lost.textContent = 0;
          dead.textContent = 0;
          alert('Вы проиграли');
        }
      }
      cells[newCellIndex].classList.remove('cell_has-goblin');
    }

    cells[selectedCellIndex].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png">';
    isClick = false; // клик сбрасывается
    cells[selectedCellIndex].classList.add('cell_has-goblin');
    newCellIndex = selectedCellIndex;
  }, 1000);
});
