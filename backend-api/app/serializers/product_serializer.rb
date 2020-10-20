class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :image_url, :price, :quantity, :category_id, :category
end
