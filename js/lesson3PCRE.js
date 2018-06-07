'use strict'
class Form {

    constructor(input,  template){
        this.input = input;
        this.template = template;
        this.success = true;
    }
    validateForm(){
        let inputValue = this.input.value;
        console.log(inputValue);
    }

}

$(function(){
    $('#btnEdit').on('click', function(){
        let nameInput = $('#nameValid'),
            nameTemplate = /^[a-zA-Zа-яА-Я]+$/;
            
        let emailInput = $('#emailValid'),
            emailTemplate = /^[a-z]+(\.|-)?[a-z]+@[a-z]+\.[a-z]{2,4}$/;

        let phoneInput = $('#phoneValid'),
            phoneTemplate = /^\+\d\(\d{3}\)\d{3}\-\d{4}$/;

        let nameForm = new Form(nameInput, nameTemplate),
            emailForm = new Form(emailInput, emailTemplate),
            phoneForm = new Form(phoneInput, phoneTemplate);


    })
})
