import { CustomElement } from "../models/element.models";

function createPanelLine() {
  let div = document.createElement('nav');
  div.style.width = "100%";
  div.style.height = "50px";
  div.style.backgroundColor = "blue";
  div.style.display = "flex";

  return div;
}

function createPanelColumn() {
  let div = document.createElement('nav');
  div.style.width = "50px";
  div.style.height = "100%";
  div.style.backgroundColor = "red";
  div.style.display = "flex";

  return div;
}

function createDivLine() {
    let div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "50px";
    div.style.backgroundColor = "blue";
    div.style.display = "flex";

    return div;
}

function createDivColumn() {
    let div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "100%";
    div.style.backgroundColor = "red";
    div.style.display = "flex";

    return div;
}

function createSectionLine() {
  let div = document.createElement('section');
  div.style.width = "100%";
  div.style.height = "50px";
  div.style.backgroundColor = "green";
  div.style.display = "flex";

  return div;
}

function createSectionColumn() {
  let div = document.createElement('section');
  div.style.width = "50px";
  div.style.height = "100%";
  div.style.backgroundColor = "yellow";
  div.style.display = "flex";

  return div;
}

function createParagraph() {
  let div = document.createElement('p');
  div.innerHTML = "Novo paragrafo";

  return div;
}

function createH1() {
  let div = document.createElement('h1');
  div.innerHTML = "Novo Titulo Nivel 1";

  return div;
}

function createH2() {
  let div = document.createElement('h2');
  div.innerHTML = "Novo Titulo Nivel 2";

  return div;
}

function createH3() {
  let div = document.createElement('h3');
  div.innerHTML = "Novo Titulo Nivel 3";

  return div;
}

function createH4() {
  let div = document.createElement('h4');
  div.innerHTML = "Novo Titulo Nivel 4";

  return div;
}

function createH5() {
  let div = document.createElement('h5');
  div.innerHTML = "Novo Titulo Nivel 5";

  return div;
}

function createH6() {
  let div = document.createElement('h6');
  div.innerHTML = "Novo Titulo Nivel 6";

  return div;
}

function createOrderedList() {
  let div = document.createElement('ol');
  div.innerHTML = "<li>item 1</li>";

  return div;
}

function createButton() {
  let div = document.createElement('button');
  div.innerHTML = "Click-me";

  return div;
}

function createImage() {
  let div = document.createElement('img');
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "purple";

  return div;
}

function createTable() {
  let div = document.createElement('table');
  div.style.width = "300px";
  div.innerHTML = "<tr><th>Coluna 1</th></tr><tr><td>Valor 1</td></tr>"

  return div;
}

export class Elements {
    default : CustomElement[];

    constructor(elements: CustomElement[]) {
        this.default = elements;
    }
}

export const ElementsList =  new Elements([
    new CustomElement(createDivLine(), "Linha"),
    new CustomElement(createDivColumn(), "Coluna"),
    new CustomElement(createParagraph(), "Paragrafo"),
    new CustomElement(createH1(), "Titulo Nivel 1"),
    new CustomElement(createH2(), "Titulo Nivel 2"),
    new CustomElement(createH3(), "Titulo Nivel 3"),
    new CustomElement(createH4(), "Titulo Nivel 4"),
    new CustomElement(createH5(), "Titulo Nivel 5"),
    new CustomElement(createH6(), "Titulo Nivel 6"),
    new CustomElement(createSectionLine(), "Seção em linha"),
    new CustomElement(createSectionColumn(), "Seção em Coluna"),
    new CustomElement(createOrderedList(), "Lista"),
    new CustomElement(createButton(), "Botão"),
    new CustomElement(createPanelLine(), "Painel em linha"),
    new CustomElement(createPanelColumn(), "Painel em coluna"),
    new CustomElement(createImage(), "Imagem"),
    new CustomElement(createTable(), "Tabela")
]);

