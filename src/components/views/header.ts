import { Component } from '../base/Component';
import { ensureElement } from '../../utils/utils';
import { IEvents } from '../base/Events';

interface IHeader {
    counter: number;
}

export class Header extends Component<IHeader> {
    protected buttonElement: HTMLButtonElement;
    protected counterElement: HTMLElement;

    constructor(protected events: IEvents, protected container: HTMLElement) {
        super(container);

        this.buttonElement = ensureElement<HTMLButtonElement>('.header__basket', this.container);
        this.counterElement = ensureElement<HTMLElement>('.header__basket-counter', this.container);

        this.buttonElement.addEventListener('click', () => this.events.emit('basket:open'))
    }

    protected set counter(value: number) {
        this.counterElement.textContent = value.toString();
    }
}