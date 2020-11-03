$.pages.main = (() => {

  const load = () => {
    document.body.textContent = "";
    document.body.appendChild(main);
  };

  const main = document.createElement("main");
  
  const button = document.createElement("button");
  button.textContent = "Go";
  button.onpointerdown = () => {
    $.db.query(null, null, $d => { alert($d); });
  };
  
  return {
    load
  };

})();
