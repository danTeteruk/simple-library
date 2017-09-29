class CategoriesMain extends React.Component {

  constructor() {
    super();
    this.state = {
      displayMode: 'list',
      categoryId: null,
    };

    this.getDisplayMode = this.getDisplayMode.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.openNew = this.openNew.bind(this);
    this.returnToList = this.returnToList.bind(this);
  }

  openEdit(category_id) {
    this.setState({ displayMode: 'edit', categoryId: category_id });
  }

  openNew() {
    this.setState({ displayMode: 'new' });
  }

  returnToList() {
    this.setState({ displayMode: 'list' });
  }

  getDisplayMode(mode) {
    components = {
      list: <CategoriesTable openEdit={this.openEdit} openNew={this.openNew}/>,
      edit: <CategoriesEdit categoryId={this.state.categoryId} returnToList={this.returnToList} />,
      new: <CategoriesNew returnToList={this.returnToList}/>,
    };

    return components[mode];
  }

  render() {
    return (
      <div className="book-main--container">
        { this.getDisplayMode(this.state.displayMode) }
      </div>
    );
  }
}
