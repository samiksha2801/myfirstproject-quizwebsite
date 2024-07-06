const topics = ["Physics","Capital Cities"];
const difficultylevel = ["Easy","Medium","Difficult"]
const topicDropdown = document.getElementById("topic-dropdown")
const difficultydropdown = document.getElementById("difficulty-levels")
function populateDropdown(List,id) 
{
  List.forEach(topic => 
  {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    id.appendChild(option);
  });
}

populateDropdown(topics,topicDropdown);
populateDropdown(difficultylevel,difficultydropdown);

difficultydropdown.disabled = true;
topicDropdown.addEventListener("change", (event) => { 
    const selectedtopic = event.target;
    difficultydropdown.disabled = false;
    difficultydropdown.addEventListener("change", (event1) => {
      const selecteddifficulty = event1.target;

      if (selectedtopic.value === "Capital Cities" && selecteddifficulty.value === "Easy" ) {
        const capitalLink = document.createElement("a");
        capitalLink.href = "contents\\capitalcitieseasy.html";
        capitalLink.textContent = "Submit";
        const container = document.getElementById("link-container");
        container.innerHTML="";
        container.appendChild(capitalLink);
      }

      if (selectedtopic.value === "Physics" && selecteddifficulty.value === "Easy") {
        const capitalLink = document.createElement("a");
        capitalLink.href = "contents\\physicseasy.html";
        capitalLink.textContent = "Submit";
        const container = document.getElementById("link-container");
        container.innerHTML="";
        container.appendChild(capitalLink);
    }

    if (selectedtopic.value === "Capital Cities" && selecteddifficulty.value === "Medium" ) {
      const capitalLink = document.createElement("a");
      capitalLink.href = "contents\\capitalcitiesmedium.html";
      capitalLink.textContent = "Submit";
      const container = document.getElementById("link-container");
      container.innerHTML="";
      container.appendChild(capitalLink);
    }

    if (selectedtopic.value === "Physics" && selecteddifficulty.value === "Medium") {
      const capitalLink = document.createElement("a");
      capitalLink.href = "contents\\physicsmedium.html";
      capitalLink.textContent = "Submit";
      const container = document.getElementById("link-container");
      container.innerHTML="";
      container.appendChild(capitalLink);
  }

  if (selectedtopic.value === "Capital Cities" && selecteddifficulty.value === "Difficult" ) {
    const capitalLink = document.createElement("a");
    capitalLink.href = "contents\\capitalcitiesdifficult.html";
    capitalLink.textContent = "Submit";
    const container = document.getElementById("link-container");
    container.innerHTML="";
    container.appendChild(capitalLink);
  }

  if (selectedtopic.value === "Physics" && selecteddifficulty.value === "Difficult") {
    const capitalLink = document.createElement("a");
    capitalLink.href = "contents\\physicsdifficult.html";
    capitalLink.textContent = "Submit";
    const container = document.getElementById("link-container");
    container.innerHTML="";
    container.appendChild(capitalLink);
}
    });
});
  