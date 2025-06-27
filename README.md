# DESKTOP

## Necessary extensions

- [x] User JavaScript and CSS
- [ ] Bookmark Generator (custom extension)

## Setup Steps

### User JavaScript and CSS

- [ ] Download extension [link](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
- [ ] Copy setup snippets

`__1_PERSONAL_VARS`

```js
const COMPANY_NAME = "my-company";
const FIRST_NAME = "Oliver";
const LAST_NAME = "Porat";
```

`__2_VAR_SETUP`

```js
// SYSTEM VARS
const CDN_URL = "https://construction-js-injections.pages.dev";

// PERSONAL VARS
const salesperson = {
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  get key() {
    return this.firstName.toLowerCase() + "-" + this.lastName.toLowerCase();
  },
};

// QUERY STRING
const currentSiteUrl = encodeURIComponent(window.location.href);
const params = {
  data: JSON.stringify({ currentSiteUrl, salesperson }),
};
const urlSearchParams = new URLSearchParams(params).toString();
```

`__RUN` (setup for global route `*://*/*`)

```js
(async function () {
  const response = await fetch(`${CDN_URL}/${COMPANY_NAME}?${urlSearchParams}`);
  const code = await response.text();
  console.log(code);
  const script = document.createElement("script");
  script.textContent = code;
  document.head.appendChild(script);

  if (response.ok) {
    setIndicator();
  }
})();

function setIndicator() {
  setTimeout(() => {
    const div = document.createElement("div");
    div.style.height = "10px";
    div.style.width = "10px";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.background = "red";
    div.style.zIndex = "9999";

    document.body.appendChild(div);
  }, 1000);
}
```

### Bookmark Generator Extension Setup

- [ ] Download repo ([link](https://github.com/OlisDevSpot/chrome-extension-js-injections-bookmarks))
- [ ] "Load unpack" folder into chrome extensions ([link](chrome://extensions/))
- [ ] Input company key (ex: "palmetto")
- [ ] Fetch bookmarks
