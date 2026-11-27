import { Component } from '../../base/Component';
import { ensureElement } from '../../../utils/utils';

interface IForm {
    valid: boolean;
    errors: string;
}

export class Form<T> extends Component<T & IForm> {
    protected errorsElement: HTMLElement;
    protected submitButton: HTMLButtonElement;

    constructor(protected container: HTMLFormElement) {
        super(container);

        this.submitButton = ensureElement<HTMLButtonElement>('.button[type="submit"]', this.container);
        this.errorsElement = ensureElement<HTMLElement>('.form__errors', this.container);
    }

    protected set valid(value: boolean) {
        this.submitButton.disabled = !value;
    }

    protected set errors(value: string) {
        this.errorsElement.textContent = value;
    }
}