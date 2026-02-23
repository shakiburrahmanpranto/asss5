function showSectionById(id) {
  //hide all the sections
  document.getElementById("donation_section").classList.add("hidden");
  document.getElementById("donation_history").classList.add("hidden");

  //show section
  document.getElementById(id).classList.remove("hidden");
}
