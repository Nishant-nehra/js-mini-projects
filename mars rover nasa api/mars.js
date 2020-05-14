var count=0;
$('#mars_btn').click(function(e){
	e.preventDefault();
	var dates=$('#dateid').val();
	console.log(dates);
	$.ajax({
		url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+dates+"&api_key=DEMO_KEY",
		method:'GET',
		success:function(data){
				//count++ to get next image we can't access all images
				//as nasa has a limit on their api
				//or else we could have used a loop
				//with data.photos[i].img_src
				//for(var i in data.photos)
				// this is done by reading documentation
				
				var image_url=data.photos[count++].img_src;
				console.log(image_url);
				$('#content').append('<img class="mars_img" src='+image_url+'>');

				}
	});
});