// 'contact' page content module:
const contact = () => {
  let content = document.getElementById('content');

  const para = document.createElement('p');
  para.innerHTML = "This is the 'contact' page.";
  content.appendChild(para);
};

export { contact }
