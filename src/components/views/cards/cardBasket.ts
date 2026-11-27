import { Card } from './card';
import { ensureElement } from '../../../utils/utils';

interface ICardBasketExtra {
    index: number;
}

interface ICardBasketActions {
    onRemove: () => void;
}

export class CardBasket extends Card<ICardBasketExtra> {
    protected indexElement: HTMLElement;
    protected buttonElement: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected actions?: ICardBasketActions) {
        super(container);

        this.indexElement = ensureElement<HTMLElement>('.basket__item-index', this.container);
        this.buttonElement = ensureElement<HTMLButtonElement>('.basket__item-delete', this.container);
        
        if (actions?.onRemove) {
            this.buttonElement.addEventListener('click', actions.onRemove);
        }
    }

    protected set index(value: number) {
        this.indexElement.textContent = value.toString();
    }
}