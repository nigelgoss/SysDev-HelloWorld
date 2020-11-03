$.pages.main = (() => {

  const load = () => {
    document.body.textContent = "";
    document.body.appendChild(main);
  };

  const main = document.createElement("main");
  
  main.textContent = "Hello world";
  
  return {
    load
  };

})();
