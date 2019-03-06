// click event for gray button

// click event for white button

function switchGray() {
    // change background to white
    $('body').css('background-color','grey')
    // change font to white
    $('.text').css('color','white')
}

function switchWhite() {
    // change background to white
    $('body').css('background-color','white')
    // change font to black
    $('.text').css('color','black')
}

$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
