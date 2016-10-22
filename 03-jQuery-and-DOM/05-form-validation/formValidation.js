function validate() {
    let isCompany = false;
    $('#company').on('change', toggleCompanyInfo);
    $('#submit').click(validateForm);

    function toggleCompanyInfo() {
        let companyInfo = $('#companyInfo');
        if ($(this).is(':checked')) {
            isCompany = true;
            companyInfo.css('display', 'inline');
        } else {
            isCompany = false;
            companyInfo.css('display', 'none');
        }
    }

    function validateForm(event) {
        event.preventDefault();
        let isValidForm = true;
        validateUsername();
        validateEmail();
        validatePassword();
        if (isCompany)   validateCompany();
        if (isValidForm) $('#valid').css('display', 'inline');
        else             $('#valid').css('display', 'none');

        function validateUsername() {
            let username = $('#username');
            let usernamePattern = /^[A-Za-z\d]{3,20}$/;
            if (username.val().match(usernamePattern)) {
                username.css('border', 'none');
            } else {
                username.css('border', 'solid red');
                isValidForm = false;
            }
        }

        function validatePassword() {
            let password = $('#password');
            let confirmPassword = $('#confirm-password');
            let passwordPattern = /^\w{5,15}$/;
            if (password.val().match(passwordPattern) && password.val() == confirmPassword.val()) {
                password.css('border', 'none');
            } else {
                password.css('border', 'solid red');
                isValidForm = false;
            }
            if (confirmPassword.val().match(passwordPattern) && password.val() == confirmPassword.val()) {
                confirmPassword.css('border', 'none');
            } else {
                confirmPassword.css('border', 'solid red');
                isValidForm = false;
            }
        }

        function validateEmail() {
            let email = $('#email');
            let emailPattern = /@(.*\.)+/g;
            if (emailPattern.exec(email.val())) {
                email.css('border', 'none');
            } else {
                email.css('border', 'solid red');
                isValidForm = false;
            }
        }

        function validateCompany() {
            let companyNumber = $('#companyNumber');
            if (companyNumber.val() >= 1000 && companyNumber.val() <= 9999) {
                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border', 'solid red');
                isValidForm = false;
            }
        }
    }
}
