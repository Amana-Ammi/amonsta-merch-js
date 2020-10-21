const baseUrl = 'http://localhost:3000/api/v1';

document.addEventListener('DOMContentLoaded', () => {
    getAllProducts();
    
    const createProductsForm = document.querySelector('#add-product');

    createProductsForm.addEventListener("submit", (e) => formHandler(e))
    
});

function getAllProducts() {
    fetch(baseUrl + '/products')
    .then(resp => resp.json())
    .then(products => {
        products.data.forEach(product => {
            let newProduct = new Product(product, product.attributes) 
            document.querySelector('#img-container').innerHTML += newProduct.renderProducts()
        })
    })
}

function formHandler(e) {
    e.preventDefault()
    // Form variables
    const fName = document.querySelector("#fname").value 
    const fImage = document.querySelector("#fimage").value
    const fPrice = document.querySelector("#fprice").value
    const fQuantity = document.querySelector("#fquantity").value
    const fCategories = document.querySelector("#fcategories").value
    postProduct(fName, fImage, fPrice, fQuantity, fCategories)
}

function postProduct(name, image_url, price, quantity, category_id) {
    const formData = {name, image_url, price, quantity, category_id}
    fetch(baseUrl + '/products', {
    method: "POST",
    headers: {"Content-Type": "application/json",
            "Accept": "application/json"},
    body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(product => {
        const productData = product.data
        let newProduct = new Product(productData, productData.attributes) 
            document.querySelector('#img-container').innerHTML += newProduct.renderProducts()
    })
}




