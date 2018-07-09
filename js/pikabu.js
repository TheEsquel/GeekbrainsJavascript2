// 1.   на чистом js  исправить текст после  span
window.onload = function(){

    let task1 =  document.getElementsByClassName('example')[0].innerHTML;
    task1 = task1.replace('пять','четыре');
    document.getElementsByClassName('example')[0].innerHTML = task1;

}