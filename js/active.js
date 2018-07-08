$(function(){
	var box1 = $(".card-content");
	var box2 = $(".card-content1");
	var box3 = $(".card-content2");
	var box4 = $(".card-content3");
	var course1Li= $("#course1-li");
	var course2Li= $("#course2-li");
	var course3Li = $("#course3-li");
	var course4Li = $("#course4-li");
	course1Li.on("click",function(){
		box1.css("display","block");
		box2.css("display","none");
		box3.css("display","none");
		box4.css("display","none");
	})
	course2Li.on("click",function(){
		box1.css("display","none");
		box2.css("display","block");
		box3.css("display","none");
		box4.css("display","none");
	})
	course3Li.on("click",function(){
		box1.css("display","none");
		box2.css("display","none");
		box3.css("display","block");
		box4.css("display","none");
	})
	course4Li.on("click",function(){
		box1.css("display","none");
		box2.css("display","none");
		box3.css("display","none");
		box4.css("display","block");
	})
})
