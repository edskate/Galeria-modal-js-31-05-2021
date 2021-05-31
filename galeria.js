let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelectorAll('.modal');
let modalimg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";


for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){

        srcVal = imagens[i].getAttribute('src')
        modalimg.setAttribute('src', srcVal);
        modal.classlist.toggle('modal_active');
    });
    }



