const products = [
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


const renderProduct = (product) =>
    `<div class="card">
    <img class="card_img" src="assets/${product.img}" alt="${product.title}" width="250" height="150">
    <div class="card_price">${product.price} &#8381;</div>
    <button class="card_button"></button>
    </div>`;


const renderPage = list => {
    console.log(...list);
    const productList = list.map(item => renderProduct(item));
    console.log(productList);
    //привел массив к строке, так избавился от запятой
    document.querySelector('.showcase').innerHTML = productList.join("");
};

renderPage(products);