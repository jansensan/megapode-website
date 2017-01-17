<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />

    <link rel="icon" href="<?php echo IMG_DIR; ?>favicon.ico" type="image/x-icon" />

    <title>Megapode – Nous joindre</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" >
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>normalize.css" >
    <link rel="stylesheet" href="<?php echo CSS_DIR; ?>nous-joindre-page.css" >
  </head>

  <body class="nous-joindre-page" ng-app="mp.pages.NousJoindrePage">
    <mp-header></mp-header>
    <mp-veil></mp-veil>
    <mp-menu></mp-menu>

    <div class="centered-content">
      <section class="left-menu">
        <div class="top-line"></div>
        <h1>Nous<br>joindre</h1>
      </section>

      <section class="page-content">
        <h2>Parlons-nous</h2>
        <mp-contact-form></mp-contact-form>
        <div class="contact-details-row">
          <div class="contact-details-column">
            <div class="contact-link-icon icon-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" role="img">
                <title>Contactez-nous par téléphone</title>
                <desc>Icône d'un téléphone</desc>
                <path d="M8,0A4.588,4.588,0,0,0,4.9,1.5l-3.5,4A6.711,6.711,0,0,0,0,10c0,5.3,3.6,12.8,10.4,19.5S24.7,40,30,40a6.711,6.711,0,0,0,4.5-1.4l4-3.5A4.2,4.2,0,0,0,40,32a4.1,4.1,0,0,0-1.4-3.1l-5.5-5.5A4.1,4.1,0,0,0,30,22a4.954,4.954,0,0,0-3.1,1.4l-2,2q-.45.45-.6.3l-10-10c-.1-.2.1-.4.2-.5l2.1-2.1a4.051,4.051,0,0,0,1.4-3A4.954,4.954,0,0,0,16.6,7L11.1,1.5A3.88,3.88,0,0,0,8,0Zm.9,3.5L14.4,9a1.7,1.7,0,0,1,.6,1,1.456,1.456,0,0,1-.6.9L12.3,13a3.38,3.38,0,0,0-.4,4.5L22.4,28a3.47,3.47,0,0,0,4.4-.3L29,25.5a1.8,1.8,0,0,1,.9-.6,1.934,1.934,0,0,1,.9.5l5.5,5.5c.8.9.7,1.4.1,1.8l-4,3.5a3.744,3.744,0,0,1-2.5.6c-3.8,0-11.1-3.2-17.4-9.6S3,13.8,3,10a4.233,4.233,0,0,1,.6-2.5l3.5-4C7.7,2.7,8.3,2.9,8.9,3.5Z" />
              </svg>
            </div>
            <a class="contact-link" href="tel:18446342763">1-844-634-2763</a>
          </div>
          <div class="contact-details-column">
            <div class="contact-link-icon icon-letter-sent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 29" role="img">
                <title>Contactez-nous par courriel</title>
                <desc>Icône d'une lettre</desc>
                <path d="M45,5.925V0H0V29H45V5.925ZM40.559,4,22.5,15.638,4.441,4Zm.361,21H4.08V8.555L22.5,20.425,40.92,8.555Z" />
              </svg>
            </div>
            <a class="contact-link" href="mailto:info@megapode.ca?Subject=Bonjour" target="_top">info@megapode.ca</a>
          </div>
        </div>
        <div class="contact-details-row">
          <h2>Suivez-nous</h2>

          <a class="contact-logo" href="https://www.linkedin.com/company/megapode">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" role="img">
              <title>Logo LinkedIn</title>
              <path d="M32.409,0H2.583A2.555,2.555,0,0,0,0,2.522V32.475A2.556,2.556,0,0,0,2.583,35H32.409A2.561,2.561,0,0,0,35,32.475V2.522A2.559,2.559,0,0,0,32.409,0M10.381,29.825H5.189v-16.7h5.191ZM7.786,10.838a3.01,3.01,0,1,1,3.008-3.01,3.01,3.01,0,0,1-3.008,3.01M29.824,29.825H24.636V21.7c0-1.937-.035-4.428-2.7-4.428-2.7,0-3.116,2.11-3.116,4.288v8.263H13.636v-16.7h4.979V15.4h.07a5.455,5.455,0,0,1,4.912-2.7c5.257,0,6.227,3.46,6.227,7.957Z" style="fill:#231f20"/>
            </svg>
          </a>

          <a class="contact-logo" href="https://www.facebook.com/megapode/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" role="img">
              <title>Logo Facebook</title>
              <rect width="35" height="35" rx="1.932" ry="1.932" style="fill:#262322"/>
              <path d="M24.149,35V21.446H28.7l.681-5.282H24.149V12.792c0-1.529.425-2.571,2.618-2.571h2.8V5.494a37.435,37.435,0,0,0-4.076-.208c-4.033,0-6.794,2.462-6.794,6.982v3.9H14.134v5.282h4.561V35Z" transform="translate(0)" style="fill:#fafafa"/>
            </svg>
          </a>

        </div>
        <div class="contact-details-row">
          <div class="contact-details-column">
            <h2>Bureau des ventes</h2>
            <p>
              40, rue de Normandie<br>
              Saint-Basile-le-Grand (Québec)<br>
              J3N 1R4
            </p>
          </div>
          <div class="contact-details-column">
            <h2>Centre technologique</h2>
            <p>
              1350, rue Mazurette, suite 317<br>
              Montréal (Québec)<br>
              H4N 1H2
            </p>
          </div>
        </div>
      </section>
    </div>

    <mp-footer></mp-footer>

    <?php if (IS_PROD): ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.min.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>nous-joindre-page.min.js"></script>
    <?php else: ?>
      <script src="<?php echo SCRIPTS_DIR; ?>vendors.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>megapode-templates.js"></script>
      <script src="<?php echo SCRIPTS_DIR; ?>nous-joindre-page.js"></script>
    <?php endif; ?>
  </body>

</html>