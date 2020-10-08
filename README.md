### Partie Technique

#### Technologies utilisées

Réaliser ce test avec les technos/librairies suivantes :
  - GraphQL
  - React Js
  - Apollo Client
  - reactStrap (optionnel)

#### Réalisation d'une vue en Javascript

  - La vue consiste à réaliser un carrousel affichant les séries.
  - Les données des séries seront récupérées via une requête Apollo sur le serveur à l'adresse `http://localhost:4000/graphql`,
  - Le bouton CreateSeries permettra de créer une nouvelle série (pas besoin de faire un formulaire, le boutton new se contentera d'appeler une requête graphQL avec des data hard codé),
  - chaque série est composé d'un `titre`, d'une image(`banner_url`) et d'un `tag`.

#### Instructions

Pour lancer le serveur qui alimentera votre vue :

 ```
 cd server
 npm install
 yarn start
 ```
Pour lancer le client sur lequel vous modifierez le code :

  ```
  cd client
  npm install
  yarn start
  ```


_Vous pouvez tester vos requetes graphQL en utilisant le helper à l'adresse `http://localhost:4000/graphql`_

Il vous reste à modifier le contenu de l'application qui se trouve dans le dossier `client`.

#### Notations

  - Utilisation efficace des technologies,
  - Découpage/Réutilisation des composants en React,
  - Qualité du code,
  - Nommage des variables/fonctions/composants,
  - Découpage du travail en commits.

Point Bonus :
  + Faire les composants react via les hooks,
  + Utiliser ReactStrap
