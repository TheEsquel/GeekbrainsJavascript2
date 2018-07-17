class Basket {

    constructor(id){

        this.id = id;

        this.countGoods = 0;
        this.amountGoods = 0;
        this.basketItems = [];
        this.getItems();
    }
    render ($jqueryElement) {
        let $basketDiv = $(`<div  />`, {
            id: this.id
        });
        let $basketItemsDiv = $(`<div />`, {
            id: this.id + 'Items'
        });
        $basketItemsDiv.appendTo($basketDiv);
        $basketDiv.appendTo($jqueryElement);
        $basketDiv.css({
            border: 'thin solid darkgreen',
            borderRadius: '5%'
        });
        $basketDiv.addClass('goodItem');
    }
    getItems(){
    $.ajax({
        type: 'get',
        url: './json/lesson5Basket.json',
        dataType: 'json',
        context: this,
        success: function (data){
            let $basketData = $(`<div />`, {
               id: 'basketData'
            });

            this.countGoods = data.basket.length;
            this.amountGoods = data.amount;

            for(let key in data.basket){
                this.basketItems.push(data.basket[key]);
            }
            $basketData.append(`<p>Всего товаров:  ${this.countGoods}</p>`);
            $basketData.append(`<p>Общая стоимость:  ${this.amountGoods}</p>`);
            $basketData.appendTo('#' + this.id + 'Items');

            let $buttonRemove = $('<button>', {
                class: ('btn btn-danger btnRemove'),
                text: 'Remove all'
            });
            $buttonRemove.appendTo('#'+ this.id + 'Items');
        },
        error: function(error){
            console.log('Error' + error)
        }

    })
    }
    add(idProduct, price){
        let newItem = {
            id: idProduct,
            price
        };
        this.amountGoods += price;
        this.countGoods++;
        console.log(`${this.amountGoods}    ${this.countGoods}`);
        this.basketItems.push(newItem);
        this.refresh();


    }
    removeAll(){

        console.log('Remove all');
        this.countGoods = 0;
        this.amountGoods = 0;
        this.basketItems = [];
        this.refresh();

    }
    refresh(){

        console.log(this.basketItems);
        let $basketDataDiv = $('#basketData');
            $basketDataDiv.empty();


        $basketDataDiv.append(`<p>Всего товаров: ${this.countGoods}</p>`);
        $basketDataDiv.append(`<p>Общая стоимость: ${this.amountGoods}</p>`);
    }


}