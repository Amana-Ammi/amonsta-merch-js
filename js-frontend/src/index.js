const baseUrl = 'http://localhost:3000/api/v1/products';

document.addEventListener('DOMContentLoaded', () => {
    getProducts()
})

function getProducts() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(products => {
        products.data.forEach(product => {
            const productMarkup = `
            <article class="product">
            <div data-id=${product.id}>
                <img src=${product.attributes.image_url} alt="product"
                class="product-img"/>
                <button class="bag-btn" data-id=${product.id}>
                    <i class="fa-cart-arrow-down"></i>
                    add to bag
                </button>
            </div>
            <h3> ${product.attributes.name} </h3>
            <h4> $${product.attributes.price} </h4>
        </article>
            ` ;
            document.querySelector('#img-container').innerHTML += productMarkup
        })
    })
}


