// Function to update the first counter
function updateFirstCounter() {
    const firstNumberInput = document.getElementById('firstNumber');
    const firstNumber = parseInt(firstNumberInput.value);
    if (firstNumber === 60) {
        firstNumberInput.classList.add('green-text');
    } else {
        firstNumberInput.classList.remove('green-text');
    }
}

// First counter functionality (Total Box Count)
const firstNumberInput = document.getElementById('firstNumber');
const increaseFirst = document.getElementById('increaseFirst');
const decreaseFirst = document.getElementById('decreaseFirst');

increaseFirst.addEventListener('click', () => {
    let firstNumber = parseInt(firstNumberInput.value);
    firstNumber++;
    firstNumberInput.value = firstNumber;
    updateFirstCounter();
});

decreaseFirst.addEventListener('click', () => {
    let firstNumber = parseInt(firstNumberInput.value);
    if (firstNumber > 0) {
        firstNumber--;
    }
    firstNumberInput.value = firstNumber;
    updateFirstCounter();
});

// Second counter functionality (31s)
const secondNumberInput = document.getElementById('secondNumber');
const increaseSecond = document.getElementById('increaseSecond');
const decreaseSecond = document.getElementById('decreaseSecond');

increaseSecond.addEventListener('click', () => {
    let secondNumber = parseInt(secondNumberInput.value);
    secondNumber++;
    secondNumberInput.value = secondNumber;
});

decreaseSecond.addEventListener('click', () => {
    let secondNumber = parseInt(secondNumberInput.value);
    if (secondNumber > 0) {
        secondNumber--;
    }
    secondNumberInput.value = secondNumber;
});

// Reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    firstNumberInput.value = 0;
    secondNumberInput.value = 0;
    firstNumberInput.classList.remove('green-text');
});

// Allow typing and use the typed number for the + and - buttons
firstNumberInput.addEventListener('change', updateFirstCounter);

// Key press event for right and left arrows to increase/decrease the first counter
let mouseHovering = false;

// Track when mouse enters or leaves the window
document.addEventListener('mouseenter', () => {
    mouseHovering = true;
});

document.addEventListener('mouseleave', () => {
    mouseHovering = false;
});

// Handle the keypress event globally only when the mouse is hovering over the window
window.addEventListener('keydown', (e) => {
    if (mouseHovering) {
        if (e.key === 'ArrowRight') {
            // Increase the first number
            let firstNumber = parseInt(firstNumberInput.value);
            firstNumber++;
            firstNumberInput.value = firstNumber;
            updateFirstCounter();
        }
        if (e.key === 'ArrowLeft') {
            // Decrease the first number
            let firstNumber = parseInt(firstNumberInput.value);
            if (firstNumber > 0) {
                firstNumber--;
            }
            firstNumberInput.value = firstNumber;
            updateFirstCounter();
        }

        if (e.key === 'ArrowUp') {
            // Increase the second number (31s) with the up arrow
            let secondNumber = parseInt(secondNumberInput.value);
            secondNumber++;
            secondNumberInput.value = secondNumber;
        }
        if (e.key === 'ArrowDown') {
            // Decrease the second number (31s) with the down arrow, but not below 0
            let secondNumber = parseInt(secondNumberInput.value);
            if (secondNumber > 0) {
                secondNumber--;
            }
            secondNumberInput.value = secondNumber;
        }
    }
});

// Buttons will still only work when clicked, and mouse hovering over buttons does not trigger them anymore.
