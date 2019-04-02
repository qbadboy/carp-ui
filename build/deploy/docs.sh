#!/bin/bash

set -e

git pull origin master
npm run build:docs

cd docs/.vuepress/dist

git init
git add -A
git commit -m "build document"

git config --local user.name "zhuhong"
git config --local user.email "qbadboy@gmail.com"

git push -f https://${access_token}@github.com/qbadboy/carp-ui.git master:gh-pages