const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

let val;
function handleClick () {
    val = input.value;
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button2 = document.createElement('button')
    button2.addEventListener('click',() => {
        ul.removeChild(li)
    })

    span.textContent = val;
    li.append(span);

    button2.textContent = 'delete';
    li.append(button2);

    ul.append(li)

    input.focus();

}; button.addEventListener('click', handleClick);





