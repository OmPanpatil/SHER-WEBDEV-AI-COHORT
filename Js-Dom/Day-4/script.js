// Getattribute, setattribute, creating an element, mouse elements, keyboard elements, scroll events, Double click events, wheel events, etc.

var heading1 = document.querySelector('h1');
heading1.innerHTML = "How's it going?";
// heading1.style.color = 'lightcoral';
var att = heading1.getAttribute('id');
console.log(att);


// getAttribute : it is used for getting the value of an attribute from an element. Here, we are getting or using the id or class attributes only from the element.  
// setAttribute : it is used for setting the value of an attribute to an element. Here, we use both the attribute and attribute names for setting the value of an attribute to an element.

var images = document.querySelector('img');
console.log(images.getAttribute('src'));
console.log(images.getAttribute('alt'));
console.log(images.getAttribute('id'));

// images.setAttribute('src', 'https://images.unsplash.com/photo-1733041449219-deacc2a0e898?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

var head3 = document.createElement('h3');
console.log(head3);
head3.innerHTML = 'hayayayayaya';

var div = document.createElement('div');
console.log(div);

var bodies = document.querySelector('body');
// bodies.innerHTML = head3;
bodies.appendChild(head3);


var imagesss = document.createElement('img');

imagesss.setAttribute('src', 'https://images.unsplash.com/photo-1731331121037-0c9b31455ddd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

imagesss.style.padding = '3rem';

var bodies = document.querySelector('body');
bodies.appendChild(imagesss);