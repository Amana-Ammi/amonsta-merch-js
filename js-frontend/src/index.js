const baseUrl = 'http://localhost:3000/api/v1/products';
const selectElement = document.querySelector('.categories');

document.addEventListener('DOMContentLoaded', () => {
    getProducts()
    
})


selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    console.log('loaded')
    // want to filter results with select tag 
    // currently listening.need a function to filter results
});

document.addEventListener('submit', () =>{
// want to update products
});

function getProducts() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(products => {
        products.data.forEach(product => {
            const productMarkup = `
            <div class="child" data-id=${product.id}><br><br>
                <img src=${product.attributes.image_url} alt="product"
                class="prod-image"/>
                <h3> ${product.attributes.name} </h3>
                <h4> $${product.attributes.price} </h4>
                    <div class="quantity">
                        <i class="far fa-minus-square"></i>
                        ${product.attributes.quantity}
                        <i class="far fa-plus-square"></i><br><br>
                    </div>
                <button type="submit">UPDATE</button><br><br>
            </div><br><br>
            ` ;
            document.querySelector('#img-container').innerHTML += productMarkup
        })
    })


    function getProductsByCategory() {
        fetch(baseUrl)
        .then(resp => resp.json())
        .then(categories => {
            categories.data.forEach(categories => {
                const productMarkup = `
                <div class="child" data-id=${product.id}><br><br>
                    <img src=${product.attributes.image_url} alt="product"
                    class="prod-image"/>
                    <h3> ${product.attributes.name} </h3>
                    <h4> $${product.attributes.price} </h4>
                        <div class="quantity">
                            <i class="far fa-minus-square"></i>
                            ${product.attributes.quantity}
                            <i class="far fa-plus-square"></i><br><br>
                        </div>
                    <button type="submit">UPDATE</button><br><br>
                </div><br><br>
                ` ;
                document.querySelector('#img-container').innerHTML += productMarkup
            })
        })
    }
}


