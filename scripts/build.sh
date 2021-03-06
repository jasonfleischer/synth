#!/bin/bash

# requirements:
# npm, uglifycss, browserify

# $ npm install -g uglifycss
# $ npm install -g uglify-js
# $ npm install -g browserify

npm update;

uglifycss css/alert.css css/button.css css/header.css css/main.css css/root.css css/select.css css/switch.css css/slider.css > css/bundle.css

uglifyjs js/prototypes.js js/storage.js js/oscillator.js js/note.js js/alert.js js/keyboard_shortcuts.js js/window_resize.js js/oscilloscope.js js/setup_controls.js js/information.js js/main.js js/audio_controller.js js/install.js service_worker.js -o js/bundle.js
browserify js/bundle.js -o js/bundle.js
uglifyjs js/bundle.js -o js/bundle.js

git add *; git commit -m 'update'; git push;

echo '-- Finished build.sh for synth --'