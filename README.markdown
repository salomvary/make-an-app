# Make an App

This is a quick hack to turn (almost) any URL into a Progressive Web App (PWA).

Limitations:

- Only works with https URLs.
- Does not work if the website specifically [forbids embedding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
  via `X-Frame-Options`.

Usage:

- Go to https://make-an-app.herokuapp.com/
- Enter an app name and the URL
- Open the generated app URL in a mobile browser
- Use "Add to home screen" in the browser

Examples:

- [Google Form](https://make-an-app.herokuapp.com/Hello%2520Form/https%253A%252F%252Fdocs.google.com%252Fforms%252Fd%252Fe%252F1FAIpQLSeZ-EcGuLIvBENkp6CGCXHFIM72d9rhiyLXsMjSFVMKaXJQHw%252Fviewform%253Fembedded%253Dtrue/app)
- [SoundCloud](https://make-an-app.herokuapp.com/SoundCloud/https%253A%252F%252Fm.soundcloud.com/app)
- [SoundCloud embed](https://make-an-app.herokuapp.com/Sad%2520Trombone/https%253A%252F%252Fw.soundcloud.com%252Fplayer%252F%253Furl%253Dhttps%25253A%252F%252Fapi.soundcloud.com%252Ftracks%252F18321000%2526color%253D%252523ff5500%2526auto_play%253Dfalse%2526hide_related%253Dfalse%2526show_comments%253Dtrue%2526show_user%253Dtrue%2526show_reposts%253Dfalse%2526show_teaser%253Dtrue%2526visual%253Dtrue/app)
- [YouTube embed](https://make-an-app.herokuapp.com/YouTube/https%253A%252F%252Fwww.youtube.com%252Fembed%252FyJxCdh1Ps48/app)
- [Audio Stream](https://make-an-app.herokuapp.com/ABC%2520Jazz/https%253A%252F%252Flisten.radionomy.com%252Fabc-jazz/app)
