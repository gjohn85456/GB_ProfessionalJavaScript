Vue.component('search', {
    template: `
    <form action="#" class="search" @submit.prevent="$parent.filter">
        <input type="text" class="search_field" v-model="$parent.userSearch">
        <button class="search_btn" type="submit"></button>
    </form>
       `
});