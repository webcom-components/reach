#!/bin/bash

if [ "$TRAVIS_BRANCH" = "api-proposal" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
    # Remove exising esdoc folder
    rm -rf esdoc || exit 0;

    # Build doc
    npm run doc;

    # Build lib
    npm run build;

    # Copy dist
    mkdir -p esdoc/dist
    cp dist/*.js* esdoc/dist/

    # Copy examples
    mkdir -p esdoc/samples
    cp samples/*.html esdoc/samples/

    # Copy test report
    mkdir -p esdoc/report
    cp report/*.html esdoc/report/

    # Copy coverage report
    mkdir -p esdoc/coverage
    cp -R coverage/lcov-report/* esdoc/coverage/

    # gh-pages push
    cd esdoc
    git init
    git config user.name "webcomOps"
    git config user.email "webcom.ops@orange.com"
    git add .
    git commit -m "Deploy to GitHub Pages"
    git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages > /dev/null 2>&1
fi