
window.onload = function () {
    console.log("DOM ready!");
  
    const form = document.querySelector("#userForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche le rechargement de la page
  
      // Récupérer les valeurs des champs
      const name = document.querySelector("#name").value;
      const firstname = document.querySelector("#firstname").value;
      const birthday = document.querySelector("#birthday").value;
      const address = document.querySelector("#address").value;
  
      // Validation des champs
      if (name.length < 5 || firstname.length < 5) {
        alert("Le nom et le prénom doivent contenir au moins 5 caractères.");
        return;
      }
  
      const birthdayDate = new Date(birthday);
      const now = new Date();
      if (birthdayDate >= now) {
        alert("La date de naissance ne doit pas être dans le futur.");
        return;
      }
  
      // Générer le contenu de la modal
      const modalTitle = document.querySelector(".modal-title");
      const modalBody = document.querySelector(".modal-body");
  
      modalTitle.textContent = `Bienvenue ${firstname}`;
      modalBody.innerHTML = `
        <p>Vous êtes né le ${birthday} et vous habitez :</p>
        <p>${address}</p>
        <img 
          src="https://maps.googleapis.com/maps/api/staticmap?markers=${encodeURIComponent(
            address
          )}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" 
          alt="Carte de votre adresse" 
          class="img-fluid"
        />
      `;
  
      // Afficher la modal
      const myModal = new bootstrap.Modal(document.getElementById("myModal"));
      myModal.show();
    });
  };
  
  
  