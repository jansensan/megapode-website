<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />

    <link rel="icon" href="<?php echo IMG_DIR; ?>favicon.ico" type="image/x-icon" />

    <title>Megapode – Comment utiliser Megapode</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" >
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>normalize.css" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>comment-utiliser-page.css" >
  </head>

  <body class="regions-dispo-page" ng-app="mp.pages.CommentUtiliserPage">
    <mp-header></mp-header>
    <mp-veil></mp-veil>
    <mp-menu></mp-menu>

    <div class="centered-content">
      <section class="left-menu">
        <div class="top-line"></div>
        <h1>Comment<br>utiliser<br>Megapode</h1>
      </section>

      <section class="page-content">
        <?php 
          while(have_posts()) {
            the_post();
            the_content();
          }
        ?>

        <!-- TODO: improve -->
        <p>
          <img
            src="<?php echo IMG_DIR; ?>comment-utiliser-fpo.png"
            alt="Instructions à venir concernant l'utilisation de Mégapode"
          >
        </p>

      </section>
    </div>

    <mp-footer></mp-footer>

    <?php if (IS_PROD): ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.min.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>comment-utiliser-page.min.js"></script>
    <?php else: ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>megapode-templates.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>comment-utiliser-page.js"></script>
    <?php endif; ?>
  </body>

</html>