<?php
/* Problem Statement 4
 Write a PHP program to store current date-time in a COOKIE and display the "Last visited on date-time on the web page upon reopening of the same page.
*/
date_default_timezone_set("Asia/Kolkata"); if(isset($_COOKIE['last_visit'])) {
$last_visit = $_COOKIE['last_visit'];
} else {
$last_visit = "This is your first visit!";
}
$current_time = date("d-m-Y H:i:s"); setcookie("last_visit", $current_time, time() + 86400);
?>
<!DOCTYPE html>
<html>
<head><title>Last Visit Tracker</title>
</head>
<body>
<h2>Last Visit Information</h2>
<?php
echo "<p>Last visited on: " . $last_visit . "</p>";?>
</body>
</html>