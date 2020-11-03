$.pages.main = (() => {

  const load = () => {
    document.body.textContent = "";
    document.body.appendChild(main);
  };

  const main = document.createElement("main");
  
  let button = document.createElement("button");
  main.appendChild(button);
  button.textContent = "Sign In";
  button.onpointerdown = () => {
    $.db.query("sign-in", {"Username":"1", "Password":"2"}, $d => {
      alert($d);
    });
  };
  
  button = document.createElement("button");
  main.appendChild(button);
  button.textContent = "Sign Out";
  button.onpointerdown = () => {
    $.db.query("sign-out", {}, $d => {
      alert($d);
    });
  };
  
  return {
    load
  };

})();
