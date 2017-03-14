import { DevnotePage } from './app.po';

describe('devnote App', function() {
  let page: DevnotePage;

  beforeEach(() => {
    page = new DevnotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
