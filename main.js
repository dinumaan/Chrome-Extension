/*
const contents = document.getElementById('contents');

contents.parentNode.removeChild(contents);
*/

var contents = $('#contents');
//$('#contents').prepend("image.jpeg");
var contentsParent = contents.parent();

contents.remove();

const  url = 'https://avatarfiles.alphacoders.com/822/82242.png';

const  image = new Image();

image.src = url;

contentsParent.prepend( "<div id='message'>this is fucking div</div>" );

contentsParent.prepend(image);

contentsParent.prepend( "<div id='message'>this is another fucking div</div>" );

$('div').click(function() {
    alert('A div was clicked!');
});