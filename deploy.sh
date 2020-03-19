#!/usr/bin/env sh

#abort on errors
set -e

#build
nodemon start

#run server
#npm run serve

#navigate into build output directory
cd dist

#if deploying to custom domain, echo 'www.s.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#deploying to username.github.io
git push -f https://github.com/dkumykova/dkumykova.github.io.git master

cd -