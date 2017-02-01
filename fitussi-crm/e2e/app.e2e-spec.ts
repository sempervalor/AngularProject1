import { FitussiCrmPage } from './app.po';

describe('fitussi-crm App', function() {
  let page: FitussiCrmPage;

  beforeEach(() => {
    page = new FitussiCrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
