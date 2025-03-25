



const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');


chatButton.addEventListener('click',() => {
    if(chatWindow.style.display=== 'none'  ){
        chatWindow.style.display = 'block';
        chatButton.innerHTML = '  <i class="fa-solid fa-x"></i> ';

    }else {
        chatWindow.style.display = 'none';
        chatButton.innerHTML = '  <i class="fa-solid fa-comments comment"> </i>  ';

    }

});





    const chatButtonS = document.getElementById('chatButton');
    const chatWindowS = document.getElementById('chatWindow');


    chatButtonS.addEventListener('click', () => {
    if (chatWindowS.style.display === 'none') {
    chatWindowS.style.display = 'block';
    chatButtonS.innerHTML = '  <i class="fa-solid fa-x"></i> ';

} else {
    chatWindowS.style.display = 'none';
    chatButtonS.innerHTML = '  <i class="fa-solid fa-comments comment"> </i>  ';

}

});

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.style.opacity = 1;
} else {
    scrollToTopBtn.style.opacity = '0';
}
});


    scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});



    function openOverlay() {
    var box = document.getElementById('overlay');
    if (box.style.display === 'none' || box.style.display === '') {
    box.style.display = 'block';

}

    function closeOverlay() {
    var closebtnnn = document.getElementById('closebtnnn');
    closebtnnn.addEventListener('click', () => {
    if (box.style.display === 'block'){
    box.style.display = 'none';
}
})


}



}


/*------------------------

    const burgermenuS = document.getElementById('burger-menubm');
    const burgerwindowS = document.getElementById('burger-menuM');


    burgermenuS.addEventListener('click', () => {
        if (burgerwindowS.style.display === 'none') {
            burgerwindowS.style.display = 'block';
            burgermenuS.innerHTML = '  <i class="fa-solid fa-x"></i> ';

        } else {
            burgerwindowS.style.display = 'none';
            burgermenuS.innerHTML = '  <i class="fa-solid fa-comments comment"> </i>  ';

        }


*/



/*------------------------------------------------------------------*/

    const divContainer = document.querySelectorAll('#maincontainer > div');
    divContainer.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;



