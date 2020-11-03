(() => {

  window.$ = {};

  [
    "db.js",
    "pages/main.js",
  ].forEach($v => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = $v;
    document.body.appendChild(script);
  });

})();
