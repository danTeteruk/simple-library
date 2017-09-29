routes = {
  api: '/api/v1/',

  booksIndex: function() {
    return this.api + 'books';
  },

  showBook: function(id) {
    return this.api + 'books/' + id;
  },

  categoriesIndex: function() {
    return this.api + 'categories';
  },

  editBook: function(id) {
    return this.api + 'books/' + id + '/edit';
  },

  updateBook: function(id) {
    return this.api + 'books/' + id;
  },

  destroyBook: function(id) {
    return this.api + 'books/' + id;
  },

  newBook: function() {
    return this.api + 'books/new';
  },

  createBook: function() {
    return this.api + 'books';
  },

  createCategory: function() {
    return this.api + 'categories';
  },

  categoryEdit: function(id) {
    return this.api + 'categories/' + id + '/edit';
  },

  categoryUpdate: function(id) {
    return this.api + 'categories/' + id;
  },

  categoryDestroy: function(id) {
    return this.api + 'categories/' + id;
  },

};
