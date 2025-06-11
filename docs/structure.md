# Structure

## Configuration files

- **ASDF** ([_.tool-versions_](../.tool-versions)): Version numbers for Ruby and Node.js runtimes.
  - **Ruby** ([_Gemfile_](../Gemfile)): The required Ruby gems.
    - **Jekyll** ([_\_config.yml_](../_config.yml)): Jekyll configuration file.
  - **npm** ([_package.json_](../package.json)): Node.js package configuration.
    - **webpack** ([_webpack.config.js_](../webpack.config.js)): Webpack configuration.
    - **Tailwind CSS** ([_tailwind.config.js_](../tailwind.config.js)): Tailwind CSS configuration.
    - **PostCSS** ([_postcss.config.js_](../postcss.config.js)): PostCSS configuration.


## Directory structure

### `content/`: Ruby/Jekyll

- `_data/`: Directory for [Jekyll data files](https://jekyllrb.com/docs/datafiles/).
  - `theme/`:
    - `constants.yml`: The constants used in the site theme.
- `_drafts/`: Directory for [Jekyll draft posts](https://jekyllrb.com/docs/posts/#drafts).
- `_events/`: Contains the 'events' collection configured in [_config.yml](../_config.yml).
- `_includes/`: Directory for [Jekyll includes](https://jekyllrb.com/docs/includes/), i.e. Liquid template fragments that can be included in content or templates.
  - `external/`: Links to software libraries served from CDNs.
    - `font.html`: The [Inter font](https://github.com/rsms/inter) used on the site.
    - `mathjax.html`: [MathJax](https://www.mathjax.org/) for rendering math.
- `_layouts/`: Directory for [Jekyll layouts](https://jekyllrb.com/docs/layouts/), i.e. layout Liquid templates.
  - `base.html`: The base template.
  - `home.html`: The template for the home page.
  - `page.html`: A page template.
  - `post.html`: A post template.
- `_publications/`: Contains the 'publications' collection configured in [_config.yml](../_config.yml).
- `api/`: Directory for templates to be rendered and served as JSON.
  - `theme/`
    - `constants.yml`: Liquid template for serving _/content/\_data/theme/constants.yml_ at _/api/theme/constants.json_.
- `assets/`: Directory for static assets, such as images.
- `pages/`: Markdown sources for individual pages.
  - `about.md`: \[TODO\]
  - `access.md`: \[TODO\]
  - `events.md` The 'Events' page.
  - `home.md`: The home page. (Rendered as _/index.html_.)
  - `publications.md`: The 'Blogs and instructions' page.
  - `search.md`: The search results page.
  - `status.md`: The 'Status' page.
- `404.md`: Markdown source for the HTTP _404 Not Found_ error response page.
- `properties.css.liquid`: CSS custom properties.
- `site.js.liquid`: \[TODO\]
- `store.js.liquid`: \[TODO\]


### `src/`: Node.js/React

- `components/`: React components.
- `hooks/`: React custom hooks.
- `layouts/`: JSX corresponding to the Liquid templates found under _/content/\_layouts/_.
- `pages/`: JSX corresponding to the Markdown-defined pages under _/content/pages/_.
- `stylesheets/`
  - `main.css`: The base stylesheet used by Tailwind CSS.
- `utils/`: Some JavaScript utility functions.

## Overview: Home page

- _Home_
  - **Page Markdown** [home.md](../content/pages/home.md)
    - `id='access-cards'`
    - `id='blog-cards'`
    - `id='event-cards'`
  - **Page JSX** [home.md.jsx](../src/pages/home.md.jsx)
    - `<HomeLayout />` (_props_ <-- `useJsonApi()`)
    - `<AccessCards />` (createPortal `id='access-cards'`)
    - `<BlogCards />` (createPortal `id='blog-cards'`)
    - `<EventCards />` (createPortal `id='event-cards'`)
    - **`<HomePage />` (createRoot `id='react-root'`)**
  - **Liquid layout** [home.html](../content/_layouts/home.html)
    - `id='hero'`
    - **Liquid layout** [base.html](../content/_layouts/base.html)
      - **`id='react-root'`**
      - `id='navigation-header'`
      - `id='footer'`
  - **Layout JSX** [home.html.jsx](../src/layouts/home.html.jsx)
    - `<BaseLayout />` (_props_ <-- `<HomeLayout />`)
    - `<Hero />` (createPortal `id='hero'`)
    - **Layout JSX** [base.html.jsx](../src/layouts/base.html.jsx)
      - `<Analytics />`
      - `<NavigationHeader />` (createPortal `id='navigation-header'`)
      - `<Footer />` (createPortal `id='footer'`)


### A bottom-up view

The base layout contains the page header, the page footer and the analytics component, since these should exist on every page of the site. The home _layout_ adds the Hero component. Finally, the access, blog and event cards are added by the home _page_ as its content.

The ['base' layout](../content/_layouts/base.html) includes a Liquid template fragment with `id='react-root'`. This `id` is used in the JSX file for a **page** with React components (`react: true` included in the front matter) to establish the React root element with `createRoot`. Any additional React components are then inserted onto the page (or layout) by using `createPortal`. A page that does not have `react: true` in its front matter uses [default.jsx](../src/pages/default.jsx) by default.


### A top-down view

The Liquid layout structure needs to be mirrored in JSX. The ['Home' page](../content/pages/home.md) includes (using [section-root.html](../content/_includes/react/section-root.html)) some React components and uses the ['home' layout](../content/_layouts/home.html). The [JSX file for the 'Home' page](../src/pages/home.md.jsx) thus imports `HomeLayout`, fetches the theme constants and passes them down to `HomeLayout` as props. The 'home' layout itself has `layout: base` defined in its front matter, so in the [corresponding JSX file](../src/layouts/home.html.jsx), `BaseLayout` is imported and the props are passed on to it.


## Overview: About page

- _Home_
  - **Page Markdown** [about.md](../content/pages/about.md)
  - **Page JSX** [about.md.jsx](../src/pages/about.md.jsx)
    - `<PageLayout />` (_props_ <-- `useJsonApi()`)
    - **`<AboutPageView />` (createRoot `id='react-root'`)**
  - **Liquid layout** [page.html](../content/_layouts/page.html)
    - `id='banner'`
    - `id='breadcrumbs'`
    - **Liquid layout** [base.html](../content/_layouts/base.html)
      - **`id='react-root'`**
      - `id='navigation-header'`
      - `id='footer'`
  - **Layout JSX** [page.html.jsx](../src/layouts/page.html.jsx)
    - `<BaseLayout />` (_props_ <-- `<PageLayout />`)
    - `<Banner />` (createPortal `id='banner'`)
    - `<Breadcrumbs />` (createPortal `id='breadcrumbs'`)
    - **Layout JSX** [base.html.jsx](../src/layouts/base.html.jsx)
      - `<Analytics />`
      - `<NavigationHeader />` (createPortal `id='navigation-header'`)
      - `<Footer />` (createPortal `id='footer'`)


### A bottom-up view

The base layout contains the page header, the page footer and the analytics component, since these should exist on every page of the site. The page _layout_ adds the Banner and Breadcrumbs components.

The ['base' layout](../content/_layouts/base.html) includes a Liquid template fragment with `id='react-root'`. This `id` is used in the JSX file for a **page** with React components (`react: true` included in the front matter) to establish the React root element with `createRoot`. Any additional React components are then inserted onto the page (or layout) by using `createPortal`. A page that does not have `react: true` in its front matter uses [default.jsx](../src/pages/default.jsx) by default.


### A top-down view

The Liquid layout structure needs to be mirrored in JSX. The ['About' page](../content/pages/about.md) uses the ['page' layout](../content/_layouts/page.html). The [JSX file for the 'About' page](../src/pages/about.md.jsx) thus imports `PageLayout`, fetches the theme constants and passes them down to `PageLayout` as props. The ['Page' layout](../content/_layouts/page.html.jsx) includes (using [react/root.html](../content/_includes/react/root.html)) some React components. The 'page' layout itself has `layout: base` defined in its front matter, so in the [corresponding JSX file](../src/layouts/home.html.jsx), `BaseLayout` is imported and the props are passed on to it.

## Overview: Access page

- _Home_
  - **Page Markdown** [access.md](../content/pages/access.md)
    - `id='access'` 
  - **Page JSX** [access.md.jsx](../src/pages/access.md.jsx)
    - `<PageLayout />` (_props_ <-- `useJsonApi()`)
    - `<GetAcceess />` (createPortal `id='access'`)
    - **`<AccessPage />` (createRoot `id='react-root'`)**
  - **Liquid layout** [page.html](../content/_layouts/page.html)
    - `id='banner'`
    - `id='breadcrumbs'`
    - **Liquid layout** [base.html](../content/_layouts/base.html)
      - **`id='react-root'`**
      - `id='navigation-header'`
      - `id='footer'`
  - **Layout JSX** [page.html.jsx](../src/layouts/page.html.jsx)
    - `<BaseLayout />` (_props_ <-- `<PageLayout />`)
    - `<Banner />` (createPortal `id='banner'`)
    - `<Breadcrumbs />` (createPortal `id='breadcrumbs'`)
    - **Layout JSX** [base.html.jsx](../src/layouts/base.html.jsx)
      - `<Analytics />`
      - `<NavigationHeader />` (createPortal `id='navigation-header'`)
      - `<Footer />` (createPortal `id='footer'`)


### A bottom-up view

The base layout contains the page header, the page footer and the analytics component, since these should exist on every page of the site. The page _layout_ adds the Banner and Breadcrumbs components.

The ['base' layout](../content/_layouts/base.html) includes a Liquid template fragment with `id='react-root'`. This `id` is used in the JSX file for a **page** with React components (`react: true` included in the front matter) to establish the React root element with `createRoot`. Any additional React components are then inserted onto the page (or layout) by using `createPortal`. A page that does not have `react: true` in its front matter uses [default.jsx](../src/pages/default.jsx) by default.


### A top-down view

The Liquid layout structure needs to be mirrored in JSX. The ['Access' page](../content/pages/access.md) uses the ['page' layout](../content/_layouts/page.html). The [JSX file for the 'Access' page](../src/pages/access.md.jsx) thus imports `PageLayout`, fetches the theme constants and passes them down to `PageLayout` as props. The ['Page' layout](../content/_layouts/page.html.jsx) includes (using [react/root.html](../content/_includes/react/root.html)) some React components. The 'page' layout itself has `layout: base` defined in its front matter, so in the [corresponding JSX file](../src/layouts/home.html.jsx), `BaseLayout` is imported and the props are passed on to it.

