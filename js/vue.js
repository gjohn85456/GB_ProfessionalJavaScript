const API = 'https://raw.githubusercontent.com/gjohn85456/newRepository/main/';
const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/products.json',
        products: [],
        filetred: [],
        imgCatalog: 'assets/',
        userSearch: '',
        show: false
    },
    methods: {
        filter(value) {
            const regexp = new RegExp(value, 'i');
            //this.products = this.products.filter(product => regexp.test(product.title));
            this.filetred = this.products.filter(product => regexp.test(product.title));
            console.log(this.filetred);
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log("Всё идёт по плану");
            console.log(product.title);
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.img = this.imgCatalog + el.img;
                    this.products.push(el);
                }
            });
    }
})