/*
 * Description:
 *      This is a file used only for the main dashboard (startup-list.html)
 **/

$(function (){
	'use strict';

	// Ajax request to get startup list
	var StartUpListData = $.ajax({
	  url: '/startup_list_json/',
	  dataType: 'json',
	}).done(function (data, status){

	console.log(data[0].logo)
	console.log(data);
	});








});