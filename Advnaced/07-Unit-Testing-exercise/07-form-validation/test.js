function validate() {
    // TODO
    let submitBtn = document.getElementById('submit');
    let companyCheckBox = document.getElementById('company');
    // let submitBtn = document.querySelector('form#submit');
    submitBtn.addEventListener('click', validateForm);
    companyCheckBox.addEventListener('change', companyHandler);

    function validateForm(ev) {
        ev.preventDefault();
        let usernameInput = document.getElementById('username');
        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        // ^ and $ required since whole string must be correspond to regex
        // and not just some part of the string
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid);

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);

        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordRegex = /^\w{5,15}$/;
        // let passwordRegex = /[_A-Za-z0-9]{5,15}/;
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let confirmPasswordIsValid = passwordRegex.test(confirmPasswordInput.value);
        // && passwordInput.value === confirmPasswordInput.value;
        let passwordsAreOk = passwordIsValid
            && confirmPasswordIsValid
            && passwordInput.value === confirmPasswordInput.value;
        // let passwordsAreOkAlternative = passwordIsValid
        //     && passwordInput.value === confirmPasswordInput.value;

        setBorder(passwordInput, passwordsAreOk);
        setBorder(confirmPasswordInput, passwordsAreOk);

        // better to declare CompanyCheckbox inside of function in order to avoid
        // dependancy of closure on outside elements
        let companyNumberIsValid = false;
        let companyCheckBox = document.getElementById('company');
        if (companyCheckBox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');
            // let companyNumberIsValid = false;
            // trim in order to avoid empty string, since will return 0 when validated with Number
            if (companyNumberInput.value.trim() !== ''
                && !isNaN(companyNumberInput.value)) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }

            setBorder(companyNumberInput, companyNumberIsValid);
        }

        let validDiv = document.getElementById('valid');
        let mainFieldsValid = usernameIsValid
            && emailIsValid
            && passwordsAreOk;
        // && companyNumberIsValid;
        let companyInfoIsValid = !companyCheckBox.checked
            || (companyCheckBox.checked && companyNumberIsValid);

        let allFieldsValid = mainFieldsValid && companyInfoIsValid;
        validDiv.style.display = allFieldsValid ? 'block' : 'none';
    }

    function companyHandler(ev) {
        let companyInfoFieldSet = document.getElementById('companyInfo');

        companyInfoFieldSet.style.display = ev.target.checked
            ? 'block'
            : 'none';
    }

    function setBorder(element, isValid) {
        // element.style.borderColor = 
        if (isValid) {
            element.style.setProperty('border', 'none');
        } else {
            element.style.setProperty('border', '2px solid red');
            // printing out border color
            // console.log(element.style.getPropertyValue('border-color'));
            // console.log(element.style.getPropertyValue('border'));
        }
    }
}