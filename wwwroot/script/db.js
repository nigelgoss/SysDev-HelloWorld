$.db = (() => {

  const query = ($query, $parameters, $success) => {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200) return;
      $success(xhr.responseText);
    };
    xhr.open("POST", "/api/?something", true);
    xhr.send();
    
  };
  
  return {
    query
  };

})();
