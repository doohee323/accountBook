import { AccountBookPage } from './app.po';

describe('account-book App', function() {
  let page: AccountBookPage;

  beforeEach(() => {
    page = new AccountBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
