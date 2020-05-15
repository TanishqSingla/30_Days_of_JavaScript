const inputs = document.querySelectorAll(".controls");

function handleUpdate() {
  console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
