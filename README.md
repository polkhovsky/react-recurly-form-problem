Issue: trying to set up a payment form using Recurly js and React results in large iFrames. Attempting to style fields results in fields not being set up at all.

Steps:

1. Create a basic React app. I used create-react-app
2. Place `<script src="https://js.recurly.com/v4/recurly.js"></script>` in src/index.html
3. Set up the form and events in [src/App.js](https://github.com/polkhovsky/react-recurly-form-problem/blob/master/src/App.js)