# Developer documentation

## Build environment

For Matomo web analytics, the build environment needs to have the following variables defined.

- `MATOMO_URL=${matomo_instance_url}`
- `MATOMO_TAG_MANAGER_CONTAINER=${matomo_tag_manager_container_id}`


## Configuration files

- **ASDF** ([_.tool-versions_](../.tool-versions))
  - **Ruby** ([_Gemfile_](../Gemfile))
    - **Jekyll** ([_\_config.yml_](../_config.yml))
  - **npm** ([_package.json_](../package.json))
    - **webpack** ([_webpack.config.js_](../webpack.config.js))
    - **Tailwind CSS** ([_tailwind.config.js_](../tailwind.config.js))
    - **PostCSS** ([_postcss.config.js_](../postcss.config.js))


## Directory structure

### `content/`

The `content/` directory holds the Ruby/Jekyll side of the application.

- `_data/`: ...
- `_drafts/`: ...
- `_events/`: ...
- `_includes/`: ...
- `_layouts/`: ...
- `_publications/`: ...
- `api/`: ...
- `assets/`: ...
- `pages/`: ...
- `404.md`: Markdown source for the HTTP _404 Not Found_ error response page
- `index.md`: Markdown source for the front page
- `properties.css.liquid`: CSS custom properties
- `site.js.liquid`: ...
- `store.js.liquid`: ...


### `src/`

The `src/` directory holds the Node.js/webpack side of the application.

- `components/`: React components
- `hooks/`: React custom hooks
- `layouts/`: JSX corresponding to the Liquid templates under `content/_layouts/`
- `pages/`: JSX corresponding to the Markdown-defined pages `content/{index, pages/*}.md`
- `stylesheets/`
  - `main.css`: The base stylesheet used by Tailwind CSS
- `utils/`: Some JavaScript utility functions
