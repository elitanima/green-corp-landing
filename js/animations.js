
// -------START-COUNTER-------

const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        }else {
            element.innerText = i;
        }
        i += 100;
    }
    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);
};

function initIncreaseNumberAnimation() {
    let i = 0;
    let element = document.querySelector('.features__clients-count');
    let endNumber = 5000;
    increaseNumberAnimationStep(i, element, endNumber);
}

let animationInited = false;

// -------END-COUNTER-------

// -------START-FORM-OTHER-------

let id_budget = document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {   
    
    if (event.target.value === 'other'){
        let formContainer = document.createElement('div');
            formContainer.classList.add('form__group', 'form__other-input');

            document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'));

        let input = document.createElement('input');
            input.placeholder = 'Введите ваш вариант';
            input.type = 'text'

            formContainer.appendChild(input);
    };
        let otherInput = document.querySelector('.form__other-input');
    
    if (event.target.value !== 'other' && otherInput) {
            document.querySelector('#form form').removeChild(otherInput);
    }
    
});

// -------END-FORM-OTHER-------

// -------START-HEADER-SCROLL-------

function updateScroll() {

    if(window.scrollY > 0){
        document.querySelector('header').classList.add('header__scrolled');
    }else {
        document.querySelector('header').classList.remove('header__scrolled');
    }

    // start counter

    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;
        
        if(windowBottomPosition >= countElementPosition && !animationInited){
            animationInited = true;
            initIncreaseNumberAnimation()
        }

};

// -------END-HEADER-SCROLL-------

window.addEventListener('scroll', updateScroll);