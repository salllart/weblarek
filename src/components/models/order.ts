import type { IBuyer, TValidation } from '../../types';

export class Order {
    protected customerInfo: IBuyer = {
        payment: '',
        email: '',
        phone: '',
        address: '',
    };

    setField<T extends keyof IBuyer>(field: T, value: IBuyer[T]): void {
        this.customerInfo[field] = value;
    }

    getFields(): IBuyer {
        return this.customerInfo;
    }

    clean(): void {
        this.customerInfo = {
            payment: '',
            email: '',
            phone: '',
            address: '',
        };
    }

    validate(): TValidation {
        const validation: TValidation = {};

        if (this.customerInfo.address === '') {
            validation.address = 'Необходимо указать адрес';
        }
        if (this.customerInfo.payment === '') {
            validation.payment = 'Вид оплаты не выбран';
        }
        if (this.customerInfo.email === '') {
            validation.email = 'Укажите емэйл';
        }
        if (this.customerInfo.phone === '') {
            validation.phone = 'Укажите телефон';
        }

        return validation;
    }
}
