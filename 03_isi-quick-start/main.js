// TEXTAREA
let input = document.querySelector('#main');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let pilsContainer = document.querySelector('#pilsContainer');
// BTN
let btnSubmit = document.querySelector('#btnSubmit');
let btnHtml = document.querySelector('#btnHtml');
let btnCss = document.querySelector('#btnCss');
let btnJs = document.querySelector('#btnJs');
let btnFinish = document.querySelector('#btnFinish');
let container__setings = document.querySelector('#container__setings');
let setType = document.querySelector('#setType');
let classes = document.querySelector('#classes');
let allPills;
// VARIABLES
let arrayImg;
let objectItem;
let siType;
let noType;
let h1 = 0;
let h2 = 0;
let h3 = 0;
let list = 0;
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
setType.addEventListener('change', changeType);
classes.addEventListener('keyup', changeClasses);
btnHtml.addEventListener('click', copyClipboardHtml);
btnCss.addEventListener('click', copyClipboardCss);


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
        type = returnType(item);
        noType = removeType(item)
        if (noType == '') continue;
        objectItem = {
            text: noType,
            type: type,
            htmlCode: '',
            class: ''
        };
        if (objectItem.type == 'ul' || objectItem.type == 'ul2' || objectItem.type == 'ol' || objectItem.type == 'ol2') {
            objectItem.type = type;
        }
        itemObsject.push(objectItem);
        createPills();
        openOption();
    }
    console.log(itemObsject)
    objectItem = null;
}

function setAllParams() {
    for (item of itemObsject) {
        let htmlCode = setHTML(item);


        item.htmlCode = htmlCode;
        counter++;
    }
    counter = 0;

    setFinalTask();
}

function setFinalTask() {
    finalHtml = '';
    finalCss = '';
    h1 = 0;
    h2 = 0;
    h3 = 0;
    list = 0;
    for (item of itemObsject) {
        setCssType(item);
    }
    for (item of itemObsject) {
        finalHtml = finalHtml.concat(`\n`, item.htmlCode)
        setCss(item);
    }
    finalHtml = finalHtml.replace(/^\s*\n/gm, "");
    finalCss = finalCss.replace(/^\s*\n/gm, "");
    html.value = finalHtml;
    console.log(finalCss);
    css.value = finalCss;
}


// ------------------------------------SET LENGUAJES----------------------------------


function setHTML(item) {
    let htmlCode;
    if (item.type == 'ol' || item.type == 'ol2' || item.type == 'ul' || item.type == 'ul2') {
        switch (item.type) {
            case 'ol':
                return '<ol>'
            case 'ol2':
                return '</ol>'
            case 'ul':
                return '<ul>'
            case 'ul2':
                return '</ul>'
        }
    }
    let container
    if (item.type == 'li') {
        container = document.createElement('li');
    } else {
        container = document.createElement('p');
    }
    switch (item.type) {
        case 'p':
            if (item.class != '') container.setAttribute("class", item.class);
            break;
        case 'h1':
            if (item.class != '') container.setAttribute("class", 'h1 ' + item.class)
            else container.setAttribute("class", 'h1');
            break;
        case 'h2':
            if (item.class != '') container.setAttribute("class", 'h2 ' + item.class)
            else container.setAttribute("class", 'h2');
            break;
        case 'h3':
            if (item.class != '') container.setAttribute("class", 'h3 ' + item.class)
            else container.setAttribute("class", 'h3');
            break;
        case 'li':
            if (item.class != '') container.setAttribute("class", 'list ' + item.class)
            else container.setAttribute("class", 'list');
            break;
        case 'list':
            if (item.class != '') container.setAttribute("class", 'list ' + item.class)
            else container.setAttribute("class", 'list');
            break;
        default:
            if (item.class != '') container.setAttribute("class", item.class);
            break;
    }
    container.innerHTML = item.text;
    var containString = document.createElement("div");
    containString.appendChild(container);
    htmlCode = containString.innerHTML
        // htmlCode = container
    return htmlCode;
}

function setCss(item) {
    if (item.class == '') return;
    let newclasses = divideText2(item.class)
    for (iteme of newclasses) {
        let newCss = `.${iteme} {    
}`;
        finalCss = finalCss.concat(`\n`, newCss)
    }
}

