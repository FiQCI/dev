# Building

After [installing the software dependencies](install.md), you should be ready to build or serve the site from a local development server.


## Serve with live reload

The command `npm run watch` starts Tailwind CSS, Webpack and Jekyll concurrently with the source monitored for changes.

The site should now be ready at `http://localhost:4000`.


## Build environment

For Matomo web analytics, the build environment needs to have the following variables defined.

- `MATOMO_URL=${matomo_instance_url}`
- `MATOMO_TAG_MANAGER_CONTAINER=${matomo_tag_manager_container_id}`
