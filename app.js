var backgroundColorCount = 0;
function changeB()
{
	backgroundColorCount = backgroundColorCount +1;
	if(backgroundColorCount > 5)
	{
		backgroundColorCount = 0;
	}
	if (backgroundColorCount == 0)
	{
		document.body.style.backgroundColor = "#FA9A50";
	}
	if(backgroundColorCount == 1)
	{
		document.body.style.backgroundColor = "lightgreen";
	}
	if(backgroundColorCount == 2)
	{
		document.body.style.backgroundColor = "hotpink";
	}
	if(backgroundColorCount == 3)
	{
		document.body.style.backgroundColor = "purple";
	}
	if(backgroundColorCount == 4)
	{
		document.body.style.backgroundColor = "green";
	}
	if(backgroundColorCount == 5)
	{
		document.body.style.backgroundColor = "brown";
	}

}

function check(form)
{
if(form.uname.value == "RickyRocks" && form.psw.value == "whataguy")
  {
    window.open('home.html')
  }
 else
 {
   alert("Error Password or Username")
  }

}
