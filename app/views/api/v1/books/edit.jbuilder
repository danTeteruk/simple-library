json.id @book.id
json.name @book.name
json.category_id @book.category.id
json.categories Category.all.map { |c| { name: c.name, id: c.id } }
json.author @book.author
json.year @book.year
