class BooksDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      url: routes.showBook(this.props.bookId),
      success: (data) => {
        this.setState({book: data})
      },
    });
  }

  render() {
    const { returnToList } = this.props;
    const { book } = this.state;
    return (
      <div className="book-details--container">
        <div className="book-main--header">
          <ol className="breadcrumb">
            <li className="book-details--back-link" onClick={returnToList}>{I18n.t('books.books')}</li>
            <li>{book.name}</li>
          </ol>
        </div>
        <div className="book-details--content">
          <div className="book-details--row">
            <div className="book-details--item">
              {I18n.t('books.name')}
              {book.name}
            </div>
            <div className="book-details--item">
              {I18n.t('books.author')}
              {book.author}
            </div>
          </div>
          <div className="book-details--row">
            <div className="book-details--item">
              {I18n.t('books.category')}
              {book.category}
            </div>
            <div className="book-details--item">
              {I18n.t('books.year')}
              {book.year}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
