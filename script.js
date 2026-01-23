let turn = true;

let text = document.querySelectorAll('.txt');

text.forEach(btn => {
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
