const entryContainer = document.getElementsByClassName("entry-container");
const newEntryContainer = document.createElement("div");
const listContainer = document.getElementsByClassName("list-container");
const newEntryButton = document.getElementsByClassName("newEntry-button")[0];
// this checkbox shit is not neccesarily needed, I need to find some other way to cross out text in the inpur
const checkBox = document.querySelectorAll(".checkbox");
newEntryButton.addEventListener("click", newEntry);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        newEntryButton.click();
    }
});

function newEntry() {
    const entryContainer = document.getElementsByClassName("entry-container")[0];
    const newEntryContainer = entryContainer.cloneNode(true);
    document.querySelector(".list-container").insertBefore(newEntryContainer, document.querySelector(".button-container"));
    listContainer[0].scrollTop = listContainer[0].scrollHeight;
    const newTextInput = newEntryContainer.querySelector('.textinput');
    newTextInput.focus();
    newTextInput.value = "";
    const newCheckBox = newEntryContainer.querySelector('.checkbox');
    newCheckBox.checked = false;
    newTextInput.classList.remove('checkbox-checked');

      // select all the checkbox elements in the new cloned entry
  const newCheckBoxes = newEntryContainer.querySelectorAll('.checkbox');

  // add the same event listener to each new cloned checkbox element
  newCheckBoxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const siblingTextInput = this.nextElementSibling;
      if (this.checked) {
        siblingTextInput.classList.add('checkbox-checked');
      } else {
        siblingTextInput.classList.remove('checkbox-checked');
      }
    });
  });
}


// iterate over each checkbox element
checkBox.forEach(function(checkbox) {

  // attach a 'change' event listener to the checkbox element
  checkbox.addEventListener('change', function() {

    // select the sibling text input element immediately following the clicked checkbox
    const siblingTextInput = this.nextElementSibling;

    // if the checkbox is checked, add the 'checkbox-checked' class to the sibling text input element
    if (this.checked) {
      siblingTextInput.classList.add('checkbox-checked');
    } 
    // if the checkbox is unchecked, remove the 'checkbox-checked' class from the sibling text input element
    else {
      siblingTextInput.classList.remove('checkbox-checked');
    }
  });
});