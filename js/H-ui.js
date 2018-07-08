/*H-ui.js date:9:18 2014-5-14 by:guojunhui*/
/*$().resize()*/
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style")
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  )
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

/*添加收藏
<a title="收藏本站" href="javascript:addFavoritepage(0);">收藏本站</a>
*/
var webName ="HelloRF";
var webSite ="//www.hellorf.com/";
/*收藏主站*/
function addFavorite(){try{window.external.addFavorite(webSite,webName);}catch(e){try{window.sidebar.addPanel(webName,webSite,"");}catch(e){alert("加入收藏失败，请使用Ctrl+D进行添加");}}}
/*收藏页面
<a title="收藏本页" href="javascript:addFavoritepage(0);">收藏本页</a>
*/
function addFavoritepage(){var sURL=window.location.href;var sTitle=document.title;try{window.external.addFavorite(sURL,sTitle);}catch(e){try{window.sidebar.addPanel(sTitle,sURL,"");}catch(e){alert("加入收藏失败，请使用Ctrl+D进行添加");}}}
/*设为首页*/
function setHome(obj){
  try{obj.style.behavior="url(#default#homepage)";obj.setHomePage(webSite);}
  catch(e){if(window.netscape){
	  try {netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
	  catch(e){alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入\"about:config\"并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");}
	  var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
	  prefs.setCharPref('browser.startup.homepage',url);}}
}
/*滚动*/
function marquee(height,speed,delay){
	var scrollT;
	var pause = false;
	var ScrollBox = document.getElementById("marquee");
	if(document.getElementById("holder").offsetHeight <= height) return;
	var _tmp = ScrollBox.innerHTML.replace('holder', 'holder2')
	ScrollBox.innerHTML += _tmp;
	ScrollBox.onmouseover = function(){pause = true}
	ScrollBox.onmouseout = function(){pause = false}
	ScrollBox.scrollTop = 0;
	function start(){
	    scrollT = setInterval(scrolling,speed);
	    if(!pause) ScrollBox.scrollTop += 2;
	}
	function scrolling(){
	    if(ScrollBox.scrollTop % height != 0){
	        ScrollBox.scrollTop += 2;
	        if(ScrollBox.scrollTop >= ScrollBox.scrollHeight/2) ScrollBox.scrollTop = 0;
	    }
		else{
	        clearInterval(scrollT);
	        setTimeout(start,delay);
	    }
	}
	setTimeout(start,delay);
}

squid.swing.jselect();

/*iframe 自适应宽高*/
function iframesize(obj) {
	var pTar = null;
	if (document.getElementById){
		pTar = document.getElementById(obj);
	}
	else{
		eval('pTar = ' + obj + ';');
	}
	if (pTar && !window.opera){
		/*begin resizing iframe */
		pTar.style.display="block";
		if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight){
			/*ns6 syntax*/
			pTar.height = pTar.contentDocument.body.offsetHeight +20;
			pTar.width = pTar.contentDocument.body.scrollWidth+20;
		}
		else if (pTar.Document && pTar.Document.body.scrollHeight){
			/*ie5+ syntax*/
			pTar.height = pTar.Document.body.scrollHeight;
			pTar.width = pTar.Document.body.scrollWidth;
		}
	}
}
/*<iframe src ="" frameborder="0" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto" id="id" name="ifm" onload="javascript:iframesize('id');" width="100%"></iframe>*/

/*隐藏显示密码*/
(function ( $ ) {
    $.fn.togglePassword = function( options ) {
        var s = $.extend( $.fn.togglePassword.defaults, options ),
        input = $( this );

        $( s.el ).on( s.ev, function() {
            "password" == $( input ).attr( "type" ) ?
                $( input ).attr( "type", "text" ) :
                $( input ).attr( "type", "password");
        });
    };

    $.fn.togglePassword.defaults = {
        ev: "click"
    };
}( jQuery ));

$(document).scroll(
  function(){
	  var sTop=$(document).scrollTop();
	  $("#scrollTop1").val(sTop);
  }
);

function set_alert(info){
    $("#alert_info").html(info);
    $("#modal-alert").modal("show");
    setTimeout("set_alert_hide()",2000);
}

function set_alert2(info){
    $("#alert_info2").html(info);
    $("#modal-alert2").fadeIn();
    setTimeout("set_alert_hide2(),modal_favhide()",2000);
}

function set_alert_hide2(){
    $("#modal-alert2").fadeOut();
}

function set_alert_hide(){
    $("#modal-alert").modal("hide");
}

function alert_page_refresh(){
    $("#modal-alert").modal("hide");
    window.location.reload();
}
function set_alert_refresh(info) {
    $("#alert_info").html(info);
    $("#modal-alert").modal("show");
    setTimeout("alert_page_refresh()",2000);
}
function Huimodal_alert(info,speed){
    $(document.body).append(
    '<div id="modal-alert-travel" class="modal hide modal-alert">'+
      '<div class="modal-alert-info">'+info+'</div>'+
    '</div>'
    );
    $("#modal-alert-travel").fadeIn();

    setTimeout("Huimodal_alert_hide()",speed);
}
function Huimodal_alert_hide() {
    $("#modal-alert-travel").fadeOut("normal",function(){
        $("#modal-alert-travel").remove();
        $(window).scrollTop("1090");
    });
}

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }
    else {
        return null;
    }
}

