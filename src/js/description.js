function expandButton(event) {
  if (event.target.className === "description") {

    const element = event.target.nextElementSibling;

    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    };
  };
}

document.addEventListener('click', expandButton, true);