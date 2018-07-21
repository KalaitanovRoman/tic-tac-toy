'use strict';

(function(){

    let table = document.querySelector('.table');
    let cells = document.querySelectorAll('.cell');
    let random =  Math.floor(Math.random() * (9));

    getEvenet();

    function getRandom() {

        function findEmptyCell() {
            let arr = [];

            for (let item of cells) {
                if (item.innerHTML === '') {
                    arr.push(item)
                }
            }

            if (arr.length) {
                arr[Math.floor(Math.random() * (arr.length))].innerHTML = 'O';
            }
        }

        cells[random].innerHTML === '' ? cells[random].innerHTML = 'O' : findEmptyCell();

    }

    function checkWin() {
        if (cells[0].innerHTML === 'X' && cells[1].innerHTML === 'X' && cells[2].innerHTML === 'X' ||
            cells[3].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[5].innerHTML === 'X' ||
            cells[6].innerHTML === 'X' && cells[7].innerHTML === 'X' && cells[8].innerHTML === 'X' ||
            cells[0].innerHTML === 'X' && cells[3].innerHTML === 'X' && cells[6].innerHTML === 'X' ||
            cells[1].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[7].innerHTML === 'X' ||
            cells[2].innerHTML === 'X' && cells[5].innerHTML === 'X' && cells[8].innerHTML === 'X' ||
            cells[0].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[8].innerHTML === 'X' ||
            cells[2].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[6].innerHTML === 'X') {
                alert('You Win');
                location.reload();
        } else if (cells[0].innerHTML === 'O' && cells[1].innerHTML === 'O' && cells[2].innerHTML === 'O' ||
            cells[3].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[5].innerHTML === 'O' ||
            cells[6].innerHTML === 'O' && cells[7].innerHTML === 'O' && cells[8].innerHTML === 'O' ||
            cells[0].innerHTML === 'O' && cells[3].innerHTML === 'O' && cells[6].innerHTML === 'O' ||
            cells[1].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[7].innerHTML === 'O' ||
            cells[2].innerHTML === 'O' && cells[5].innerHTML === 'O' && cells[8].innerHTML === 'O' ||
            cells[0].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[8].innerHTML === 'O' ||
            cells[2].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[6].innerHTML === 'O') {
            alert('Comp Win');
            location.reload();
        } else if (cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '' &&
            cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '' &&
            cells[6].innerHTML !== '' && cells[7].innerHTML !== ''&& cells[8].innerHTML !== '') {
            alert('Nobody Win');
            location.reload();
        }
    }

    function getEvenet() {
        table.addEventListener('click', e => {
            const target = e.target;

            if (target.innerHTML === '') {
                target.innerText = 'X';

                setTimeout( () => {
                    checkWin();
                }, 200);

                getRandom();
            }
        })
    }

}());
