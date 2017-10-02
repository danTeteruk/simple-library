class CategoriesNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {},
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.toAttributes = this.toAttributes.bind(this);
  }

  toAttributes() {
    return {
      name: this.state.name,
    };
  }

  submit() {
    const { returnToList } = this.props;
    categoriesApi.createCategory(this.toAttributes())
      .then(() => {
        returnToList();
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
    const { name } = this.state;
    return (
      <div className="book-details--container">
        <div className="book-main--header">
          <ol className="breadcrumb">
            <li className="book-details--back-link" onClick={returnToList}>{I18n.t('categories.categories')}</li>
          </ol>
        </div>
        <div className="book-details--content">
          <div className="book-details--row">
            <div className="book-details--item">
              {I18n.t('categories.name')}
              <input
              className= "book-edit--input"
              value = {name}
              name = 'name'
              onChange = {this.onChange}/>
            </div>
          </div>
        </div>
        <button type='button' className="btn btn-primary book-edit--submit" onClick={this.submit}>{I18n.t('categories.save')}</button>
      </div>
    );
  }
}
