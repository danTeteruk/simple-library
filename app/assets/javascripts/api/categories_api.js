categoriesApi = {
  showBook(bookId) {
    return axios.get(routes.showBook(bookId));
  },

  updateCategory(categoryId, props) {
    return axios.patch(routes.categoryUpdate(categoryId), {
      category: props,
    });
  },

  editCategory(categoryId) {
    return axios.get(routes.categoryEdit(categoryId));
  },

  createCategory(attrs) {
    return axios.post(routes.createCategory(), {
      category: attrs,
    });
  },

  categoriesIndex() {
    return axios.get(routes.categoriesIndex());
  },

  destroyCategory(categoryId) {
    return axios.delete(routes.categoryDestroy(categoryId));
  },
};
