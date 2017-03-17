<!DOCTYPE html>
<html>
<head>
	<title></title>

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"> 
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

 
</head>
<body>
 

<div class="container">
	<div class="col-sm-6">
		 

<form action="dd.html" method="post">
	 
			<div class="row">
				<div class="login-form">

					<div class="alert-msg">
						<div class=" alert-success" style="display:none;">
							<strong>Success!</strong> Login Successful.
						</div>
						<div id="common-alert" class=" alert-danger" style="display:none;">
							<strong>Error!</strong> Field must not be empty.
						</div>
						 

					</div><!-- /.alert -->

					<div class="col-md-12">
						<div class="form-group"> 
							<input type="text" name="username" id="username" class="form-control">
						</div>
					</div>



					<div class="col-md-12">
						<div class="form-group"> 
							<input type="password" name="password" id="password" class="form-control">
						</div>
					</div>


					<div class="col-md-12">
						<div class="form-group">
							<button type="button" class="btn btn-info" id="reset">Reset</button>
							<button type="button" class="btn btn-success pull-right" id="login">Login</button>
						</div>
					</div>
 

				</div>

			</div> 
</form>

	</div>
</div>


 

 
</div>
</div> 
 


 


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
  
<script>
$(function(){
	  

	  $("button.btn-success").click(function(){
	  	var username=$("input:text").val();
	  	var password=$("input:password").val();
	  	//$("span").text(username + password);
	  	if (username == "" || password == "") {
	  		$(".alert-danger").css("display","block")
	  	} else {
	  		$(".alert-success").css("display","block");
	  		window.location.href= "http://facebook.com"
	  	}
	  })    

 

});


 
</script>

</body>
</html>

 
