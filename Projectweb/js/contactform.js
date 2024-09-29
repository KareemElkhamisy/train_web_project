document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate firstname
    const firstname = document.getElementById("firstname");
    const firstnameError = document.getElementById("firstnameError");
    if (firstname.value.trim() === "") {
      firstnameError.textContent = "Firstname is required.";
      return;
    } else {
      firstnameError.textContent = "";
    }

    // Validate email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email.value)) {
        alert('Error Invalid Email. Please re-enter your email!');
      //emailError.textContent = "Invalid email.";
      return;
    } else {
      emailError.textContent = "";
    }
      
      // Validate subject
    const subject = document.getElementById("subject");
    const subjectError = document.getElementById("subjectError");
    if (subject.value.trim() === "") {
      subjectError.textContent = "Subject is required.";
      return;
    } else {
      subjectError.textContent = "";
    }

    // If all validations pass, submit the form
    form.submit();
    alert('Form submitted sucessfully... Thank you, we will be in touch soon!');  
      
  });
});