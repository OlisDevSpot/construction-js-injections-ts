// ==UserScript==
// @name            Construction JavaScript Injection
// @description     Inject some javascript into these websites
// @version         1.0.3
// @author          Oliver P
// @namespace       https://github.com/OlisDevSpot
// @license         MIT
// @match           *://*/*
// @run-at          document-end
// @compatible      safari
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.registerMenuCommand
// ==/UserScript==

// jshint esversion: 8

(async function () {
  if (window.self !== window.top) return;

  let company = await GM.getValue("company");
  let firstName = await GM.getValue("firstName");
  let lastName = await GM.getValue("lastName");

  if (!company || !firstName || !lastName) {
    GM.registerMenuCommand("Set Sales Credentials", configure);
    await configure();
  }

  async function configure() {
    company = prompt("Enter your company name (e.g. david-star):") || "";
    firstName = prompt("First name:") || "";
    lastName = prompt("Last name:") || "";

    if (company && firstName && lastName) {
      await GM.setValue("company", company);
      await GM.setValue("firstName", firstName);
      await GM.setValue("lastName", lastName);
      location.reload();
    } else {
      alert("Values cannot be empty!");
    }
  }

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

  // Inject dynamic code
  const response = await fetch(`${CDN_URL}/${COMPANY_NAME}?${urlSearchParams}`);
  const code = await response.text();
  console.log(code);
  const script = document.createElement("script");
  script.textContent = code;
  document.head.appendChild(script);
})();
