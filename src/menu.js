// 'menu' page content module:
const menu = () => {
  let content = document.getElementById('content');

  const para = document.createElement('p');
  para.innerHTML = "This is the 'menu' page.";
  content.appendChild(para);
};

export { menu }
