# Guiceworks
Pink.

## Here's how you add new cards
- Add a card object to `#tiles` in [CardsPresenter](app/presenters/cards_presenter.rb)
- Change all the things
- Drop a markdown file in the [partial](app/views/main/partials) folder &mdash; **Must have the same name as** `pathname`
- Drop in the [images](app/assets/images) &mdash; **Crush them with [ImageOptim first!](http://imageoptim.com/)**
- Make sure the array of image paths in the [CardsPresenter](app/presenters/cards_presenter.rb) match the ones just crushed
- There's also a [markdown file](app/views/main/partials/_masthead_copy.html.md) for the masthead area
- Done.

## Todo:
- Test on some browsers (MK)
- Get real content in (Geoff)
- Setup Cloudinary for assets on production (Jay)
- Show it to the world

