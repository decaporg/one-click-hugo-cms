# lahr.codes website code

The site is deployed to [lahr.codes](lahr.codes)
The site is built with the static site generator Hugo.
Furthermore the Netlify CMS system is included, to allow editing blog posts and pages without a hassle.


## Local Development

Clone this repository, and run `yarn` or `npm install` from the new folder to install all required dependencies.

Then start the development server with `yarn start` or `npm start`.

### Alternative: Docker development environment

First build the image.
This will install npm dependencies and initialize the app with the current state of your local repository.
```bash
cd <checked-out repository>
docker build -t lahr.codes .
```

Start the docker container. This automatically mounts your working directory through the option ``-v `pwd`:/usr/src/app``:
```bash
docker run -ti --name lahr.codes -v `pwd`:/usr/src/app -p 3000:3000 -d  lahr.codes:latest
```

Browse to [0.0.0.0:3000](0.0.0.0:3000)

## Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

## SVG

All SVG icons stored in `site/static/img/icons` ~~are automatically optimized with SVGO (gulp-svgmin) and concatenated into a single SVG sprite stored as a a partial called `svg.html`. Make sure you use consistent icons in terms of viewport and art direction for optimal results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```~~

are currently not optimized. The optimization was removed somewhere during template development.
An [issue](https://github.com/netlify-templates/one-click-hugo-cms/issues/213) was created, but was not fixed yet.
If someone with npm experience, wants to fix this, feel free to do so.
But I think gulp is no longer used in this template, and you'd have to use another tool.
Currently the icons are loaded as simple svg files.

## Deploy this website to Netlify

Use our deploy button to get your own copy of the repository. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/codeforlahr/lahr.codes&stack=cms)

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

Once the initial build finishes, you can invite yourself as a user. Go to the Identity tab in your new site, click "Invite" and send yourself an invite.

## About the Theme 

The Kaldi Theme templete from Netlify is used. 
This is a small business template built with [Victor Hugo](https://github.com/netlify/victor-hugo) and [Netlify CMS](https://github.com/netlify/netlify-cms), designed and developed by [Darin Dimitroff](http://www.darindimitroff.com/), [spacefarm.digital](https://www.spacefarm.digital).

