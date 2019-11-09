// Button - Make A New List will reset the list

// Button - Add New Item will toggle and show the input forms
$('#addNewItem').click(function(){
    $('main.newItem').toggleClass('showNewItem');
});

// Button - Delete Item from List will show the Delete Icon for every submitted items on the List
$('#showDeleteIcons').click(function(){
    $('.deleteIcon').toggleClass('showIcon');
})

// Operator - Cancel will toggle the input forms
$('#cancelItem').click(function(){
    $('main.newItem').toggleClass('showNewItem');
});

// When User click Save Item to List, the arrays of datas from the input form should show up on the Table
$('[input="submit"').click(function(){
    $('#itemName')
    $('#itemAmount')
    $('#itemPrice')
    $('#itemNote')
})
