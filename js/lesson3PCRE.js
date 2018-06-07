'use strict'
class Form {

    constructor(input,  template){
        this.input = input;
        this.template = template;
        this.success = true;
    }
    validateForm(){
    // считываем значение из переданного input     
        let inputValue = this.input.val();
        if(!inputValue.match(this.template)){
            console.log('не совпадает ');
            $('#nameValid').css('border', '2px red');
            $('#validResult').text('Invalid!');
            $('#validResult').css('color', 'red');
        }else{
            console.log('совпадает');
            $('#nameValid').css('border', 'green');
            $('#validResult').text('Valid!');
            $('#validResult').css('color', 'green');
        }
    }

}

$(function(){
    //  кнопка для валидации
    $('#btnValid').on('click', function(){
        // подгружаем   input 
        let nameInput = $('#nameValid'),
            nameTemplate = /^[A-Za-zА-Яа-я]+$/;;
            
        let emailInput = $('#emailValid'),
            emailTemplate = /^[a-z]+(\.|-)?[a-z]+@[a-z]+\.[a-z]{2,4}$/;

        let phoneInput = $('#phoneValid'),
            phoneTemplate = /^\+\d\(\d{3}\)\d{3}\-\d{4}$/;

    // создаем экземпляры класса Form через конструктор         
        let nameForm = new Form(nameInput, nameTemplate),
            emailForm = new Form(emailInput, emailTemplate),
            phoneForm = new Form(phoneInput, phoneTemplate);
     
        nameForm.validateForm();
        emailForm.validateForm();
        phoneForm.validateForm();
    });

    $('#btnEdit').on('click', function(){
        let textValue = $('#textToEdit').val();

        let textEdited = textValue.replace(/'/g, `"`);
        console.log(textValue);
        console.log(textEdited);
        $('#editedText').text(textEdited);
        $('#editedText').css({'color':'darkblue','font-size':'1.2em'});
    })
})
