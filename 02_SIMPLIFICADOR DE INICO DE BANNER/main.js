// TEXTAREA
let input = document.querySelector('#main');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let pilsContainer = document.querySelector('#pilsContainer');
// BTN
let btnSubmit = document.querySelector('#btnSubmit');
let btnHtml = document.querySelector('#btnSubmit');
let btnCss = document.querySelector('#btnSubmit');
let btnJs = document.querySelector('#btnSubmit');
// VARIABLES
let arrayImg;
let objectItem;
let siType;
let noType;
// let idea = [{
//     id: 'copy',
//     name: 'copy.png',
//     html: 'copy.png',
//     css: 'copy.png',
//     js: '"copy.png",',
// }];
let itemObsject = [];

btnSubmit.addEventListener('click', startProces);

// ------------------------------------START PROCESS----------------------------------
function startProces() {

    itemObsject = [];
    divideText();
    for (item of arrayImg) {
        siType = item;
        noType = removeType(item)

        let htmlCode = setHTML(item);
        objectItem = {
            name: noType,
            url: siType,
            html: htmlCode,
            css: '',
            js: '',
        };
        itemObsject.push(objectItem);
        createPills();
    }
    console.log(itemObsject);

}


// ------------------------------------SET LENGUAJES----------------------------------
function setHTML(item) {
    let htmlCode;

    let container = document.createElement('div');
    container.setAttribute("id", noType);
    container.setAttribute("class", 'size');

    // var containString = document.createElement("div");
    // containString.appendChild(container);
    // htmlCode = containString.innerHTML

    htmlCode = container
    return htmlCode;
}

function setCss() {

}

function setJs() {

}

function createPills() {
    pilsContainer.innerHTML = '';
    for (item of itemObsject) {
        let container = document.createElement('div');
        container.setAttribute("class", 'container__pilsItem');
        container.setAttribute("id", item.name);
        container.innerHTML = item.name;
        pilsContainer.appendChild(container);
    }

}
// ------------------------------------FUNCTIONALITES----------------------------------
function divideText() {
    arrayImg = input.value.split(' ')
}

function removeType(e) {
    // return
    if (e.includes('.png')) {
        return e.replace('.png', '');
    }
    if (e.includes('.jpg')) {
        return e.replace('.jpg', '');
    }
    return e;
}