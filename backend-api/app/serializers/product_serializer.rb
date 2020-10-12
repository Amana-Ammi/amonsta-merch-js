class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price, :category
end