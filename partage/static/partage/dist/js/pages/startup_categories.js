
/*
 * Description:
 *      This is a file that should be used on all ages
 **/
//Cate list of categories using ajax request
var CategoryListData = $.ajax({
	  url: '/startup_categories_json/',
	  dataType: 'json',
	}).done(function (data, status){
	//List all categories in the menus

	for (var i=0; i< data.length; i++){
		//console.log(data[i]);
		//console.log(data)
		// console.log(data[i].pk)
		if ((data[i].fields.name)=='All'){
			// $('#list-all-startups').replaceWith("<h3>All startups</h3><br/>")
			$('#category-list').append("<li style='display: block; color:white;'>"+"<a href='/startup_categories/"+data[i].pk+"'>"+"<i class='fa fa-circle-o '></i>"+data[i].fields.name+"</a></li>");
		}else{

        	$('#category-list').append("<li style='display: block; color:white;'>"+"<a href='/startup_categories/"+data[i].pk+"'>"+"<i class='fa fa-circle-o'></i>"+data[i].fields.name+"</a></li>");
        };
      };

			test()

});

// function test() {
// 	var listes = $('#category-list')[0].children
// 	const agr = listes[2]
// 	console.log(agr)
//
//
// 	if (agr.onclick){
// 		console.log('click on agr')
// 	}
// }
/*
	if is connected== true
			parentElement(li)>nextElementcibling.add(class="active")
*/