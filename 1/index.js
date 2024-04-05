// Document: DOMContentLoaded event
// The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

// DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for stylesheets, and the DOMContentLoaded event is queued after deferred scripts. Also, scripts which aren't deferred or async (e.g. <script>) will wait for already-parsed stylesheets to load.

// A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.

// This event is not cancelable.


// Explanation:

// The HTML structure contains an input field where the user can enter their name and a button to trigger the greeting. The greeting message will be displayed below the button.
// In the JavaScript part:
// We wait for the DOM content to be fully loaded before executing any JavaScript code, using the DOMContentLoaded event.
// We define a function greetUser() to handle the greeting process.
// Inside greetUser(), we get the value entered by the user in the input field and check if it's not empty.
// If the name is not empty, we display a greeting message that includes the user's name.
// If the name is empty, we prompt the user to enter their name.
// We add a click event listener to the "Greet" button, which triggers the greetUser() function when clicked.
// This solution creates a  simple interactive webpage that greets the user based on their input.

document.addEventListener('DOMContentLoaded', function(){
    function geetUser(){

        // get the value of input field
        var name = document.getElementById('nameInput').value;
        
        if (name.trim() !== '') {
            // displaying msg in greetingMsg paragraph
            document.getElementById('greetingMsg').textContent = "hello, "+ name +" welcome to my first project";

            // after displaying msg emptying the input field
            document.getElementById('nameInput').value = '';
        } else {
            alert("please enter name !")

        }
    }

    document.getElementById('greetBtn').addEventListener('click',geetUser);
});
