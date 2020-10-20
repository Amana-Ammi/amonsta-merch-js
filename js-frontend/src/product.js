class Product {
   constructor(products) {
      debugger
      this.id = products.id
      this.name = product.data.attributes.name
      this.image_url = product.data.attributes.image_url
      this.price = product.data.attributes.price
      this.quantity = product.data.attributes.quantity
      this.category = product.data.attributes.category
   } 
}   

// renderProducts() {
//    return `
//    <div data-id=${product.id}>
//    <br><br><img src=${product.attributes.image_url} alt="product"
//    class="product-img"/>
//    <h3> ${product.attributes.name} </h3>
//    <h4> $${product.attributes.price} </h4><br><br>
//        <div>
//            <i class="far fa-minus-square"></i>
//            <p class="item-amount">${product.attributes.quantity}</p>
//            <i class="far fa-plus-square"></i><br><br>
//        </div>
//    <button type="submit">UPDATE</button><br><br>
// </div>
//    `
// }