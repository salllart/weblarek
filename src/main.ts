import './scss/styles.scss';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';
import { apiProducts } from './utils/data';
import { Catalog } from './components/models/catalog';
import { Cart } from './components/models/cart';
import { Order } from './components/models/order';
import { LarekApi } from './components/communication layer/larekapi';

import { IProduct } from './types';


const catalogModule = new Catalog();
const cartModule = new Cart();
const orderModule = new Order();

function testComponents(items: IProduct[]): void {
    catalogModule.setProducts(items);
    console.log('Массив товаров из каталога: ', catalogModule.getProducts());

    const item = catalogModule.getProducts()[0];
    catalogModule.setCurrentProduct(item);
    console.log('Выбранный товар для отображения в каталоге', catalogModule.getCurrentProduct());

    console.log(
        'Товар по id b06cde61-912f-4663-9751-09956c0eed67 в каталоге',
        catalogModule.getProduct('b06cde61-912f-4663-9751-09956c0eed67')
    );

    cartModule.addProduct(item);
    console.log('Массив товаров в корзине: ', cartModule.getProducts());

    console.log(
        'Доступен ли товар по id 854cef69-976d-4c2a-a18c-2aa45046c390 в корзине',
        cartModule.isAvailable('854cef69-976d-4c2a-a18c-2aa45046c390')
    );

    console.log(
        `Сумма стоимости товаров в корзине - ${cartModule.getTotal()}.
        Общее количество товаров в корзине - ${cartModule.numberOfProducts()}`
    );

    cartModule.removeProduct(item);
    console.log(
        'Массив корзины после удаления товара по id 854cef69-976d-4c2a-a18c-2aa45046c390',
        cartModule.getProducts()
    )

    cartModule.addProduct(item);
    console.log('Снова добавили товар в корзину', cartModule.getProducts())
    cartModule.clean();
    console.log('Пустая корзина после метода clean()', cartModule.getProducts());

    orderModule.setField('email', 'test@test.com');
    orderModule.setField('payment', 'card');
    console.log('Поля формы, где заполенна только почта и вид оплаты', orderModule.getFields());

    console.log('Объект валидации формы ', orderModule.validate());

    orderModule.clean();
    console.log('Поля формы после метода clean()', orderModule.getFields());
}

testComponents(apiProducts.items);

console.log('------------------');

const api = new Api(API_URL);
const larekApi = new LarekApi(api);

larekApi.getData()
    .then(res => {
        catalogModule.setProducts(res.items);
        console.log(catalogModule.getProducts());
    })
    .catch(err => console.log(err))