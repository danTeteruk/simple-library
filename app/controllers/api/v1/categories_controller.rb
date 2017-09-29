class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: %i[edit update destroy]

  def index
    @categories = Category.all
  end

  def new; end

  def create
    @category = Category.new(category_params)
    head :ok if @category.save
  end

  def edit; end

  def update
    head :ok if @category.update(category_params)
  end

  def destroy
    if @category.destroy
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :id)
  end
end
