import { Card } from './card';
import { ensureElement } from '../../../utils/utils';
import { categoryMap } from '../../../utils/constants';
import { TCategory } from '../../../types';

interface ICardCatalogExtra {
    category: TCategory;
    image: string;
}

interface ICardCatalogActions {
    onClick: () => void;
}

export class CardCatalog extends Card<ICardCatalogExtra> {
    categoryElement: HTMLElement;
    imageElement: HTMLImageElement;

    constructor(protected container: HTMLElement, protected actions?: ICardCatalogActions) {
        super(container);

        this.categoryElement = ensureElement<HTMLElement>('.card__category', this.container);
        this.imageElement = ensureElement<HTMLImageElement>('.card__image', this.container);

        if (actions?.onClick) {
            this.container.addEventListener('click', actions.onClick);
        }
    }

    protected set category(value: TCategory) {
        this.categoryElement.textContent = value;
        this.categoryElement.classList.add(categoryMap[value]);
    }

    protected set image(src: string) {
        this.setImage(this.imageElement, src);
    }
}