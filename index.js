// TOGGLE ++++++++++

// Button - Add New Item will toggle and show the input forms
$('#addNewItem').click(function(){
    $('main.newItem').toggleClass('showNewItem');
    // Input data has to be reset after every toggle
    $('[data-itemID], [data-itemName], [data-itemAmount], [data-itemPrice], [data-itemNote]').val('');
});

// Button - Remove adding list inputs
$('#cancelItem').click(function(){
    $('main.newItem').removeClass('showNewItem');
    // Input data has to be reset after every toggle
    $('[data-itemID], [data-itemName], [data-itemAmount], [data-itemPrice], [data-itemNote]').val('');
});

// ADDING ++++++++++

let itemID = 1;
let totalAmount = 0;
let totalPrice = 0;

// When User click Save Item to List, the arrays of datas from the input form should show up on the Table
$('#submitItem').click(function(event){
    event.preventDefault();

    // Get Value from the Input
    const itemName = $('[data-itemName]').val();
    const itemAmount = $('[data-itemAmount]').val();
    const itemPrice = $('[data-itemPrice]').val();
    const itemNote = $('[data-itemNote]').val();


    // Regex shitshow cause bulma reset browser's basic validation function
    var reg = new RegExp('^[0-9]+$');

    var isNumber = function(value) {
        return reg.test(value);
    };

    // if it is not a number, apply is-danger class
    // else, remove is-danger class
    if (!isNumber(itemAmount)){
        $('#itemAmount').addClass('is-danger');
        $('#labelAmount').append(`<p class="help is-danger">Invalid input</p>`)
    } else {
        $('#itemAmount').removeClass('is-danger');
        $('#labelAmount p').empty('');
    }

    if (!isNumber(itemPrice)){
        $('#itemPrice').addClass('is-danger');
        $('#labelPrice').append(`<p class="help is-danger">Invalid input</p>`)
    } else {
        $('#itemPrice').removeClass('is-danger');
        $('#labelPrice p').empty('');
    }

    if (!isNumber(itemAmount) || !isNumber(itemPrice)){
        return;
    }

    totalAmount = parseInt(itemAmount) + totalAmount
    totalPrice = totalPrice+(parseInt(itemPrice) * parseInt(itemAmount))

    $('#priceTotal').append(`<p class="title">$ ${totalPrice}</p>`);
    $('#amountTotal').append(`<p class="title">${totalAmount}</p>`);
    
    // Append value onto the Table
    $('[data-wholeList]').append(`
        <tr data-itemInput>
            <th data-deleteIcon><a class="delete"></a></th>
            <th>${itemName}</th>
            <th>${itemAmount}</th>
            <th>$ ${itemPrice}</th>
            <th>${itemNote}</th>
        </tr>
    `);


    // Input forms get reset after every submission
    $('[data-itemID], [data-itemName], [data-itemAmount], [data-itemPrice], [data-itemNote]').val('');

    // When User press the Delete Icon, input gets deleted
    $('[data-deleteIcon]').click(function(){
        $('[data-itemInput]').remove('');
    });

    

});

// DELETE ++++++++++

// Clear the submitted Items on the Table List
$('#resetList').click(function(){
    $('[data-wholeList]').val('');
});