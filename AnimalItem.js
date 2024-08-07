export default class AnimalItem extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        const animalTemplate = document.querySelector("#animal-template").content;
        const novoAnimal = animalTemplate.cloneNode(true);
  
        this.append(novoAnimal);

    }
}