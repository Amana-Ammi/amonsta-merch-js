class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :quantity, :price
end
