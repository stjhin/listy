// Button - Make A New List will reset the list

// Button - Add New Item will toggle and show the input forms
$('#addNewItem, #cancelItem').click(function(){
    $('main.newItem').toggleClass('showNewItem');
    // Input data has to be reset after every toggle
    $('[data-itemID], [data-itemName], [data-itemAmount], [data-itemPrice], [data-itemNote]').val('');
});

// Button - Delete Item from List will show the Delete Icon for every submitted items on the List
$('#showDeleteIcons').click(function(){
    $('.deleteIcon').toggleClass('showIcon');
})

// Operator - Cancel will toggle the input forms
//$('#cancelItem').click(function(){
//    $('main.newItem').toggleClass('showNewItem');
//});

let itemID = 1;

// When User click Save Item to List, the arrays of datas from the input form should show up on the Table
$('#submitItem').click(function(event){
    event.preventDefault();

    // Get Value from the Input
    //const itemID = $('#itemID').val();
    const itemName = $('[data-itemName]').val();
    const itemAmount = $('[data-itemAmount]').val();
    const itemPrice = $('[data-itemPrice]').val();
    const itemNote = $('[data-itemNote]').val();
    // Append value onto the Table
    $('[data-wholeList]').append(`
    <tr>
        <th><a class="delete deleteIcon"></a></th>
        <th>${itemID}</th>
        <td>${itemName}</td>
        <td>${itemAmount}</td>
        <td>$ ${itemPrice}</td>
        <td>${itemNote}</td>
    </tr>
    `);

    // Item ID should increment for every item, starting from 1
    itemID++;

    //
})

// Clear the submitted Items on the Table List
$('#resetList').click(function(){
    $('[data-wholeList]').val('');
})
