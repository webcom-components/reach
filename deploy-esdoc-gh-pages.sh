#!/bin/bash

if [ "$TRAVIS_BRANCH" = "api-proposal" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
    # Remove exising esdoc folder
    rm -rf esdoc || exit 0;

    # Build doc
    npm run doc;

    cd esdoc

    # Copy dist
    mkdir dist
    cp ../dist/*.js* dist/
    # Copy examples
    mkdir samples
    cp ../samples/*.html samples/

    # gh-pages push
    git init
    git config user.name "webcomOps"
    git config user.email "webcom.ops@orange.com"
    git add .
    git commit -m "Deploy to GitHub Pages"
    git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages > /dev/null 2>&1
fi