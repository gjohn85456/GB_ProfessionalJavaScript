class ProductList {
    constructor(container = '.showcase') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'gamepad1', img: 'gamepad1.jpg', price: 1000 },
            { id: 2, title: 'gamepad2', img: 'gamepad2.jpg', price: 1200 },
            { id: 3, title: 'gamepad3', img: 'gamepad3.jpg', price: 1300 },
            { id: 4, title: 'keyboard1', img: 'keyboard1.jpg', price: 1600 },
            { id: 5, title: 'keyboard2', img: 'keyboard2.png', price: 1000 },
            { id: 6, title: 'keyboard3', img: 'keyboard3.png', price: 2100 },
            { id: 7, title: 'notebook1', img: 'notebook1.png', price: 36100 },
            { id: 8, title: 'notebook2', img: 'notebook2.png', price: 38250 },
            { id: 9, title: 'notebook3', img: 'notebook3.png', price: 30100 },
            { id: 10, title: 'mouse1', img: 'mouse1.png', price: 800 },
            { id: 11, title: 'mouse1', img: 'mouse2.png', price: 1200 },
            { id: 12, title: 'mouse1', img: 'mouse3.png', price: 750 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    totalCost() {
        let total = 0;
        this.goods.forEach(element => {
            total += element.price;
        });
        return console.log(total);;
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.img = product.img;
        this.price = product.price;
    }
    render() {
        return `<div class="card">
        <img class="card_img" src="assets/${this.img}" alt="${this.title}" width="250" height="150">
        <div class="card_title">${this.title}</div>
        <div class="card_price">${this.price} &#8381;</div>
        <button class="card_button"></button>
        </div>`
    }
}

class ItemsGood {
    constructor(item, number) {
        this.item = item;
        this.number = number;
    }
}

class Cart {
    constructor(goods) {
        this.goods = [];
    }
    putGoods(goods) {
        console.log('положить товары');
    }
    removeGoods(goods) {
        console.log('убрать товары из корзины');
    }
    calculateCost() {
        console.log('подсчитать стоимость всех товаров в корзине');
    }
}

let list = new ProductList();
list.totalCost();