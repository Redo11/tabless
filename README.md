# Tabless

A tabliss fork, adding private search engines and a few things. And tables!

# Original website

[https://tabliss.io](https://tabliss.io)

## Building

Install dependencies with `npm install` before running the following scripts.

- `npm start` Start webpack dev server for local development at `http://localhost:8080`
- `npm run build` Production build for web
- `npm run build:chromium` Production build for Chrome web extension
- `npm run build:firefox` Production build for Firefox web extension
- `npm run translations` Manage translation files

To develop with external services you will additionally need to signup for your own API keys
and enter them into your `.env` file. Get started by copying the example provided `cp .env.example .env`.

## Usage

# General

After running build command go to tabless/dist and
pack all files to zip with extension
- XPI for Firefox
- ZIP for Chrome

# Firefox

!!!
`You can use unsigned extensions only on developer version.
Waterfox and Icecat are not tested by me. Feedback appriciated!
(You can install addons as temporary, but they clear with restart)`
!!!
Just drag&drop extension(XPI), or open like webpage.

# Chrome,Chromium

`Using developer mode (not version) allows to install unverified extensions.
Other chromium based browsers, should have developer mode in them.`
Go to chrome://extensions/, enable developer mode.
Click on load unpacked addon and select ZIP file.

## Translations

Go [https://github.com/joelshepherd/tabliss](here) for more info.
