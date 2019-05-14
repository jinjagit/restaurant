// home module:
const homePage = () => {
  let contentX = document.getElementById('content');

  const title = document.createElement('h1');
  title.innerHTML = "Decadence";
  contentX.appendChild(title);

  const mainImg = document.createElement('img');
  mainImg.src = "img/restaurant.jpg";
  mainImg.alt = "restaurant";
  mainImg.id = "restaurant";
  contentX.appendChild(mainImg);

  const tagContainer = document.createElement('div');
  tagContainer.classList.add('container');
  contentX.appendChild(tagContainer);

  const tagLine = document.createElement('p');
  tagLine.innerHTML = "Surpass your highest expectations, including price.";
  tagContainer.appendChild(tagLine);
};

export { homePage }
