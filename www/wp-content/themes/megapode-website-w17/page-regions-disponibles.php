<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />

    <link rel="icon" href="<?php echo IMG_DIR; ?>favicon.ico" type="image/x-icon" />

    <title>Megapode – Régions disponibles</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" >
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>normalize.css" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>home-page.css" >
  </head>

  <body class="regions-dispo-page" ng-app="mp.pages.RegionsDispoPage">
    <mp-header></mp-header>

    <div class="centered-content">
      <section class="left-menu">
        <div class="top-line"></div>
        <h1>Régions<br>disponibles</h1>
      </section>

      <section class="page-content">
        <h2>Nos zones d'opérations</h2>
        <p class="subheading">Nos services sont disponibles dans tout le Québec.</p>
        <p>Les demandes de services dans les régions illustrées* ci-bas sont libres de frais de transports. Nos zones de service sans frais de transport sont en croissance constante et évoluent selon la demande et le volume d’affaire des bureaux. Faites-nous part de votre intérêt afin de nous guider dans notre mise en marché et ajouter votre région à notre liste.</p>
        <a href="#" class="button huge">Réservez une présentation pour votre agence</a>
      </section>
    </div>

    <mp-footer></mp-footer>

    <script src="<?php echo SCRIPTS_DIR; ?>vendors.js"></script>
    <script src="<?php echo SCRIPTS_DIR; ?>megapode-templates.js"></script>
    <script src="<?php echo SCRIPTS_DIR; ?>regions-dispo-page.js"></script>
  </body>

</html>