<?php
  // define constants
  define("HEADER_FROM", "info@megapode.ca");
  define("HEADER_REPLY_TO", "info@megapode.ca");
  define("RECIPIENT", "daniel@danielfontaine.tv");

  // TODO: retrieve data from post

  // build email header
  $headers = "From: " . HEADER_FROM . "\r\n";
  $headers .= "Reply-To: " . HEADER_REPLY_TO . "\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion(). "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // build email subject line
  $subject = "Contact";

  // build email body
  $body = "<html>";
  $body .= "<p>POST raw data: " . print_r($_POST, true) . "</p>";
  $body .= "</html>";

  // send email
  $mail_sent = mail(
    RECIPIENT,
    $subject,
    $body,
    $headers
  );

  // respond whether or not success happened
  // TODO: improve
  if ($mail_sent) {
    echo "success";
  } else {
    echo "failure";
  }
?>