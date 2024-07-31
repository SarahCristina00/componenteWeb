export default class StarRating extends HTMLElement{
    #stars=3;
    constructor(){
        super();
        console.log("Um Star Rating foi criado!");
        this.stars = 1;
    }
    get stars(){
        return this.#stars;
    }

    set stars(novoValor){
        if(novoValor<1 || novoValor>5)return;
        this.#stars = novoValor;
        this.innerHTML = " ";
        for(let i = 0; i<this.#stars; i++){
            this.textContent +="⭐";
        }
    }
    static get observedAttributes(){
        return["stars"];
    }
    connectedCallback(){
        console.log("Star Rating conectado");
    }
    attributeChangedCallback(chave, antigo, novo){
        if(novo === antigo) return;
        if(chave === "stars"){
            console.log(`atributo ${chave} alterado de ${antigo} para ${novo}`);
            this.stars = novo;
        }

    }

}

customElements.define("star-rating", StarRating);