# Style Dictionary Sample

This repository is a sample playground for testing [Style Dictionary](https://styledictionary.com/) and generate platform specific Code based on these design tokens.

# Design Tokens to Code

## Summary

This project is for exploring style dictionary, which is a way to, according to the docs:

> Export your Design Tokens to any platform - iOS, Android, CSS, JS, HTML, sketch files, style documentation, or anything you can think of. Forward-compatible with the standard https://www.designtokens.org/tr/drafts/format/ 

An initiative of the [DTCG](https://www.w3.org/community/design-tokens/) (Design Tokens Community Group).


## Setup

To get started, you’ll need to install Style Dictionary. It can be installed by running locally this npm command:

```bash
npm install
```

## Running Instructions

####  Run the build script to generate the code:

```bash
npm run build
```
This will generate the following file under `dist/assets` 

- `dist/assets/android/StyleTokens.kt` (for android)
- `dist/assets/ios/..` (for iOS coming up)
- `dist/assets/web/..` (for web coming up)

####  Run the tests:
- Tests, coming up