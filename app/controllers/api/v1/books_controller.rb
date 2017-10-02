class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: %i[show edit update destroy]

  def index
    @books = Book.all
  end

  def show; end

  def edit; end

  def update
    head :ok if @book.update(book_params)
  end

  def destroy
    if @book.destroy
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def new; end

  def create
    @book = Book.new(book_params)
    head :ok if @book.save
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:name, :author, :year, :category_id)
  end
end
