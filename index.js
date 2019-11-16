// TOGGLE ++++++++++

// Button - Add New Item will toggle and show the input forms
$('#addNewItem, #cancelItem').click(function(){
    $('main.newItem').toggleClass('showNewItem');
    // Input data has to be reset after every toggle
    $('[data-itemID], [data-itemName], [data-itemAmount], [data-itemPrice], [data-itemNote]').val('');
});

// ADDING ++++++++++

let itemID = 1;

// When User click Save Item to List, the arrays of datas from the input form should show up on the Table
$('#submitItem').click(function(event){
    event.preventDefault();

    // Get Value from the Input
    const itemName = $('[data-itemName]').val();
    const itemAmount = $('[data-itemAmount]').val();
    const itemPrice = $('[data-itemPrice]').val();
    const itemNote = $('[data-itemNote]').val();
    // Append value onto the Table
    $('[data-wholeList]').append(`
    <tr data-itemInput>
        <th data-deleteIcon><a class="delete"></a></th>
        <th>${itemID}</th>
        <td>${itemName}</td>
        <td>${itemAmount}</td>
        <td>$ ${itemPrice}</td>
        <td>${itemNote}</td>
    </tr>
    `);

    // When User press the Delete Icon, input gets deleted
    $('[data-deleteIcon]').click(function(){
        $('[data-itemInput]').remove('');
    });

    // Item ID should increment for every item, starting from 1
    itemID++;

    // Item Amount and Price can only be number, if not, the input form should show that it's an error
})

// DELETE ++++++++++

// Clear the submitted Items on the Table List
$('#resetList').click(function(){
    $('[data-wholeList]').val('');
});