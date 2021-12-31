Vue.component('cart', {
    props: ['cart_items', 'visibility'],
    template: `
       <div class="basket-form" v-show="visibility">
           <p class="basket-form_content basket-form_text" v-if="!$parent.cartItems.length">
               Пусто
           </p>
           <div class="basket-form_content" v-if="$parent.cartItems.length">
               <cartitem v-for="item of cart_items" 
               :key="item.id"
               :img="item.img"
               :cartitem="item"></cartitem>
           </div>
       </div>
       `
});

Vue.component('cartitem', {
    props: ['cartitem', 'img'],
    template: `
           <div class="basket-form_item">
               <img :src="img" alt="some_img" width="80px" height="60px">
               <div class="basket-form_item_center">
                   <p>{{cartitem.title}}</p>
                   <p>Quantity: {{cartitem.quantity}}</p>
                   <p>{{cartitem.price}} &#8381;</p>
               </div>
               <div class="basket-form_item_end">
                   <div>{{cartitem.price*cartitem.quantity}}</div>
                   <button class="basket-form_item_end_btn"
                   @click="$root.remove(cartitem)">&times</button></button>
               </div>
           </div>
           `
})