$(document).ready(()=>{
const Articles = $('section#article');
let articles = Articles.find('div.p-collapse');

//closing all description tag
articles.each((index, article) => {
    $(article).find('p').slideUp(0.4)
})


const ArticleBgColors = {
    0 : '#f8f9fa',
    1 : '#f3f3f3',
}

const hoverColor = '#e5e6e7';
// give a stripe like effect to the articles
articles.each((index, article) => {
    if (index >= articles.length -1) {
        $(article).css('backgroundColor','white');
        
    } else {
        $(article).css('backgroundColor',ArticleBgColors[(index + 1)%2]);
    }
});


// enabling tooltips in the page
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//add drop down to article description
console.log(articles);
articles.each((index, article) => {
    $(article).hover(()=>{
        $(article).find('p').slideDown(0.4)
    },()=>{
        $(article).find('p').slideUp(0.4)
    })
})


})

