#!/usr/bin/env bash

set -o nounset
set -o errexit
set -o pipefail

cat << EOF > ~/app/.ebextensions/config.js
(() => {
  \$.ENV = "PROD";
})();
EOF
