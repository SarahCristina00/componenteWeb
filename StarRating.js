export default class StarRating extends HTMLElement{
    #stars=3;
    #shadow;
    constructor(){
        super();
        console.log("Um Star Rating foi criado!");
        this.#shadow = this.attachShadow({mode:"close"});
        this.stars = 1;
    }
    get stars(){
        return this.#stars;
    }

    set stars(novoValor){
        if(novoValor<1 || novoValor>5)
        this.setAttribute("stars", this.#stars); 
        return;
    }
    this.#stars = novoValor;
    this.#render;
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

#render(){
    this.shadowRoot.innerHTML = `
    <style>
    .star{
        display: inline-block;
        transform: rotate(45deg);
    }
    </style>
    `;
    for(let i = 0; i<this.#stars; i++){
        const star = document.createElement("span");
        star.classList.add("star");
        star.textContent = " ⭐";
        this.#shadowRoot.append(star);
    }
}

customElements.define("star-rating", StarRating);
}