const container = document.querySelector('.container')
let dimensions;

function generateGrid(dimensions) {
    document.querySelector('.container').innerHTML = '';
    interactions = 0.0;

    let height = (512/(Math.sqrt(dimensions)));
    let width = (512/(Math.sqrt(dimensions)));

    for (let i = 0; i < dimensions; i++) {
        let square = document.createElement('div')
        square.setAttribute('class','sqr')
        square.setAttribute('style',`border: 0.5px dashed lightgrey; height: ${height}px; width: ${width}px;`)
        container.append(square)
    }
}

let color = 'bnw';
let interactions = 0.0;
function generateEventListeners() {
    let sqr = document.querySelectorAll('.sqr')
    sqr.forEach(box => {
    box.addEventListener('mouseover',()=> {
        if (color === 'bnw') {
            interactions += 0.1;
            console.log(interactions);
            let randomRedValue = 0;
            let randomGreenValue = 0;
            let randomBlueValue = 0;
    
            box.style.backgroundColor = `rgba(${randomRedValue},${randomGreenValue},${randomBlueValue},${interactions})`;
        } else if (color === 'rng') {
            let randomRedValue = Math.random() * (256 * 1) + 1
            let randomGreenValue = Math.random() * (256 * 1) + 1
            let randomBlueValue = Math.random() * (256 * 1) + 1
    
            box.style.backgroundColor = `rgb(${randomRedValue},${randomGreenValue},${randomBlueValue})`;
        }

    })
})
}

const btn16 = document.querySelector('.sizeOne').addEventListener('click',()=> {
    generateGrid(256);
    generateEventListeners()
})
const btn32 = document.querySelector('.sizeTwo').addEventListener('click',()=> {
    generateGrid(1024)
    generateEventListeners()
})
const btn64 = document.querySelector('.sizeThree').addEventListener('click',()=> {
    generateGrid(4096)
    generateEventListeners()
})

const bnwBtn = document.querySelector('.black-white').addEventListener('click', ()=> {
    color = 'bnw';
})

const rngBtn = document.querySelector('.random').addEventListener('click', ()=> {
    color = 'rng';
})