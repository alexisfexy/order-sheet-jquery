

function breakdownWord() {
    var wordInput = document.getElementById("wordText").value;
    for (var i = 0; i < wordInput.length; i++) {
        alert(wordInput.charAt(i));
        // going to have to make form for EACH letter 

    }
}




$(function () {

    $('.colorOption').change(function () {
        var color = $(this).val();
        $(this).css('background-color', color);
        $(this).css('color', 'white');

    });



});



/// dynamic work:


// $(function () {

//     //set a counter
//     var i = $('input').size() + 1;
//     alert('hi');

//     //add input
//     $('a#wordAdd').click(function () {
//         $('<input type="text" name="items[]" id="' + i + '" value="' + i + '" /><a href="#" class="remove">Remove</a>').fadeIn("slow").appendTo('#wordExtender');
//         i++;
//         return false;
//     });

//     //add select
//     $('a#seladd').click(function () {
//         $("
//             < select name = "items[]" >
//             <option value="exclaimation">!</option>
//             <option value="question">?</option>
//             <option value="at-sign">@</option>
//             <option value="hashtag">#</option>
//             <option value="dash">-</option>
// </select >

//             <a href="#" class="remove">Remove</a>
// ").fadeIn("slow").appendTo('#selextender');
//     return false;
//     });

//     //fadeout selected item and remove
//     $('.remove').live('click', function () {
//         $(this).parent().fadeOut(300, function () {
//             $(this).empty();
//             return false;
//         });
//     });

// });