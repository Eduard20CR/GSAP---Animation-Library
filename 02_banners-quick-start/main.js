// TEXTAREA
let input = document.querySelector('#main');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let pilsContainer = document.querySelector('#pilsContainer');
// BTN
let btnSubmit = document.querySelector('#btnSubmit');
let btnHtml = document.querySelector('#btnHtml');
let btnCss = document.querySelector('#btnCss');
let btnJs = document.querySelector('#btnJs');
let btnFinish = document.querySelector('#btnFinish');
let container__setings = document.querySelector('#container__setings');
let direction = document.querySelector('#direction');
let opacity = document.querySelector('#opacity');
let scale = document.querySelector('#scale');
let allPills;
// VARIABLES
let arrayImg;
let objectItem;
let siType;
let noType;
let counter = 0;
let itemEdit = null;

let finalHtml = '';
let finalCss = '';
let finalJs = '';
// objectItem = {
//     name: noType,
//     url: siType,
//     cssParams: {
//         direction: '',
//         opacity: '',
//         scale: ''
//     },
//     htmlCode: '',
//     cssCode: '',
//     jsCode: ''
// };
let itemObsject = [];

btnSubmit.addEventListener('click', startProces);
btnFinish.addEventListener('click', setAllParams);
direction.addEventListener('change', changeDirection);
opacity.addEventListener('change', changeOpacity);
scale.addEventListener('change', changeScale);
btnHtml.addEventListener('click', copyClipboardHtml);
btnCss.addEventListener('click', copyClipboardCss);
btnJs.addEventListener('click', copyClipboardJs);

// ------------------------------------START PROCESS----------------------------------
function startProces() {
    itemEdit = null;
    itemObsject = [];
    divideText();
    if (arrayImg[0] == '') {
        closeOption();
        objectItem = null;
        createPills();
        return;
    }
    for (item of arrayImg) {
        siType = item;
        noType = removeType(item)
        objectItem = {
            name: noType,
            url: siType,
            cssParams: {
                direction: '',
                opacity: '',
                scale: ''
            },
            htmlCode: '',
            cssCode: '',
            jsCode: ''
        };
        itemObsject.push(objectItem);
        createPills();
        openOption();
    }
    objectItem = null;
}

function setAllParams() {
    for (item of itemObsject) {
        let htmlCode = setHTML(item);
        let cssCode = setCss(item);
        let jsCode = setJs(item);

        item.htmlCode = htmlCode;
        item.cssCode = cssCode;
        item.jsCode = jsCode;
        counter++;
    }
    counter = 0;

    setFinalTask();
}

function setFinalTask() {
    finalHtml = '';
    finalCss = '';
    finalJs = '';
    for (item of itemObsject) {
        finalHtml = finalHtml.concat(`\n`, item.htmlCode)
        finalCss = finalCss.concat(`\n`, item.cssCode)
        finalJs = finalJs.concat(`\n`, item.jsCode)
    }
    finalHtml = finalHtml.replace(/^\s*\n/gm, "");
    finalCss = finalCss.replace(/^\s*\n/gm, "");
    finalJs = finalJs.replace(/^\s*\n/gm, "");
    html.value = finalHtml;
    css.value = finalCss;
    js.value = finalJs;
}


// ------------------------------------SET LENGUAJES----------------------------------
function setHTML(item) {
    let htmlCode;

    let container = document.createElement('div');
    container.setAttribute("id", item.name);
    container.setAttribute("class", 'size retina');

    var containString = document.createElement("div");
    containString.appendChild(container);
    htmlCode = containString.innerHTML
        // htmlCode = container
    return htmlCode;
}

function setCss(item) {
    let newCss = `#${item.name} {
        background: url(../img/${item.url});
        ${ directionReturn() }
        ${ opacityReturn() }
        ${ scaleReturn() }
    }`;
    newCss = newCss.replace(/^\s*\n/gm, "");
    return newCss;
}

function setJs(item) {
    let newJs = `"${item.url}",`;
    return newJs;
}

function createPills() {
    pilsContainer.innerHTML = '';
    let i = 0;
    for (item of itemObsject) {
        let container = document.createElement('div');
        container.setAttribute("class", 'container__pilsItem');
        container.setAttribute("id", "item" + i);
        container.setAttribute("onClick", 'setItem(' + i + ')');
        container.innerHTML = item.name;
        pilsContainer.appendChild(container);
        i++;
    }
    i = 0;
}


// ------------------------------------FUNCTIONALITES----------------------------------
// --------DIVIDE TEXT IN A STRING--------
function divideText() {
    arrayImg = input.value.split('\n')
}
// --------REMOVE TYPE FILE--------
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
// --------SET CSS--------
function directionReturn() {
    if (itemObsject[counter].cssParams.direction != '') {
        switch (itemObsject[counter].cssParams.direction) {
            case 'left':
                return 'left: var(--left);'
            case 'right':
                return 'left: var(--right);'
            case 'top':
                return 'top: var(--top);'
            case 'bottom':
                return 'top: var(--bottom);'
        }
    } else {
        return '';
    }
}

function opacityReturn() {
    if (itemObsject[counter].cssParams.opacity != '') {
        return `opacity: ${itemObsject[counter].cssParams.opacity};`
    } else {
        return '';
    }
}

function scaleReturn() {
    if (itemObsject[counter].cssParams.scale != '') {
        return `transform: scale(${itemObsject[counter].cssParams.scale});`
    } else {
        return '';
    }
}

// --------SET OPTIONS PILLS--------

function openOption() {
    container__setings.style.maxHeight = "400px";
}

function closeOption() {
    container__setings.style.maxHeight = "0";
}

function setItem(i) {
    itemEdit = i;
    allPills = document.querySelectorAll('.container__pilsItem');
    for (item of allPills) {
        item.removeAttribute("class")
        item.setAttribute("class", 'container__pilsItem')
    }
    document.getElementById('item' + i).classList.toggle("active", true);
    direction.value = itemObsject[itemEdit].cssParams.direction
    opacity.value = itemObsject[itemEdit].cssParams.opacity
    scale.value = itemObsject[itemEdit].cssParams.scale
}

function changeDirection() {
    if (itemEdit == null) {
        resetSelect();
    }
    itemObsject[itemEdit].cssParams.direction = direction.value;
}

function changeOpacity() {
    if (itemEdit == null) {
        resetSelect();
    }
    itemObsject[itemEdit].cssParams.opacity = opacity.value;
}

function changeScale() {

    if (itemEdit == null) {
        resetSelect();
    }
    itemObsject[itemEdit].cssParams.scale = scale.value;
}

function resetSelect() {
    alert('Select a container')
    direction.value = '';
    opacity.value = '';
    scale.value = '';
}

// --------SET OPTIONS PILLS--------
function copyClipboardHtml() {
    html.select();
    html.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(html.value);
}

function copyClipboardCss() {
    css.select();
    css.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(css.value);
}

function copyClipboardJs() {
    js.select();
    js.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(js.value);
}