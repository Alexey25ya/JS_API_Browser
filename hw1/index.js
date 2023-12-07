// Статическая веб-страница с динамическими элементами:
// Создайте HTML-страницу с заголовком "Расписание занятий".

// Таблица с информацией о занятиях:
// Используйте JavaScript для динамического создания таблицы на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии: название, время проведения, максимальное и текущее количество участников.
// 3. Кнопки "Записаться" и "Отменить запись":

// Рядом с каждым занятием добавьте кнопку "Записаться".
// Если максимальное количество участников достигнуто, сделайте кнопку неактивной.
// Предусмотрите кнопку "Отменить запись", которая появляется после записи на занятие.
// 4. Интерактивность с JavaScript:

// При нажатии на кнопку "Записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "Отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.
// 5. Дополнительно: Хранение данных в Local Storage:

// Сохраняйте изменения в Local Storage, чтобы они сохранялись при перезагрузке страницы.

// json
const data =
    [
        {
            "id": 1,
            "name": "Йога",
            "time": "10:00 - 11:00",
            "maxParticipants": 15,
            "currentParticipants": 8
        },
        {
            "id": 2,
            "name": "Пилатес",
            "time": "11:30 - 12:30",
            "maxParticipants": 10,
            "currentParticipants": 5
        },
        {
            "id": 3,
            "name": "Кроссфит",
            "time": "13:00 - 14:00",
            "maxParticipants": 20,
            "currentParticipants": 15
        },
        {
            "id": 4,
            "name": "Танцы",
            "time": "14:30 - 15:30",
            "maxParticipants": 12,
            "currentParticipants": 10
        },
        {
            "id": 5,
            "name": "Бокс",
            "time": "16:00 - 17:00",
            "maxParticipants": 8,
            "currentParticipants": 6
        }
    ]

// Создание элементов в соответствии с массивом
createSchedule = (data, elem) => {
    data.forEach(element => {
        const articleEl = document.createElement('article');
        articleEl.className = 'article-item';
        articleEl.innerHTML = `<h3 class="name">${element.name}</h3>
        <button class="sign_up${element.id}">Записаться</button>
        <p class="time">Время занятия: ${element.time}</p>
        <p class="maxParticipants">Максимальное кол-во участников: ${element.maxParticipants}</p>
        <p class="currentParticipants">Текущее кол-во участников: <span class="current${element.id}">${element.currentParticipants}</span></p>
    `;
        elem.insertAdjacentElement('afterend', articleEl);

        const signUpButton = document.querySelector(`.sign_up${element.id}`)
        const currentParticipantsNew = document.querySelector(`.current${element.id}`)
        let counter = 0;
        let currentNew = element.currentParticipants;
        // кнопка "Записаться"
        signUpButton.addEventListener('click', () => {
            counter++
            if (counter === 1) {
                cancel(signUpButton, currentNew, currentParticipantsNew, element.id)
            }
            if (element.maxParticipants > currentParticipantsNew.textContent) {
                currentParticipantsNew.textContent = Number(currentParticipantsNew.textContent) + 1;
                element.currentParticipants = currentParticipantsNew.textContent;
            } else {
                signUpButton.setAttribute('disabled', '')
            }
        });
    });
}


// Создание кнопки и функции отмены записи
function cancel(signUpButton, current, currentParticipantsNew, id) {
    const cancelButton = document.createElement('button');
    cancelButton.className = `.cancelButton${id}`;
    cancelButton.textContent = 'Отменить запись';
    signUpButton.insertAdjacentElement('afterend', cancelButton);
    cancelButton.addEventListener('click', () => {
        signUpButton.removeAttribute('disabled', '')
        if (currentParticipantsNew.textContent > 0) {
            currentParticipantsNew.textContent = currentParticipantsNew.textContent - 1
            current = currentParticipantsNew.textContent;
        }
    })
}

const head = document.querySelector('.head')
// вызов функции создания расписания
createSchedule(data, head);
localStorage.setItem('dataStorage', JSON.stringify(data))






