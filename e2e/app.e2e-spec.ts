import { UpworkAppPage } from './app.po';

describe('upwork-app App', () => {
  let page: UpworkAppPage;

  beforeEach(() => {
    page = new UpworkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
