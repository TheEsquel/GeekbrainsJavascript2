class Good {

    constructor(id, title, price){
        this.id = id;
        this.title = title;
        this.price = price;

    }

    render(jqueryObject){

        // создаем  оболочку
        let $goodContainer = $('<div  />', {
            class: 'goodItem',
            css:{
                border: 'thin solid darkgrey',
                backgroundColor: 'lightgrey'
            }
        });
                                     //  создаем название
        let $goodTitle = $('<p />',{
           text : this.title
        });
        let $goodPrice = $(`<p>Price<span class="goodPrice"> ${this.price}</span> </p>`);

        let $goodButton = $(`<button />`,{
            class: 'buyButton btn',
            text: 'Buy',
            'data-id': this.id
        });
        $goodContainer.append($goodTitle);
        $goodContainer.append($goodPrice);
        $goodContainer.append($goodButton);
        jqueryObject.append($goodContainer);

    }

}