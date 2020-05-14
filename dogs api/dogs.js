
$('#breed_btn').click(function(e){
	e.preventDefault();
	var breed=$('#breed').val();
	console.log(breed);
	$.ajax({
		url:"https://dog.ceo/api/breed/"+breed+"/images/random",
		method:'GET',
		success:function(data){
			var image_url=data.message;
			console.log(image_url);
			$('#dog_img').attr('src',image_url);
		}
	});
});

$('#next_img').click(function(e){
	e.preventDefault();
	var breed=$('#breed').val();
	console.log(breed);
	$.ajax({
		url:"https://dog.ceo/api/breed/"+breed+"/images/random",
		method:'GET',
		success:function(data){
			var image_url=data.message;
			console.log(image_url);
			$('#dog_img').attr('src',image_url);
		}
	});
});