document.addEventListener("DOMContentLoaded", function () {
  console.log("QATRA Client Portal Design Loaded");

  const signOutButton = document.querySelector(".sign-out-btn");

  if (signOutButton) {
    signOutButton.addEventListener("click", function () {
      alert("Demo only: Sign out action");
    });
  }

  const approvalButtons = document.querySelectorAll(".approval-action-btn");

  approvalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Demo only: Approval action clicked");
    });
  });
});