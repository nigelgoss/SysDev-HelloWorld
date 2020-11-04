#!/usr/bin/sh

cat << EOF > config.js
(() => {
  \$.ENV = "PROD";
})();
EOF
