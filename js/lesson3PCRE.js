'use strict'
class Form {

    constructor(input,  template){
        this.input = input;
        this.template = template;
        this.success = true;
    }
    validateForm(){
        let result = $('#validResult');
    // считываем значение из переданного input     
        let inputValue = this.input.val();
        if(!inputValue.match(this.template)){
            console.log('не совпадает ');
            $('#nameValid').css('border', '2px red');
            result.text('Invalid!');
            result.css('color', 'red');
        }else{
            console.log('совпадает');
            $('#nameValid').css('border', 'green');
            result.text('Valid!');
            result.css('color', 'green');
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
    });

    let cityChoose = $('#cityChoose');

//  функций для городов  через option
    $.ajax({
       url:'./js/cities.json',
       success: function (data) {
        // $('#testCity').html(data);
           for(let i = 0;  i < data.length; i++){
               // генерируем строку с option
                let optionElement = `<option value="${data[i].id}">${data[i].name}</option>`;
                cityChoose.append(optionElement);
           }
       }
    });


// функция для городов  через   input

    $.ajax({
       url:'./js/cities.json',
       dataType: 'json',
       success: function (data) {
           for(let i = 0; i < data.length; i++){
               $('#cityPrompt').append(`<option value="${data[i].name}">`);
           }
       }
    });

});
