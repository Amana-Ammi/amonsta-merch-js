class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id, :product_count, :total_price
end
