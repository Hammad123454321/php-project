`use srtict`;
/*
console.log(document.querySelector(`.masg`).textContent);
document.querySelector(`.masg`).textContent = `correct Number`;

document.querySelector(`.number`).textContent = 12;
document.querySelector(`.score`).textContent = 12;

document.querySelector(`.guess`).value = 33;
console.log(document.querySelector(`.guess`).value);
*/
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
document.querySelector(`.score`).textContent = score;




document.querySelector(`.btn-chenk`).addEventListener
    ('click', function (value) {
        const dd = Number(document.querySelector(`.guess`).value);
        console.log(dd, typeof dd);
        if (score > highscore) {
            highscore = score
        }
        if (!dd) {
            document.querySelector(`.masg`).textContent = `no number`;
            ///when win
        } else if (dd === number) {
            document.querySelector(`.masg`).textContent = `correct Number`;
            document.querySelector(`body`).style.backgroundColor = `#444`;
            document.querySelector(`.number`).textContent = number;

        }
        else if (dd > number) {
            if (score > 1) {
                document.querySelector(`.masg`).textContent = `(high number)`;
                score--;
                document.querySelector(`.score`).textContent = score;
            }


        }
        else if (dd < number) {
            document.querySelector(`.masg`).textContent = `(too low number)`;
            score--;
            document.querySelector(`.score`).textContent = score;
        }
        else {
            document.querySelector(`.masg`).textContent = `(loose game)`;
        }
    })


document.querySelector(`.again`).addEventListener(`click`, function () {

    number = Math.trunc(Math.random() * 20) + 1;
    console.log(document.querySelector(`.masg`).textContent = `guessing number...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    score = `20`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.guess`).value = ``;
})

