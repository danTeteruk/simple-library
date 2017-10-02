class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      displayMode: 'books',
    };

    this.getDisplayMode = this.getDisplayMode.bind(this);
    this.setDisplayMode = this.setDisplayMode.bind(this);
  }
  getDisplayMode(mode) {
    components = {
      categories: <CategoriesMain />,
      books: <BooksMain />
    }

    return components[mode];
  }

  setDisplayMode(mode) {
    this.setState({displayMode: mode});
  }

  render() {
    return (
      <div className="container">
        <div className="row main--content">
          <div className="col-xs-3 main--col-box">
            <div className="main--col main--menu-col">
              <Menu setDisplayMode={this.setDisplayMode}/>
            </div>
          </div>
          <div className="col-xs-9 main--col-box">
            <div className="main--content-col main--col">
              { this.getDisplayMode(this.state.displayMode) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
