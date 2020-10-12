class App {
    products = []
    url = "http://localhost:3000"


    getProducts() {
        fetch(this.url + "/products")
        .then(resp => resp.json())
        .then(data => console.log(data));
    }

    renderProducts() {

    }
}