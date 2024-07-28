
document.addEventListener("DOMContentLoaded", function () {
    const mood = document.getElementById('mood');
    const body = document.getElementById('clr');
    const mem = document.getElementById('clr1');
    mood.addEventListener("click", function () {
        if (mood.value == "0") {
            document.body.classList.add("darkmood");
            mood.value = "1";
            mood.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            mood.style.backgroundColor = 'white';
            mood.style.color = 'black';
            mood.style.border = '2px solid black';
            body.style.backgroundColor = 'grey'
            mem.style.backgroundColor = 'grey'

        } else {
            document.body.classList.remove("darkmood");
            mood.value = "0";
            mood.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            mood.style.backgroundColor = 'black';
            mood.style.color = 'white';
            mood.style.border = '2px solid white';
            body.style.backgroundColor = '#994e4e'
            mem.style.backgroundColor = '#994e4e'
        }
    });
});

let array = [];
let memory = [];
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('#symb .btn-dark');
    const screen = document.getElementById('val');
    const meme = document.getElementById('m1');
    var memoryDiv = document.querySelector('.memory-div');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.value === 'M') {
                meme.innerHTML = memory.join(" ");
                memoryDiv.style.display = 'flex';
            }
            else if (button.value === '!') {
                array = [];
                screen.innerHTML = "00";
            } else if (button.value !== '=') {
                array.push(button.value);
                screen.innerHTML = array.join(" ");
            } else if (button.value === '=') {
                let sum = 0;
                let currentNumber = '';
                let currentOperation = '+';

                for (let i = 0; i < array.length; i++) {
                    if (!isNaN(array[i]) || array[i] === '.') {
                        currentNumber += array[i];
                    } else {
                        if (currentOperation === '+') {
                            sum += Number(currentNumber);
                        } else if (currentOperation === '-') {
                            sum -= Number(currentNumber);
                        } else if (currentOperation === 'x') {
                            sum *= Number(currentNumber);
                        } else if (currentOperation === '/') {
                            sum /= Number(currentNumber);
                        }
                        currentOperation = array[i];
                        currentNumber = '';
                    }
                }

                // Process the last number
                if (currentOperation === '+') {
                    sum += Number(currentNumber);
                } else if (currentOperation === '-') {
                    sum -= Number(currentNumber);
                } else if (currentOperation === 'x') {
                    sum *= Number(currentNumber);
                } else if (currentOperation === '/') {
                    sum /= Number(currentNumber);
                }

                screen.innerHTML = sum;
                array = [sum.toString()]; // Save the result for further calculations
                memory.push(sum);
                console.log(memory);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.close-btn').addEventListener('click', function () {
        var memoryDiv = document.querySelector('.memory-div');
        memoryDiv.style.display = 'none';
    });
});
