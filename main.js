const getSpanUser = document.querySelector(".header_user");

const getModalForm = document.querySelector(".modal_form");

const getBackDrop = document.querySelector(".back_drop");

const getSpan = document.querySelector(".header_user");

const getCloseBtn = document.querySelector(".modal_btn");

const getPopularInput = document.querySelector(".popular_input");

const getPopularBtn = document.querySelector(".popular_btn");

const getPopularRes = document.querySelector(".popular_result");

const getPopularForm = document.querySelector(".popular_form");

const getNumerForm = document.querySelector(".numer_form");

const getNumberInput = document.querySelector(".number_input");

const getNumberBtn = document.querySelector(".number_btn");

const getNumberRes = document.querySelector(".number_result");

const getPlayImg = document.querySelectorAll(".play_img");

const getPlayCheckPc = document.querySelector(".res_pc");

const getPlayCheckYou = document.querySelector(".res_you");

const getPlayLink = document.querySelector(".play_link");

const getPlayBtn = document.querySelector(".play_btn");

const getCalcBtn = document.querySelectorAll(".calculator_btn");

const getCalcInput = document.querySelector(".calculator_number");

const getCalcInputTwo = document.querySelector("#NumberTwo");

const getCalcRovno = document.querySelector(".calculator_rovno");

const getCalcRes = document.querySelector(".calculator_res");

const getClockForm = document.querySelector(".clock_form");

const getClockRes = document.querySelector(".clock_res");

const getCollectionInput = document.querySelectorAll(".collection_inpt");

const getCollectionText = document.querySelector(".collection_num");

const getScientistsUl = document.querySelector(".scientists_list");

const getScientistsBtn = document.querySelectorAll(".scientists_btn");

const field = document.querySelector(".football_block");

const ball = document.querySelector(".ball");

getModalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userName = evt.currentTarget.elements.name.value.trim();
  if (!userName) {
    return;
  }
  getSpan.textContent = userName;

  evt.currentTarget.reset();

  closeModal();
});

function closeModal() {
  getBackDrop.classList.add("ishidden");
}

getCloseBtn.addEventListener("click", () => {
  closeModal();
});

getBackDrop.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
});

getPopularForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const checkYear = evt.currentTarget.elements.year.value;
  const numberYear = Number(checkYear);

  if (isNaN(Number(numberYear))) {
    evt.currentTarget.reset();
    alert("введите число");
    return;
  }

  const res = isLeapYear(numberYear);

  if (res) {
    getPopularRes.textContent = "родились в высокосный год";
    getPopularRes.style.color = "green";
  } else {
    getPopularRes.textContent = "вы родились НЕ в высокосный год";
    getPopularRes.style.color = "red";
  }
});

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

getNumerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

let randomNum = Math.floor(Math.random() * (10 - 1) + 1);

getNumerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
  const userValue = Number(evt.currentTarget.elements.numb.value);
  if (userValue > 10 || userValue < 1) {
    alert("число от 1 до 10");
    evt.currentTarget.reset();
    return;
  }
  if (randomNum === userValue) {
    getNumberRes.textContent = `Вітаю, ви вгадали число! ${randomNum}`;
  } else {
    getNumberRes.textContent = `Ви не вгадали число ${randomNum}`;
  }

  evt.currentTarget.reset();
});

const items = ["rock", "papir", "scissors"];

let myCount = 0;

let pcCount = 0;

getPlayImg.forEach((img) => {
  let randomPlay = 0;

  img.addEventListener("click", (evt) => {
    const randomUsers = evt.target.dataset.action;

    randomPlay = Math.floor(Math.random() * items.length);
    console.log("я кликную", randomUsers);
    console.log("обрав пк", items[randomPlay]);

    if (randomUsers === items[randomPlay]) {
      getPlayLink.textContent = "ничья";
    } else if (
      (randomUsers === "rock" && items[randomPlay] === "scissors") ||
      (randomUsers === "scissors" && items[randomPlay] === "papir") ||
      (randomUsers === "papir" && items[randomPlay] === "rock")
    ) {
      getPlayLink.textContent = "you winner";
      myCount++;
      getPlayCheckYou.textContent = myCount;
    } else {
      getPlayLink.textContent = "Комп'ютер виграв раунд!";
      pcCount++;
      getPlayCheckPc.textContent = pcCount;
    }
  });
});

getCalcInput;

getCalcBtn.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const calcBtn = evt.target.dataset.action;
  });
});

getClockForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const timeValue = Number(evt.currentTarget.elements.time.value);

  const days = Math.floor(timeValue / 1440);
  const hours = Math.floor((timeValue % 1440) / 60); // Часы от 0 до 23
  const minutes = timeValue % 60; // Минуты от 0 до 59

  // Форматирование с добавлением ведущего нуля (например, 05:09 вместо 5:9)
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");

  getClockRes.textContent = `${days} дн. ${paddedHours}:${paddedMinutes}`;
});

getCollectionInput.forEach((input) => {
  input.addEventListener("input", (evt) => {
    const numbers = [...getCollectionInput].map((input) => Number(input.value));
    console.log(Math.max(...numbers));
    getCollectionText.textContent = Math.max(...numbers);
  });
});

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

function renderSentis(array) {
  const item = array
    .map(({ name, surname, born, dead, id }) => {
      return `<li class="scientists_item"><p class = "scientists_text">${name} ${surname}</p><p class = "scientists_text">${born}-${dead}</p></li>`;
    })
    .join("");
  getScientistsUl.innerHTML = item;
}

renderSentis(scientists);

getScientistsBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    switch (action) {
      case "born":
        const born = scientists.filter(
          ({ born }) => born >= 1800 && born < 1900,
        );
        renderSentis(born);
        break;
      case "albert":
        const albert = scientists.filter(({ name }) => name === "Albert");
        renderSentis(albert);
        break;
      case "sort":
        const find = [...scientists].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        renderSentis(find);
        break;
      case "find_s":
        const sort = scientists.filter(({ surname }) =>
          surname.startsWith("C"),
        );
        renderSentis(sort);
        break;
      case "live_year":
        const sortedByAgeAsc = [...scientists].sort(
          (a, b) => a.dead - a.born - (b.dead - b.born),
        );
        renderSentis(sortedByAgeAsc)
        break;
      case "delete_a":
        const block = scientists.filter(({name}) => !name.startsWith("A") )
        renderSentis(block)
        break;
      case "born_later":
        const later = [...scientists].sort((a,b) => a.born - b.born)
        console.log(later[later.length - 1]);
        break;
      case "live_more":
        console.log(
          "Знайти вченого, який прожив найдовше і вченого, який прожив найменше",
        );
        break;
      case "familiar":
        console.log(
          "Знайти вчених, в яких співпадають перші літери імені і прізвища",
        );
        break;
      default:
        return;
    }
  });
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Состояния игры
let score = 0;
let gameOver = false;
let gameStarted = false; // Новая переменная: игра началась?
let frame = 0;

// Настройки персонажа
const dino = {
  x: 50,
  y: 130, // Базовая позиция на земле
  width: 30,
  height: 40,
  dy: 0,
  // НАСТРОЙКИ ПРЫЖКА (изменены для длины)
  gravity: 0.35, // Было 0.6. Меньше гравитация — плавнее падение.
  jumpForce: -8.5, // Было -10. Чуть меньше сила, но из-за гравитации прыжок выше и дольше.
  isGrounded: true,
};

const obstacles = [];

// Обработка нажатий
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    // 1. Условие запуска игры
    if (!gameStarted) {
      startGame();
      return; // Чтобы сразу не прыгнуть
    }

    // 2. Условие рестарта
    if (gameOver) {
      resetGame();
      return;
    }

    // 3. Условие прыжка во время игры
    if (dino.isGrounded) {
      dino.dy = dino.jumpForce;
      dino.isGrounded = false;
    }
  }
});

function startGame() {
  gameStarted = true;
  gameOver = false;
  score = 0;
  obstacles.length = 0;
  dino.y = 130;
  dino.dy = 0;
  update(); // Запускаем цикл игры
}

function resetGame() {
  gameOver = false;
  score = 0;
  obstacles.length = 0;
  dino.y = 130;
  dino.dy = 0;
  dino.isGrounded = true;
  frame = 0;
  // Цикл update уже запущен, он просто продолжит рисовать
}

function drawInitialScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Рисуем землю
  drawGround();

  // Рисуем динозавра
  ctx.fillStyle = "#535353";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

  // Текст-инструкция
  ctx.fillStyle = "#535353";
  ctx.font = "20px monospace";
  ctx.textAlign = "center";
  ctx.fillText(
    "Нажмите ПРОБЕЛ, чтобы начать",
    canvas.width / 2,
    canvas.height / 2,
  );
}

function drawGround() {
  ctx.beginPath();
  ctx.moveTo(0, 170); // Линия земли
  ctx.lineTo(600, 170);
  ctx.strokeStyle = "#535353";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function update() {
  // Если игра не началась или закончилась, не обновляем логику
  if (!gameStarted || gameOver) {
    if (gameOver) {
      ctx.fillStyle = "#535353";
      ctx.font = "20px monospace";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 15);
      ctx.fillText(
        "(Нажмите Пробел для рестарта)",
        canvas.width / 2,
        canvas.height / 2 + 15,
      );
    }
    return;
  }

  frame++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // --- Логика Динозавра ---
  dino.dy += dino.gravity;
  dino.y += dino.dy;

  // Проверка приземления
  if (dino.y >= 130) {
    dino.y = 130;
    dino.dy = 0;
    dino.isGrounded = true;
  }

  // --- Отрисовка ---
  drawGround();

  // Динозавр
  ctx.fillStyle = "#535353";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

  // --- Препятствия (Кактусы) ---
  // Генерация (реже, так как прыжок длинный)
  if (frame % 110 === 0) {
    // Было 90. Увеличил интервал.
    obstacles.push({
      x: canvas.width,
      y: 135, // Чуть выше земли
      width: 15,
      height: 35,
    });
  }

  // Движение и коллизии
  ctx.fillStyle = "#dc2e2e"; // Цвет препятствий (красный для видимости)
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obs = obstacles[i];
    obs.x -= 6; // Скорость движения

    ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

    // Проверка столкновения (AABB коллизия)
    if (
      dino.x < obs.x + obs.width &&
      dino.x + dino.width > obs.x &&
      dino.y < obs.y + obs.height &&
      dino.y + dino.height > obs.y
    ) {
      gameOver = true;
    }

    // Удаление ушедших за экран
    if (obs.x < -obs.width) {
      obstacles.splice(i, 1);
      score++;
    }
  }

  // --- Счет ---
  ctx.fillStyle = "#535353";
  ctx.font = "16px monospace";
  ctx.textAlign = "right";
  ctx.fillText(`SCORE: ${score}`, canvas.width - 20, 30);

  // Зацикливание
  requestAnimationFrame(update);
}

// При загрузке страницы показываем начальный экран
drawInitialScreen();
