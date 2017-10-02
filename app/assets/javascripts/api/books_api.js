booksApi = {
  showBook(bookId) {
    return axios.get(routes.showBook(bookId));
  },

  updateBook(bookId, props) {
    return axios.patch(routes.updateBook(bookId), {
      book: props,
    });
  },

  editBook(bookId) {
    return axios.get(routes.editBook(bookId));
  },

  newBook(bookId) {
    return axios.get(routes.newBook(bookId));
  },

  createBook(attrs) {
    return axios.post(routes.createBook(), {
      book: attrs,
    });
  },

  booksIndex() {
    return axios.get(routes.booksIndex());
  },

  destroyBook(bookId) {
    return axios.delete(routes.destroyBook(bookId));
  },
};
