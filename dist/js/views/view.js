export class View {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    updated(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
