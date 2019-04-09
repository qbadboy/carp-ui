#!/bin/bash

set -e

npm run build:docs

cd docs/.vuepress/dist

git init
git add -A
git commit -m "build document"

Git_URL="https://"$github_access_token"@github.com/qbadboy/carp-ui.git"

git push -f $Git_URL master:gh-pages

cd ..

rm -rf dist

echo "--------------------------------------"
echo "   ✨ deploy documents is success ✨ "
echo "--------------------------------------"
