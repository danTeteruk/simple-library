const TestUtils = React.addons.TestUtils

describe('BooksEdit', function () {
  let booksEdit;

  beforeEach(function() {
    booksEdit = TestUtils.renderIntoDocument(
      <BooksEdit bookId = {1}/>
    );
  });

  it('should exist', function () {
    expect(TestUtils.isCompositeComponent(booksEdit)).toBeTruthy();
  });
});
