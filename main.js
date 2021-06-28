


block_image_width = 5;
block_image_height = 5;

function load_img(){
	new_image('golf-h.png');
	console.log("g");
	new_image();
}

function new_image()
{
	new_image('ball.png');
	console.log("b");
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	keyPressed= e.keyCode;
	console.log(keyPressed);
	if(e,shiftKey == true && keyPressed == '80')
	{
		console.log("p and shift pressed together");
		block_image_width= block_image_width+10;
		block_image_height= block_image_height+10;
		document.getElementById("current_width").innerHTML= block_image_width;
		document.getElementById("current_height").innerHTML= block_image_height;
	
	}
	if(e.shiftKey && keyPressed == '77')
	{
		console.log("m and shift pressed together");
		block_image_width= block_image_width-10;
		block_image_height= block_image_height-10;
		document.getElementById("current_width").innerHTML= block_image_width;
		document.getElementById("current_height").innerHTML= block_image_height;
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