function setCookie(name, value){
    var Days = 300;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + "; path=/;expires=" + exp.toGMTString();
}

var waitingdo="";
function checkLoginRedirect(url){
    $.post("/"+set_weburl+"user/is_login_status",{_mt:Math.random()},function (data){
        if (data.error==1){
            poploginshow();
            waitingdo="dovipnext("+vip+")";
        }
        else
        {
            window.location.href=url;
        }
    },'json');
}

/*start 登录*/
function poploginshow(){
    $("#pop-login").show().addClass("poplogin");
    $(".dropBox .arrow").hide();
    $(document.body).append("<div class=\"mask\"></div>");
}


function doLoginInPop(thisurl){
    var n = $.trim(isXss($("#popUsername").val()));
    var p = $.trim($("#popPassword").val());
    var vcode = $.trim($('#popRandomCode').val());
    var remember = 0;
    var cbUrl = thisurl;
    var passportHost = "//"+set_passport_url;
    var clientHostLogin = "//"+set_domain+"/"+set_weburl+"user/passport/";
    var n = isXss(n);

    if ($.trim(n).length==0 || $.trim(p).length==0){
        $.Huimodalalert("用户名或密码不能为空",2000);
        return false;
    }
    $z.loginActive(set_passport_appid,n,p,remember,vcode,callback,cbUrl, passportHost, clientHostLogin);
    return false;
}

/*登录*/
function doLogin(thisurl){
    var n = $.trim(isXss($("#defUsername").val()));
    var p = $.trim($("#defPassword").val());
    var vcode = $.trim($('#randomCode').val());
    var remember = 0;
    var cbUrl = thisurl;
    var passportHost = "//"+set_passport_url;
    var clientHostLogin = "//"+set_domain+"/"+set_weburl+"user/passport/";

    if (n.length==0 || p.length==0){
        $.Huimodalalert("用户名或密码不能为空",2000);
        return false;
    }
    $z.loginActive(set_passport_appid,n,p,remember,vcode,callback,cbUrl, passportHost, clientHostLogin);
    return false;
}

function loginCallback(callback, cbUrl){
	if(cbUrl || cbUrl==undefined){
		cbUrl='';
	}
    var n = $.trim(isXss($("#defUsername").val()));
    var p = $.trim($("#defPassword").val());
    var vcode = $.trim($('#randomCode').val());
    var remember = 0;
    var passportHost = "//"+set_passport_url;
    var clientHostLogin = "//"+set_domain+"/"+set_weburl+"user/passport/";

    if (n.length==0 || p.length==0){
        $.Huimodalalert("用户名或密码不能为空",2000);
        return false;
    }
    $z.loginActive(set_passport_appid,n,p,remember,vcode,callback,cbUrl, passportHost, clientHostLogin);
    return false;
}

/* =======================================================================
 * jQuery.Huimodalalert.js alert
 * ========================================================================*/
!function ($) {
	$.Huimodalalert = function (info, speed) {
		if ($(".modal-alert").length > 0) {
			$(".modal-alert").remove();
		}
		if (speed == 0 || typeof (speed) == "undefined") {
			$(document.body).append('<div id="Huimodalalert" class="modal modal-alert radius">' + '<div class="modal-alert-info">' + info + '</div>' + '<div class="modal-footer"> <button class="btn btn-primary radius" onClick="$.Huimodal_alert.hide()">确定</button></div>' + '</div>');
			$("#modal-alert").fadeIn();
		} else {
			$(document.body).append('<div id="Huimodalalert" class="modal modal-alert radius">' + '<div class="modal-alert-info">' + info + '</div>' + '</div>');
			$("#modal-alert").fadeIn();
			setTimeout($.Huimodalalert.hide, speed);
		}
	}
	$.Huimodalalert.hide = function () {
		$("#Huimodalalert").fadeOut("normal",
			function () {
				$("#Huimodalalert").remove();
			});
	}
}(window.jQuery);

