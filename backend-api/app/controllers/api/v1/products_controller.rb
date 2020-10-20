class Api::V1::ProductsController < ApplicationController

    def index
        products = Product.all
        render json: ProductSerializer.new(products).serialized_json
    end
    
    def show
        product = Product.find(params[:id])
        render json: ProductSerializer.new(product).serialized_json
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product
        end
    end

    def update
        product = Product.find(params[:id])
    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
    end

    private

    # strong params 
    
    def product_params
        params.require(:product).permit(:name, :image_url, :price, :quantity, :category_id)
    end
end
