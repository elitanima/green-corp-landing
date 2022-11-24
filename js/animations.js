const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        }else {
            element.innerText = i;
            console.log(element.innerText);
        }
        i += 100;
    }
    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);
};

function initIncreaseNumberAnimation() {
    let i = 0;
    let element = document.querySelector('.features__clients-count');
    let endNumber = 5000;
    console.log(element);
    increaseNumberAnimationStep(i, element, endNumber);
}

initIncreaseNumberAnimation()