/*jQuery脚本*/
$(function(){
	/*hover*/
	jQuery.HUIhover =function(obj) {
		$(obj).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
	};

	/*表单得到失去焦点*/
	jQuery.HUIfocusblur = function(obj) {
        $(obj).focus(function() {
			$(this).addClass("focus").removeClass("inputError");
			//if ($(this).val() == this.defaultValue) {
				//$(this).val("");
			//}
		});
        $(obj).blur(function(){
			$(this).removeClass("focus");
			//if ($(this).val() == "") {
				//$(this).val(this.defaultValue);
			//}
		});
    };
    $.HUIfocusblur(".input_text,.textarea");

	/*模拟下拉菜单*/
	jQuery.HUIselect = function(divselectid,inputselectid) {
		var inputselect = $(inputselectid);
		$(divselectid+" cite").click(function(){
			var ul = $(divselectid+" ul");
			ul.slideToggle();
		});
		$(divselectid+" ul li a").click(function(){
			var txt = $(this).text();
			$(divselectid+" cite").html(txt);
			var value = $(this).attr("selectid");
			inputselect.val(value);
			$(divselectid+" ul").hide();
		});
		$(document).click(function(){$(divselectid+" ul").hide();});
	};
	$.HUIselect("#divselect","#inputselect");

	/*tab选项卡*/
	jQuery.HUItab =function(tabBar,tabCon,class_name,tabEvent,i){
		var $tab_menu=$(tabBar);
		// 初始化操作
		$tab_menu.removeClass(class_name);
		$(tabBar).eq(i).addClass(class_name);
		$(tabCon).hide();
		$(tabCon).eq(i).show();

		$tab_menu.bind(tabEvent,function(){
			$tab_menu.removeClass(class_name);
			$(this).addClass(class_name);
			var index=$tab_menu.index(this);
			$(tabCon).hide();
			$(tabCon).eq(index).show();
		});
	}
	/*折叠*/
	jQuery.HUIfold = function(obj,obj_c,speed,obj_type,Event){
		if(obj_type == 2){
				$(obj+":first").find("b").html("-");
				$(obj_c+":first").show();
			}
		$(obj).on(Event,function(){
			if($(this).next().is(":visible")){
				if(obj_type == 2){
						return false;
				}else{
					$(this).next().slideUp(speed).end().removeClass("selected");
					$(this).find("b").html("+");

				}
			}
			else{
				if(obj_type == 3){
						$(this).next().slideDown(speed).end().addClass("selected");
						$(this).find("b").html("-");
					}else{
							$(obj_c).slideUp(speed);
							$(obj).removeClass("selected");
							$(obj).find("b").html("+");
							$(this).next().slideDown(speed).end().addClass("selected");
							$(this).find("b").html("-");
						}

			}
		});
	}
	/*全选*/

	/*下拉菜单*/
	$(".dropDown").mouseover(function(){
		$(".dropDown .dropDown-menu").removeAttr("style");
	});
	$(".dropDown_click").click(function(){$(".dropDown").removeClass('open');if($(this).hasClass('open')){$(this).removeClass('open');}else{$(this).addClass('open');} return false});
	$("body").click(function(){$(".dropDown_click").removeClass('open');});
	$(".dropDown-menu li a").click(function(){$(".dropDown_click").removeClass('open');});

	jQuery.Huifold = function(obj,obj_c,speed,obj_type,Event){
	if(obj_type == 2){
		$(obj+":first").find("b").html("-");
		$(obj_c+":first").show();
	}
	$(obj).on(Event,function(){
		if($(this).next().is(":visible")){
			if(obj_type == 2){
				return false;
			}
			else{
				$(this).next().slideUp(speed).end().removeClass("selected");
				$(this).find("b").html("+");
			}
		}
		else{
			if(obj_type == 3){
				$(this).next().slideDown(speed).end().addClass("selected");
				$(this).find("b").html("-");
			}else{
				$(obj_c).slideUp(speed);
				$(obj).removeClass("selected");
				$(obj).find("b").html("+");
				$(this).next().slideDown(speed).end().addClass("selected");
				$(this).find("b").html("-");
			}
		}
	});
}

  	$.Huifold("#qa-list .item h4","#qa-list .item .info","fast",3,"click");
	/*左侧菜单*/
	$(".menu_dropdown dl dt").click(function(){if($(this).parent("dl").hasClass('selected')){$(this).parent("dl").removeClass('selected');}else{$(this).parent("dl").addClass("selected");}});
	/*文本框*/
	$(".placeholder").click(function(){$(this).hide();$(this).parents("p").find(".input_text").focus();});
	/*得到焦点*/
	function inputfocus(obj){if($(obj).val()==""){$(obj).parent().find(".placeholder").hide();}}
	/*失去焦点*/
	function inputblur(obj){if($(obj).val()==""){$(obj).parent().find(".placeholder").show();}}

	/*搜索框*/
	/*搜索框得到焦点*/
	var $searchTxt=$(".searchTxt");
	$searchTxt.focus(function(){
		$(this).addClass("focus")
		if ($(this).val() == "搜索照片、矢量图和插画") {
			$(this).val("");
		}
		//$(".ac_results").show();
		//return false;
	});
	/*搜索框失去焦点*/
	$searchTxt.blur(function() {
		if ($(this).val() == "" && $(this).val()== "搜索照片、矢量图和插画") {
			$(this).removeClass("focus");
			$(this).val("");
		}
	});

	if ($searchTxt.val() != "" && $searchTxt.val() != "搜索照片、矢量图和插画") {
		$searchTxt.addClass("focus");
	}

	function BindEnter(obj){
    	var searchBtn = $("#searchBtn");
    	if(obj.keyCode == 13){searchBtn.click();obj.returnValue = false;}
	}

	$('img[data-src]').load(function(){
		var __this__ = $(this);
		var url = __this__.attr('data-src');
		var src = __this__.attr('src');
		if(url ==''|| url == src){return;}  /*这里判断如果图片实际地址不存在或者已经加载不处理*/
		var img =newImage();//实例化一个图片的对象
		img.src = url;//将要显示的图片加载进来
		if(img.complete)//如果图片已经加载存在浏览器缓存中直接处理
		{
			__this__.attr('src',url);//将要显示的图片替换过来
			return;
		}
		img.onload =function(){//要显示的图片加载完成后做处理
			__this__.attr('src',url);
		}
	});



	/*按钮loading*/
	$('.btn-loading').click(function () {
		var $btn = $(this);
		var loadText = $btn.attr("data-load-title");
		if(loadText==undefined || loadText==""){
			loadText = '提交中...';
		}
		if($(this)[0].tagName=="BUTTON"){
			var btnval = $btn.html();
			$btn.addClass("disabled").html(loadText).attr("disabled","disabled");
		}else{
			var btnval = $btn.val();
			$btn.addClass("disabled").val(loadText).attr("disabled","disabled");
		}
    function loadingEnd(){
      $('input.btn-loading').removeClass("disabled").val().removeAttr("disabled");
      $('button.btn-loading,a.btn-loading').removeClass("disabled").html(btnval).removeAttr("disabled");
    }
	});





	/*返回顶部*/
	var $backToTopTxt="";
	$backToTopEle = $('<a href="javascript:void(0)" class="rightTools toTop">返回顶部</a>').appendTo($("body")).click(function(){$("html, body").animate({ scrollTop: 0 }, 120);}), $backToTopFun = function() {
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();/*IE6下的定位*/
		if(!window.XMLHttpRequest){$backToTopEle.css("top", st + winh - 166);}};
	$(window).bind("scroll", $backToTopFun);
	$backToTopFun();

	/*tag标签*/
	var tags_a = $(".tags a");
	tags_a.each(function(){
		var x = 9;
		var y = 0;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$(this).addClass("tags"+rand);
	});

	/*对联广告*/
	var dual = $(".dual");
	var dual_close = $("a.dual_close");
	var screen_w = screen.width;
	if(screen_w>1024){dual.show();}
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		dual.stop().animate({top:scrollTop+260});
	});
	dual_close.click(function(){
		$(this).parent().hide();
		return false;
	});
	/*资讯详情页 字号变化*/
	$("#fontbig").click(function(){$("#fontSmall").css("color","#0B3B8C");$(this).css("color","#666");$("#cnt_main_article").css("font-size","18px");});
	$("#fontSmall").click(function(){$("#fontbig").css("color","#0B3B8C");$(this).css("color","#666");$("#cnt_main_article").css("font-size","14px");});

	/*隐藏*/
	$(document).on("click",".mask",function(){
		$(this).remove();
		$(".dropBox").hide().removeClass("poplogin");
		$(".dropBox").removeClass("poplogin2");
	});

	$("#flink-logo .rollpicshow").jCarouselLite({
	  auto: 2000, /*自动播放间隔时间*/
	  speed: 500, /*速度*/
	  btnNext:"#flink-logo .next", /*向前滚动*/
	  btnPrev:"#flink-logo .prev", /*向后滚动*/
	  visible:9 /*显示数量*/
	});
	$("#yonghu2 .rollpicshow").jCarouselLite({
	  auto: null, /*自动播放间隔时间*/
	  speed: 500, /*速度*/
	  btnNext:"#yonghu2 .next", /*向前滚动*/
	  btnPrev:"#yonghu2 .prev", /*向后滚动*/
	  visible:3, /*显示数量*/
	  scroll:3,
	});

	$.HUIhover('.picList .item,.favTags li,.vip-select li,#xuke2 .item,.leisiList .imgItem,#xuke3 .item,#xuke3 .item .xuke-col2,#xuke3 .item .xuke-col3,.index-pic-list li,.rollpic,#xuke4 .tb .item');
	$(document).on("hover",".imgList .imgItem",function(){
		$(this).addClass("hover")
		},function(){
		$(this).removeClass("hover")
	});

	$("#btn-nextpage").hover(function(){$(this).removeClass("btn-default").addClass("btn-primary");},function(){$(this).removeClass("btn-primary").addClass("btn-default");});

	$.HUIfold(".coupon .coupon-title",".coupon .coupon-info","fast",3,"click");
	$.HUItab(".gradient_tabs span",".size_form","selected","click","0");
	$.HUItab(".gradient_tabs2 span",".size_form2","selected","click","0");
	$.HUItab(".share-Tabbar li",".share-Tabcon","active","click","0");
	$.HUItab(".Tabbar-fapiao label",".Tabcon-fapiao","selected","click","0");

	/*高度设置*/
	var topbar_h = $(".topbar").height();
	var footer_h = $("footer").height();
	$(window).resize(function(){
	  var _addHeight = $(window).height();
	  $(".mini-Wraper").css({"min-height":_addHeight-topbar_h-footer_h-'376'});

	}).resize();

	$(".xuke-JPEG li").click(function(){
		$(".xuke-JPEG li").removeClass("selected");
		$(this).addClass("selected");
	});
	$(".xuke-TIFF li").click(function(){
		$(".xuke-TIFF li").removeClass("selected");
		$(this).addClass("selected");
	});

	/*Huialert*/
	$.HUIhover('.Huialert .icon-remove');
	$(".Huialert .icon-remove").on("click",function(){
		var Huialert = $(this).parents(".Huialert");
		Huialert.fadeOut("normal",function(){
		  Huialert.remove();
		});
	});

	$.HUIhover(".imgList .imgItem,#qa-list li h4");

});

