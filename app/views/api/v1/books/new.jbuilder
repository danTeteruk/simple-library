json.categories Category.all.map { |c| { name: c.name, id: c.id } }
json.category_id Category.first.id
