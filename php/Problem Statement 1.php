<?php 
/* Problem Statement 1
Q1. Create a web page to maintain a session using PHP 
*/
session_start();
if (isset($_POST['name'])) {
$_SESSION['name'] = $_POST['name'];
}
if (isset($_GET['logout'])) { session_destroy();
header("Location: ".$_SERVER['PHP_SELF']); exit();
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Session Example</title>
</head>
<body>
<h2>PHP Session Demo</h2>
<?php if (isset($_SESSION['name'])): ?>
<h3>Welcome, <?php echo $_SESSION['name']; ?>!</h3>
<p>Session is active.</p>
<a href="?logout=true">Logout</a>
<?php else: ?>
<form method="post">
<label>Enter Name:</label>
<input type="text" name="name" required>

<button type="submit">Submit</button>
</form>
<?php endif; ?>
</body>
</html>