/*高级筛选*/
//$("#btn-retrieve").on("mousemove",function(){
//	$("#pop-advancedsearch").show();
//	$(document.body).append("<div class=\"mask\"></div>");
//});
/*$(".toggle_wheel").click(function(){
	$(".wheel").toggle();
});
$(".wheel .close_btn").click(function(){
	$(".wheel").hide();
});
$(".swatch .close_btn").click(function(){
	$(".swatch").css("background-color","transparent").hide();
	$("#input-color").val("");
	$(".wheel").hide();
});
$(".wheel img").click(function(){
  $(".swatch").css("background-color","#cc0000").show();
  $("#input-color").val("#cc0000");
});*/

$(".more_people_toggle").click(function(){
	$(".more_people").toggle();
	if($(".more_people").is(":visible")){
		$(this).text("- 减少人物选项");
	}else{
		$(this).text("+ 增加人物选项");
	}
});

function modal_alert(info,speed){
	$("#modal-alert").remove();
	if(speed==0||typeof(speed) == "undefined"){
		if($("#modal-alert").length>0){
			$("#modal-alert .modal-alert-info").html(info);
		}else{
			$(document.body).append(
			'<div id="modal-alert" class="modal hide modal-alert">'+
				'<div class="modal-alert-info">'+info+'</div>'+
				'<div class="modal-footer"> <button class="btn btn-primary radius" onClick="modal_alert_hide()">确定</button></div>'+
			'</div>'
			);
		}
		$("#modal-alert").modal("show");
	}else{
		if($("#modal-alert").length>0){
			$("#modal-alert .modal-alert-info").html(info);
		}else{
			$(document.body).append(
			'<div id="modal-alert" class="modal hide modal-alert">'+
				'<div class="modal-alert-info">'+info+'</div>'+
			'</div>'
			);
		}
		$("#modal-alert").modal("show");
		setTimeout("modal_alert_hide()",speed);
	}
}
function modal_alert_hide() {
	$("#modal-alert").modal("hide").remove();
}
;(function($) {
    $.extend({
        format : function(str, step, splitor) {
            str = str.toString();
            var len = str.length;

            if(len > step) {
                 var l1 = len%step,
                     l2 = parseInt(len/step),
                     arr = [],
                     first = str.substr(0, l1);
                 if(first != '') {
                     arr.push(first);
                 };
                 for(var i=0; i<l2 ; i++) {
                     arr.push(str.substr(l1 + i*step, step));
                 };
                 str = arr.join(splitor);
             };
             return str;
        }
    });
})(jQuery);

