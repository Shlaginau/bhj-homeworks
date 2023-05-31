const rotatorCasesArray = Array.from(document.querySelectorAll('.rotator__case'));

function changeText() {
    let i = rotatorCasesArray.findIndex(item => item.classList.contains('rotator__case_active'));

    rotatorCasesArray.forEach(c => {
        if (i < rotatorCasesArray.length - 1) {
            c.classList.remove('rotator__case_active');
            const newCase = rotatorCasesArray[i + 1];
            newCase.classList.add('rotator__case_active');
        } else {
            i = -1;
        }
    });
    
newCase = rotatorCasesArray[i + 1];
const speed = parseInt(newCase.dataset.speed) || 1000;
const color = newCase.dataset.color || 'black';

newCase.style.color = color;

setTimeout(changeText, speed);
};

changeText();
