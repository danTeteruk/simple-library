class Category < ActiveRecord::Base
  has_many :books

  before_destroy :cant_destroy_if_has_books?, prepend: true

  private

  def cant_destroy_if_has_books?
    if books.any?
      errors[:base] << 'cant destroy category with books'
      throw :abort
    end
  end
end