!function($) {
	$.Huiloading =  {
		show:function(messages){
			if ($(".loading-wraper").length > 0) {
				$(".loading-wraper").remove();
			}
			if( messages == null ) messages = '';
			var htmlstr = '<div class="loading-wraper"><div class="loading-content"><i class="iconpic iconpic-loading"></i> <span>'+messages+'</span></div></div>';
			$(document.body).append(htmlstr);
			var w = $(".loading-wraper .loading-content").width()+40;
			$(".loading-wraper .loading-content").css({
				"margin-left":-(w/2)+"px",
			});
		},
		hide:function(){
			$(".loading-wraper").remove();
		}
	}
} (window.jQuery);

!function ($) {
	$.fn.Huimodalalert = function (options, callback) {
		var defaults = {
			btn: ['确定'],
			content:'弹窗内容',
			speed: "0",
			area: ['400', 'auto'],
		};
		var options = $.extend(defaults, options);
		this.each(function () {
			var that = $(this);
			var w= 0,h=0,t=0,l=0;
			if (options.area[0]=='auto'){
				w ='400px';
				l = -(400 / 2) + 'px';
			}else{
				w = options.area[0] + 'px';
				l = -(options.area[0] / 2) + 'px';
			}
			if (options.area[1] == 'auto') {
				h = 'auto';
			} else {
				h = options.area[1] + 'px';
			}


			var htmlstr =
				'<div id="Huimodalalert" class="modal hide modal-alert radius" style="width:' + w + ';height:' + h + ';margin-left:' + l +'">' +
				'<div class="modal-alert-info">' + options.content + '</div>' +
				'<div class="modal-footer">'+
					'<button class="btn btn-primary radius">' + options.btn[0]+'</button>'+
				'</div>' +
			'</div>'+
			'<div id="Huimodalmask" class="Huimodalmask"></div>';

			if ($("#Huimodalalert").length > 0) {
				$("#Huimodalalert,#Huimodalmask").remove();
			}
			if (options.speed!=0){
				$(document.body).addClass("page-overflow").append(htmlstr);
				$("#Huimodalalert").find(".modal-footer").remove();
				$("#Huimodalalert").fadeIn();
				setTimeout(function () {
					$("#Huimodalalert").fadeOut("normal", function () {
						huimodalhide();
					});
				}, options.speed);

			}else{
				$(document.body).addClass("page-overflow").append(htmlstr);
				$("#Huimodalalert").fadeIn();
			}

			var button = that.find(".modal-footer .btn");
			button.on("click",function(){
				$("#Huimodalalert").fadeOut("normal", function () {
					huimodalhide();
				});
			});

			function huimodalhide(){
				$("#Huimodalalert,#Huimodalmask").remove();
				$(document.body).removeClass("page-overflow");
				if (callback) {
					callback();
				}
			}
		});
	}
}(window.jQuery);

