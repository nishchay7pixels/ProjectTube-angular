import { YoutubePlayerPage } from './app.po';

describe('youtube-player App', () => {
  let page: YoutubePlayerPage;

  beforeEach(() => {
    page = new YoutubePlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
