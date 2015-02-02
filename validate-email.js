function validate_email(email)
{
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    return email.length > 0 && emailReg.test(email);
}