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

      // Nnom journal /
      let nomJournal = journal.nomJournal;

      // Phrase d'accrcohe
      let phraseAccroche = journal.phraseAccroche;
  

      document.getElementById('nomJournal').textContent = nomJournal;
      console.log(document.getElementById('nomJournal')); 
      document.getElementById('phraseAccroche').textContent = phraseAccroche;
     

      // Article principal
      let articlePrincipal = journal.articlePrincipal;
      let titrePrincipal = articlePrincipal.titre;
      let themePrincipal = articlePrincipal.theme;
      let datePrincipal = articlePrincipal.date;
      let descriptionPrincipal = articlePrincipal.description;
      let imagePrincipal = articlePrincipal.image;

      document.getElementById('titrePrincipal').textContent = titrePrincipal;
      document.getElementById('themePrincipal').textContent = themePrincipal;
      document.getElementById('datePrincipal').textContent = datePrincipal;
      document.getElementById('descriptionPrincipal').textContent = descriptionPrincipal;
      document.getElementById('imagePrincipal').src = imagePrincipal;

      // Autres articles
      let articles = journal.articles;
      let articlesContainer = document.getElementById('articlesContainer');
      afficherArticles(articles, articlesContainer);

      // Themes
      let themes = journal.themes;
      let themesContainer = document.getElementById('themesContainer');
      afficherThemes(themes, themesContainer);
      

      // navbar
      let navBarContainer = document.getElementById('navBarList');
      afficherNavbar(themes, navBarContainer);

      // Auteurs
      let auteurs = journal.auteurs;
      let auteursContainer = document.getElementById('auteursContainer');
      afficherAuteurs(auteurs, auteursContainer);


      // Nesletter
      let newsletterText = data.journal.newsletter[0].texteAppelAction;
          document.getElementById('texteAppelAction').textContent = newsletterText;

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
          <div class="presentationArticle">
              <h3>${article.titre}</h3>
              <h4>${article.theme}</h4>
              <p>${article.date}</p> 
          </div>
          <div class="imageContainer">
              <img src="${article.image}" alt="${article.titre}">
          </div>
      </div>`;
      container.insertAdjacentHTML('beforeend', articleHTML);
  });
}

//  fonction pour les themes 
    function afficherThemes(array, container) {
      array.forEach((theme, index) => {
      let themeHTML = `
        <div class="theme" id="theme${index + 1}">
         <h3>${theme.nom}</h3>
         <p>${theme.description}</p>
       </div>`;
      container.insertAdjacentHTML('beforeend', themeHTML);
    });
  }
// fonction pour la navbar
    function afficherNavbar(array, container) {
     array.forEach((theme, index) => {
    let navHTML = `<li><a href="#theme${index + 1}">${theme.nom}</a></li>`;
    container.insertAdjacentHTML('beforeend', navHTML);
   });
  }

// fonction pour les auteurs 
    function afficherAuteurs(array, container) {
      array.forEach((auteur) => {
      let auteurHTML = `
      <div class="auteur">
      <img src="${auteur.image}" alt="${auteur.prenom}">
        <h3>${auteur.prenom}</h3>
        <h4>${auteur.typeExperience}</h4>
        <p>${auteur.presentation}</p>
      </div>`;
      container.insertAdjacentHTML('beforeend', auteurHTML);
    });
  }

  


//  SCROLL

  let header = document.querySelector("nav");
  let lastScrollTop = document.documentElement.scrollTop;
  let throttleTimeout = null;
  document.addEventListener("scroll", () => {
    if (!throttleTimeout) {
      throttleTimeout = setTimeout(() => {
        handleSwipeIn();
        throttleTimeout = null;
      }, 200);
    }
  });
  
  function handleSwipeIn() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      // Scrolling down
      header.classList.add("hidden");
    } else {
      // Scrolling up
      header.classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
  }


  // Modale essai 3

document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('newsletterModal').style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('newsletterModal').style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === document.getElementById('newsletterModal')) {
    document.getElementById('newsletterModal').style.display = 'none';
  }
});


  
// Version d'avant 

// let nomJournal = journal.nomJournal; 
// document.getElementById('nomJournal').textContent = nomJournal;
// console.log(document.getElementById('nomJournal')); 

//  // Phrase d'accorche 
// let phraseAccroche = journal.phraseAccroche; 
// document.getElementById('phraseAccroche').textContent = phraseAccroche;
 
//  // Appel à l'action 
// let texteAppelAction = journal.texteAppelAction; 
// document.getElementById('texteAppelAction').textContent = texteAppelAction;

// // Main article 
// let articlePrincipal = journal.articlePrincipal;
// let titrePrincipal = articlePrincipal.titre; 
// let themePrincipal = articlePrincipal.theme; 
// let descriptionPrincipal = articlePrincipal.description;
// let datePrincipal = articlePrincipal.date; 
// let imagePrincipal = articlePrincipal.image;

// // DOM article principal
// document.getElementById('titrePrincipal').textContent = titrePrincipal;
// document.getElementById('themePrincipal').textContent = themePrincipal;
// document.getElementById('datePrincipal').textContent = datePrincipal;
// document.getElementById('descriptionPrincipal').textContent = descriptionPrincipal;
// document.getElementById('imagePrincipal').src = imagePrincipal;

// // Affichage console.log
// console.log(document.getElementById('titrePrincipal').textContent);

// //Articles secondaires ;
//   let articles = journal.articles; 
//   let articlesContainer = document.getElementById('articlesContainer');

//   articles.forEach((article) => {
//     let articleHTML = `
//     <div class="article">
//       <h3>${article.titre}</h3>
//       <p>${article.theme} - ${article.date}</p>
//       <img src="${article.image}" alt="${article.titre}">
//     </div>
//   `;
//   articlesContainer.insertAdjacentHTML('beforeend', articleHTML);
// });
// afficherArticles(articles, articlesContainer);

//     // Themes//
//   let themes = journal.themes; 
  
//   themes.forEach((theme) => {
//   let themeHTML = 
//     <div class="theme">
//     <h3>${theme.nom}</h3>
//     <p>${theme.description}</p>
//     </div>;
//   let themesContainer = document.getElementById('themesContainer');
//   themesContainer.insertAdjacentHTML('beforeend', themeHTML);
//     // Nav Bar 
//     let navBar = <li><a href="">${theme.nom}</a></li>
//     let navBarContainer = document.getElementById('navBarList');
//    navBarContainer.insertAdjacentHTML('beforeend', navBar)
//        });
//   afficherThemes (themes, themesContainer)
   
//       // Auteurs //
//        let auteurs = journal.auteurs; 
//        let auteursContainer = document.getElementById('auteursContainer');
//        afficherAuteurs(auteurs, auteursContainer);


      // let newsletter = journal.newsletter;
//       let newsletterContainer = document.getElementById('newsletterContainer');
//       let overlay = document.getElementById('overlay');

//     let newsletterData = newsletter[0];
//     let texteAppelAction = newsletterData.texteAppelAction;
//     document.getElementById('texteAppelAction').textContent = texteAppelAction;

//     document.getElementById('subscribeButton').addEventListener('click', function () {
//     newsletterContainer.classList.add('active');
//     overlay.classList.add('active');
// });

// document.getElementById('closeModal').addEventListener('click', function () {
//     newsletterContainer.classList.remove('active');
//     overlay.classList.remove('active');
// });

// overlay.addEventListener('click', function () {
//     newsletterContainer.classList.remove('active');
//     overlay.classList.remove('active');
// });