/* Problem Statement 5
*/


/*  Mysql :
CREATE DATABASE library_db; USE library_db;
CREATE TABLE books (
accession_no INT PRIMARY KEY, title VARCHAR(100),
authors VARCHAR(100), edition VARCHAR(50), publisher VARCHAR(100)
);
*/


//PHP Code:
<?php
$conn = mysqli_connect("localhost", "root", "", "library_db"); if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
if (isset($_POST['save'])) {
$accno = $_POST['accno'];
$title = $_POST['title'];
$authors = $_POST['authors'];
$edition = $_POST['edition'];
$publisher = $_POST['publisher'];
$sql = "INSERT INTO books VALUES
('$accno', '$title', '$authors', '$edition', '$publisher')";

if (mysqli_query($conn, $sql)) {
echo "<p>Book information stored successfully.</p>";
} else {
echo "<p>Error: " . mysqli_error($conn) . "</p>";
}
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Book Information</title>
</head>
<body>
<h2>Enter Book Information</h2>
<form method="post"> Accession Number:
<input type="number" name="accno" required><br><br> Title:
<input type="text" name="title" required><br><br> Authors:
<input type="text" name="authors" required><br><br> Edition:
<input type="text" name="edition" required><br><br> Publisher:
<input type="text" name="publisher" required><br><br>
<input type="submit" name="save" value="Save Book">
</form>
<hr>
<h2>Search Book by Title</h2>

<form method="post"> Enter Title:
<input type="text" name="search_title" required>
<input type="submit" name="search" value="Search">
</form>
<?php
if (isset($_POST['search'])) {
$search_title = $_POST['search_title'];
$sql = "SELECT * FROM books WHERE title LIKE '%$search_title%'";
$result = mysqli_query($conn, $sql); echo "<h2>Search Results</h2>";
if (mysqli_num_rows($result) > 0) {
echo "<table border='1' cellpadding='10'>"; echo "<tr>
<th>Accession Number</th>
<th>Title</th>
<th>Authors</th>
<th>Edition</th>
<th>Publisher</th>
</tr>";
while ($row = mysqli_fetch_assoc($result)) { echo "<tr>";
echo "<td>" . $row['accession_no'] . "</td>"; echo "<td>" . $row['title'] . "</td>";
echo "<td>" . $row['authors'] . "</td>";
echo "<td>" . $row['edition'] . "</td>"; echo "<td>" . $row['publisher'] . "</td>"; echo "</tr>";
}

echo "</table>";
} else {
echo "<p>No book found with this title.</p>";
}
}
mysqli_close($conn);
?>
</body>
</html>