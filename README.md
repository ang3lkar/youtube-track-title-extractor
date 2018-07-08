# youtube-track-title-extractor

[![Build Status](https://travis-ci.com/angelkar/youtube-track-title-extractor.svg?branch=master)](https://travis-ci.com/angelkar/youtube-track-title-extractor)
[![codecov](https://codecov.io/gh/angelkar/youtube-track-title-extractor/branch/master/graph/badge.svg)](https://codecov.io/gh/angelkar/youtube-track-title-extractor)
[![npm](https://img.shields.io/npm/v/youtube-track-title-extractor.svg)](https://npmjs.com/package/youtube-track-title-extractor)

Youtube titles come in a rich variety of ways:
```
Artist - Track.mp4
Artist-Track
Artist -- Track
Artist - Track lyrics
Artist - Track (HQ)
Artist = Track (Official Video)
Artist - Track (Official Music Video)
1998 Artist - Track
(1998) Artist - Track
...
```

This small package attempts to polish the given title and return it in the following form:

```
Artist - Title
```

## Installation
```sh
npm install youtube-track-title-extractor
```

## Usage
```js
import getTitle from "youtube-track-title-extractor"

const title = getTitle(document.title)
```


## License
Copyright © 2018, Angelos Karagkiozidis. Released under the [MIT License](https://github.com/angelkar/youtube-track-title-extractor/blob/master/LICENSE).