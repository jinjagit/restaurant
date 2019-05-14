console.log("Hello World!");

const title = document.createElement('h1');
title.innerHTML = "Decadence";
content.appendChild(title);

const mainImg = document.createElement('img');
mainImg.src = "img/restaurant.jpg";
mainImg.alt = "restaurant";
mainImg.id = "restaurant";
content.appendChild(mainImg);

const tagContainer = document.createElement('div');
tagContainer.classList.add('container');
content.appendChild(tagContainer);

const tagLine = document.createElement('p');
tagLine.innerHTML = "Surpass your highest expectations, including price.";
tagContainer.appendChild(tagLine);
