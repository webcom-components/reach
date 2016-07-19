## from CDN

The fastest way to get started is to serve JavaScript from [jsdelivr](https://www.jsdelivr.com/projects/webcom-reach)

```html
<!-- The Flexible DataSync library -->
<script type='text/javascript' src='https://datasync.orange.com/libjs/latest/webcom.js'></script>
<!-- The Reach Library -->
<script type='text/javascript' src='https://cdn.jsdelivr.net/webcom-reach/latest/reach.js'></script>
```

## from `bower` or `npm`

If you'd like to use a package manager, like [bower](https://bower.io):

```bash
bower install --save webcom-reach
```

or [npm](https://www.npmjs.com/package/webcom-reach):

```bash
npm i --save webcom-reach
```

Don't forget to include the Flexible DataSync dependency to your app:

```html
<!-- The Flexible DataSync library -->
<script type='text/javascript' src='./PACKAGES_FOLDER/webcom/webcom.js'></script>
<!-- The Reach Library -->
<script type='text/javascript' src='./PACKAGES_FOLDER/webcom-reach/dist/reach.js'></script>
```

`PACKAGES_FOLDER` being `node_modules` when using `npm` &amp; `bower_components` when using `bower`.
