import './index.css';

const p = document.createElement('p');
p.textContent = 'Hello from webpack!';
document.body.append(p);

//some modern ES6 code here
const p2 = document.createElement('p');
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10];
const numbers3 = [...numbers1, ...numbers2, ' ...Babel is working well!'];
p2.textContent = numbers3.join(' ');
document.body.appendChild(p2);
