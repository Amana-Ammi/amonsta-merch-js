class CreateShoppingCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :shopping_carts do |t|
      t.integer :product_count
      t.float :total_price

      t.timestamps
    end
  end
end
