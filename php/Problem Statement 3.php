<?php 
/* Problem Statement 3
 Write a PHP program to store page views count in SESSION, to increment the count oneach refresh, and to show the count on web page.
*/
session_start();
if(isset($_SESSION['views'])) {
$_SESSION['views'] = $_SESSION['views'] + 1;
} else {
$_SESSION['views'] = 1;
}
?>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2>Page View </h2>
<?php
echo "Number of page views: " . $_SESSION['views'];
?>
</body>
</html>