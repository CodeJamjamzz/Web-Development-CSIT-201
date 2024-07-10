<?php
$host = 'localhost';
$user = 'root';
$password = '';

$db_name = 'examdb';

$conn = mysqli_connect($host, $user, $password, $db_name);

if (mysqli_connect_errno()) {
    die("Failed to connect with MySQL: " . mysqli_connect_errno());
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $fname = mysqli_real_escape_string($conn, $_POST['fname']);
    $lname = mysqli_real_escape_string($conn, $_POST['lname']);
    $bday = mysqli_real_escape_string($conn, $_POST['bday']);
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pwd = mysqli_real_escape_string($conn, $_POST['pwd']);


    $sql = "INSERT INTO registration (Firstname, Lastname, Birthday, Gender, Email, Password) VALUES ('$fname', '$lname', '$bday', '$gender', '$email', '$pwd')";

    if (mysqli_query($conn, $sql)) {

        echo '<style>
                  body {
                      font-family: "Nunito Sans", sans-serif;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      background-image: url(\'pic.png\');
                      background-size: cover;
                      background-position: center;
                      background-repeat: no-repeat;
                      min-height: 100vh; /* Ensure body takes up the full height of the viewport */
                      margin: 0;
                      padding: 0;
                  }
                  .success-message {
                      position: fixed;
                      top: 45%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background-color: #DEDEDE;
                      padding: 20px;
                      border: 2px solid black;
                      border-radius: 5px;
                      text-align: center;
                      font-family: Arial;
                  }

                  .title {
                    color: #215027;
                  }

              </style>';
        echo '<div class="success-message">
                <h2 class="title">SUBMISSION SUCCESSFUL</h2>
                <p>Your information has been successfully added to the database. Thank you!</p>
              </div>';  
        echo '<script>setTimeout(function(){ window.location.href = "index.html"; }, 5000);</script>';
    } else {

        echo '<style>
                  body {
                      font-family: "Nunito Sans", sans-serif;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      background-image: url(\'pic.png\');
                      background-size: cover;
                      background-position: center;
                      background-repeat: no-repeat;
                      min-height: 100vh; /* Ensure body takes up the full height of the viewport */
                      margin: 0;
                      padding: 0;
                  }
                  .error-message {
                      position: fixed;
                      top: 45%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background-color: #DEDEDE;
                      padding: 20px;
                      border: 2px solid black;
                      border-radius: 5px;
                      text-align: center;
                      font-family: Arial;
                  }

                  .title {
                    color: red;
                  }
              </style>';

        echo '<div class="error-message">
                <h2>SUBMISSION FAILED</h2>
                <p>Failed to add user to the database. Please try again later.</p>
              </div>';
        echo '<script>setTimeout(function(){ window.location.href = "index.html"; }, 5000);</script>';
    }
}


mysqli_close($conn);
?>
