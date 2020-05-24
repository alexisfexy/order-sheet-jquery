

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


    // var i = $('.newInput').size() + 1;
    var i = 1;
    $("#wordAdd").click(function () {

        var newWord = `
        <div class="form-group">
        <hr class ="class-2">
        <h5><label for="wordText">Word #` + i +`</label></h5>
        <button type="button" class="btn btn-sm btn-outline-danger remove">Remove</button>
        <input type="text" style="text-transform:uppercase" class="form-control" id="wordText" placeholder="HAPPY">
        </div>


        <div class="form-group">
        <label>Color Sequence: </label> <br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="colorPatterns" id="monoPattern" value="mono">
          <label class="form-check-label" for="monoPattern">Monochrome</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="colorPatters" id="alterPattern" value="altern">
          <label class="form-check-label" for="alterPattern">Alternating</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" onclick="breakdownWord()" type="radio" name="colorPatterns" id="iconPattern"
            value="custom">
          <label class="form-check-label" for="iconPattern">Custom</label>
        </div>
      </div>

        `
        
        $(newWord).fadeIn("slow").appendTo("#wordExtender");
        i++;
        return false;
    });

    /// remove function
    $('.remove').live('click', function () {
        $(this).parent().fadeOut(300, function () {
            $(this).empty();
            return false;
        });
    });



    // dynamic form:



    // $('#wordAdd').click(function(event) { alert('inner') });
    //     var newWord = '<input id="' + i + '" type="text" name="items[]" value="' + i + '" /><a class="remove" href="#">Remove</a>';
    //     alert(newWord);
    //     // $(newWord).fadeIn("slow").appendTo("#wordExtender");
    //     // i++;
    //     // return false;



    // }



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