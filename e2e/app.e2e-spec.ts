import { Twitng2Page } from './app.po';

describe('twitng2 App', function() {
  let page: Twitng2Page;

  beforeEach(() => {
    page = new Twitng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
