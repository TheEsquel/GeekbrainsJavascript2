window.onload = function(){
// 1.   на чистом js  исправить текст после  span
    let task1 =  document.getElementsByClassName('example')[0].innerHTML;
    task1 = task1.replace('пять','четыре');
    document.getElementsByClassName('example')[0].innerHTML = task1;

// 2.  переписать на jquery 

    let task2 = $('code')[3];
    console.log(task2);


};