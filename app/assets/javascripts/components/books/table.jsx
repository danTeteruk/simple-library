class BooksTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isReady: false,
    };

    this.renderBookRow = this.renderBookRow.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.destroyBook = this.destroyBook.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      url: routes.booksIndex(),
      success: (data) => {
        this.setState({ books: data, isReady: true });
      },
    });
  }

  destroyBook(id, event) {
    const target = event.currentTarget;
    $.ajax({
      url: routes.destroyBook(id),
      method: 'DELETE',
      success: () => {
        $(target).closest('tr').hide();
      },
    });
  }

  renderBookRow(book) {
    const { openDetails, openEdit } = this.props;
    return (
      <tr key={book.id}>
        <td>
          <span className="books-table--link" onClick={() => {openDetails(book.id)}}>{book.name}</span>
        </td>
        <td>{book.category}</td>
        <td>
          <div className="book-main--actions">
            <i className="glyphicon glyphicon-edit" onClick={() => {openEdit(book.id)}}></i>
            <i className="glyphicon glyphicon-trash" data-toggle="modal" data-target={`#deleteModal-${book.id}`}></i>
            <div id={`deleteModal-${book.id}`} className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{I18n.t('books.destroy_text')}</h4>
                  </div>
                  <div className="modal-body">
                    <p>{I18n.t('books.sure')}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={(event) => {this.destroyBook(book.id, event)}}>{I18n.t('books.destroy')}</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">{I18n.t('books.close')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  renderTable() {
    const { books } = this.state;

    if (!this.state.isReady) { return null; };

    return (
      <table className="table table-bordered table-striped ">
        <thead>
          <tr>
            <th>{I18n.t('books.name_header')}</th>
            <th>{I18n.t('books.category_header')}</th>
            <th>{I18n.t('books.actions_header')}</th>
          </tr>
        </thead>
        <tbody>
          { books.map(this.renderBookRow) }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <div className="book-main--header">
          <div className="book-main--header-item">
            <ol className="breadcrumb">
              <li>{I18n.t('books.books')}</li>
            </ol>
          </div>
          <div className="book-main--header-item">
            <div className="book-main--header-create-new">
              <button onClick={() => {this.props.openNew()}}>{I18n.t('books.add_new')}</button>
            </div>
          </div>
        </div>
        <div className="book-main--table">
          { this.renderTable() }
        </div>
      </div>
    );
  }
}

BooksTable.propTypes = {
  openDetails: React.PropTypes.func.isRequired,
  openEdit: React.PropTypes.func.isRequired,
  openNew: React.PropTypes.func.isRequired,
};
