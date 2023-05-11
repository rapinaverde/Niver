var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("AniversarioImagem.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(700);
	ball_obj.scaleToHeight(510);
	ball_obj.set({
	top:0,
	left:0
	});
	canvas.add(ball_obj);
	});
}

function playSound(){
    x.play();
}
