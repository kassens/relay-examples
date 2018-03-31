/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import {graphql} from 'graphql';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import {schema} from './data/schema';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import TodoAppRoot from './js/TodoAppRoot';

const APP_PORT = 3000;

// Serve the Relay app
const compiler = webpack({
  mode: 'development',
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, 'js', 'app.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: '/',
  },
});


const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: {colors: true},
  before: (app) => {
    app.get('/ssr', async (req, res) => {
      res.set('Content-Type', 'text/html');

      const queryText = require('./js/__generated__/appQuery.graphql').text;
      const queryResponse = await graphql(schema, queryText);

      // Create a mock network layer that only knows how to respond to the apps
      // one GraphQL request for initial render.
      // The key here is that it responds asynchronously which allows
      // react-relay to skip the loading state and go straight to fully rendered
      // app.
      const serverNetwork = Network.create((graphQLRequest) => {
        if (graphQLRequest.text !== queryText) {
          console.error('unexpected query in ssr mode');
          process.exit();
        }
        return queryResponse;
      })

      const environment = new Environment({
        network: serverNetwork,
        store: new Store(new RecordSource()),
      });

      const serverRendered = ReactDOMServer.renderToString(
        <TodoAppRoot environment={environment} />
      );
      res.send(`<!doctype html>
<html lang="en" data-framework="relay">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Relay • TodoMVC</title>
    <link rel="stylesheet" href="base.css">
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    ${serverRendered}
  </body>
</html>`
      );
    })
  },
});

// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));

// Setup GraphQL endpoint
app.use('/graphql', graphQLHTTP({
  schema: schema,
  pretty: true,
}));

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
