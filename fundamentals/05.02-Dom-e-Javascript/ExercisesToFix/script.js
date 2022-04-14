// 1
let elem = document.querySelector("#elementoOndeVoceEsta");

// 2
elem.parentElement.style.backgroundColor = 'red';

// 3
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let primFilDoFil = document.querySelector("#primeiroFilhoDoFilho").innerHTML = 'Texto para primeiro filho do filho';

// 4 
//Acesse o primeiroFilho a partir de pai
let primFil = document.querySelector('#pai').firstChild;

// 5
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
let primFil2 = document.querySelector('#elementoOndeVoceEsta').parentElement.firstChild;

// 6
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
let att = document.querySelector('#elementoOndeVoceEsta').nextSibling;

// 7
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let sib = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

// 8
// Agora acesse o terceiroFilho a partir de pai
let terFil = document.querySelector('#pai').children[2];

//PART 2
// 1
// Crie um irmão para elementoOndeVoceEsta .
let loc = document.querySelector('#pai');
let irm = document.createElement('section');
loc.appendChild(irm);

// 2
// Crie um filho para elementoOndeVoceEsta .
let loc2 = document.getElementById('elementoOndeVoceEsta');
let fil = document.createElement('section');
loc2.appendChild(fil);

// 3
// Crie um filho para primeiroFilhoDoFilho 
let loc3 = document.getElementById('primeiroFilhoDoFilho');
let fil3 = document.createElement('section');
fil3.id = 'part2-ex3';
loc3.appendChild(fil3);

// 4
// A partir desse filho criado, acesse terceiroFilho .
let terceiroFil = fil3.parentElement.parentElement.parentElement.children[2];
//console.log(terceiroFil);