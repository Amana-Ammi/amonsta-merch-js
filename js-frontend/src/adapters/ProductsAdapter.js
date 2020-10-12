class ProductsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/products'
    }

    getProducts() {
        return fetch(this.baseUrl)
        .then(resp => resp.json()
        )
        // .then(data => console.log(data));
    }

    

}