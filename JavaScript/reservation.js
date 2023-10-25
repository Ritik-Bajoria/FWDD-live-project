const reservationForm = document.getElementById('reservation-form');
console.log(reservationForm);

reservationForm.addEventListener("submit", (event)=> {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    const nameInput = document.getElementById("book_name");
    console.log(nameInput.value);
    const emailInput = document.getElementById("book_email");
    console.log(emailInput.value);
    const phoneInput = document.getElementById("book_phone");
    console.log(phoneInput.value);
    const dateInput = document.getElementById("book_date");
    console.log(dateInput.value);
    const timeInput = document.getElementById("book_time");
    console.log(timeInput.value);
    const personSelect = document.getElementById("book_select");
    console.log(personSelect.value);



    if (
        nameInput.value === '' ||
        emailInput.value === '' ||
        phoneInput.value === '' ||
        dateInput.value === '' ||
        timeInput.value === '' ||
        personSelect.value === ''
    ) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Show the success message
    alert("Your reservation is noted. You will soon receive a confirmation call on the number provided");

    // Clear the form fields
    reservationForm.reset();
});