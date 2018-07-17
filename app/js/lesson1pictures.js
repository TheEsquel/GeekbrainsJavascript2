'use strict';
window.onload = function(){
    console.log('test');
    var btnGetImages = document.getElementById('btnGallery'),
        galleryDiv =  document.getElementById('ajaxGallery'),
        imageViewer = document.getElementById('imageViewer');
        btnGetImages.addEventListener('click', function () {
            if(btnGetImages.innerText === 'Show pictures'){
                let xhr = new XMLHttpRequest();
                xhr.open('GET', './json/pictures.json', true);
                xhr.onreadystatechange = function(){
                    if(xhr.readyState !== 4){
                        return
                    }
                    if(xhr.status !== 200){
                        console.log('ready state: '+xhr.readyState + ', status: ' + xhr.status);
                    }else{
                        let jsonData = JSON.parse(xhr.responseText);
                        let picturesNumber = Object.keys(jsonData).length;  //вычиcляем количество элементов в JSON
                        for(let i=0;i<picturesNumber;i++){
                            let divID = 'item_'+ i;
                            let galleryItem = document.createElement('div');
                            galleryItem.classList.add('galleryItem');
                            galleryItem.setAttribute('id', divID);
                            galleryDiv.appendChild(galleryItem);
                            let pictureItem = document.createElement('img');
                            pictureItem.setAttribute('src', jsonData[i].urlPrev);
                            galleryItem.appendChild(pictureItem);
                            pictureItem.addEventListener('click', function () {
    // по нажатию на превью загружаем большую картинку
                                let bigPicture = document.createElement('img');
                                imageViewer.innerHTML = '';
                                imageViewer.appendChild(bigPicture);
                                    bigPicture.setAttribute('id', 'bigPicture');
                                console.log(jsonData[i].url);
                                bigPicture.setAttribute('src', jsonData[i].url);
                            });
                        }

                    }
                };
                xhr.send();
                btnGetImages.innerText = 'Hide pictures';
            }else{
                galleryDiv.innerHTML = '';
                imageViewer.innerHTML = '';
                btnGetImages.innerText = 'Show pictures';
            }

        });

};

