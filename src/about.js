// 'about' page content module:
const about = () => {
  let content = document.getElementById('content');

  //const mainImg = document.createElement('img');
  //mainImg.src = "img/restaurant.jpg";
  //mainImg.alt = "restaurant";
  //mainImg.id = "restaurant";
  //content.appendChild(mainImg);

  //const tagContainer = document.createElement('div');
  //tagContainer.classList.add('container');
  //content.appendChild(tagContainer);

  const para = document.createElement('p');
  para.innerHTML = "This is the 'about' page.";
  content.appendChild(para);
};

export { about }
