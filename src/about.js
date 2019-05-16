// 'about' page content module:
const about = () => {
  let content = document.getElementById('content');

  const para1 = document.createElement('p');
  para1.innerHTML = "Enjoy the very finest cuisine, served in opulent surroundings.";
  content.appendChild(para1);

  const br1 = document.createElement('br');
  content.appendChild(br1);

  const para2 = document.createElement('p');
  para2.innerHTML = "Established in 1874, Decadence has become world-famous for its impeccable standards and attentive service.";
  content.appendChild(para2);

  const br2 = document.createElement('br');
  content.appendChild(br2);

  const para3 = document.createElement('p');
  para3.innerHTML = "Due to high demand, we advise booking your table well ahead of time.";
  content.appendChild(para3);

  const br3 = document.createElement('br');
  content.appendChild(br3);

  const para4 = document.createElement('p');
  para4.innerHTML = "Open: 1 p.m. - 11 p.m., Tuesday - Sunday.";
  content.appendChild(para4);

  const br4 = document.createElement('br');
  content.appendChild(br4);

  const br5 = document.createElement('br');
  content.appendChild(br5);

  const map = document.createElement('img');
  map.src = "img/map.jpg";
  map.alt = "map";
  map.id = "map";
  content.appendChild(map);

  const br6 = document.createElement('br');
  content.appendChild(br6);

  const para5 = document.createElement('p');
  para5.style.textAlign = "center";
  para5.innerHTML = "Princetown, Two Bridges, Yelverton PL36 6XZ";
  content.appendChild(para5);
};

export { about }
