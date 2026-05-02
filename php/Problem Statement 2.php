/* Problem Statement 2
Create a program to write & retrieve cookies 
*/


<?php
setcookie("username", "Shabdarth", time() + 3600, "/");?>
<!DOCTYPE html>
<html>
<head>
<title>Cookie Example</title>
</head>
<body>
<h2>Cookie Example</h2>
<?php if(isset($_COOKIE["username"])) {
echo "Welcome " . $_COOKIE["username"];
} else {
echo "no cookie!";
}?>
</body>
</html>