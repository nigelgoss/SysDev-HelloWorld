$.pages.main = (() => {

  const load = () => {
    document.body.textContent = "";
    document.body.appendChild(main);
  };

  const main = document.createElement("main");
  
  const button = document.createElement("button");
  main.appendChild(button);
  button.textContent = "Sign In";
  button.onpointerdown = () => {
    $.db.query("Sign-In", {"Username":"1", "Password":"2"}, $d => {
      alert($d);
    });
  };
  
  return {
    load
  };

})();
