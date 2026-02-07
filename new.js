function sendNotification() {
  const message =
    "🚛 Waste Collection Truck has arrived near Main Street. Please bring your waste.";
  
  document.getElementById("msg").innerText = message;
  alert(message);
}
function addTruck() {
  const id = document.getElementById("truckId").value;
  const area = document.getElementById("truckArea").value;

  if (id === "" || area === "") {
    alert("Please fill all details");
    return;
  }

  const table = document.getElementById("truckTable");
  const row = table.insertRow();

  row.insertCell(0).innerText = id;
  row.insertCell(1).innerText = area;
  row.insertCell(2).innerText = "On Route 🚛";

  document.getElementById("truckId").value = "";
  document.getElementById("truckArea").value = "";
}
