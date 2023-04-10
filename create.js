// import { gameSize } from './main';
let gameSize = 3;
const createButtons = () => {
    const body = document.getElementById('main');
    var buttonDivHTML = '';
    for (let i = 0; i < gameSize * gameSize; i++) {
        buttonDivHTML += '<div id =' + (i + 1) + ' class = "button"></div>';
    }
    body.innerHTML = buttonDivHTML;
};

createButtons();