function setCssType(item) {
    let newCss;
    if (item.type == 'h1' && h1 == 0) {
        h1 = 1;
        newCss = `.h1 {
    color:#000000;
    font-weight: bold;
}`;
        finalCss = finalCss.concat(`\n`, newCss)
    };
    if (item.type == 'h2' && h2 == 0) {
        h2 = 1;
        newCss = `.h2 {
    color:#000000;
    font-weight: bold;
}`;
        finalCss = finalCss.concat(`\n`, newCss)
    };
    if (item.type == 'h3' && h3 == 0) {
        h3 = 1;
        newCss = `.h3 {
    color:#000000;
    font-weight: bold;
}`;
        finalCss = finalCss.concat(`\n`, newCss)
    };
    if (item.type == 'li' && list == 0 || item.type == 'list' && list == 0) {
        list = 1;
        newCss = `#isi .list{
    position: relative;
}
        
#isi .list::before {
    position: absolute;
    content: '•';
    margin-left: 20px;
}
        `;
        finalCss = finalCss.concat(`\n`, newCss)
    };
}

function setJs(item) {
    let newJs = `"${item.url}",`;
    return newJs;
}

function createPills(num) {
    pilsContainer.innerHTML = '';
    let i = 0;
    for (item of itemObsject) {
        let container = document.createElement('div');
        num == 2 && itemEdit == i ? container.setAttribute("class", 'container__pilsItem active') : container.setAttribute("class", 'container__pilsItem');
        container.setAttribute("id", "item" + i);
        container.setAttribute("onClick", 'setItem(' + i + ')');
        container.innerHTML = '<span class="type">' + item.type + '</span>' + ' - ' + item.text;
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

function divideText2(e) {
    return e.split(' ')
}
// --------REMOVE TYPE TAG--------
function removeType(e) {
    // return
    if (e.includes('*h1 ')) {
        return e.replace('*h1 ', '');
    }
    if (e.includes('*h1')) {
        return e.replace('*h1', '');
    }
    if (e.includes('*h2 ')) {
        return e.replace('*h2 ', '');
    }
    if (e.includes('*h2')) {
        return e.replace('*h2', '');
    }
    if (e.includes('*h3 ')) {
        return e.replace('*h3 ', '');
    }
    if (e.includes('*h3')) {
        return e.replace('*h3', '');
    }
    if (e.includes('*list ')) {
        return e.replace('*list ', '');
    }
    if (e.includes('*list')) {
        return e.replace('*list', '');
    }
    if (e.includes('*li ')) {
        return e.replace('*li ', '');
    }
    if (e.includes('*li')) {
        return e.replace('*li', '');
    }
    if (e.includes('*ul2')) {
        return 'ul2'
    }
    if (e.includes('*ul')) {
        return 'ul'
    }
    if (e.includes('*ol2')) {
        return 'ol2'
    }
    if (e.includes('*ol')) {
        return 'ol'
    }
    return e;
}
// --------RETUNR TYPE TAG--------
function returnType(e) {
    // return
    if (e.includes('*h1 ')) {
        return "h1";
    }
    if (e.includes('*h1')) {
        return "h1";
    }
    if (e.includes('*h2 ')) {
        return 'h2';
    }
    if (e.includes('*h2')) {
        return 'h2';
    }
    if (e.includes('*h3 ')) {
        return 'h3';
    }
    if (e.includes('*h3')) {
        return 'h3';
    }
    if (e.includes('*list ')) {
        return 'list'
    }
    if (e.includes('*list')) {
        return 'list'
    }
    if (e.includes('*li ')) {
        return 'li'
    }
    if (e.includes('*li')) {
        return 'li'
    }
    if (e.includes('*ul2')) {
        return 'ul2'
    }
    if (e.includes('*ul')) {
        return 'ul'
    }
    if (e.includes('*ol2')) {
        return 'ol2'
    }
    if (e.includes('*ol')) {
        return 'ol'
    }
    return 'p';
}
// --------SET CSS-------- XXXXXXXXXXXX
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
    setType.value = itemObsject[itemEdit].type
    classes.value = itemObsject[itemEdit].class
}

function changeType() {
    if (itemEdit == null) {
        resetSelect();
    }
    itemObsject[itemEdit].type = setType.value;

    console.log(itemObsject)
    createPills(2);
}

function changeClasses() {
    if (itemEdit == null) {
        resetSelect();
    }
    itemObsject[itemEdit].class = classes.value;
    createPills(2);
}


function resetSelect() {
    alert('Select a container')
    setType.value = '';
    classes.value = '';

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