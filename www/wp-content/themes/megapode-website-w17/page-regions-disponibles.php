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
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>regions-dispo-page.css" >
  </head>

  <body class="regions-dispo-page" ng-app="mp.pages.RegionsDispoPage">
    <mp-header></mp-header>
    <mp-veil></mp-veil>
    <mp-menu></mp-menu>

    <div class="centered-content">
      <section class="left-menu">
        <div class="top-line"></div>
        <h1>Régions<br>disponibles</h1>
      </section>

      <section class="page-content">
        <h2>Nos zones d'opérations</h2>
        <p class="subheading">Nos services sont disponibles dans tout le Québec.</p>
        <p>Les demandes de services dans les régions illustrées* ci-bas sont libres de frais de transports. Nos zones de service sans frais de transport sont en croissance constante et évoluent selon la demande et le volume d’affaire des bureaux. Faites-nous part de votre intérêt afin de nous guider dans notre mise en marché et ajouter votre région à notre liste.</p>
        <a
          href="#"
          class="button medium"
        >Réservez une présentation pour votre agence</a>

        <div class="maps-container">
          <div class="map montreal-metro">
            <div class="map-name">Région Métropolitaine de Montréal</div>
            <div class="map-image">
              <img
                src="<?php echo IMG_DIR; ?>regions-montreal-metro.jpg"
                alt="Carte de la Région Métropolitaine de Montréal"
              >
            </div>
          </div>
          <div class="map capitale-nationale">
            <div class="map-name">Capitale-Nationale</div>
            <div class="map-image">
              <img
                src="<?php echo IMG_DIR; ?>regions-capitale-nationale.jpg"
                alt="Carte de la Capitale-Nationale"
              >
            </div>
          </div>
          <div class="map gatineau">
            <div class="map-name">Gatineau</div>
            <div class="map-image">
              <img
                src="<?php echo IMG_DIR; ?>regions-gatineau.jpg"
                alt="Carte de Gatineau"
              >
            </div>
          </div>
          <div class="map trois-rivieres">
            <div class="map-name">Trois-Rivières</div>
            <div class="map-image">
              <img
                src="<?php echo IMG_DIR; ?>regions-trois-rivieres.jpg"
                alt="Carte de Trois-Rivières"
              >
            </div>
          </div>
          <div class="map sherbrooke">
            <div class="map-name">Sherbrooke</div>
            <div class="map-image">
              <img
                src="<?php echo IMG_DIR; ?>regions-sherbrooke.jpg"
                alt="Carte de Sherbrooke"
              >
            </div>
          </div>
          <div class="map cta">
            <a href="#" class="button medium map-cta">
              <span class="line1">Faites-nous part de votre intérêt afin de guider notre expansion à travers le Québec.</span>
              <span class="line2">Nous prenons de l’expansion sans cesse en suivant la demande, faites-nous par de votre intérêt en réservant une présentation pour votre agence.</span>
            </a>
          </div>
        </div>
      </section>
    </div>

    <mp-footer></mp-footer>

    <?php if (IS_PROD): ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.min.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>regions-dispo-page.min.js"></script>
    <?php else: ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>megapode-templates.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>regions-dispo-page.js"></script>
    <?php endif; ?>
  </body>

</html>