/*获取操作系统版本*/
function detectOS() {
	var sUserAgent = navigator.userAgent;
	var isWin = (navigator.platform == "Win32") || (navigator.platform == "Win64") || (navigator.platform == "Windows");
	var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
	var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
	var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
	var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
	if (isMac) {
		$("body").addClass("mac");
	}
	if (isUnix) {
		$("body").addClass("unix");
	}
	if (isLinux) {
		if (bIsAndroid) {
			$("body").addClass("android");
		}
		else {
			$("body").addClass("linux");
		}
	}
	if (isWin) {
		$("body").addClass("win");
	}
}
$(function(){
	detectOS();
});

/* =======================================================================
 * Bootstrap.transition.js v3.3.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function ($) {
	'use strict';
	function transitionEnd() {
		var el = document.createElement('bootstrap');
		var transEndEventNames = {
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'transitionend',
			OTransition: 'oTransitionEnd otransitionend',
			transition: 'transitionend'
		}
		for (var name in transEndEventNames) {
			if (el.style[name] !== undefined) {
				return { end: transEndEventNames[name] }
			}
		}
		return false // explicit for ie8 (  ._.)
	}
	// http://blog.alexmaccaw.com/css-transitions
	$.fn.emulateTransitionEnd = function (duration) {
		var called = false;
		var $el = this;
		$(this).one('bsTransitionEnd', function () { called = true })
		var callback = function () {
			if (!called) $($el).trigger($.support.transition.end)
		}
		setTimeout(callback, duration);
		return this;
	}
	$(function () {
		$.support.transition = transitionEnd();
		if (!$.support.transition) return;
		$.event.special.bsTransitionEnd = {
			bindType: $.support.transition.end,
			delegateType: $.support.transition.end,
			handle: function (e) {
				if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
			}
		}
	})
}(window.jQuery);
/* =======================================================================
 * Bootstrap.tooltip.js v3.3.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function ($) {
	'use strict';

	// TOOLTIP PUBLIC CLASS DEFINITION
	// ===============================
	var Tooltip = function (element, options) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
		this.init('tooltip', element, options);
	}

	Tooltip.VERSION = '3.3.0';
	Tooltip.TRANSITION_DURATION = 150;

	Tooltip.DEFAULTS = {
		animation: true,
		placement: 'top',
		selector: false,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: 'hover focus',
		title: '',
		delay: 0,
		html: false,
		container: false,
		viewport: {
			selector: 'body',
			padding: 0
		}
	}

	Tooltip.prototype.init = function (type, element, options) {
		this.enabled = true;
		this.type = type;
		this.$element = $(element);
		this.options = this.getOptions(options);
		this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);

		var triggers = this.options.trigger.split(' ');
		for (var i = triggers.length; i--;) {
			var trigger = triggers[i];
			if (trigger == 'click') {
				this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
			} else if (trigger != 'manual') {
				var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
				var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
				this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
				this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
			}
		}

		this.options.selector ? (this._options = $.extend({},
			this.options, {
				trigger: 'manual',
				selector: ''
			})) : this.fixTitle()
	}

	Tooltip.prototype.getDefaults = function () {
		return Tooltip.DEFAULTS;
	}

	Tooltip.prototype.getOptions = function (options) {
		options = $.extend({},
			this.getDefaults(), this.$element.data(), options);
		if (options.delay && typeof options.delay == 'number') {
			options.delay = {
				show: options.delay,
				hide: options.delay
			}
		}
		return options;
	}

	Tooltip.prototype.getDelegateOptions = function () {
		var options = {}
		var defaults = this.getDefaults()

		this._options && $.each(this._options,
			function (key, value) {
				if (defaults[key] != value) options[key] = value;
			})

		return options;
	}

	Tooltip.prototype.enter = function (obj) {
		var self = obj instanceof this.constructor ?
			obj : $(obj.currentTarget).data('bs.' + this.type);

		if (self && self.$tip && self.$tip.is(':visible')) {
			self.hoverState = 'in';
			return;
		}

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data('bs.' + this.type, self);
		}

		clearTimeout(self.timeout);
		self.hoverState = 'in';
		if (!self.options.delay || !self.options.delay.show) return self.show()

		self.timeout = setTimeout(function () {
			if (self.hoverState == 'in') self.show();
		},
			self.options.delay.show);
	}

	Tooltip.prototype.leave = function (obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data('bs.' + this.type, self);
		}
		clearTimeout(self.timeout);
		self.hoverState = 'out';

		if (!self.options.delay || !self.options.delay.hide) return self.hide();
		self.timeout = setTimeout(function () {


			if (self.hoverState == 'out') self.hide();
		},
			self.options.delay.hide);
	}

	Tooltip.prototype.show = function () {
		var e = $.Event('show.bs.' + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);

			var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !inDom) return;
			var that = this;
			var $tip = this.tip();
			var tipId = this.getUID(this.type);

			this.setContent();
			$tip.attr('id', tipId);
			this.$element.attr('aria-describedby', tipId);

			if (this.options.animation) $tip.addClass('fade');

			var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

			var autoToken = /\s?auto?\s?/i;
			var autoPlace = autoToken.test(placement);
			if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

			$tip.detach().css({
				top: 0,
				left: 0,
				display: 'block'
			}).addClass(placement).data('bs.' + this.type, this);

			this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
			var pos = this.getPosition();
			var actualWidth = $tip[0].offsetWidth;
			var actualHeight = $tip[0].offsetHeight;

			if (autoPlace) {
				var orgPlacement = placement;
				var $container = this.options.container ? $(this.options.container) : this.$element.parent();
				var containerDim = this.getPosition($container);

				placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < containerDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > containerDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < containerDim.left ? 'right' : placement
				$tip.removeClass(orgPlacement).addClass(placement);
			}

			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
			this.applyPlacement(calculatedOffset, placement);
			var complete = function () {
				var prevHoverState = that.hoverState;
				that.$element.trigger('shown.bs.' + that.type);
				that.hoverState = null;
				if (prevHoverState == 'out') that.leave(that);
			}

			$.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete()
		}
	}

	Tooltip.prototype.applyPlacement = function (offset, placement) {
		var $tip = this.tip();
		var width = $tip[0].offsetWidth;
		var height = $tip[0].offsetHeight;

		// manually read margins because getBoundingClientRect includes difference
		var marginTop = parseInt($tip.css('margin-top'), 10);
		var marginLeft = parseInt($tip.css('margin-left'), 10);

		// we must check for NaN for ie 8/9
		if (isNaN(marginTop)) marginTop = 0;
		if (isNaN(marginLeft)) marginLeft = 0;

		offset.top = offset.top + marginTop;
		offset.left = offset.left + marginLeft;

		// $.fn.offset doesn't round pixel values
		// so we use setOffset directly with our own function B-0
		$.offset.setOffset($tip[0], $.extend({
			using: function (props) {
				$tip.css({
					top: Math.round(props.top),
					left: Math.round(props.left)
				})
			}
		},
			offset), 0);

		$tip.addClass('in');

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth = $tip[0].offsetWidth;
		var actualHeight = $tip[0].offsetHeight;

		if (placement == 'top' && actualHeight != height) {
			offset.top = offset.top + height - actualHeight;
		}

		var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

		if (delta.left) offset.left += delta.left;
		else offset.top += delta.top;

		var isVertical = /top|bottom/.test(placement);
		var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
		var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

		$tip.offset(offset);
		this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	}

	Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
		this.arrow().css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isHorizontal ? 'top' : 'left', '');
	}

	Tooltip.prototype.setContent = function () {
		var $tip = this.tip();
		var title = this.getTitle();
		$tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
		$tip.removeClass('fade in top bottom left right');
	}

	Tooltip.prototype.hide = function (callback) {
		var that = this;
		var $tip = this.tip();
		var e = $.Event('hide.bs.' + this.type);
		function complete() {
			if (that.hoverState != 'in') $tip.detach();
			that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
			callback && callback();
		}
		this.$element.trigger(e);
		if (e.isDefaultPrevented()) return;
		$tip.removeClass('in');

		$.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
		this.hoverState = null;
		return this;
	}

	Tooltip.prototype.fixTitle = function () {
		var $e = this.$element
		if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
			$e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
		}
	}

	Tooltip.prototype.hasContent = function () {
		return this.getTitle();
	}

	Tooltip.prototype.getPosition = function ($element) {
		$element = $element || this.$element;
		var el = $element[0];
		var isBody = el.tagName == 'BODY';
		var elRect = el.getBoundingClientRect();
		if (elRect.width == null) {
			// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
			elRect = $.extend({},
				elRect, {
					width: elRect.right - elRect.left,
					height: elRect.bottom - elRect.top
				});
		}
		var elOffset = isBody ? {
			top: 0,
			left: 0
		} : $element.offset();
		var scroll = {
			scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
		}
		var outerDims = isBody ? {
			width: $(window).width(),
			height: $(window).height()
		} : null
		return $.extend({},
			elRect, scroll, outerDims, elOffset)
	}

	Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
		return placement == 'bottom' ? {
			top: pos.top + pos.height,
			left: pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'top' ? {
			top: pos.top - actualHeight,
			left: pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'left' ? {
			top: pos.top + pos.height / 2 - actualHeight / 2,
			left: pos.left - actualWidth
		} :
					/* placement == 'right' */
					{
						top: pos.top + pos.height / 2 - actualHeight / 2,
						left: pos.left + pos.width
					}

	}

	Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
		var delta = {
			top: 0,
			left: 0
		}
		if (!this.$viewport) return delta;

		var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
		var viewportDimensions = this.getPosition(this.$viewport);

		if (/right|left/.test(placement)) {
			var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
			var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
			if (topEdgeOffset < viewportDimensions.top) { // top overflow
				delta.top = viewportDimensions.top - topEdgeOffset;
			} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
				delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
			}
		} else {
			var leftEdgeOffset = pos.left - viewportPadding;
			var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
			if (leftEdgeOffset < viewportDimensions.left) { // left overflow
				delta.left = viewportDimensions.left - leftEdgeOffset;
			} else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
				delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
			}
		}
		return delta
	}

	Tooltip.prototype.getTitle = function () {
		var title;
		var $e = this.$element;
		var o = this.options;
		title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
		return title;
	}

	Tooltip.prototype.getUID = function (prefix) {
		do prefix += ~~(Math.random() * 1000000);
		while (document.getElementById(prefix));
		return prefix;
	}

	Tooltip.prototype.tip = function () {
		return (this.$tip = this.$tip || $(this.options.template));
	}

	Tooltip.prototype.arrow = function () {
		return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
	}

	Tooltip.prototype.enable = function () {
		this.enabled = true;
	}

	Tooltip.prototype.disable = function () {
		this.enabled = false;
	}

	Tooltip.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}

	Tooltip.prototype.toggle = function (e) {
		var self = this;
		if (e) {
			self = $(e.currentTarget).data('bs.' + this.type);
			if (!self) {
				self = new this.constructor(e.currentTarget, this.getDelegateOptions());
				$(e.currentTarget).data('bs.' + this.type, self);
			}
		}
		self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	}

	Tooltip.prototype.destroy = function () {
		var that = this;
		clearTimeout(this.timeout);
		this.hide(function () {
			that.$element.off('.' + that.type).removeData('bs.' + that.type);
		});
	}

	// TOOLTIP PLUGIN DEFINITION
	// =========================
	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('bs.tooltip');
			var options = typeof option == 'object' && option;
			var selector = options && options.selector;

			if (!data && option == 'destroy') return;
			if (selector) {
				if (!data) $this.data('bs.tooltip', (data = {}));
				if (!data[selector]) data[selector] = new Tooltip(this, options);
			} else {
				if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)));
			}
			if (typeof option == 'string') data[option]()
		})
	}

	var old = $.fn.tooltip;
	$.fn.tooltip = Plugin;
	$.fn.tooltip.Constructor = Tooltip;
	// TOOLTIP NO CONFLICT
	// ===================
	$.fn.tooltip.noConflict = function () {
		$.fn.tooltip = old;
		return this;
	}
}(window.jQuery);
function tooltipLoad(){
	$("[data-toggle='tooltip']").tooltip();
}
function imgLazyload(){
	$("img.lazyload").lazyload({ effect: "fadeIn" }).removeClass("lazyload");
}
$(function () {
	tooltipLoad();
});


