class Products {
    constructor() {
        this.products = []
        this.adapter = new ProductsAdapter()
        this.fetchAndLoadProducts()
    }

    fetchAndLoadProducts() {
        this.adapter
        .getProducts()
        .then(products => {
            products.forEach(product => this.products.push(product))
        })
        .then(() => {
            this.renderProducts()
            // this.renderProductsImage()
        })
    }

    renderProducts() {
        // const productArray = 
        // console.log(productArray)
          const photobox = document.getElementById('photo-box')
        photobox.innerHTML = this.products.map(product => `<li>${product.name}</li>`).join(' ')
    }

    // renderProductsImage() {
    //     const img = document.getElementById('shirts')
    //     img.innerHTML = this.products.map(product => `<li>${product.image_url}</li>`).join(' ')
    // }
}