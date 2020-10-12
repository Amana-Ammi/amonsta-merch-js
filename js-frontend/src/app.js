class App {
    products = []
    baseUrl = "http://localhost:3000"


    getProducts() {
        fetch(this.baseUrl + "/products")
        .then(resp => resp.json())
        .then(data => console.log(data));
    }

    renderProducts() {

    }
}