import { SklepAppPage } from './app.po';

describe('sklep-app App', () => {
  let page: SklepAppPage;

  beforeEach(() => {
    page = new SklepAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
