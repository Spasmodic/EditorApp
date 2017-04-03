import { WriteAppPage } from './app.po';

describe('write-app App', function() {
  let page: WriteAppPage;

  beforeEach(() => {
    page = new WriteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
