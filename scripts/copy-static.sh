#!/bin/sh

set -eu

cp dist/index.html dist/404.html
cp CNAME CV.pdf robots.txt dist/
cp -R image dist/
