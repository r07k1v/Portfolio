$(document).ready(function () {
  let title = document.getRootNode().title;
  if (title === "Portfolio") {
    $("#main_content").load("res/resume.html");
    $("#navbar").load("res/nav.html");
  }
  else {
    alert("not in Portfolio");
    $("#navbar").load("./nav.html");

  }
});
