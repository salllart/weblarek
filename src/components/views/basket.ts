import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";
import { IEvents } from "../base/Events";

interface IBasket {
    list: HTMLElement[];
    price: number;
}

export class Basket extends Component<IBasket> {
    protected listElement: HTMLElement;
    protected priceElement: HTMLElement;
    protected buttonElement: HTMLButtonElement;

    constructor(protected events: IEvents, protected container: HTMLElement) {
        super(container);

        this.listElement = ensureElement<HTMLElement>('.basket__list', this.container);
        this.priceElement = ensureElement<HTMLElement>('.basket__price', this.container);
        this.buttonElement = ensureElement<HTMLButtonElement>('.basket__button', this.container);

        this.buttonElement.addEventListener('click', () => events.emit('basket:submitted'));
    }

    protected set list(items: HTMLElement[]) {
        this.listElement.replaceChildren(...items);
    }

    protected set price(value: number) {
        this.priceElement.textContent = value.toString();
    }
}