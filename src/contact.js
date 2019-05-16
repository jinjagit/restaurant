// 'contact' page content module:
const contact = () => {
  let content = document.getElementById('content');

  const para1 = document.createElement('p');
  para1.innerHTML = "Telephone: +44 (0)19876 54321";
  content.appendChild(para1);

  const br1 = document.createElement('br');
  content.appendChild(br1);
  const br2 = document.createElement('br');
  content.appendChild(br2);
  const br3 = document.createElement('br');
  content.appendChild(br3);

  const para2 = document.createElement('p');
  para2.innerHTML = "Email:";
  content.appendChild(para2);

  const br4 = document.createElement('br');
  content.appendChild(br4);

  const para3 = document.createElement('p');
  para3.innerHTML = "customerservice@decadence.com";
  content.appendChild(para3);

  const para4 = document.createElement('p');
  para4.innerHTML = "businessdepartment@decadence.com";
  content.appendChild(para4);
};

export { contact }
