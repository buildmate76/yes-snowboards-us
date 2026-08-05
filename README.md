# YES Shopify Theme

This repository contains a Shopify theme based on `Dawn 14.0.0`.

## Project overview

- Theme name: `Dawn`
- Theme version: `14.0.0`
- Theme author: `Shopify`

The repository includes standard Shopify theme folders such as `assets/`, `config/`, `layout/`, `sections/`, `snippets/`, `templates/`, and `locales/`.

## How to use

### If you work with Shopify CLI

1. Install Shopify CLI: https://shopify.dev/docs/cli
2. Authenticate with your store.
3. Use the theme commands:
   - `shopify theme pull` to download the live theme from the store
   - `shopify theme push` to upload changes to the store
   - `shopify theme serve` to preview locally

### If you work directly in the Shopify admin

- Edit theme files in the `Online Store > Themes > Customize` area.
- Use `config/settings_data.json` for theme settings and schema-driven customizations.

## Repository structure

- `assets/` — CSS, JS, images, fonts, and other static assets
- `config/` — theme settings, schema, and data files
- `layout/` — base layout templates such as `theme.liquid`
- `sections/` — section templates used by the theme editor
- `snippets/` — reusable Liquid fragments
- `templates/` — page templates and JSON templates
- `locales/` — translation files for different languages

## Notes

- There is no `package.json` or Node project detected in this repository, so local build tooling is not currently present.
- `.gitignore` has been configured to ignore editor files, OS artifacts, environment files, node modules, and Shopify CLI local sync folders.

## Recommended workflow

1. Make changes in your local copy.
2. Test them in Shopify theme preview or locally with `shopify theme serve`.
3. Commit only the source theme files.
4. Push the changes to your Git repository and deploy via Shopify CLI or theme admin.
