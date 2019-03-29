// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked


// 2. Remove each item when we click on the closing X





// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items




//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page

$(document).ready(function () {
    var max_fields = 20; //maximum item boxes allowed
    var wrapper = $(".item-list"); //Fields wrapper
    var x = 4; //initlal item box count
    $('.add').click(function (e) { //on add button click
        e.preventDefault();
        var add_fieldvalue = $("#newtitle").val(); //Add button ID
        if (add_fieldvalue == '') {
            add_fieldvalue = ' Title ' + x;
        }
        if (x < max_fields) { //max item box allowed
            x++; //item box increment
            var item = $('<div class="item"></div>');
            var header = $('<div class="header"></div>');
            var label = $('<label class="title"/>').text(add_fieldvalue);
            var button = $('<button class="close">x</button>')
            var txt2 = $('<p class="description"></p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisquelacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitatristique mauris dui quis.");
            $(wrapper).append(
                $(item).append(
                    header.append(label, button), txt2,'<div></div>')
            );
        }
    });

    // remove item box
    $(wrapper).on("click", ".close", function (e) { //user click on remove text
        e.preventDefault(); 
        $(this).parent().parent('div').remove(); 
        x--;
    })

// Expand and collapse item box 
    $(wrapper).on("click", ".item", function (e) { //user click on x button
        e.preventDefault();
        $(this).find('.description').toggle();
    })
});