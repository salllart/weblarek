import { Form } from './form';
import { ensureElement, ensureAllElements } from '../../../utils/utils';
import { TPayment } from '../../../types';
import { IEvents } from '../../base/Events';

interface IFormOrderExtra {
    payment: TPayment;
    address: string;
}

export class FormOrder extends Form<IFormOrderExtra> {
    protected paymentButtons: HTMLButtonElement[];
    protected addressInput: HTMLInputElement;

    constructor(protected events: IEvents, protected container: HTMLFormElement) {
        super(container);

        this.paymentButtons = ensureAllElements<HTMLButtonElement>('.button_alt', this.container);
        this.addressInput = ensureElement<HTMLInputElement>('.form__input[name="address"]', this.container);

        this.container.addEventListener('submit', (e) => {
            e.preventDefault();
            this.events.emit('form-order:submitted');
        });

        this.paymentButtons.forEach((button) => {
            button.addEventListener('click', () => {
                this.events.emit('form-order:changed', { field: 'payment', value: button.name });
            })
        });

        this.addressInput.addEventListener('input', () => {
            this.events.emit('form-order:changed', { field: 'address', value: this.addressInput.value });
        });
    }

    protected set payment(value: TPayment) {
        this.paymentButtons.forEach((button) => {
            button.classList.toggle('button_alt-active', button.name === value);
        });
    }

    protected set address(value: string) {
        this.addressInput.value = value;
    }
}