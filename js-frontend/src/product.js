class Product {
   constructor(products, productAttributes) {
      this.id = products.id;
      this.name = productAttributes.name;
      this.image_url = productAttributes.image_url;
      this.price = productAttributes.price;
      this.quantity = productAttributes.quantity;
      this.category = productAttributes.category;
      this.likes = 0
   } 
  

   renderProducts() {

      return `
      <div class="prod-box" data-id=${this.id}>
         <img src=${this.image_url} alt="product"/>
         <h3 id="title"> ${this.name} </h3>
         <h4> $${this.price} </h4>
         <h4 class="item-amount"> QUANTITY: ${this.quantity} </h4> 
        
         <div>
            <button class="likeBtn" data-id=${this.id}> LIKE </button>
            This product has <span class="count" data-id=${this.id}>0</span> likes 
         </div>
         
      </div><br><br>
      `
   }

  
}

  // want the user to pick a yes or no.
   // once selected, take response and display it w/ product
   // create an element to display result with counter ++
   // Rating system for each product