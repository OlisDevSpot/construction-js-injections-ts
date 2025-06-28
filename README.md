# 🖥️ DESKTOP SETUP

## 📦 Required Extensions

- [ ] **User JavaScript and CSS**  
       → [Download from Chrome Web Store](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
- [ ] **Bookmark Generator (custom extension)**  
       → [Download from GitHub](https://github.com/OlisDevSpot/chrome-extension-js-injections-bookmarks)

---

## ⚙️ Setup Instructions

### 1. User JavaScript and CSS

#### ✅ Step 1: Install the Extension

→ Download it from the [Chrome Web Store](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)

#### ✅ Step 2: Add Script Snippets

**`__1_PERSONAL_VARS`**

```js
const COMPANY_NAME = "my-company";
const FIRST_NAME = "Oliver";
const LAST_NAME = "Porat";
```

**`__2_VAR_SETUP`**

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

**`__RUN` (setup for global route `*://*/*`)**

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

### 2. Bookmark Generator Extension Setup

#### ✅ Step 1: Download the repo & extract

- Get it from this [Github repo](https://github.com/OlisDevSpot/chrome-extension-js-injections-bookmarks)

#### ✅ Step 2: Add extension to chrome

- Visit chrome extensions at `chrome://extensions`
- Click "Load unpack" folder into chrome extensions ([link](chrome://extensions/))

#### ✅ Step 3: Configure company

- Input company key (ex: "palmetto")

#### ✅ Step 4: Fetch bookmarks

- Click `Sync bookmarks`

# 📱 iOS SETUP

## 📦 Required Extensions

- [ ] **Stay (Userscript manager)**  
       → [Download from App Store](https://apps.apple.com/us/app/stay-for-safari/id1591620171)

---

## ⚙️ Setup Instructions

### 1. Stay Configuration

#### ✅ Step 1: Enable silent background script updates

#### ✅ Step 2: Download main Userscript

→ Get it from [Greasy Fork](https://greasyfork.org/en/scripts/540978-construction-javascript-injection)
