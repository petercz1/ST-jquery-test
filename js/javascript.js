console.log('js loaded');

$(document).ready(do_setup);

function do_setup() {
  console.log('Inside do_setup');
  $('#check').click(check_for_winner);
}

function check_for_winner(){
    console.log('Inside check_for_winner');
    compare( $('.row1') );
    // compare( $('.row2') );
    // compare( $('.row3') );
    // compare( $('.col1') );
    // compare( $('.col2') );
    // compare( $('.col3') );
    // compare( $('.diag1') );
    // compare( $('.diag2') );
}

function compare(incoming_tags){

    var val1 = incoming_tags[0].innerHTML;
    var val2 = incoming_tags[1].innerHTML;
    var val3 = incoming_tags[2].innerHTML;
    var answer = val1 + val2 + val3;

    if (answer === 'XXX'){
        console.log('X has won!!!');
        // now do something with Winner!
        // maybe return 'winner X'; etc...
    }
    if (answer === 'OOO'){
        console.log('O has won!!!');
    }
}

