// Script by BOOTSTRAP to aid form validation:
// Example starter JavaScript for disabling form submissions if there are invalid fields

// Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})


// Custom script to trigger "my-thank-you-modal" after clicking 'Send' of either forms

const myThankYouModal = document.getElementById("my-thank-you-modal")

// fetch all of my forms - both for volunteering and donating.
const myForms = document.querySelectorAll(".my-form")

// apply a new submit event listener
Array.from(myForms).forEach(form => {
    form.addEventListener("submit", event => {
        // if none of the input fields are :invalid - meaning they all passed Bootstrap's
        // validations in the previous steps...
        let invalidInputs = form.querySelectorAll(":invalid");
        if (invalidInputs.length === 0) {
            // ...prevent the default submit event
            event.preventDefault()
            // ...apply data-bs-toggle and data-bs-target attributes to form so that the 
            // ...click event will trigger my-thank-you-modal to appear
            form.dataset.bsToggle = "modal"
            form.dataset.bsTarget = "#my-thank-you-modal"
            // ...inintiate the click() event
            form.click()
            // ...reset all fields and attributes so they don't linger for next time.
            form.classList.remove("was-validated")
            form.reset()
            form.removeAttribute("data-bs-toggle")
            form.removeAttribute("data-bs-target")
        }
    })
})


// custom script to close sidebar after clicking 'Donate' button - otherwise it would stay open even
// after we sent off the Donate form.

const myDonateBtn = document.getElementById('my-donate-btn')
myDonateBtn.addEventListener('click', () => {
    // when 'Donate' was reached from sidebar
    if (window.innerWidth < 768) {
        // by clicking the burger icon again, we initiate 'toggling' which will close sidebar.
        const myBurgerIcon = document.querySelector('.navbar-toggler')
        myBurgerIcon.click()
    }
    
})
