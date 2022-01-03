const API = 'https://raw.githubusercontent.com/gjohn85456/newRepository/main/';
const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/products.json',
        products: [],
        filtered: [],
        imgCatalog: 'assets/',
        cartItems: [],
        showCart: false,
        userSearch: '',
    },
    methods: {
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.title));
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(item) {
            //29 minutes
            let find = this.cartItems.find(el => el.id === item.id);
            if (find) {
                find.quantity++;
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.cartItems.push(prod);
            }
            console.log("Всё идёт по плану");
            console.log(this.cartItems);
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.img = this.imgCatalog + el.img;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    }
})