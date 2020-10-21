class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :products
end
