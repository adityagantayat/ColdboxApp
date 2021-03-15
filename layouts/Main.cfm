<cfoutput>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<!--- <title>#attributes.pagename#</title>  --->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
 <link rel="stylesheet" href="/includes/helpers/form.css"> 
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


</head>
<header>
	<!--- The common navbar --->
        <nav class="navbar navbar-light bg-success">
            <h3 class="navbar-brand text-light font-weight-bold">IT World Education</h3>
        </nav>
    </header>

	<!---Container And Views --->
	<div class="container">#renderView()#</div>

</cfoutput>
