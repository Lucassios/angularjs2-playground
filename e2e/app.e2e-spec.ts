import { Angularjs2PlaygroundPage } from './app.po';

describe('angularjs2-playground App', function() {
  let page: Angularjs2PlaygroundPage;

  beforeEach(() => {
    page = new Angularjs2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
