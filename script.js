let regTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    regEmail = /^[A-Za-z0-9._%+-]+@(mail\.ru|gmail\.com|yandex\.ru)$/,
    regbirthY = /^(19[0-9][0-9]|20[0-2][0-3])$|^200[1-9]$|^201[0-9]$/,
    regText = /^[а-яА-Яa-zA-Z]+(\s[а-яА-Яa-zA-Z]+)*$/,
    regAddress = /^[а-яё\s.,\/\-]+$/i,
    regName = /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)? [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+)?$/i;

let span = document.querySelector('.span');
let phone = document.querySelector('#phoneNumber');
let name1 = document.querySelector('#fullName');
let address1 =  document.querySelector('#address');
let marStatus =  document.querySelector('#maritalStatus');
let mail =  document.querySelector('#email');
let birthYear1 =  document.querySelector('#birthYear');

window.onload = function() {
    document.querySelector('#button').onclick = function(e) {
        e.preventDefault();
        // Телефон
        if (!validatePhone(regTel, phone.value)) {
            notValidPhone(phone, span);
        } else {
            validPhone(phone, span);
        }      
        // ФИО
        if (!validateName(regName, name1.value)) {
            notValidName(name1, span);
        } else {
            validName(name1, span);
        }
        // Адресс
        if (!validateAddress(regAddress, address1.value)) {
            notValidAddress(address1, span);
        } else {
            validAddress(address1, span);
        }
        // Год рождения
        if (!validateBirthY(regbirthY, birthYear1.value)) {
            notValidBirthY(birthYear1, span);
        } else {
            validBirthY(birthYear1, span);
        }
        // Семейное положение
        if (!marStatus.value) {
            notValidMaritalStatus(marStatus, span);
        } else {
            validMaritalStatus(marStatus, span);
        }
        // Электронная почта
        if (!validateEmail(regEmail, mail.value)) {
            notValidEmail(mail, span);
        } else {
            validEmail(mail, span);
        }
        
        // Проверка формы (все поля корректны)
        const spanText = document.querySelector('.span');       
        if (validatePhone(regTel, phone.value) && 
            validateName(regName, name1.value) && 
            validateAddress(regAddress, address1.value) && 
            validateBirthY(regbirthY, birthYear1.value) && 
            validateMaritalStatus(marStatus.value) && 
            validateEmail(regEmail, mail.value)) {
            spanText.textContent = 'Проверка пройдена';
        } else {
            spanText.textContent = 'Проверка не пройдена';
        }
        
        // Проверка на пустые поля
        if(!phone.value || !name1.value || !address1.value || !marStatus.value || !mail.value || !birthYear1.value) {
            spanText.textContent = "Есть незаполненные поля";
        }

        // Вывод ошибки ввода
        const span2Text = document.querySelector('.span2');       
        if (!validateName(regName, name1.value)) {
            span2Text.textContent = 'Введите корректное ФИО';
        }    
        else if (!validateBirthY(regbirthY, birthYear1.value)) {
            span2Text.textContent = 'Введите корректный год рождения';
        }
        else if (!validateAddress(regAddress, address1.value)) {
            span2Text.textContent = 'Введите корректный адрес';
        }
        else if (!validatePhone(regTel, phone.value)) {
            span2Text.textContent = 'Введите корректный номер телефона';
        }   
        else if (!validateMaritalStatus(marStatus)) {
            span2Text.textContent = 'Выберите семейный статус';
        }
        else if (!validateEmail(regEmail, mail.value)) {
            span2Text.textContent = 'Введите корректный email';
        }
        else {
            span2Text.textContent = '';
        }

        
    };

    // Телефон
    function validatePhone(regex, phone) {
        return regex.test(phone);
    }

    function notValidPhone(phone, el, mess) {
        phone.classList.add('invalid');       
        el.innerHTML = mess;
    }

    function validPhone(phone, el, mess) {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
        el.innerHTML = mess;
    }

    // ФИО
    function validateName(regex, name1) {
        return regex.test(name1);
    }

    function notValidName(name1, el, mess) {
        name1.classList.add('invalid');       
        el.innerHTML = mess;
    }

    function validName(name1, el, mess) {
        name1.classList.remove('invalid');
        name1.classList.add('valid');
        el.innerHTML = mess;
    }

    // Год рождения
    function validateBirthY(regex, birthY) {
        return regex.test(birthY);
    }

    function notValidBirthY(birthY, el, mess) {
        birthY.classList.add('invalid');       
        el.innerHTML = mess;
    }

    function validBirthY(birthY, el, mess) {
        birthY.classList.remove('invalid');
        birthY.classList.add('valid');
        el.innerHTML = mess;
    }

    // Семейное положение
    function validateMaritalStatus(marStatus) {
        return marStatus.value !== '';
      } 

      function notValidMaritalStatus(marStatus, el, mess) {
        if (!marStatus.value) {
          marStatus.classList.add('invalid1');
          el.innerHTML = mess;
        }        
      } 

    function validMaritalStatus(marStatus, el, mess) {
        if (marStatus.value) {
            marStatus.classList.remove('invalid1');
            marStatus.classList.add('valid1');
            el.innerHTML = mess;
        }
    }

    // Адресс
    function validateAddress(regex, address1) {
        return regex.test(address1);
    }

    function notValidAddress(address1, el, mess) {
        address1.classList.add('invalid');       
        el.innerHTML = mess;
    }

    function validAddress(address1, el, mess) {
        address1.classList.remove('invalid');
        address1.classList.add('valid');       
        el.innerHTML = mess;
    }

    // Электронная почта
    function validateEmail(regex, mail) {
        return regex.test(mail);
    }

    function notValidEmail(mail, el, mess) {
        mail.classList.add('invalid');       
        el.innerHTML = mess;
    }

    function validEmail(mail, el, mess) {
        mail.classList.remove('invalid');
        mail.classList.add('valid');
        el.innerHTML = mess;
    }
};


