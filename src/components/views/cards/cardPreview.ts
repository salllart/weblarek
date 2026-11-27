import { Card } from './card';
import { ensureElement } from '../../../utils/utils';
import { categoryMap } from '../../../utils/constants';
import { TCategory } from '../../../types';

interface ICardPreviewExtra {
    category: string;
    image: string;
    text: string;
    disabled: true;
}

interface ICardPreviewActions {
    onBuy: () => void;
}

export class CardPreview extends Card<ICardPreviewExtra> {
    protected categoryElement: HTMLElement;
    protected imageElement: HTMLImageElement;
    protected textElement: HTMLElement;
    protected buttonElement: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected actions?: ICardPreviewActions) {
        super(container);

        this.categoryElement = ensureElement<HTMLElement>('.card__category', this.container);
        this.imageElement = ensureElement<HTMLImageElement>('.card__image', this.container);
        this.textElement = ensureElement<HTMLElement>('.card__text', this.container);
        this.buttonElement = ensureElement<HTMLButtonElement>('.card__button', this.container);

        if (actions?.onBuy) {
            this.buttonElement.addEventListener('click', actions.onBuy);
        }
    }

    protected set category(value: TCategory) {
        this.categoryElement.textContent = value;
        this.categoryElement.classList.add(categoryMap[value]);
    }

    protected set image(src: string) {
        this.setImage(this.imageElement, src);
    }

    protected set text(value: string) {
        this.textElement.textContent = value;
    }

    protected set disabled(value: boolean) {
        this.buttonElement.disabled = value;
    }
}