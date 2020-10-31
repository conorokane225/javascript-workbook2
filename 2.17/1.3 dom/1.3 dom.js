//Question 1:
//For each of the following, give at least one way of how to access them:
//The <div> DOM node?
//The <ul> DOM node?
//The second <li> (with Pete)?

document.body.firstElementChild //<div>
document.body.lastElementChild //<ul>
document.body.lastElementChild.lastElementChild //li

//Question 2:
//If elem – is an arbitrary DOM element node…
//Is it true that elem.lastChild.nextSibling is always null?
//Is it true that elem.children[0].previousSibling is always null?

//Answer: true, false


