document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById('username');
    const genButton = document.querySelector("#gen");
    let generatedCaptcha = '';
    const see = document.querySelector("#see");
    genButton.addEventListener("click", () => {
        const username = usernameInput.value;
        generatedCaptcha = "@" + username + (username.length);
        prompt("Your captcha is", generatedCaptcha);
    });
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        captchaInput = document.getElementById('captcha-input').value.trim();
        
        if (captchaInput === generatedCaptcha) {
            setTimeout(() => {
                window.location.href = "Cricket3.html"; 
            }, 1000);
        } else {
            see.textContent = "Captcha entered is wrong";
            see.style.color = "#f0f8ff";
            
            
            // Prevent form submission by not calling this.submit()
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#questionForm");
    const feedback = document.querySelector("#feedback");
    const answerInput = document.querySelector("#answer");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const Userinput = answerInput.value.trim();
        if(Userinput === "Brian Lara,1975" || Userinput === "Brian lara,1975" || Userinput === "brian lara,1975")
            {
                feedback.textContent = "You are correct";
                feedback.style.color = "green";
                setTimeout(() => {
                    window.location.href = "Cricket4.html";
                },1000);

               
            }
            else{
                feedback.textContent = "You are wrong, the correct answer is 'Brian Lara,1975'";
                feedback.style.color = "red";
                setTimeout(() => {
                    window.location.href = "Cricket4.html";
                },3000);
            }
    });
});

document.getElementById('navigateButton').addEventListener('click', function() {
    window.location.href = "Cricket5.html";
});



