const links = document.querySelectorAll('a');

function ativarLink(item) {
    const href = item.href == document.location.href
    if(href) {
        item.style.background = 'black';
        item.style.color = 'white';
        item.style.padding = '1px 2px';
        item.style.margin = '1px';
        item.style.borderRadius = '4px';
        item.style.textDecoration = 'none';
    }
    console.log(href)
}

links.forEach((item, index) => {
    ativarLink(item)
    // console.log(item.innerHTML)
});



