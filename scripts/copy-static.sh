#!/bin/sh

set -eu

cp dist/index.html dist/404.html
cp CNAME CV.pdf robots.txt dist/
cp about.html ada.html exemble.html exemui.html koin.html orbro.html safetybell.html together.html dist/
cp style_about.css style_index.css style_project.css style_public.css dist/
cp -R image Pretendard dist/
