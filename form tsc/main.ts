window.addEventListener('DOMContentLoaded', () => {
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

interface formTypes {
    formSelector: string
    nameSelector: string
    ageSelector: string
    genderSelector: string
    marriedSelector: string
    modalSelector: string
    modalTitleSelector: string
    modalBodySelector: string
    btnFirstSelector: string
    btnSecondSelector: string
    btnThirdSelector: string
}
 function addUser(data: formTypes) {
    const form = document.querySelector(data.formSelector) as HTMLFormElement,
    uname = document.querySelector(data.nameSelector) as HTMLInputElement,
    age = document.querySelector(data.ageSelector) as HTMLInputElement,
    gender = document.querySelector(data.genderSelector) as HTMLInputElement,
    married = document.querySelector(data.marriedSelector) as HTMLInputElement,
    modal = document.querySelector(data.modalSelector) as HTMLDivElement,
    modalTitle = document.querySelector(data.modalTitleSelector) as HTMLHeadingElement,
    modalBody = document.querySelector(data.modalBodySelector) as HTMLParagraphElement,
    btn1 = document.querySelector(data.btnFirstSelector) as HTMLButtonElement,
    btn2 = document.querySelector(data.btnSecondSelector) as HTMLButtonElement,
    btn3 = document.querySelector(data.btnThirdSelector) as HTMLButtonElement,
    btnSelector:HTMLButtonElement[] = [btn1, btn2, btn3];


interface getForm {
    name: string
    age: number
    gender: string
    married: string
};

form?.addEventListener('submit', e => {
    e.preventDefault();
    const Person: getForm = {
        name: uname.value,
        age: +age.value,
        gender: gender.value,
        married: married.value
    };
    showModal(Person);

});

const showModal = (person: getForm) => {
    modal.style.display = 'block';
    modalTitle.textContent = 'User details';

    modalBody.innerHTML = `
        Name: ${person.name},
        Age: ${person.age},
        Gender: ${person.gender},
        Married: ${person.married}
    `;

};

const hideModal = (selector: HTMLButtonElement) => {
    selector.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};

btnSelector.forEach(btn => hideModal(btn));
}