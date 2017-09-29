class Menu extends React.Component {

  constructor() {
    super();

    this.state = {
        selectedSection: 'books',
    };

    this.setBooks = this.setSection.bind(this, 'books');
    this.setCategories = this.setSection.bind(this, 'categories')

    this.isBookActive = this.isActive.bind(this, 'books');
    this.isCategoriesActive = this.isActive.bind(this, 'categories')
  }

  setSection(section) {
    this.setState({selectedSection: section}, this.props.setDisplayMode(section))
  }

  isActive(type) {
    if ( this.state.selectedSection == type) { return 'menu--button-active' };
  }

  render() {
    return (
      <div>
        <div className="menu--button-box">
          <div>
            <button className={`menu--button ${this.isBookActive()}`} onClick={this.setBooks}>{I18n.t('menu.books')}</button>
          </div>
          <div>
            <button className={`menu--button ${this.isCategoriesActive()}`} onClick={this.setCategories}>{I18n.t('menu.categories')}</button>
          </div>
        </div>
      </div>
    )
  }
}
