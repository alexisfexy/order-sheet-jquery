

function breakdownWord() {
    var wordInput = document.getElementById("wordText").value;
    for (var i = 0; i < wordInput.length; i++) {
        alert(wordInput.charAt(i));
        // going to have to make form for EACH letter 

    }
}




$(function () {

    $("#wordExtender").on("change", "select", function () {
        var color = $(this).val();
        $(this).css('background-color', color);
        $(this).css('color', 'white');

    });


    // var i = $('.newInput').size() + 1;
    var i = 1;
    $("#wordAdd").click(function () {

        var newWord = `
        <div class="container">
        <div class="card">
        <div class="card-body">
            <div class="form-group">
            <h5>Word #` + i + `</h5>
            <button type="button" class="btn btn-outline-danger remove" id='remove-button'>Remove</button>
            <label for="wordText">Text:</label>
            <input type="text" style="text-transform:uppercase" class="form-control" id="wordText" placeholder="HAPPY">
            </div>

            <div class="form-group">
            <label>Color Sequence: </label> <br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="colorPatterns" id="monoPattern" value="mono">
                <label class="form-check-label" for="monoPattern">Monochrome</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="colorPatterns" id="alterPattern" value="alt">
                <label class="form-check-label" for="alterPattern">Alternating</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="colorPatterns" id="customPattern" value="cust">
                <label class="form-check-label" for="customPattern">Custom</label>
            </div>
            </div>
            <div id="colorExtender"></div>
            </div>
            </div>
        </div>
        `
        

        $(newWord).fadeIn("slow").appendTo("#wordExtender");
        i++;
        return false;
    });

    // ADDING text colors:

    $("#wordExtender").on("change", "input", function () {
        var colorpat = $(this).val();
        if (colorpat === 'mono') {
            var newMonoColor = `
                <div class="form-group" id="otherFieldDiv">
                    <label for="colorInput">Color:</label>
                    <select class="form-control colorOption" id='singularColor'>
                        <option value="Black">Black</option>
                        <option value="#ccbe9f">Gold</option>
                        <option value="Grey">Silver</option>
                        <option value="#fd4a4a">Red</option>
                        <option value="#fe66ad">Pink</option>
                        <option value="#a5d448">Lime Green</option>
                        <option value="#07cbff">Light Blue</option>
                        <option value="#253dba">Royal Blue</option>
                        <option value="#101457">Navy</option>
                    </select>
                </div>

            `
            $(newMonoColor).fadeIn("slow").appendTo("#colorExtender");
            i++;
            return false
        }
        // else {
        //     $(newMonoColor).remove();
        // }

        if (colorpat === 'alt') 
        {
            var snewColor = `
                <div class="form-row">
                <div class="form-group col-md-6">
                <label for="color1input">Color One:</label>
                <select class="form-control colorOption" id="color1input">
                    <option value="Black">Black</option>
                    <option value="#ccbe9f">Gold</option>
                    <option value="Grey">Silver</option>
                    <option value="#fd4a4a">Red</option>
                    <option value="#fe66ad">Pink</option>
                    <option value="#a5d448">Lime Green</option>
                    <option value="#07cbff">Light Blue</option>
                    <option value="#253dba">Royal Blue</option>
                    <option value="#101457">Navy</option>
                </select>
                </div>
                <!-- add a validation that it is NOT the same as other column -->
                <div class="form-group col-md-6">
                <label for="color2input">Color Two:</label>
                <select class="form-control colorOption" id="color2input">
                    <option value="Black">Black</option>
                    <option value="#ccbe9f">Gold</option>
                    <option value="Grey">Silver</option>
                    <option value="#fd4a4a">Red</option>
                    <option value="#fe66ad">Pink</option>
                    <option value="#a5d448">Lime Green</option>
                    <option value="#07cbff">Light Blue</option>
                    <option value="#253dba">Royal Blue</option>
                    <option value="#101457">Navy</option>
                </select>
                </div>

            </div>
            `


        }
        if (colorpat === 'cust') {
            alert('custome');
        }
        // var newColor = newMonoColor;
        // $(newColor).fadeIn("slow").appendTo("#colorExtender");
        // i++;
        return false
      });


    // var appended = $('<div />', {
    //     'id': 'appended',
    //     'text': 'Appended content'
    //   });

    //   $('input:radio[name="colorPatterns"]').change(function() {
    //     if ($(this).val() == 'mono') {
    //       $(appended).appendTo('body');
    //     } else {
    //       $(appended).remove();
    //     }
    //   });



    // $("input[name='colorPatterns']").change(function(){
      

    //     var colorpat = $(this).val();
    //     if (colorpat === 'mono') {
    //         alert('monochrome');
    //     }
    //     if (colorpat === 'alt') {
    //         alert('alternating');
    //     }
    //     if (colorpat === 'cust') {
    //         alert('custome');
    //     }
       
    // });
    // $('input').on('change', function() {
    //     alert('help'); 
    //  });



    /// remove function: fix so it takes the children 
    $('#wordExtender').on('click', '.remove', function () {
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