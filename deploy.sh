#!/usr/bin/env sh

#abort on errors
set -e

#build
npm run build

#run server
npm run serve

#navigate into build output directory
cd dist

#if deploying to custom domain, echo 'www.s.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#deploying to username.github.io
git push -f git@github.com:dkumykova/dkumykova.github.io.git master

cd -