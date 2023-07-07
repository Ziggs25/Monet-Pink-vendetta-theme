$(document).ready(function() {
  var data = generateFakeData(10); // Generate 10 rows of fake data

  var table = $("#myTable");
  var tableBody = $("#tableBody");

  // Iterate over the data array and generate table rows
  $.each(data, function(index, item) {
    var row = $("<tr>");
    row.append($("<td>").text(item.grade));
    row.append($("<td>").text(item.subject));
    row.append($("<td>").text(item.test1));
    row.append($("<td>").text(item.test2));
    row.append($("<td>").text(item.test3));
    row.append($("<td>").text(item.test4));

    tableBody.append(row);
  });
});

// Function to generate fake data
function generateFakeData(numRows) {
  var data = [];

  for (var i = 1; i <= numRows; i++) {
    var grade = getRandomGrade();
    var subject = getRandomSubject();
    var test1 = getRandomNumber(60, 100);
    var test2 = getRandomNumber(60, 100);
    var test3 = getRandomNumber(60, 100);
    var test4 = getRandomNumber(60, 100);

    data.push({
      grade: grade,
      subject: subject,
      test1: test1,
      test2: test2,
      test3: test3,
      test4: test4
    });
  }

  return data;
}

// Function to generate a random grade (A, B, C)
function getRandomGrade() {
  var grades = ["A", "B", "C"];
  var randomIndex = Math.floor(Math.random() * grades.length);
  return grades[randomIndex];
}

// Function to generate a random subject
function getRandomSubject() {
  var subjects = ["Math", "Science", "English", "History", "Geography"];
  var randomIndex = Math.floor(Math.random() * subjects.length);
  return subjects[randomIndex];
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
