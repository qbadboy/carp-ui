#!/bin/bash

git pull origin master
npm run build:docs

git add docs/.vuepress/dist
git commit -m "build document"

git push origin gh-pages