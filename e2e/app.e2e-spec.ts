import { LightItPage } from './app.po';

describe('light-it App', () => {
  let page: LightItPage;

  beforeEach(() => {
    page = new LightItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
