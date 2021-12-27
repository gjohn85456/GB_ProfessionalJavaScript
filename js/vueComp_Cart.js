Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `    
    <div class="basket-form" v-show="visibility">
        <p class="basket-form_content basket-form_text" v-if="!cartItems.length">
            Пусто
        </p>
        <div class="basket-form_content" v-if="cartItems.length">
            <cart-item v-for="item of cartItems" :key="item.id" :cart-item="item"></cart-item>
        </div>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <div class="basket-form_item">
        <img :src="cartItem.img" alt="" width="80px" height="60px">
        <div class="basket-form_item_center">
            <p>{{cartItem.title}}</p>
            <p>Quantity: {{cartItem.quantity}}</p>
            <p>{{cartItem.prise}} &#8381;</p>
        </div>
        <div class="basket-form_item_end">
            <div>{{cartItem.price*cartItem.quantity}}</div>
            <button class="basket-form_item_end_btn"
            @click="$root.remove(cartItem)">&times</button></button>
        </div>
    </div>
    `
})
