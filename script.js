function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);


       /// ON ECRIT LE CODE ICI ! 
      
       // Définition de variables
       let journal = data.journal;
       console.log(journal);

      // Nom du journal /
       let nomJournal = journal.nomJournal; 
       document.getElementById('nomJournal').textContent = nomJournal;
       console.log(document.getElementById('nomJournal')); 

        // Phrase d'accorche 
       let phraseAccroche = journal.phraseAccroche; 
       document.getElementById('phraseAccroche').textContent = phraseAccroche;
       console.log(document.getElementById('phraseAccroche')); 

        // Appel à l'action 
       let texteAppelAction = journal.texteAppelAction; 
       document.getElementById('texteAppelAction').textContent = texteAppelAction;
       console.log(document.getElementById('texteAppelAction'));

       // Main article 
       let articlePrincipal = journal.articlePrincipal;
       let titrePrincipal = articlePrincipal.titre; 
       let themePrincipal = articlePrincipal.theme; 
       let descriptionPrincipal = articlePrincipal.description;
       let datePrincipal = articlePrincipal.date; 
       let imagePrincipal = articlePrincipal.image;

       // DOM article principal
       document.getElementById('titrePrincipal').textContent = titrePrincipal;
       document.getElementById('themePrincipal').textContent = themePrincipal;
       document.getElementById('datePrincipal').textContent = datePrincipal;
       document.getElementById('descriptionPrincipal').textContent = descriptionPrincipal;
       document.getElementById('imagePrincipal').src = imagePrincipal;

      // Affichage console.log
       console.log(document.getElementById('titrePrincipal').textContent);
       console.log(document.getElementById('themePrincipal').textContent);
       console.log(document.getElementById('datePrincipal').textContent);
       console.log(document.getElementById('descriptionPrincipal').textContent); 
       console.log(document.getElementById('imagePrincipal').src); 


       //Articles secondaires 
       let articles = journal.articles;
       let articlesContainer = document.getElementById('articlesContainer');

       articles.forEach((article) => {
         let articleHTML = `
           <div class="article">
             <h3>${article.titre}</h3>
             <p>${article.theme} - ${article.date}</p>
             <img src="${article.image}" alt="${article.titre}">
           </div>`;
         articlesContainer.insertAdjacentHTML('beforeend', articleHTML);
       });
       afficherArticles(articles, articlesContainer);

      // Themes//
       let themes = journal.themes; 
       themes.forEach((theme) => {
         let themeHTML = `
           <div class="theme">
             <h3>${theme.nom}</h3>
             <p>${theme.description}</p>
           </div>`;

          let navBar = `<li><a href="">${theme.nom}</a></li>`

          
      let themesContainer = document.getElementById('themesContainer');
      themesContainer.insertAdjacentHTML('beforeend', themeHTML);
      
       let navBarContainer = document.getElementById('navBarList');
       navBarContainer.insertAdjacentHTML('beforeend', navBar)


       });
       afficherThemes (themes, themesContainer)


      
      // Auteurs //
       let auteurs = journal.auteurs; 
       let auteursContainer = document.getElementById('auteursContainer');
    
       afficherAuteurs(auteurs, auteursContainer);
      
       /// FIN DU CODE
    })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error)) ;
 }
 
 getData();

 ///ON écrit les fonctions ici

//  fonction opur les autres articles
function afficherArticles(array, container) {
  array.forEach((article) => {
    let articleHTML = `
      <div class="article">
        <h3>${article.titre}</h3>
        <p>${article.theme} - ${article.date}</p>
        <img src="${article.image}" alt="${article.titre}">
      </div>`;
    container.insertAdjacentHTML('beforeend', articleHTML);
  });
}

//  fonction pour les themes 
 function afficherThemes(array, container) {
  array.forEach((theme) => {
    let themeHTML = `
      <div class="theme">
        <h3>${theme.nom}</h3>
        <p>${theme.description}</p>
      </div>`;
    container.insertAdjacentHTML('beforeend', themeHTML);
  });
}


// fonction pour les auteurs 
function afficherAuteurs(array, container) {
  array.forEach((auteur) => {
    let auteurHTML = `
      <div class="auteur">
        <h3>${auteur.prenom}</h3>
        <p>${auteur.typeExperience}</p>
        <p>${auteur.presentation}</p>
      </div>`;
      container.insertAdjacentHTML('beforeend', auteurHTML);
  });
}

