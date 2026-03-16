const openModalButton = document.getElementById("openModal")
const modal = document.getElementById("modal")

// Timeout to close modal if user doesn't press any keys
let closeModalTimeout

// Add click event listener to the button
openModalButton.addEventListener("click", () => {
  modal.classList.remove("invisible")

  // Close modal after 5 seconds if no key is pressed
  clearTimeout(closeModalTimeout)
  closeModalTimeout = setTimeout(() => {
    modal.classList.add("invisible")
  }, 5000)
})

// Add keyup event listener for esc
document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("invisible")
    clearTimeout(closeModalTimeout) // cancel timeout
  }
})
