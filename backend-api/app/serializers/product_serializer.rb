class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price
  belongs_to :category
end