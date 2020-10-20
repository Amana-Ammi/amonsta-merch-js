class Product {
   constructor(products, productAttributes) {
      this.id = products.id;
      this.name = productAttributes.name;
      this.image_url = productAttributes.image_url;
      this.price = productAttributes.price;
      this.quantity = productAttributes.quantity;
      this.category = productAttributes.category;
      console.log('this is working');
   } 
  

   renderProducts() {
      return `
      <div data-id=${this.id}>
         <br><br><img src=${this.image_url} alt="product"
         class="product-img"/>
         <h3> ${this.name} </h3>
         <h4> $${this.price} </h4><br><br>
         <div>
            <i class="far fa-minus-square"></i>
            <p class="item-amount">${this.quantity}</p>
            <i class="far fa-plus-square"></i><br><br>
         </div>
      <button type="submit">UPDATE</button><br><br>
   </div>
      `
   }
}