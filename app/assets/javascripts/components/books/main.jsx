class BooksMain extends React.Component {

  constructor() {
    super();
    this.state = {
      displayMode: 'list',
      bookId: null,
    };

    this.getDisplayMode = this.getDisplayMode.bind(this);
    this.openDetails = this.openDetails.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.openNew = this.openNew.bind(this);
    this.returnToList = this.returnToList.bind(this);
  }

  openDetails(book_id) {
    this.setState({displayMode: 'book', bookId: book_id});
  }

  openEdit(book_id) {
    this.setState({displayMode: 'edit', bookId: book_id});
  }

  openNew() {
    this.setState({displayMode: 'new'});
  }

  returnToList() {
    this.setState({displayMode: 'list'})
  }

  getDisplayMode(mode) {
    components = {
      list: <BooksTable openDetails={this.openDetails} openEdit={this.openEdit} openNew={this.openNew}/>,
      edit: <BooksEdit bookId={this.state.bookId} returnToList={this.returnToList} />,
      book: <BooksDetails bookId={this.state.bookId} returnToList={this.returnToList} />,
      new: <BooksNew returnToList={this.returnToList}/>,
    }

    return components[mode];
  }

  render() {
    return (
      <div className="book-main--container">
        { this.getDisplayMode(this.state.displayMode) }
      </div>
    )
  }
}
