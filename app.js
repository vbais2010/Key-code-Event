const insert = document.getElementById("insert");
// console.log(insert);
window.addEventListener("keydown", (event) => {
  //   console.log(event.key);
  insert.innerHTML = `
  <div class="key">
  ${event.key === "" ? "space" : event.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${event.code}
  <small>event.code</small>
  </div>
  `;
});
