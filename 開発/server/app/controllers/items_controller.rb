class ItemsController < ApplicationController
  def index
    @items = Item.all
    render json: @items.to_json(include: { images: { only: [:image_url] } })
  end
end
