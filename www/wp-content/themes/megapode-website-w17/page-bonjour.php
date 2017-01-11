<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />

    <link rel="icon" href="<?php echo IMG_DIR; ?>favicon.ico" type="image/x-icon" />

    <title>Megapode – Bonjour</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" >
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>normalize.css" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>home-page.css" >
  </head>

  <body class="bonjour-page" ng-app="mp.pages.BonjourPage">
    <mp-header></mp-header>
    <mp-veil></mp-veil>
    <mp-menu></mp-menu>

    <div class="centered-content">
      <section class="left-menu">
        <div class="top-line"></div>
        <h1>Bonjour</h1>
      </section>

      <section class="page-content">
        <h2><a id="mission"></a>Notre mission</h2>
        <p class="subheading">Megapode est une application conçu pour améliorer les transactions immobilières.</p>
        <p>Nous produisons des plans de propriétés sur mesure, des photos HDR et offrons des outils de big data. Nos outils donnent un accès instantané à plusieurs informations pertinentes pour les acheteurs tel que l'ensoleillement, l'accessibilité des transports en commun, les écoles ou les parcs, les épiceries, etc.</p>
        <p>Megapode offre également des outils pour les propriétaires de maisons afin d’aider à la décoration, la rénovation et le déménagement en cataloguant toutes les dimensions et surfaces de la propriété de façon conviviale.</p>
        <p>Téléchargez Megapode dès maintenant si vous êtes un courtier, un acheteur ou si vous souhaitez rénover ou redécorer.</p>

        <h2><a id="histoire"></a>Notre histoire</h2>
        <p class="subheading">Le courtage immobilier se trouve aujourd’hui à la croisée des chemins, la technologie transforme les comportements de magasinage du grand public.</p>
        <p>Dans ce contexte, nous cherchions à offrir un outil qui soit facile à utiliser et véritablement utile pour les clients. Nous avons donc allié nos connaissances du courtage immobilier, de l’informatique et du marketing pour créer Megapode.</p>
        <p>Dans un premier temps, nous sommes parvenus à produire pour chaque propriété un plan architectural détaillé mais facile à comprendre. À ce plan, nous avons ajouté les informations les plus utiles pour un éventuel acheteur, telles que l’emplacement des plinthes électriques, les dimensions des fenêtres, la taille de l’alcôve du réfrigérateur et l’ensoleillement. Par la suite, nous nous sommes tournés vers le futur et nous avons bâti une suite de données futées de type big data offerte exclusivement aux courtiers pour les aider à comprendre le mode de vie du quartier.</p>

        <h2><a id="leadership"></a>Notre leadership</h2>

        <h2><a id="partenaires"></a>Nos partenaires</h2>
      </section>
    </div>

    <mp-footer></mp-footer>

    <script src="<?php echo SCRIPTS_DIR; ?>vendors.js"></script>
    <script src="<?php echo SCRIPTS_DIR; ?>megapode-templates.js"></script>
    <script src="<?php echo SCRIPTS_DIR; ?>bonjour-page.js"></script>
  </body>

</html>