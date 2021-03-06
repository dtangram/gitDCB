// JavaScript Document

var DC_ListB = angular.module("DC_ListB", []);

DC_ListB.controller("DC_ControllerB", function DC_ControllerB($scope)
{
	$scope.comicsDCB = [
	{	
		"comic" : "BATGIRL #1",
		"date" : "February 2, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{
		"comic" : "BATGIRL #2",
		"date" : "March 1, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{			
		"comic" : "BATGIRL #3",
		"date" : "April 5, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{
		"comic" : "BATGIRL #4",
		"date" : "May 3, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #5",
		"date" : "June 7, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{	
		"comic" : "BATGIRL #6",
		"date" : "July 5, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #7",
		"date" : "August 2, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{			
		"comic" : "BATGIRL #8",
		"date" : "September 6, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #9",
		"date" : "October 4, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #10",
		"date" : "November 1, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #11",
		"date" : "December 6, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artists: Koi Turnbull, Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #12",
		"date" : "January 3, 2001",
		"writer1" : "Writer: Chuck Dixon",
		"artist" : "Artist: Dale Eaglesham"
	},
		
	{
		"comic" : "BATGIRL #13",
		"date" : "February 7, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{	
		"comic" : "BATGIRL #14",
		"date" : "March 7, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{	
		"comic" : "BATGIRL #15",
		"date" : "April 4, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #16",
		"date" : "May 2, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #17",
		"date" : "June 6, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #18",
		"date" : "July 4, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #19",
		"date" : "August 1, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #20",
		"date" : "September 5, 2001",
		"writer1" : "Writer: Chuck Dixon",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #53",
		"series" : "Batgirl and Robin",
		"date" : "June 30, 2004",
		"writer1" : "Writer: Dylan Horrocks",
		"artist" : "Artist: David Ross"
	}	
]
});

DC_ListB.controller("BatgirlController", ["$scope", "$routeParams", function BatgirlController($scope, $routeParams)
{
	$scope.comicsDCB = [
	{	
		"comic" : "BATGIRL #1",
		"date" : "February 2, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott",
		"comic_header" : "BATGIRL #1",
		"comic_logo" : "BatgirlLogo",
		"comic_img" : "Batgirl_1",
		"condition" : "Condition: NM",
		"cover_artist" : "Cover Artist: Damion Scott",
		"cover_date" : "Cover Date: Apr. 2000"
	},
	
	{
		"comic" : "BATGIRL #2",
		"date" : "March 1, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{			
		"comic" : "BATGIRL #3",
		"date" : "April 5, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{
		"comic" : "BATGIRL #4",
		"date" : "May 3, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #5",
		"date" : "June 7, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{	
		"comic" : "BATGIRL #6",
		"date" : "July 5, 2000",
		"writer1" : "Writers: Scott Peterson, Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #7",
		"date" : "August 2, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
	
	{			
		"comic" : "BATGIRL #8",
		"date" : "September 6, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #9",
		"date" : "October 4, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #10",
		"date" : "November 1, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #11",
		"date" : "December 6, 2000",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artists: Koi Turnbull, Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #12",
		"date" : "January 3, 2001",
		"writer1" : "Writer: Chuck Dixon",
		"artist" : "Artist: Dale Eaglesham"
	},
		
	{
		"comic" : "BATGIRL #13",
		"date" : "February 7, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{	
		"comic" : "BATGIRL #14",
		"date" : "March 7, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{	
		"comic" : "BATGIRL #15",
		"date" : "April 4, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #16",
		"date" : "May 2, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #17",
		"date" : "June 6, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #18",
		"date" : "July 4, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #19",
		"date" : "August 1, 2001",
		"writer1" : "Writer: Kelley Puckett",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #20",
		"date" : "September 5, 2001",
		"writer1" : "Writer: Chuck Dixon",
		"artist" : "Artist: Damion Scott"
	},
		
	{		
		"comic" : "BATGIRL #53",
		"series" : "Batgirl and Robin",
		"date" : "June 30, 2004",
		"writer1" : "Writer: Dylan Horrocks",
		"artist" : "Artist: David Ross"
	}	
];

$scope.whichItem = $routeParams.batgirlDetails;
}]);



/*DC_ListB.controller("DC_Controller", function DC_Controller($scope, $http)
{
	$http.get("JS/DC_Comics_B.json").success(function(data)
	{
		$scope.comicsDCB = data;
	}); 
});*/



/*AJAX*/
/*var DCList = document.getElementById("DC_List");

var xmlhttp;

if (window.XMLHttpRequest)
{
	xmlhttp=new XMLHttpRequest()
}

else
{
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
}

xmlhttp.onreadystatechange = function()
{
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		DCList.innerHTML = xmlhttp.responseText;
	}
}

xmlhttp.open("GET", "DC_Comics_B,json", false);
xmlhttp.send();*/


/*var request;
if(window.XMLHttpRequest)
{
	request = new XMLHttpRequest();
}

else
{
	request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'XML/DCComicList.xml', false);

request.onreadystatechange = 
function()
{
	var request;
	if((request.readyState == 4) && (request.status == 200))
	{
		DCList.innerHTML = request.responseXML.getElementsByTagName('Issue')[0].firstChild.nodeValue;
	}
}

request.send();*/