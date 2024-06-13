document.addEventListener("DOMContentLoaded", function() {
    var dropdownItems = document.querySelectorAll(".dropdown-menu");

    dropdownItems.forEach(function(item) {
        var parentListItem = item.parentElement;
        parentListItem.addEventListener("mouseenter", function() {
            item.style.display = "block";
        });
        parentListItem.addEventListener("mouseleave", function() {
            item.style.display = "none";
        });
    });
});

