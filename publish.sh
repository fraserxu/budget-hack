#!/bin/bash

set -e -x

rm -rf dist

mkdir -p dist

npm run build

cp -r index.html styles data bundle.js dist

# gh-pages -d dist
surge dist budget-hack.fraserxu.me

rm -rf dist
