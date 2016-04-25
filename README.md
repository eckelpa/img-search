# Image Search Abstraction Layer

## Overview

This is a simple image search API.

## Usage

### Search for images

Add a `?q=YOUR SEARCH TERM(S)` query to the url in order to get a set of images related to your search term(s). Paginating the response is possible by adding a `&offset=NUMBER` parameter to the url.

#### Example

```
http://localhost/?q=lolcats%20funny&offset=2
```

### View most recent search terms

You can also browse the ten most recent queries like this: `http://localhost/latest`

## License

MIT License. [Click here for more information.](LICENSE.md)
