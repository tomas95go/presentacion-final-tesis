function animateLink(id)
	{

    	console.log(id);

		switch (id) {

  			case 'presentacion':

  				link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.location.href = "dashboard.html"; }, 250);

    		break;

    		case 'ISFD':

    			link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.location.href = "isfd.html"; }, 250);

    		break;

    		case 'actividades':

    			link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.location.href = "devlifecycle.html"; }, 250);

    		break;

    		case 'herramientas':

    			link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.location.href = "stack.html"; }, 250);

    		break;

    		case 'bugs':

    			link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.location.href = "catchingbugs.html"; }, 250);

    		break;

    		case 'demo':

    			link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.open("http://localhost/ISFD"); }, 250);

    			setTimeout(function(){ location.reload(); }, 250);

    		break;

    		case 'conclusion':

    			link = document.getElementById(id);

    			link.className += " animated fadeOutRight";

    			setTimeout(function(){ window.location.href = "wrapup.html"; }, 250);

    		break;
		}

	}