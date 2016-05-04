## BBC Internal Bootstrap

An extension of [Twitter Bootstrap](http://getbootstrap.com/), customised for use in internal BBC tools such as the Linked Data Manager and CPS Vivo.

### Usage

The easiest way is to use [Bower](http://bower.io/):

    $ bower install git@github.com:bbc-fm-nk-core-eng/bbc-internal-bootstrap -S

Alternatively, use the [releases page](https://github.com/bbc-fm-nk-core-eng/bbc-internal-bootstrap/releases).

### Contributing

The idea behind `bbc-internal-bootstrap` is one of shared ownership – anyone is free to add anything, as long as they feel it's of use to more than one team. Contribute via pull requests, and seek a review from someone else before merging. Finally, release new versions whenever appropriate and use semantic versioning. There's a bit more detail at the bottom of this page.

#### Installation

To build the library and view the documentation, you'll need to install [Node](http://nodejs.org/), [Grunt](http://gruntjs.com/), [Bower](http://bower.io) and [Ruby](https://www.ruby-lang.org/en/). 

[Jekyll](http://jekyllrb.com/) is required to generate the documentation. It has a dependency on Ruby. There are guides for both [Mac OS X](http://jekyllrb.com/docs/installation/) and [Windows](http://jekyllrb.com/docs/windows/#installation). For Windows, [this issue thread](https://github.com/dannygarcia/grunt-jekyll/issues/25) might be useful.

To install all the dependencies, run:

    $ npm install
    $ bower install

You'll need to re-run these commands if any of the `npm` or `bower` dependencies change.

#### Development

Run these two commands in separate terminal windows/tabs:

    $ grunt serve-docs
    $ grunt watch

This will serve the documentation on `http://localhost:9001`, and re-generate the documentation and compile the LESS whenever those files are changed.

### Grunt Commands

* `grunt`: compile the LESS, SUIT CSS components and the Jekyll documentation.
* `grunt build`: compile the LESS and SUIT CSS components.
* `grunt serve-docs`: creates a new build of the Jekyll docs and then serves them on localhost.
* `grunt watch`: looks for changes to the `.less` files and compiles the CSS. Also looks for changes to the documentation and rebuilds the docs with Jekyll.
* `grunt watch:dist`: watch just the LESS.
* `grunt watch:docs`: watch just the documentation.

### Pull Requests

Here are some steps to follow:

1. Create a new branch with a meaningful name: `git checkout -b new-branch-name`.
1. Do some work, and commit to that branch.
1. Submit a new pull request.
1. Have your pull request reviewed by someone else.
1. Once everyone's happy, the pull request will be merged.

After your work has been merged to master, work out if it's a good time to cut a new version.