/*---------------------


        const allParents = document.querySelectorAll('#maincontainer > div');
        allParents.forEach(function(parent) {
            parent.classList.remove('expanded');
        });

let expandedItems = document.querySelectorAll('.expanded');
expandedItems.forEach(function(expandedItem) {
 expandedItem.classList.remove('expanded');
 expandedItem.style.height = '';
 expandedItem.style.margin = '';
});

-------------------------*/


        let existingBox = document.querySelector('.new-box');
        if (existingBox){
            existingBox.remove();
        }


        let expandedItems = document.querySelectorAll('.expanded');
        expandedItems.forEach(function(expandedItem) {
            expandedItem.classList.remove('expanded');
            expandedItem.style.height = '';
            expandedItem.style.margin = '';
        });


        if (!target.querySelector('.new-box')) {
            let containerElement = document.createElement('div');
            containerElement.classList.add('new-box');
            target.appendChild(containerElement);
            target.parentElement.classList.add('expanded');

            if(window.innerWidth >= 1200){
                containerElement.style.width = window.innerWidth * 0.60 +'px';
            } else {
                containerElement.style.width = window.innerWidth * 0.80 +'px';
            }

            window.addEventListener('resize', () => {
                const newWidth = window.innerWidth * 0.5;
                containerElement.style.width = newWidth + 'px';

            });

        /*---------------------------------
            window.addEventListener('resize',() => {
                const screenWidth = window.innerWidth;
                const isnewboxopen = document.body.contains(containerElement);
                if(screenWidth < 1500 && isnewboxopen){
                    window.open('');
                }

            });

 let newPage = document.createElement('div');
 newPage.classList.add('newpage')
 ---------*/



            let btn5Element = document.createElement('button');
            btn5Element.classList.add('btn-close')
            btn5Element.innerText=' x '
            containerElement.appendChild(btn5Element);
            btn5Element.addEventListener('click',function (){
                containerElement.remove();



            });




            let insidecontainerElement = document.createElement('div');
            insidecontainerElement.classList.add('inside-box1')
            target.appendChild(insidecontainerElement);

            containerElement.appendChild(insidecontainerElement);










            let inside2containerElement = document.createElement('div');
            inside2containerElement.classList.add('inside-box2')
            target.appendChild(inside2containerElement);
            containerElement.appendChild(inside2containerElement);



            let inside3containerElement = document.createElement('div');
            inside3containerElement.classList.add('inside-box3')
            target.appendChild(inside3containerElement);
            containerElement.appendChild(inside3containerElement);


            let inside4containerElement = document.createElement('div');
            inside4containerElement.classList.add('inside-box4')
            target.appendChild(inside4containerElement);
            containerElement.appendChild(inside4containerElement);













            let imgElement = document.createElement('img');
            imgElement.classList.add('new-box-img')
            imgElement.src ="img/F70_Teaser_3000x3000_3to1.webp"
            imgElement.alt = 'Sample Image';
            imgElement.style.width = '40%';
            containerElement.appendChild(imgElement);


/*---------------------------------------------
            let textElement = document.createElement('p');
            textElement.classList.add('new-box-p')
            textElement.innerText='ab 143.100,00 $*'
            containerElement.appendChild(textElement);

*/







            let text1 = document.createElement('p');
            text1.classList.add('text1')
            text1.innerHTML='  <p>ab 57.900,00 €* </p> '
            insidecontainerElement.appendChild(text1);

            /*----------------------


                        let text2 = document.createElement('p');
                        text2.classList.add('text2')
                        text2.innerHTML='  <p>ab 57.900,00 €* </p> '
                        insidecontainerElement.appendChild(text2);


                        let text3 = document.createElement('p');
                        text3.classList.add('text3')
                        text3.innerHTML='  <p>ab 57.900,00 €* </p> '
                        insidecontainerElement.appendChild(text3);



                        let text4 = document.createElement('p');
                        text4.classList.add('text4')
                        text4.innerHTML='  <p>ab 57.900,00 €* </p> '
                        insidecontainerElement.appendChild(text4);

            --------------------*/

            let btnElement = document.createElement('button');
            btnElement.classList.add('new-box-btn')
            btnElement.innerText='fahrzeuginformationen '
            insidecontainerElement.appendChild(btnElement);




            let icon2 = document.createElement('i');
            icon2.classList.add('icon2')
            icon2.innerHTML='  <i class="fa-solid fa-car "></i>  '
            inside2containerElement.appendChild(icon2);




            let btn2Element = document.createElement('button');
            btn2Element.classList.add('new-box-btn2')
            btn2Element.innerText=' Verfügbare BMW iX M60  '
            inside2containerElement.appendChild(btn2Element);



            let icon3 = document.createElement('i');
            icon3.classList.add('icon3')
            icon3.innerHTML='  <i class="fa-solid fa-car "></i>  '
            inside3containerElement.appendChild(icon3);






            let btn3Element = document.createElement('button');
            btn3Element.classList.add('new-box-btn3')
            btn3Element.innerText='Konfigurieren & Preise '
            inside3containerElement.appendChild(btn3Element);





            let icon4 = document.createElement('i');
            icon4.classList.add('icon4')
            icon4.innerHTML='  <i class="fa-solid fa-car "></i>  '
            inside4containerElement.appendChild(icon4);






            let btn4Element = document.createElement('button');
            btn4Element.classList.add('new-box-btn4')
            btn4Element.innerText='  Gebrauchtwagensuche '
            inside4containerElement.appendChild(btn4Element);










        }
    });
});





    function openSidebar() {

        const sidebar = document.getElementById("mySidebar");

        sidebar.style.width = "100%";
        sidebar.classList.add('open');


    }

    function closeSidebar() {

        const sidebar = document.getElementById("mySidebar");

        sidebar.style.width = "0";

        setTimeout(() => {

            sidebar.classList.remove('open');

        }, 500);

    }





    /*------------------------------------*/





function openSidebar() {

    const sidebar = document.getElementById("mySidebar");

    sidebar.style.width = "100%";
    sidebar.classList.add('open');


}

function closeSidebar() {

    const sidebar = document.getElementById("mySidebar");

    sidebar.style.width = "0";

    setTimeout(() => {

        sidebar.classList.remove('open');

    }, 500);

}






