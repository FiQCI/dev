# Fork of [FiQCI/fiqci.github.io](https://github.com/FiQCI/fiqci.github.io) repository

## Site rewrite

### Developer documentation

See [docs/index.md](docs/index.md).


### Tools

- (`asdf` for runtime version management)
  - Ruby
    - (Bundler for managing Ruby gems)
    - Jekyll
  - Node.js
    - React
    - Tailwind CSS
    - Webpack

Some installation instructions follow. All of the commands shown are to be executed in the repository root.


#### Install `asdf` for runtime version management

Instructions at [Getting Started | asdf](https://asdf-vm.com/guide/getting-started.html).


##### Install Ruby and Node.js using `asdf`

The file `.tool-versions` contains the version numbers for
  - Ruby: 3.3.5
  - Node.js: v22.10.0
  
Install the `asdf` plugins (see the respective Git repositories for required dependencies) with

```bash
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

and

```bash
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

Then, as instructed in `asdf --help`,

> ```text
> asdf install                            Install all the package versions listed
>                                         in the .tool-versions file
> ```

the command `asdf install` should install both Ruby and Node.js. It might take a while, though. When the installations are done, check the versions with

```console
$ ruby --version
ruby 3.3.5 (2024-09-03 revision ef084cc8f4) [x86_64-linux]
```

and

```console
$ node --version
v22.10.0
```


##### Install the Ruby gems and Node packages

If not already installed, install Bundler with

```bash
gem install bundler
```

Then, using Bundler, install the Ruby gems defined in the Gemfile

```bash
bundle install
```

Again, you can check the version (of Jekyll this time) with

```console
$ jekyll --version 
jekyll 4.3.4
```

Finally, install the Node packages with the command

```bash
npm install
```


### Serve with live reload

The command `npm run watch` starts Tailwind CSS, Webpack and Jekyll concurrently with the source monitored for changes.

The site should now be ready at `http://localhost:4000`.
