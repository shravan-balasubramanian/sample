/* eslint-disable */
let alphabets = [];

function getRandomColor() {
    const colors = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#FF851B', '#FF6347', '#0080FF', '#000000'];
    return colors[Math.floor(Math.random()*colors.length-1 + 1)];
}

function getRandomRotation() {
    return Math.floor(Math.random() * (+60 - -60) + -60);
}

function getRandomPosition() {
        return {
            left : '12px',
            right : '12px'
        };
}

function setProps() {
    const firstLetter = 65;
    for(let i=0;i<26;i++) {
        alphabets.push(
            {
                letter : String.fromCharCode(firstLetter + i),
                color : getRandomColor(),
                rotation : getRandomRotation(),
                position : getRandomPosition()
            }
        );
    }
}
setProps();
module.exports =  {
    alphabets
}