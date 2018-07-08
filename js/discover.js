$(function(){
	var box1 = $(".work-list-box1");
	var box2 = $(".work-list-box2");
	var box3 = $(".work-list-box3");
	var courseLi= $("#course-li");
	var forumLi= $("#forum-li");
	var dataLi = $("#data-li");
	courseLi.on("click",function(){
		box1.css("display","block");
		box2.css("display","none");
		box3.css("display","none");

	})
	forumLi.on("click",function(){
		box1.css("display","none");
		box2.css("display","block");
		box3.css("display","none");
	})
	dataLi.on("click",function(){
		box1.css("display","none");
		box2.css("display","none");
		box3.css("display","block");
	})
})
