window.addEventListener('DOMContentLoaded', function () {
    addUser({
        formSelector: 'form',
        nameSelector: '.name input',
        ageSelector: '.age input',
        genderSelector: '.gender select',
        marriedSelector: '.married select',
        modalSelector: '.modal',
        modalTitleSelector: '.modal-title',
        modalBodySelector: '.modal-body p',
        btnFirstSelector: '.close',
        btnSecondSelector: '.modal-footer button:first-child',
        btnThirdSelector: '.modal-footer button:last-child'
    });
});
function addUser(data) {
    var form = document.querySelector(data.formSelector), uname = document.querySelector(data.nameSelector), age = document.querySelector(data.ageSelector), gender = document.querySelector(data.genderSelector), married = document.querySelector(data.marriedSelector), modal = document.querySelector(data.modalSelector), modalTitle = document.querySelector(data.modalTitleSelector), modalBody = document.querySelector(data.modalBodySelector), btn1 = document.querySelector(data.btnFirstSelector), btn2 = document.querySelector(data.btnSecondSelector), btn3 = document.querySelector(data.btnThirdSelector), btnSelector = [btn1, btn2, btn3];
    ;
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
        e.preventDefault();
        var Person = {
            name: uname.value,
            age: +age.value,
            gender: gender.value,
            married: married.value
        };
        showModal(Person);
    });
    var showModal = function (person) {
        modal.style.display = 'block';
        modalTitle.textContent = 'User details';
        modalBody.innerHTML = "\n        Name: ".concat(person.name, ",\n        Age: ").concat(person.age, ",\n        Gender: ").concat(person.gender, ",\n        Married: ").concat(person.married, "\n    ");
    };
    var hideModal = function (selector) {
        selector.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    };
    btnSelector.forEach(function (btn) { return hideModal(btn); });
}
