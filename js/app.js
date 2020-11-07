
//-------------------------------- skapa reset change and Knappar -----------------------------------

let skapaResetChangeKnapp = () => {
    let headerNav = document.getElementById('header-navigation')
    let resetKnapp = document.createElement('button');
    let changeKnapp = document.createElement('button');
    headerNav.appendChild(changeKnapp);
    resetKnapp.innerHTML = ' Reset ';
    changeKnapp.innerHTML = ' Change ';
    changeKnapp.style.marginLeft = '10px';
    changeKnapp.style.background = 'blue';
    changeKnapp.style.color = 'white';
    changeKnapp.style.width = '70px';
    resetKnapp.style.marginLeft = '10px';
    resetKnapp.style.width = '70px';
    resetKnapp.style.background = 'red';
    resetKnapp.style.color = 'white';

    // ------------------ ResetKnapp addEventListener---------------

    resetKnapp.addEventListener('click', () => {
        headerNav.removeChild(resetKnapp);
        location.reload();
    })
    // ------------------ ChangeKnapp addEventListener---------------

    changeKnapp.addEventListener('click', () => {
        ChangeFunction();
        headerNav.appendChild(resetKnapp);
        headerNav.removeChild(changeKnapp);
    })

}

skapaResetChangeKnapp();




// --------------------------------------------


let body = document.querySelector('body');
let newBtnsContainer = document.createElement('div');
newBtnsContainer.style.display = 'flex';
newBtnsContainer.style.flexDirection = 'column';
body.insertBefore(newBtnsContainer, body.childNodes[1]);
let newBtns;


//----------------------- Change Function-----------------------



//  ---------- Creat Change Buttons Function-----------------------

let ChangeFunction = () => {
    let buttonLista = ['Byt ut Fire Sinus Hoodie foto ( Den i mitten )', 'Ändra bakgrundsfärg för Fire Sinus Hoodie texten ( Den i mitten )', 'Ändra text på rubriken och underrubriken för  Fire Sinus Hoodie ( Den i mitten ) ', 'Ändra färg på alla knappar i de tre article ', 'Ta bort Ash Sinus Hoodie article (den första) ', 'Lägg till en lista ( längst ner ) '];
    for (let x = 0; x < buttonLista.length; x++) {
        newBtns = document.createElement('button');
        newBtns.className = ("newBtns-Class");
        newBtns.textContent = buttonLista[x];
        newBtnsContainer.appendChild(newBtns);
        newBtns.style.color = 'rgb(141, 0, 0)';
        newBtns.style.fontSize = '25px';
        newBtns.style.padding = '20px 0';
        newBtns.style.fontWeight = 'bold';
        newBtns.style.cursor = 'pointer';
        console.log(newBtns)
    }

    aktiveraButtons()

    // -------------------addEventListener to change style for the new buttons -----------

    newBtnsContainer.addEventListener('mousemove', function (event) {
        let hColor = event.x;
        for (i = 0; i < newBtns.length; i++) {
            switch (event.target) {
                case newBtns[i]:
                    newBtns[i].style.background = `hsl( ${hColor}, 80%, 70%)`;
                    newBtns[i].style.color = `hsl( 150, 60%, 20%)`;
            }
        }
    }
    )
    console.log(newBtns[0]);
}


// ------------------- fucntion for aktivera change Buttons med addEventListener  -----------

let aktiveraButtons = () => {
    newBtns = document.querySelectorAll('.newBtns-Class');
    newBtns[0].addEventListener('click', () => {
        let img = document.querySelector('.art-2 img');
        img.setAttribute('src', 'img/hoodie-forrest.png');
        newBtnsContainer.removeChild(newBtns[0]);
    })


    newBtns[1].addEventListener('click', () => {
        let articleEven = document.querySelector('main .art-2');
        articleEven.style.background = 'rgb(106, 148, 96';
        newBtnsContainer.removeChild(newBtns[1])
    })

    newBtns[2].addEventListener('click', () => {
        let h2Texten = document.querySelector('.art-2 h2');
        h2Texten.innerHTML = 'Nice Green Hoodie';
        let h3Texten = document.querySelector('.art-2 h3');
        h3Texten.innerHTML = 'Green';
        newBtnsContainer.removeChild(newBtns[2])

    })

    newBtns[3].addEventListener('click', () => {
        let articleBtn = document.querySelectorAll('article button');
        articleBtn.forEach(x => x.style.background = 'rgb(156, 126, 62)');
        newBtnsContainer.removeChild(newBtns[3])

    })
    newBtns[4].addEventListener('click', () => {
        let main = document.getElementsByTagName('main');
        let theFirstArticle = document.querySelector('.art-1');
        let mainImg = document.querySelectorAll('main article figure img')
        main[0].removeChild(theFirstArticle);
        mainImg.forEach(x => x.style.width = '60%')
        newBtnsContainer.removeChild(newBtns[4])

    })
    newBtns[5].addEventListener('click', () => {
        let listArray = ['Kundtjänst', 'Frågor', 'Nyheter', 'om oss']
        var newLista = document.createElement("ul");
        for (let i = 0; i < listArray.length; i++) {
            var listItem = document.createElement("li");
            var listItemtext = document.createTextNode(listArray[i]);
            listItem.style.border = 'solid 3px black';
            listItem.style.color = 'black';
            listItem.style.padding = '3px 30px';
            listItem.appendChild(listItemtext);
            newLista.appendChild(listItem);
        }
        var footer = document.querySelector('footer');
        footer.style.flexDirection = ' column';
        footer.style.alignItems = 'center';
        newLista.style.display = ' flex';
        newLista.style.justifyContent = 'space-between';
        newLista.style.width = ' 1000px';
        newLista.style.fontWeight = ' bold';
        newLista.style.listStyle = 'none';
        footer.appendChild(newLista);
        newBtnsContainer.removeChild(newBtns[5])

    })
}