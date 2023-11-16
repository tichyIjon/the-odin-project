const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.setAttribute('style','border: 1px solid black; height: 40px; width: 40px; margin: 1px')
    container.append(square)
}

