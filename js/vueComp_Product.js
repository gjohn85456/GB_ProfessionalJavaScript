Vue.component('products', {
    props: ['products'],
    template: `<div class="showcase container1">
                <product v-for="item of products" 
                :key="item.id" 
                :img="item.img"
                :product="item"></product>              
                </div>`

});

Vue.component('product', {
    props: ['product', 'img'],
    template:
        `
            <div class="card">
                <img class="card_img" :src="img" alt="some img" width="250" height="150">
                <div class="card_title">{{product.title}}</div>
                <div class="card_price">{{product.price}} &#8381;</div>
                <button class="card_button" @click="$parent.$emit('add-product',product)"></button>
            </div>
            `
})

