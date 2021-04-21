function createTR(time_frame) {
  let table = document.getElementById("table");
  let node = document.createElement("tr");
  node.setAttribute("id", time_frame);
  let nodec = document.createElement("td");
  nodec.innerHTML = time_frame;
  node.appendChild(nodec);
  createBtn(node, time_frame, "monday");
  createBtn(node, time_frame, "tuesday");
  createBtn(node, time_frame, "wednesday");
  createBtn(node, time_frame, "thursday");
  createBtn(node, time_frame, "friday");
  table.appendChild(node);
}

function createBtn(node, time_frame, day) {
  let btnNode = document.createElement("button");
  btnNode.innerHTML = "8";
  let nodetd = document.createElement("td");
  nodetd.setAttribute("id", time_frame + day);
  btnNode.setAttribute("id", "btn" + time_frame + day);
  btnNode.setAttribute(
    "onclick",
    "toggle('" + btnNode.getAttribute("id") + "');"
  );
  nodetd.appendChild(btnNode);
  node.appendChild(nodetd);
}

for (i = 8; i <= 20; i++) {
  if (i < 10) {
    createTR("0" + i + ":00");
    createTR("0" + i + ":30");
  } else {
    createTR(i + ":00");
    createTR(i + ":30");
  }
}

function toggle(id) {
  let btn = document.getElementById(id);
  let cnt = btn.innerHTML;
  if (cnt > 0) {
    if (cnt < 8) {
      cnt = parseInt(cnt) + 1;
      btn.style = "color:black;background-color:none;";
    } else {
      cnt -= 1;
      btn.style = "color:white;background-color:green";
    }
    btn.innerHTML = cnt;
    if (cnt <= 0) {
      btn.style = "color:white; background-color:red";
      console.log("no more delivery guys!");
    }
  }
}
