# Guiceworks
Pink.

## WIP
- Add the footer in
- Tune the layouts for smaller devices
- Test out images for retina
- Fix the bug with the very last card trigger
- Test on some browsers
- Setup Cloudinary for assets on production
- Get real content rolling

## Adding New Cards
- Add a card object to `#tiles` in [CardsPresenter](app/presenters/cards_presenter.rb)
- Change all the things
- Drop a markdown file in the [partial](app/views/main/partials) folder &mdash; **Must have the same name as** `pathname`
- Drop in the [images](app/assets/images) &mdash; **Crush them with [ImageOptim first!](http://imageoptim.com/)**
- Make sure the array of image paths in the [CardsPresenter](app/presenters/cards_presenter.rb) match the ones just crushed
- There's also a [markdown file](app/views/main/partials/_masthead_copy.html.md) for the masthead area
- Ship it and roll a doobie

