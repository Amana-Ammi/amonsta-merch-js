class Product {
   constructor(products, productAttributes) {
      this.id = products.id;
      this.name = productAttributes.name;
      this.image_url = productAttributes.image_url;
      this.price = productAttributes.price;
      this.quantity = productAttributes.quantity;
      this.category = productAttributes.category;
   } 
  

   renderProducts() {
      return `
      <div class="prod-box" data-id=${this.id}>
         <img src=${this.image_url} alt="product"/>
         <h3 id="title"> ${this.name} </h3>
         <h4> $${this.price} </h4>
         <h4 class="item-amount"> QUANTITY: ${this.quantity} </h4>    
   </div><br><br>
      `
   }




}