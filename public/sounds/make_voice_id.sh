#!/bin/sh
curl "https://translate.google.com/translate_tts?ie=UTF-8&q=$2&tl=id&client=tw-ob" -H "Referer: http://translate.google.com/" -H "User-Agent: stagefright/1.2 (Linux;Android 5.0)" > $1.mp3
