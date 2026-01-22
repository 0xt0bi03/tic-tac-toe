let turn = true;

let button = document.querySelectorAll('.button');

button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (turn)
        {
            btn.textContent = 'X';
        }
        else
        {
            btn.textContent = 'O';
        }
    })
})
