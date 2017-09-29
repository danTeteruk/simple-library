class CategoriesTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isReady: false,
    };

    this.renderCategoriesRow = this.renderCategoriesRow.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.destroyCategory = this.destroyCategory.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  destroyCategory(id, event) {
    const target = event.currentTarget;
    $.ajax({
      url: routes.categoryDestroy(id),
      method: 'DELETE',
      success: () => {
        $(target).closest('tr').hide();
      },
    });
  }

  getData() {
    $.ajax({
      url: routes.categoriesIndex(),
      success: (data) => {
        this.setState({categories: data, isReady: true})
      },
    });
  }

  renderCategoriesRow(category) {
    return (
      <tr key={category.id}>
        <td>
          {category.name}
        </td>
        <td>{category.count}</td>
        <td>
          <div className="book-main--actions">
            <i className="glyphicon glyphicon-edit" onClick={() => {this.props.openEdit(category.id)}}></i>
            <i className="glyphicon glyphicon-trash" data-toggle="modal" data-target={`#deleteModal-${category.id}`}></i>
            <div id={`deleteModal-${category.id}`} className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{I18n.t('categories.destroy')}</h4>
                  </div>
                  <div className="modal-body">
                    <p>{I18n.t('categories.sure')}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={(event) => {this.destroyCategory(category.id, event)}}>{I18n.t('categories.destroy')}</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">{I18n.t('categories.close')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    )
  }

  renderTable() {
    const { categories } = this.state;

    if ( !this.state.isReady ) { return null };
    return (
      <table className="table table-bordered table-striped ">
        <thead>
          <tr>
            <th>{I18n.t('categories.name_header')}</th>
            <th>{I18n.t('categories.number_header')}</th>
            <th>{I18n.t('categories.actions_header')}</th>
          </tr>
        </thead>
        <tbody>
          { categories.map(this.renderCategoriesRow) }
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div>
        <div className="book-main--header">
          <div className="book-main--header-item">
            <ol className="breadcrumb">
              <li>{I18n.t('categories.categories')}</li>
            </ol>
          </div>
          <div className="book-main--header-item">
            <div className="book-main--header-create-new">
              <button onClick={() => {this.props.openNew()}}>{I18n.t('categories.add_new')}</button>
            </div>
          </div>
        </div>
        <div className="book-main--table">
          { this.renderTable() }
        </div>
      </div>
    )
  }
}
