let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

// Function to update counter based on scroll position
function updateCounterOnScroll() {
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}

// Attach the updateCounterOnScroll function to the scroll event of the window
window.addEventListener("scroll", updateCounterOnScroll);

// Call the function initially to update counters based on the current scroll position
updateCounterOnScroll();