/*Confirm对话框*/
(function () {
	$.MsgBox = {
		Alert: function (title, msg) {
			GenerateHtml("alert", title, msg);
			btnOk(); //alert只是弹出消息，因此没必要用到回调函数callback
		},
		Confirm: function (title, msg, callback) {
			GenerateHtml("confirm", title, msg);
			btnOk(callback);
			btnNo();
		}
	}
	var GenerateHtml = function (type, title, msg){
		$("#modal-alert2").remove();
		$(document.body).append(
		'<div id="modal-alert2" class="modal hide modal-alert radius fade">'+
			'<div class="modal-header"><a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();"></a>'+
				'<h3>'+title+'</h3>'+
			'</div>'+
			'<div class="modal-alert-info">'+msg+'</div>'+
			'<div class="modal-footer">'+
				'<button id="modal-btn-ok" class="btn btn-primary btn-mini radius">确定</button> <button class="btn btn-default btn-mini radius ml-40"id="modal-btn-cancel">取消</button>'+
			'</div>'+
		'</div>');
		$("#modal-alert2").modal({show:true,backdrop: false});
	}
	var btnOk = function (callback) {
		$("#modal-btn-ok").click(function () {
			$("#modal-alert2").modal("hide");
			if (typeof (callback) == 'function') {
				callback();
			}
		});
	}
	var btnNo = function () {
		$("#modal-btn-cancel").click(function(){
			$("#modal-alert2").modal("hide");
			//$(".modal-scrollable").remove();
		});
	}
})();
