window.onload = () => {
    // Récupérer les données envoyées par le formulaire dans l'URL
    const paramsString = document.location.search;
    const searchParams = new URLSearchParams(paramsString);
  
    // Boucler sur chaque paramètre de l'URL
    for (const param of searchParams) {
      console.log(param); // Affiche le tableau [clé, valeur] dans la console
  
      const elementId = param[0];  // L'identifiant du champ de saisie
      const elementValue = param[1]; // La valeur du champ de saisie
      const element = document.getElementById(elementId);
  
      // Vérifier si l'élément existe dans le document
      if (element !== null) {
        element.textContent = elementValue;
      }
  
      // Traiter des liens spéciaux pour les champs "address" et "email"
      if (param[0] === "address") {
        element.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(elementValue)}`;
      } else if (param[0] === "email") {
        element.href = `mailto:${elementValue}?subject=Hello!&body=What's up?`;
      }
    }
  };
  