class BooksEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {},
      id: '',
      name: '',
      year: '',
      author: '',
      category_id: '',
      categories: [],
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.toAttributes = this.toAttributes.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  toAttributes() {
    attributes = ['id', 'name', 'year', 'author', 'category_id'];
    attr = {};
    attributes.forEach((item) => {
      attr[item] = this.state[item];
    });
    return attr;
  }

  submit() {
    const { returnToList } = this.props;
    booksApi.updateBook(this.props.bookId, this.toAttributes())
      .then(() => {
        returnToList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getData() {
    booksApi.editBook(this.props.bookId)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          year: response.data.year,
          author: response.data.author,
          category_id: response.data.category_id,
          categories: response.data.categories,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state, this.recalculateAdditionalValue);
  }

  render() {
    const { returnToList } = this.props;
    const { name, id, author, year, category_id, categories } = this.state;
    const typeOptions = categories.map(function(item) {
      return <option key = { item.id } value = { item.id }>{item.name}</option>
    })
    return (
      <div className="book-details--container">
        <div className="book-main--header">
          <ol className="breadcrumb">
            <li className="book-details--back-link" onClick={returnToList}>{I18n.t('books.books')}</li>
            <li>{name}</li>
          </ol>
        </div>
        <div className="book-details--content">
          <div className="book-details--row">
            <div className="book-details--item">
              {I18n.t('books.name')}
              <input
              className= "book-edit--input"
              value = {name}
              name = 'name'
              onChange = {this.onChange}/>
            </div>
            <div className="book-details--item">
              {I18n.t('books.author')}
              <input
              className= "book-edit--input"
              value = {author}
              name = 'author'
              onChange = {this.onChange}/>
            </div>
          </div>
          <div className="book-details--row">
            <div className="book-details--item">
              {I18n.t('books.category')}
              <select
                id = 'book-edit-select'
                className = "book-edit--input"
                value = { category_id ? category_id : 1 }
                name = 'category_id'
                onChange = { this.onChange }>
                { typeOptions }
              </select>
            </div>
            <div className="book-details--item">
              {I18n.t('books.year')}
              <input
              className= "book-edit--input"
              value = {year}
              name = 'year'
              onChange = {this.onChange}/>
            </div>
          </div>
        </div>
        <button type='button' className="btn btn-primary book-edit--submit" onClick={this.submit}>Save</button>
      </div>
    )
  }
}
