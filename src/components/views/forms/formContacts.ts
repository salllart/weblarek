import { Form } from './form';
import { ensureElement } from '../../../utils/utils';
import { IEvents } from '../../base/Events';

interface IFormContactsExtra {
    email: string;
    phone: string;
}

export class FormContacts extends Form<IFormContactsExtra> {
    protected emailInput: HTMLInputElement;
    protected phoneInput: HTMLInputElement;

    constructor(protected events: IEvents, protected container: HTMLFormElement) {
        super(container);

        this.emailInput = ensureElement<HTMLInputElement>('.form__input[name="email"]', this.container);
        this.phoneInput = ensureElement<HTMLInputElement>('.form__input[name="phone"]', this.container);

        this.container.addEventListener('submit', (e) => {
            e.preventDefault();
            this.events.emit('form-contacts:submitted');
        })

        this.emailInput.addEventListener('input', () => {
            this.events.emit(
                'form-contacts:changed',
                {
                    field: 'email',
                    value: this.emailInput.value,
                }
            )
        });

        this.phoneInput.addEventListener('input', () => {
            this.events.emit(
                'form-contacts:changed',
                {
                    field: 'phone',
                    value: this.phoneInput.value,
                }
            )
        });
    }

    protected set email(value: string) {
        this.emailInput.value = value;
    }

    protected set phone(value: string) {
        this.phoneInput.value = value;
    }
}