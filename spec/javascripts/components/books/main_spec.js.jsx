const TestUtils = React.addons.TestUtils

describe('BooksMain', function () {
  let booksMain;

  beforeEach(function() {
    booksMain = TestUtils.renderIntoDocument(
      <BooksMain />
    );
  });

  it('set default view mode to lsit', function () {
    expect(booksMain.state.displayMode).toEqual('list');
  });
  it('set default bookId to null', function () {
    expect(booksMain.state.bookId).toEqual(null);
  });
});
