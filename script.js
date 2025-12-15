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

let formElement = formWindow.querySelector("#sampleForm");

let userFormData = {}; // сюда вкладываем то что пользователь ввел

// Вкладываем в переменную значение введенное в поле ввода имени

let windowInputName = formWindow.querySelector("#userName");
let inputNameValue = "";

windowInputName.addEventListener("input", (event) => {

  inputNameValue = event.target.value;
  userFormData.userName = inputNameValue;

}); // складываем в переменную то что ввел пользователь

// Вкладываем в переменную значение введеное в поле ввода email

let windowInputEmail = formWindow.querySelector("#userEmail");
let inputEmailValue = "";
windowInputEmail.addEventListener("input", (event) => {

  inputEmailValue = event.target.value;
  userFormData.userEmail = inputEmailValue;

});

// Вкладываем в переменную значение введное в поле ввода сообщение

let windowInputMessage = formWindow.querySelector("#userMessage");
let inputMassageValue = "";
windowInputMessage.addEventListener("input", (event) => {

  inputMassageValue = event.target.value;
  userFormData.userMessage = inputMassageValue; 
  
});



btnFormModal.addEventListener("click", (event) => {

  formWindow.style.display = "flex";

  let formCloseBtn = formWindow.querySelector(".modal-close-btn");

  formCloseBtn.addEventListener("click", (event) => {

    console.log(userFormData);
    formWindow.style.display = "none";

  });


});

formElement.addEventListener("submit", (event) => {

  event.preventDefault(); // отмена перезагрузки страницы

  console.log("Имя:", userFormData.userName || "не указано");
  console.log("Email:", userFormData.userEmail || "не указан");
  console.log("Сообщение:", userFormData.userMessage || "не указано");

  formWindow.style.display = "none";

  formElement.reset(); // Очищаем форму
  userFormData = {}; // очищаем объект

});
