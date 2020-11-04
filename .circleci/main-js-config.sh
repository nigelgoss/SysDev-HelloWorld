#!/usr/bin/sh

cat << EOF > ~/app/.ebextensions/config.js
(() => {
  \$.ENV = "PROD";
})();
EOF
