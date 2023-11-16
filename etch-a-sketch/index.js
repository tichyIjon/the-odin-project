const container = document.querySelector('.container')
let dimensions;

function generateGrid(dimensions) {
    document.querySelector('.container').innerHTML = '';

    let height = (512/(Math.sqrt(dimensions)));
    let width = (512/(Math.sqrt(dimensions)));

    for (let i = 0; i < dimensions; i++) {
        let square = document.createElement('div')
        square.setAttribute('class','sqr')
        square.setAttribute('style',`border: 0.5px dashed lightgrey; height: ${height}px; width: ${width}px;`)
        container.append(square)
    }
}

function generateEventListeners() {
    let sqr = document.querySelectorAll('.sqr')
    sqr.forEach(box => {
    box.addEventListener('mouseover',()=> {
        box.style.backgroundColor = 'red';
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
const btn128 = document.querySelector('.sizeFour').addEventListener('click',()=> {
    generateGrid(16384)
    generateEventListeners()
})

