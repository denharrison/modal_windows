// Создание базового модального окна (1 задача)

let basicBtn = document.querySelector('[data-modal-target="#basicModal"]');

basicBtn.addEventListener('click', (event) => {

    let basicWindow = document.querySelector("#basicModal"); // находим окно
    basicWindow.style.display = 'flex' // показываем его 
    let btnClose = basicWindow.querySelector(".modal-close-btn");

    btnClose.addEventListener('click', (event) => {

        basicWindow.style.display = 'none'

    })

})

// Cоздание окна с затемненным оверлеем (2 задача)

let overlayBtn = document.querySelector('[data-modal-target="#overlayModal"]');

overlayBtn.addEventListener('click', (event) => {

    let overlayWindow = document.querySelector("#overlayModal");
    overlayWindow.style.display = 'flex'

    let btnClose = overlayWindow.querySelector(".modal-close-btn");

    btnClose.addEventListener('click', (event) => {

        overlayWindow.style.display = 'none'

    })

})

// Создание анимированного окна (3 задача)

let animeBtn = document.querySelector('[data-modal-target="#animatedModal"]');

animeBtn.addEventListener('click', (event) => {
  let animatedWindow = document.querySelector("#animatedModal"); // Находим наше окно

  animatedWindow.style.display = "flex"; // Показываем его

  // Ждем немного, чтобы браузер успел применить display: flex
  // Затем добавляем класс 'active' для запуска анимации

  setTimeout(() => {
    animatedWindow.classList.add("active");
  }, 10);

  let btnClose = animatedWindow.querySelector(".modal-close-btn"); // Находим кнопку закрытия внутри окна

  btnClose.addEventListener("click", (event) => { //  Вешаем обработчик на кнопку закрытия

    animatedWindow.classList.remove("active"); // Сначала убираем класс 'active' для анимации исчезновения

    setTimeout(() => {
      animatedWindow.style.display = "none";
    }, 500); // Ждем завершения анимации и только потом скрываем окно полностью
  });


});

// Закрытие по клавише Escape (Задача 4)

let escapeBtn = document.querySelector('[data-modal-target="#escapeModal"]');
let escapeWindow = document.querySelector("#escapeModal");

escapeBtn.addEventListener('click', (event) => {

    escapeWindow.style.display = 'flex'

    let escapeBtn = escapeWindow.querySelector(".modal-close-btn");

    escapeBtn.addEventListener('click', (event) => {

    escapeWindow.style.display = 'none'

    })

})

document.addEventListener('keydown' , (event) => {

    if (event.code === "Escape") {
        escapeWindow.style.display = 'none'
    }

})


// Модальное окно с формой (Задача 5)

let btnFormModal = document.querySelector('[data-modal-target="#formModal"]');

let formWindow = document.querySelector("#formModal");

btnFormModal.addEventListener("click", (event) => {

  formWindow.style.display = "flex";

  let formCloseBtn = formWindow.querySelector(".modal-close-btn");

  formCloseBtn.addEventListener("click", (event) => {

    formWindow.style.display = "none";

  });


});

