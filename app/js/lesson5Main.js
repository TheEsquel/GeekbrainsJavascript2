$(function () {

// создаем  товары

   let mouse = new Good(1, 'Computer mouse' , 500);
   let keyboard = new Good(2, 'Keyboard', 1000);
   let dynamic = new Good(3, 'Dynamic' , 1500);

   let goodsCatalog = $('#goodsCatalog');

   mouse.render(goodsCatalog);
   keyboard.render(goodsCatalog);
   dynamic.render(goodsCatalog);

// создаем корзину

    let basket = new Basket(1);
    basket.render($('#basketContainer'));

//  навешиваем  обработчики на кнопки добавления

   $('.buyButton').on('click', function () {
       let id = parseInt($(this).attr('data-id'));
       let price = parseInt($(this).parent().find('.goodPrice').text());
       basket.add(id, price);
   });
   $('.btnRemove').on('click', function () {
       basket.removeAll();
   })
});