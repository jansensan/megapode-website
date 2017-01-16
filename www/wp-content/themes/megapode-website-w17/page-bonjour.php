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
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>bonjour-page.css" >
  </head>

  <body ng-app="mp.pages.BonjourPage">
    <mp-header></mp-header>
    <mp-veil></mp-veil>
    <mp-menu></mp-menu>

    <div class="centered-content">
      <section class="left-menu">
        <div class="top-line"></div>
        <h1>Bonjour</h1>
      </section>

      <section class="page-content bonjour-page">
        <?php 
          while(have_posts()) {
            the_post();
            the_content();
          }
        ?>

        <h2><a name="leadership" id="leadership"></a>Notre leadership</h2>

        <div class="leaders-container">
          <div class="leader">
            <div class="leader-photo">
              <img
                src="<?php echo IMG_DIR; ?>generic-user.gif"
                alt="Photo de Luc Fontaine"
              >
            </div>
            <div class="leader-name">
              <span>Luc Fontaine</span>
              <a class="leader-linkedin" href="https://linkedin.com/in/luc-fontaine-00066369">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" style="fill:none"/></clipPath></defs><title>icon-linked-in</title><g style="clip-path:url(#a)"><path d="M22.224,0H1.771A1.752,1.752,0,0,0,0,1.729V22.268A1.753,1.753,0,0,0,1.771,24H22.224A1.756,1.756,0,0,0,24,22.268V1.729A1.755,1.755,0,0,0,22.224,0M7.118,20.451H3.558V9h3.56ZM5.339,7.432A2.064,2.064,0,1,1,7.4,5.368,2.064,2.064,0,0,1,5.339,7.432M20.451,20.451H16.894v-5.57c0-1.328-.024-3.037-1.85-3.037-1.852,0-2.137,1.447-2.137,2.941v5.666H9.351V9h3.414v1.565h.048a3.74,3.74,0,0,1,3.368-1.85c3.6,0,4.27,2.372,4.27,5.456Z" style="fill:#262322"/></g></svg>
              </a>
            </div>
            <div class="leader-title">Président</div>
            <p class="leader-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="leader">
            <div class="leader-photo">
              <img
                src="<?php echo IMG_DIR; ?>generic-user.gif"
                alt="Photo de Guillaume Langlois"
              >
            </div>
            <div class="leader-name">
              <span>Guillaume Langlois</span>
              <a class="leader-linkedin" href="https://linkedin.com/in/guillaume-langlois-4069762">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" style="fill:none"/></clipPath></defs><title>icon-linked-in</title><g style="clip-path:url(#a)"><path d="M22.224,0H1.771A1.752,1.752,0,0,0,0,1.729V22.268A1.753,1.753,0,0,0,1.771,24H22.224A1.756,1.756,0,0,0,24,22.268V1.729A1.755,1.755,0,0,0,22.224,0M7.118,20.451H3.558V9h3.56ZM5.339,7.432A2.064,2.064,0,1,1,7.4,5.368,2.064,2.064,0,0,1,5.339,7.432M20.451,20.451H16.894v-5.57c0-1.328-.024-3.037-1.85-3.037-1.852,0-2.137,1.447-2.137,2.941v5.666H9.351V9h3.414v1.565h.048a3.74,3.74,0,0,1,3.368-1.85c3.6,0,4.27,2.372,4.27,5.456Z" style="fill:#262322"/></g></svg>
              </a>
            </div>
            <div class="leader-title">Chef des technologies</div>
            <p class="leader-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="leader">
            <div class="leader-photo">
              <img
                src="<?php echo IMG_DIR; ?>generic-user.gif"
                alt="Photo de Daniel Fontaine"
              >
            </div>
            <div class="leader-name">
              <span>Daniel Fontaine</span>
              <a class="leader-linkedin" href="https://linkedin.com/in/fontainedaniel">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" style="fill:none"/></clipPath></defs><title>icon-linked-in</title><g style="clip-path:url(#a)"><path d="M22.224,0H1.771A1.752,1.752,0,0,0,0,1.729V22.268A1.753,1.753,0,0,0,1.771,24H22.224A1.756,1.756,0,0,0,24,22.268V1.729A1.755,1.755,0,0,0,22.224,0M7.118,20.451H3.558V9h3.56ZM5.339,7.432A2.064,2.064,0,1,1,7.4,5.368,2.064,2.064,0,0,1,5.339,7.432M20.451,20.451H16.894v-5.57c0-1.328-.024-3.037-1.85-3.037-1.852,0-2.137,1.447-2.137,2.941v5.666H9.351V9h3.414v1.565h.048a3.74,3.74,0,0,1,3.368-1.85c3.6,0,4.27,2.372,4.27,5.456Z" style="fill:#262322"/></g></svg>
              </a>
            </div>
            <div class="leader-title">Gardien de la marque</div>
            <p class="leader-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>

        <h2><a id="partenaires"></a>Nos partenaires</h2>

        <div class="partners-container">
          <div class="partner-logo">
            <img
              src="<?php echo IMG_DIR; ?>generic-partner-logo.gif"
              alt="Logo de Partenaire Générique"
            >
          </div>
          <div class="partner-logo">
            <img
              src="<?php echo IMG_DIR; ?>generic-partner-logo.gif"
              alt="Logo de Partenaire Générique"
            >
          </div>
          <div class="partner-logo">
            <img
              src="<?php echo IMG_DIR; ?>generic-partner-logo.gif"
              alt="Logo de Partenaire Générique"
            >
          </div>
          <div class="partner-logo">
            <img
              src="<?php echo IMG_DIR; ?>generic-partner-logo.gif"
              alt="Logo de Partenaire Générique"
            >
          </div>
          <div class="partner-logo">
            <img
              src="<?php echo IMG_DIR; ?>generic-partner-logo.gif"
              alt="Logo de Partenaire Générique"
            >
          </div>
        </div>
      </section>
    </div>

    <mp-footer></mp-footer>

    <?php if (IS_PROD): ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.min.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>bonjour-page.min.js"></script>
    <?php else: ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>megapode-templates.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>bonjour-page.js"></script>
    <?php endif; ?>
  </body>

</html>