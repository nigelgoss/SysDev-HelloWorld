(() => {

  window.$ = {
    pages: {},
  };

  let load = [
    "script/db.js",
    "pages/main.js",
  ];
  
  load.forEach($v => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = $v;
    script.onload = () => {
      load = load.filter($e => $e !== $v);
      if (load.length === 0) loaded();
    };
    script.onerror = script.onload;
    document.head.appendChild(script);
  });
  
  const loaded = () => {
    $.pages.main.load()
  };

})();
