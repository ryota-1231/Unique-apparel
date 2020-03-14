class ItemsController < ApplicationController
  def index
    @item = Item.all
    render json: @item
  end
end
