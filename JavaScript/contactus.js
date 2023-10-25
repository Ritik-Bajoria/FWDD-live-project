const contactUsForm = document.getElementById('contact-us');
console.log(contactUsForm);

contactUsForm.addEventListener("submit", (event)=> {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    const nameInput = document.getElementById("name");
    console.log(nameInput.value);
    const emailInput = document.getElementById("email");
    console.log(emailInput.value);
    const messageInput = document.getElementById("message");
    console.log(messageInput.value);

     if (
        nameInput.value === '' ||
        emailInput.value === '' ||
        messageInput.value === ''
    ) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    // Show the success message
    alert("Your message is received. You will revceive a reply email within 24 hours.");

    // Clear the form fields
    contactUsForm.reset();
});