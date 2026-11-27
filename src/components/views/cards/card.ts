import { Component } from '../../base/Component';
import { ensureElement } from '../../../utils/utils';

interface ICard {
    title: string;
    price: number | null;
}

export class Card<T> extends Component<T & ICard> {
    protected titleElement: HTMLElement;
    protected priceElement: HTMLElement;
    
    constructor(protected container: HTMLElement) {
        super(container);

        this.titleElement = ensureElement<HTMLElement>('.card__title', this.container);
        this.priceElement = ensureElement<HTMLElement>('.card__price', this.container)
    }

    protected set title(value: string) {
        this.titleElement.textContent = value;
    }

    protected set price(value: number) {
        this.priceElement.textContent = value ? value.toString() : 'Бесценно';
    }
}