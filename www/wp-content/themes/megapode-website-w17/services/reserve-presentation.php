<?php
  // define constants
  define("HEADER_FROM", "mat.jb@jansensan.net");
  define("HEADER_REPLY_TO", "mat.jb@jansensan.net");
  define("RECIPIENT", "mat.jb@jansensan.net");

  // retrieve data from post
  $firstName = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $agencyName = $_POST["agencyName"];

  // build email header
  $headers = "From: " . HEADER_FROM . "\r\n";
  $headers .= "Reply-To: " . HEADER_REPLY_TO . "\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion(). "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // build email subject line
  $subject = "Présentation Mégapode";

  // build email body
  $body = "<html>";
  $body .= "<p>first name: " . $firstName . "</p>";
  $body .= "<p>last name: " . $lastName . "</p>";
  $body .= "<p>email: " . $email . "</p>";
  $body .= "<p>phone: " . $phone . "</p>";
  $body .= "<p>agency name: " . $agencyName . "</p>";
  $body .= "</html>";

  // send email
  $mail_sent = @mail(
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