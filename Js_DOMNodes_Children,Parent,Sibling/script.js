// will work in the browser

// to access the first child wheteher its a space(text), comment or any element
document.body.firstChild

// to ignore the spaces (texts) and to access only the first element
document.body.firstElementChild 

// to access all the nodes including spaces, texts and comments
document.body.firstElementChild.childNodes 

// to access only the elements and ignoring the spaces (texts)or comments
document.body.firstElementChild.children

// includes everything, and tells the previous sibling
document.body.firstElementChild.children[1].previousSibling
// includes everything, and tells the next sibling
document.body.firstElementChild.children[1].nextSibling


// ignores the spaces, texts, etx, and tells the previous sibling
document.body.firstElementChild.children[1].nextElementSibling
// ignores the cpaces, texts, etc, and tells the next sibling
document.body.firstElementChild.children[1].nextElementSibling



