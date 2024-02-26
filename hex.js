const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const stringRandom = createHexString();
    // console.log(stringRandom);

    document.body.style.backgroundColor = stringRandom;
    color.textContent = stringRandom;
})

function getNumberRandom() {
    return Math.floor(Math.random() * hex.length);
}

function createHexString() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        var valueTemp = getNumberRandom()
        hexColor = hexColor.concat(hex[valueTemp]);
    }
    return hexColor;
}
