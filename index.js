$(function() {
  $("#js-shopping-list-form").submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    //find input within event target and store value
    const getInput = $(event.currentTarget)
      .find("#shopping-list-entry")
      .val();
    //create new <li> item for this submit
    const listItem = $(`<li>
          <span class="shopping-item">new one</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    //prepend <li> item to the shopping list container
    $(".shopping-list").prepend(listItem);
    //swap in the submitted value for the text in the first list item (which would be the one just added above)
    $(".shopping-list li:first-child .shopping-item").text(getInput);
  });
  //when click on toggle button, check off list item text
  $("ul").on("click", "button.shopping-item-toggle", function(event) {
    //get the closest <li> with a child of <span> and apply the checked class to it
    $(event.target)
      .closest("li")
      .children("span")
      .toggleClass("shopping-item__checked");
  });
  //remove the <li> upon delete click
  $("ul").on("click", "button.shopping-item-delete", function(event) {
    $(this)
      .closest("li")
      .remove();
  });
});
