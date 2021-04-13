'use strict';
// creating constructer function:

let total=0;
let allObject =[];
function NewEmployee(name,email,department){
  this.name=name;
  this.email=email;
  this.department=department;
  this.salary= Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  allObject.push(this);
}

// creating the table:
const container = document.getElementById('myTable');
const table = document.createElement('table');
container.appendChild(table);

// creating array for the first table header:
let tableHeader = ['Name', 'Email','Department','Salary'];

// creaing the first Row:
const form =document.getElementById('myForm');

const tr1 = document.createElement('tr');
table.appendChild(tr1);

for(let i = 0; i<tableHeader.length;i++){
  const th1 = document.createElement('th');
  tr1.appendChild(th1);
  th1.textContent=tableHeader[i];
}

const pEl = document.createElement('p');

// creating prototype function for rendering new objects:
NewEmployee.prototype.render=function(){
  if (pEl){
    pEl.remove();
  }
  const tr2 =document.createElement('tr');
  table.appendChild(tr2);

  const td1 = document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent=this.name;

  const td2 = document.createElement('td');
  tr2.appendChild(td2);
  td2.textContent=this.email;

  const td3 = document.createElement('td');
  tr2.appendChild(td3);
  td3.textContent=this.department;

  const td4 = document.createElement('td');
  tr2.appendChild(td4);
  td4.textContent=this.salary;

  // finding the total:
  total=total+this.salary;

  // displaying the total:
  container.appendChild(pEl);
  pEl.textContent=`Total = ${total}`;
  // setting Items for local storage:
  localStorage.setItem('Item',JSON.stringify(allObject));
};


// adding event listener for displaying new pbject:
form.addEventListener('submit',renderFuncion);

function renderFuncion(event){
  event.preventDefault();
  let myName = event.target.name.value;
  let myEmail = event.target.email.value;
  let myDepartment = event.target.department.value;

  const myNewEmplyee = new NewEmployee(myName,myEmail,myDepartment);
  myNewEmplyee.render();
}

// getting Items from localStorage:
let normalObj = localStorage.getItem('Item');
if(normalObj){
  let LSarray = JSON.parse(normalObj);
  for(let i=0;i<LSarray.length;i++){
    const LSnewEmployee = new NewEmployee(LSarray[i].name,LSarray[i].email,LSarray[i].department);
    LSnewEmployee.render();
  }
}
