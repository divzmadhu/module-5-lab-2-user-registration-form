Reflection Questions

Include your answers to the following questions in your submission, within the README.md file:

    How did event.preventDefault() help in handling form submission?
    What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
    Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
    Describe a challenge you faced in implementing the real-time validation and how you solved it.
    How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?




09/27/26 (Updates on the code done so far)

1. Confirm password validation
Getting the confirm password field to correctly compare with the password was challenging. I also had to make sure the error message appeared at the appropriate time instead of too early.

2. Validation timing
After adding more functionality, some error messages started appearing before I interacted with the fields. I had to understand why the validation was being triggered and how to control when it should happen.

3. Styling validation errors
I initially used the :invalid CSS selector, which caused the password fields to appear red as soon as the page loaded because they were required fields. I changed this approach to use an .error class controlled by JavaScript.

4. CSS selectors
I had a small issue with .form-group.error-message versus .form-group .error-message. Understanding the difference between selecting two classes on the same element and selecting a child element helped me understand CSS selectors better.

5. Form submission and reset
I learned how preventDefault() stops the browser's normal form submission and how form.reset() clears the form after successful registration.

6. Using localStorage
Used local storage to save and retrieve user information using JSON.stringify(), and JSON.parse().

7. Debugging after adding new features
Some things that were working earlier changed after I added new functionality. This made me go back through the code and understand which new changes were affecting the existing validation.

** Features I Added / Tried
==============================

1. Username validation using required and minlength.
2. Email validation using the HTML email type and JavaScript validity checks.
3. Password validation using required, minlength, and pattern.
4. Confirm password matching.
5. Real-time validation using the input event.
6. Custom error messages displayed next to each field.
7. Form submission validation using submit and preventDefault().
8. Saving username and email using localStorage.
9. Retrieving previously saved username and email when the page loads.
10. Added a shorter, centered Register button for a cleaner appearance.


** Features Added but Currently Removed / Kept for Later   ( test.js file)
=========================================================

1. Terms and Conditions checkbox
I added the checkbox and validation initially, but commented it out for now because it was causing validation/timing issues. I plan to work on it later.

2. Additional password/confirm-password behavior
I experimented with validating the confirm password while typing in the password field. This caused the confirm-password error to appear too early, so I changed the behavior and will continue improving the timing.

3. Built-in :invalid CSS styling
I tried using input:invalid to make invalid fields red, but removed it because the fields appeared red before the user interacted with them. I am currently using JavaScript to control the error styling instead.

4. Show/Hide Password button.
Almost done and working but had to comment it for now , when I saw few unwanted changes popping up. 



