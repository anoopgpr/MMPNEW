$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var backstore ="";
var lastattemptpage='';

var deviceType = '';



var json_fb='https://taghash.co/mloyalApps/facebookcafewanderlust.php';
var RSS_twitter='https://taghash.co/mloyalApps/twitter.php?uname=cafewanderlust';
var RSS_pinterest='https://103.25.128.61/projects/taghash/mloyalApps/pinteresttantra.php?brand=cafewanderlust';
var RSS_instagram='https://www.instagram.com/hyundaiindia/?__a=1';
var RSS_youtube='https://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=cafewanderlust';
var RSS_tumblr='https://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=https://cafewanderlust.tumblr.com';

var brandname='hyundai';
var aboutus_det='Hyundai';
var brand_url='https://www.hyundai.com/in/en';
var cart = { cartdata: []};
var indexary= []; //new Array(); Changed By Ajay Kumar
var ids = [];
var cityarr= []; //new Array(); Changed By Ajay Kumar
var cityidarr=[];  //new Array(); Changed By Ajay Kumar
var globalcatid ='';
var isCTBexist = false;
var isMMPexist = false;
var iosid='';
var androidid='';
var client_id='hyundaimmp';
var client_sec='Passions@1972';
var authvar='';
user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"email":"",
	"dob":"",
	"latitude_hyn":"",
	"longitude_hyn":"",
};


/*
var SERVER = "https://mmpdev.hyundai.co.in/autoever/m/";
var SERVER1 = "https://mmpdev.hyundai.co.in/autoever/";
var GDMSSERVER = "https://bizsupport.hmil.net:9444/hmiwsTest/ew/mmp/";
var REWARDSERVER = "https://mmpdev.hyundai.co.in/autoever/Rewards/";
var CTBSERVER = "https://uatclicktobuy.hyundai.co.in/ctb/customer";
var TNCURL = "https://mmpdev.hyundai.co.in/autoever/tnc/";

*/









var SERVER = "http://localhost:8086/https://mmpdev.hyundai.co.in/autoever/m/";
var SERVER1 = "http://localhost:8086/https://mmpdev.hyundai.co.in/autoever/";
var GDMSSERVER = "http://localhost:8086/https://bizsupport.hmil.net:9444/hmiwsTest/ew/mmp/";
var REWARDSERVER = "http://localhost:8086/https://mmpdev.hyundai.co.in/autoever/Rewards/";
var CTBSERVER = "http://localhost:8086/https://uatclicktobuy.hyundai.co.in/ctb/customer";


var TNCURL = "https://mmpdev.hyundai.co.in/autoever/tnc/";







var imgSERVER = "https://mmpdev.hyundai.co.in/autoever/";

var uploadURL = "https://taghash.co/hyundai/";
       
$(document).ready(function(event){	
	
	document.getElementById("ncount_home").innerHTML = '';
	document.getElementById("ncount_vehicle").innerHTML= '';
	document.getElementById("ncount_faq").innerHTML= '';
	document.getElementById("ncount_partner").innerHTML= '';
	document.getElementById("ncount_query").innerHTML= '';
	document.getElementById("ncount_special").innerHTML= '';
	document.getElementById("ncount_rewardbrand").innerHTML= '';
	document.getElementById("ncount_rewardcoupon").innerHTML= '';
	
	
var encodedclient_id = btoa(client_id);
var encodedclient_sec = btoa(client_sec);
console.log(encodedclient_id); // Outputs: "SGVsbG8gV29ybGQh"
console.log(encodedclient_sec); // Outputs: "SGVsbG8gV29ybGQh"

var decodedStringid = atob(encodedclient_id);
console.log(decodedStringid); // Outputs: "Hello World!"

var decodedStringpass = atob(encodedclient_sec);
console.log(decodedStringpass); // Outputs: "Hello World!"




	showGeolocation();
	deviceType=(navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
	
	
	if(localStorage.getItem("guide")!="true") {
		//alert("265");
		//return;
		
		setTimeout(function(){
		$("#homepage").append("<div class='guide_block'><a href='#' id='g8' class='guide_btn'>Got it!</a></div>");
		$("#homepage .guide_block").addClass("guide_main");
	}, 1000);
	
		$(document).on("click", "#g8", function(e){
				//alert("dhj");
				e.preventDefault();
				$("#homepage .guide_block").remove();
				localStorage.setItem("guide", "true");
			});
	}	
	
	else {
		$("#homepage .guide_block").removeClass("guide_main");		
	}
		
	//$(document).on("pageshow", "#homepage", function(){
		//alert("ofh");
			setTimeout(function(){
			var _owl2 = $(".home_banner");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},1000);
	//});
	
	
	//console.log(localStorage.animation);
	//if(localStorage.animation){  Commented By Ajay on 280420
//		$(".init_animate").removeClass("start_animation");
//		//$(".login_header, .ui-content, .footer_login").removeClass("fadeIn");
//		$(".init_animate").css({ "display" : "none"});
//	}
	
	
	
	if(window.localStorage.mode == "dark") 
		{
			$("#changeMode").attr('href', 'css/dark.css');
			$(".logo img").attr("src", "images/logo_white.png");
			$(".toggle_text").html('<img src="images/Night-blue.png" class="img-responsive" alt="">');
			$(".toggle_text1").html('<img src="images/day-grey.png" class="img-responsive" alt="">');
			$("input[name='c_mode']").prop('checked', true);
		}
		else 
		{
			$("#changeMode").attr('href', 'css/light.css');
			$(".logo img").attr("src", "images/logo_blue.png");
			$(".toggle_text").html('<img src="images/night-grey.png" class="img-responsive" alt="">');
			$(".toggle_text1").html('<img src="images/day-blue.png" class="img-responsive" alt="">');
			$("input[name='c_mode']").prop('checked', false);
		}
	/*
	$(document).on("focus", ".login_input input", function(){
		$(".footer_login").fadeOut();
	})
	
	$(document).on("blur", ".login_input input", function(){
		$(".footer_login").fadeIn();
	})*/
	

				$(document).on("change", "input[name='c_mode']", function(e){
					
					e.preventDefault();
					
					if(!$(this).is(":checked")){
						window.localStorage.setItem("mode", "light");
					}
					else {
						window.localStorage.setItem("mode", "dark");
					}
					
					if(window.localStorage.mode == "light") {
						$("#changeMode").attr('href', 'css/light.css');
						$(".logo img").attr("src", "images/logo_blue.png");
						$(".toggle_text").html('<img src="images/night-grey.png" class="img-responsive" alt="">');
						$(".toggle_text1").html('<img src="images/day-blue.png" class="img-responsive" alt="">');
						$("input[name='c_mode']").prop('checked', false);
						
					}
					else {
						$("#changeMode").attr('href', 'css/dark.css');
						$(".logo img").attr("src", "images/logo_white.png");
						$(".toggle_text").html('<img src="images/Night-blue.png" class="img-responsive" alt="">');
						$(".toggle_text1").html('<img src="images/day-grey.png" class="img-responsive" alt="">');
						$("input[name='c_mode']").prop('checked', true);
					}
					});
			
                $( function() {
					 $( "#popupNested1" ).enhanceWithin().popup();
				});

                $("#wait").css("display","none"); // hide it initially
				
                 $(document).ajaxStart(function() {
                       $("#wait").css("display","block");
                    });
				  
                 $(document).ajaxStop(function() {
                       $("#wait").css("display","none");
                    });
                 loadAllStates();
                 
				 document.addEventListener("backbutton", function(e){
						if($.mobile.activePage.is('#myaccount') || $.mobile.activePage.is('#page-forgot-password')){
							navigator.app.exitApp();
						}
			   if($.mobile.activePage.is('#homepage')){
				   e.preventDefault();
				   var x;
					if (confirm("Are you sure you want to exit?") == true) {
						x = "Yes";
						navigator.app.exitApp();
					} else {
						x = "No";
					}
				   
			   }
			   else if($.mobile.activePage.is('#reward-coupon')){
							showrewardspage();
				}
			  else if($.mobile.activePage.is('#reward-brand') || $.mobile.activePage.is('#profile')  || $.mobile.activePage.is('#faqs')){
							showHome1();
				}
				 else if($.mobile.activePage.is('#querypage')){
							$.mobile.changePage('#faqs');
				}
				 else if($.mobile.activePage.is('#notification')){
							$.mobile.changePage('#homepage');
				}

			   else {

				   navigator.app.backHistory();
			   }
			}, false);
				 if(localStorage.getItem("seennotification")!=null && localStorage.getItem("seennotification")!='')
				 {
				 document.getElementById("ncount_home").innerHTML= '<span class="noti_active"></span>' ;
				 document.getElementById("ncount_vehicle").innerHTML= '<span class="noti_active"></span>';
				 document.getElementById("ncount_faq").innerHTML= '<span class="noti_active"></span>';
				 document.getElementById("ncount_partner").innerHTML= '<span class="noti_active"></span>';
				 document.getElementById("ncount_query").innerHTML= '<span class="noti_active"></span>';
				 document.getElementById("ncount_special").innerHTML= '<span class="noti_active"></span>';
				 document.getElementById("ncount_rewardbrand").innerHTML= '<span class="noti_active"></span>';
				 document.getElementById("ncount_rewardcoupon").innerHTML= '<span class="noti_active"></span>';
				}
			
                 //getContacts();
                  if(localStorage.getItem("usernamehyundai")!=null && localStorage.getItem("usernamehyundai")!='' && localStorage.getItem("passwordhyundai")!=null && localStorage.getItem("passwordhyundai")!='')
                    {
                    		var uname = user.mobile;
							user.balance = localStorage.getItem('balance');
							user.firstname = localStorage.getItem('firstname');
							user.lastname = localStorage.getItem('lastname');
							user.id = localStorage.getItem('id');
							user.total = localStorage.getItem('total');
							user.validity = localStorage.getItem('validity');
							user.trans_sms = localStorage.getItem('trans_sms');
							user.mktgsms = localStorage.getItem('mktgsms');
							user.cpns = localStorage.getItem('cpns');
							user.ads = localStorage.getItem('ads');
							user.dob = localStorage.getItem('dob');
							user.emailid = localStorage.getItem('emailid');
							user.def_store = localStorage.getItem('def_store');
							user.def_city = localStorage.getItem('def_city');
							user.visit_frequency = localStorage.getItem('visit_frequency');
							   console.log(" in ready");
                              // alert(user.firstname);
                            if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
                            {
                                user.firstname = '';
                            }
                        if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
                                user.lastname = '';
                        if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
                                user.emailid = '';
                        if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
                                user.dob = '';
                        if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
                                user.mobile = '';
                           // alert(user.firstname);
                            $('#update_firstname').val(user.firstname);
                            $('#update_lastname').val(user.lastname);
                                var dob = user.dob.split('-');
                                var mm = dob.length == 3 ? dob[1] : '';
                                var dd = dob.length == 3 ? dob[0] : '';
                                var yyyy = dob.length == 3 ? dob[2] : '';
                                
                                $('#update_dd').val(dd);
                                $('#update_mm').val(mm);
                                $('#update_yyyy').val(yyyy);

                                console.log(yyyy);


                            $('#update_email').val(user.emailid);
                            $('#update_dob').val(yyyy+'-'+mm+'-'+dd);
                            $('#update_firstname1').val(user.firstname);
                            $('#update_lastname1').val(user.lastname);
                            
                            $('#update_email1').val(user.emailid);
                            $('#update_dob1').val(user.dob);

    
                            //document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
                            //document.getElementById("profilepts").innerHTML=user.total+' Points';
                            document.getElementById("profilenm1").innerHTML= 'Hey ' +user.firstname+'!';
                            //document.getElementById("profilepts1").innerHTML=user.total+' points';
                            
                             $("#wait").css("display","none");
                             if(localStorage.getItem("profiledone_hyundai") == "true")
                    		{
	                            $('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	                            $('#forgot_pass').val(localStorage.getItem("passwordhyundai"));
								user.mobile = localStorage.getItem('usernamehyundai');
								var pwd = localStorage.getItem('passwordhyundai');
								authenticate(user.mobile,pwd,'registered-user');
						    }
						    else
						    {
						    	$('#username').val(localStorage.getItem("usernamehyundai"));
	                            $('#password_myacc').val(localStorage.getItem("passwordhyundai"));
								user.mobile = localStorage.getItem('usernamehyundai');
								var pwd = localStorage.getItem('passwordhyundai');
								if(pwd.length>=4)
							       {
							       var i=4;
							       while(i>0)
							                  {
							                    $('#dealercodeBox'+i).val(parseInt(pwd%10));
							                    i--;
							                    pwd = parseInt(pwd/10);
							                    
							                  }
							        }
							        authenticate(user.mobile,pwd,'myaccount');
						    }
                             
                         /* if(imageExists('http://103.25.128.61/projects/mloyalfileupload/uploads/hyundai_'+localStorage.getItem("usernamehyundai")+'.jpg'))
                          {
                              document.getElementById("cardImagemenu").src='http://103.25.128.61/projects/mloyalfileupload/uploads/cafewanderlust_'+localStorage.getItem("usernamehyundai")+'.jpg';
                          }*/                     
                     }
				   else if(localStorage.getItem("usernamehyundai")!=null && localStorage.getItem("usernamehyundai")!='' && (localStorage.getItem("passwordhyundai")==null || localStorage.getItem("passwordhyundai")=='')) 
	                 {
	                 		
	                 		$('#username').val(localStorage.getItem("usernamehyundai"));
							$.mobile.changePage( "#myaccount", { transition: "none"} );
	                 }
				   else
					  {

					  	
						$.mobile.changePage( "#gifslider", { transition: "none"} );
						//$.mobile.changePage( "#homepage", { transition: "none"} );

					  }
	
	
	 $(".scroll").pullToRefresh({
      	       			refresh:200
        				})
       					 .on("refresh.pulltorefresh", function (){
            			showNotification();
        				});




       		 
	
});

function exittheapp()
{
 navigator.app.exitApp();
}


function checkNull(str)
{
	if(str==null)
		str='';

}
function getAppIds()
{
	$.ajax({
		    url: SERVER1+'mapp/cont1.json',
		    type: 'GET',
		    timeout: 50000,
		    async:false,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {

		    	//data=JSON.parse(data);

		    	iosid=data[0].ios;
		    	androidid=data[0].android;

		    	if(iosid!='')
		    	localStorage.setItem('iosid',iosid);
		        if(androidid!='')
		    	localStorage.setItem('androidid',androidid);

		    	
		    	console.log('iosid'+iosid);
		    	console.log('androidid'+androidid);

                


		  		
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {

		    	console.log('textStatus'+textStatus);
		 
		    }
		  });

}

function resendotpnew()
{


 if($('#username').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                $('#username').focus();
                $('#username').scrollIntoView();
        }
     else
     {
	$.ajax({
				url: SERVER+'forgot_pswd.asp',
				type: 'GET',
				timeout: 30000,
				data: {'mobileno': $('#username').val()},
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.toLowerCase()=='success'){
					 //startWatch();
					 console.log("In forgot_pswd.asp");
					 $('#login-msg').html('The  passcode has been sent to your mobile.Please check your SMS.');
				  
					  localStorage.setItem("SMSMNO",$('#username').val());
					 
				      $('#username').val($('#username').val());
					  localStorage.setItem('usernamehyundai',$('#username').val());
					 
					  $.mobile.changePage("#myaccount");
		  
	              }
				  else{
					 $('#forgot-msg').html(mob+' is not registered, please try again.');
					 $('#forgot_mobile').val('');
				 }
	                    
				 },
				error: function(xhr, textStatus, errorThrown) {
					 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
					}
				});
}
	
}

 $(document).on('pageinit', '#page-forgot-password', function (event, ui) {

// 	UXCam.tagScreenName("OTP Genereated");  
/*
try{
 	UXCam.tagScreenName("OTP Genereated");  
	 UXCam.logEvent("OTP Genereated", "OTP Genereated");
	}
	catch(err)
	{

	}

*/
//IRoot.isRooted(function (){ document.getElementById("rootedmsg").innerHTML = 'Application will not work on rooted device!'; $('#rooted').popup("open");}, function (){

	 localStorage.setItem("firsttime","Yes"); 
 
  $(document).on('tap', '#forgot_button', function (e, ui) {
	 e.preventDefault();
	 e.stopPropagation();
	 var vin = $('#forgot_vehicle').val();
	 var mob = $('#forgot_mobile').val();
	 var firstelem = mob.charAt(0);
	
	 if($('#forgot_vehicle').val().trim()=='')
        {
                toast('VIN No cannot be blank');
                $('#forgot_vehicle').focus();
                $('#forgot_vehicle').scrollIntoView();
        }
      else if($('#forgot_vehicle').val().trim().length<17)
        {
                toast('Not a valid VIN No');
                $('#forgot_vehicle').val('');
                $('#forgot_vehicle').focus();
                $('#forgot_vehicle').scrollIntoView();
        }
	else if($('#forgot_mobile').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                $('#forgot_mobile').focus();
                $('#forgot_mobile').scrollIntoView();
        }
     else if(parseInt(firstelem)<6 || $('#forgot_mobile').val().trim().length<10)
        {
                toast('Not a valid Mobile No');
                $('#forgot_mobile').val('');
                $('#forgot_mobile').focus();
                $('#forgot_mobile').scrollIntoView();
        }
	 else
	 	{
		  //isCTBexist = checkcustomerexists(mob);
		//  isMMPexist = checkcustomerexists_mmp(mob,vin);
		  localStorage.setItem('vinno',vin);
		  //$("#wait").css("display","block");
		  //https://mmpdev.hyundai.co.in/autoever/apis/check_member_registration_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o20&mobileno=9818747077&vinNumber=xxx
		  
		  $.ajax({
        url: CTBSERVER+'/exists.ctb',
        type: 'POST',
        timeout: 50000,
        dataType: 'json',
        
        data:JSON.stringify({'mobile': mob}),
          beforeSend  : function() {
                  $("#wait").css("display","block");
                  
                 //$("#wait").show();


            },
            complete: function() {
                 //$("#wait").hide();

               $("#wait").css("display","none");
            },
		  
        success: function(data, textStatus, xhr) {
        console.log('data in checkcustomerexistsddddddddddddddd'+JSON.stringify(data.dataVO[0].message));
       
       if(data.dataVO[0].message=='Mobile no. already exists.')
       {
          isCTBexist= true;
          $('#userpassdiv').css('display','none');
        //$('#update_password').val(localStorage.getItem("profile_pwd"));
          //toast('You are already registered. Please login with your credentials');
          $('#forgot_user').val(mob);
          //$.mobile.changePage("#registered-user");
		   
		   var str ='';
		  // str += '<div class="h_logo"><img src="images/logo_white.png" class="img-responsive" /></div>';
		   str += 'You are already registered. Please login with your credentials';
		   
          document.getElementById("loginbody").innerHTML = str;
          $('#loginpop').popup("open");


       }
       else
       {
          isCTBexist= false;
          $('#userpassdiv').css('display','block'); 
          	 $.ajax({
			url: SERVER1+'apis/check_member_registration_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
			
			data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': mob,'vinNumber':vin},
			success: function(data, textStatus, xhr) {
			 console.log(data.data);
			 //console.log(textStatus);
			if(data.error=='Member not registered.' || data.data=='Member registered but vehicle not registered')
			 {
			 	isMMPexist= false;	
			 	$.mobile.changePage("#myaccount");
		   
			 	$.ajax({
				url: SERVER+'forgot_pswd.asp',
				type: 'GET',
				timeout: 30000,
				data: {'mobileno': mob},
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.toLowerCase()=='success'){
					 //startWatch();
					 console.log("In forgot_pswd.asp");
					 $('#login-msg').html('The  passcode has been sent to your mobile.Please check your SMS.');
				  
					  localStorage.setItem("SMSMNO",mob);
					 
				      $('#username').val(mob);
					  localStorage.setItem('usernamehyundai',mob);
					 
					  $.mobile.changePage("#myaccount");
		  
	              }
				  else{
					 $('#forgot-msg').html(mob+' is not registered, please try again.');
					 $('#forgot_mobile').val('');
				 }
	                    
				 },
				error: function(xhr, textStatus, errorThrown) {
					 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
					}
				});
	
			 }
			else
			{
				isMMPexist= true;

				$.mobile.changePage("#registered-user");
			}
		    },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
			});
  			}

  			console.log('First'+isCTBexist);
        },
        error: function(xhr, textStatus, errorThrown) {
     
        }
      });

		    
  		}   
// });
 

    }



)



  
});


$(document).on('pageinit', '#myaccount', function (event, ui) {

		//receivedEvent('deviceready');
		/*
		try{
UXCam.tagScreenName(" Login Button");  
	 UXCam.logEvent("Login Button", "Login Button");

	 }
	catch(err)
	{
		
	}
*/

		

		  
        $(document).on('tap', '#login_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		
		//authenticate();
		var user = $('#username').val();
	    var pwd = $('#forgot_token').val();
		authenticate(user,pwd,'myaccount');

	});
});

function hideloader()
{
	try{
	var pop = document.getElementById('wait');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    }catch(err){}
}

$(document).on('pageinit', '#homepage', function (event, ui) {	
	//$("#homepage .loginreg, #homepage .header, #homepage .footer_login, #homepage .quote").css("opacity", 0);
	//alert("adfjhjdhf");
	//$(".init_animate").addClass("start_animation");
	
		//localStorage.setItem("animation", "true");
	setTimeout(function(){
		
		//$("#homepage .loginreg, #homepage .header, #homepage .footer_login, #homepage .quote").css("opacity", 1);
	},500)
/*
	var anim = localStorage.getItem("animation");
	if(typeof anim == "undefined" || anim == null)
		anim ="false";
	if(anim =="false") {*/
		//setTimeout(function(){
//			$(".init_animate").removeClass("start_animation");
//			$(".login_header, .ui-content, .footer_login").removeClass("fadeIn");
//			$(".init_animate").css({ "display" : "none"});
//		},5000)
	//}
})
$(document).on('pageshow', '#homepage', function (event, ui) {
	
	setTimeout(function(){
		var _footer = $("#homepage .ui-footer").height();
		$("#homepage .inner_ui-content").css("bottom", _footer);
	},1000)

	AppRate.promptForRating(false);
	/*
	try{
	UXCam.tagScreenName("Home");  
	 UXCam.logEvent("Home Page", "Home Page");
	 }
	catch(err)
	{
		
	}
	*/
    hideloader();

    //if(localStorage.getItem("reg_id")!=null)
    //{

     $.ajax({
   
  url: SERVER1+'apis/deviceid_update.asp',
   type: 'GET',
   timeout: 50000,
   async: false,
    dataType: 'json',
     data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile,'deviceid':localStorage.getItem("reg_id"),'deviceType':deviceType,'latitude':localStorage.getItem('lat'),'longitude':localStorage.getItem('lng')},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
       
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

//}

    
});

$(document).on('pageinit', '#homepage', function (event, ui) {
	localStorage.setItem('limit','0');
     console.log('user.firstname'+user.firstname);
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		//document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML='Hey ' +user.firstname+'!';
		//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		
	}
	itemget('20');
	itemget('21');
	itemget('22');
	itemget('23');
	itemget('24');
		//initApp();
});

function getLoginName(value)
{
	localStorage.setItem('loginType',value);
   if(value == 'Mobile')
   {
   		$('#login_mob').css('display','block');
   		$('#login_email').css('display','none');
   		document.getElementById("forgot_button2").href="javascript:checkuserverify();";
   }
   else
   {
   		$('#login_mob').css('display','none');
   		$('#login_email').css('display','block');
   		document.getElementById("forgot_button2").href="javascript:checkuserCTB();";
   }
}
function checkuserCTB()
{
	var uname = $('#forgot_useremail').val();
	var pwd = $('#forgot_pass').val();
	var vin = localStorage.getItem("vinno");
	if(uname=='' || pwd=='')
	{
	  $('#login-msg').html('Please enter Mobile Number /Passcode');
	}
	else
	{
		$.ajax({
		    url: CTBSERVER+'/login.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:JSON.stringify({'email': uname,'password':pwd}),
		      beforeSend  : function() {
                  $("#wait").css("display","block");
            },
            complete: function() {
                $("#wait").css("display","none");
            },
		  
		    success: function(data, textStatus, xhr) {
		  		console.log('data in checkcustomerexists'+JSON.stringify(data.dataVO[0].message));
		   
		   if(data.dataVO[0].message=='Not a valid customer in CTB system')
		   {

		    	$('#register-msg').html('Authentication failed');
		 		$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	     		$('#forgot_pass').val('');
	     		isCTBexist= false;
		   		$('#userpassdiv').css('display','block');
		 	
		   }
		   else if(data.dataVO[0].message=='CTB customer login failed due to invalid id or password.')
		   {

		    	$('#register-msg').html('Authentication failed');
		 		$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	     		$('#forgot_pass').val('');
	     		isCTBexist= false;
		   		$('#userpassdiv').css('display','block');
		 	
		   }
		   else
		   {
		   		/*{"dataVO":["customer":{"custId":10010150,"name":"Miss pallavi","mobile":"9717049991","email":"anoop12@mobiquest.com","gdnr":null,
		   		"salutation":"1","address1":"119, Mahagun Mansion","address2":null,"location":null,"stateCode":"GJ","cityCode":"R54","pinCode":"362268",
		   		"dateOfBirth":null,"dateOfAnniversary":null,"prefferedMode":null,"password":"$2a$10$fFwEJDzQIcOxVbA3WpuwEu2i.6G.VcyoZrEveEd0COd5i0giLVbBm",
		   		"agreedPrvPolicy":"Y","agreedTermCond":"Y","agreedRecEmailNews":"Y","registrationDate":"2020-01-16","registrationIP":null,
		   		"regEmailToken":null,"regEmailTokenExpiryDate":null,"regEmailTokenVerifiedFlag":"N","updateDate":null,"updateIP":null,*/
		   		isCTBexist= true;
			   	$('#userpassdiv').css('display','none');
				
		   		user.custid = data.dataVO[0].customer.custId;
    			user.firstname = data.dataVO[0].customer.name;
    			user.lastname = data.dataVO[0].customer.lastname;
    			user.mobile = data.dataVO[0].customer.mobile;
			    user.dob = data.dataVO[0].customer.dateOfBirth;
    			user.emailid = data.dataVO[0].customer.email;
				user.title = data.dataVO[0].customer.salutation;
				user.address1 = data.dataVO[0].customer.address1;
				user.address2 = data.dataVO[0].customer.address2;
				user.location = data.dataVO[0].customer.location;
				user.state = data.dataVO[0].customer.stateCode;
				user.city = data.dataVO[0].customer.cityCode;
				user.pincode = data.dataVO[0].customer.pinCode;
				user.agreeprvtnc = data.dataVO[0].customer.agreedPrvPolicy;
    			user.agreeemailnews = data.dataVO[0].customer.agreedRecEmailNews;

    			user.session_code=data.dataVO[0].customer.customerLoginHistory.session_token;
    			$('#forgot_useremail').val('');
    			//$('#forgot_pass').val('');
  
			   localStorage.setItem('usernamehyundai',user.mobile);
			   localStorage.setItem('ctbpasswordhyundai',pwd);
			   localStorage.setItem('ctbfirstname',user.firstname);
			   localStorage.setItem('ctblastname',user.lastname);
			   localStorage.setItem('ctbcustid',user.custid);
			   localStorage.setItem('ctbemailid',user.emailid);
			   localStorage.setItem('ctbtitle',user.title);
			   localStorage.setItem('ctbaddress1',user.address1);
			   localStorage.setItem('ctbaddress2',user.address2);
			   localStorage.setItem('ctblocation',user.location);
			   localStorage.setItem('ctbstate',user.state);
			   localStorage.setItem('ctbcity',user.city);
			   localStorage.setItem('ctbpincode',user.pincode);
			   localStorage.setItem('session_code',user.session_code);
			   //localStorage.setItem('ctbagreeprvtnc',user.agreeprvtnc);
			   //localStorage.setItem('ctbagreeemailnews',user.agreeemailnews);
			   

				

				
			/*

					 $.ajax({
			url: SERVER1+'apis/check_member_registration_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
			async:false,
			data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': user.mobile,'vinNumber':vin},
			success: function(data, textStatus, xhr) {
			 console.log(data.data);
			 //console.log(textStatus);
			if(data.error=='Member not registered.' || data.data=='Member registered but vehicle not registered')
			 {
			 	isMMPexist= false;	*/
			 	$.ajax({
				url: SERVER+'forgot_pswd.asp',
				type: 'GET',
				timeout: 30000,
				data: {'mobileno': user.mobile},
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.toLowerCase()=='success'){
					 //startWatch();
					 console.log("In forgot_pswd.asp");
					 $('#login-msg').html('The  passcode has been sent to your mobile.Please check your SMS.');
				  
					  localStorage.setItem("SMSMNO",user.mobile);
					 
				      $('#username').val(user.mobile);
					  localStorage.setItem('usernamehyundai',user.mobile);
					 
					  $.mobile.changePage("#myaccount");


					}
					  
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
		 		});

			 /*}
			else
			{
				isMMPexist= true;
				localStorage.setItem("profiledone_hyundai","true");
			    document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
				//document.getElementById("profilepts").innerHTML=user.balance+' Points';
				document.getElementById("profilenm1").innerHTML=user.firstname;
				//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}
		    },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
			});*/

			
		   }

		   console.log('Sec'+isCTBexist);
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });

	}
}
function checkuserverify()
{
	/*var uname = $('#forgot_user').val();
	var pwd = $('#forgot_pass').val();
	authenticate(uname,pwd);*/
	var uname = $('#forgot_user').val();
	var pwd = $('#forgot_pass').val();
	var vin = localStorage.getItem("vinno");
	if(uname=='' || pwd=='')
	{
	  $('#login-msg').html('Please enter Mobile Number /Passcode');
	}
	else
	{
		
   
		$.ajax({
		    url: CTBSERVER+'/login.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:JSON.stringify({'mobile': uname,'password':pwd}),
		    beforeSend  : function() {
                  $("#wait").css("display","block");
            },
            complete: function() {
               // $("#wait").css("display","none");
            },
		  
		    success: function(data, textStatus, xhr) {
		  		console.log('data in checkcustomerexists'+JSON.stringify(data));
		   
		   if(data.dataVO[0].message=='Not a valid customer in CTB system')
		   {

		    	$('#login-msg').html('Authentication failed');
		 		$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	     		$('#forgot_pass').val('');
	     		isCTBexist= false;
		   		$('#userpassdiv').css('display','block');
		 	
		   }
		   else if(data.dataVO[0].message=='CTB customer login failed due to invalid id or password.')
		   {

		    	$('#register-msg').html('Authentication failed');
		 		$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	     		$('#forgot_pass').val('');
	     		
		 	
		   }
		   else
		   {
		   		/*{"dataVO":["customer":{"custId":10010150,"name":"Miss pallavi","mobile":"9717049991","email":"anoop12@mobiquest.com","gdnr":null,
		   		"salutation":"1","address1":"119, Mahagun Mansion","address2":null,"location":null,"stateCode":"GJ","cityCode":"R54","pinCode":"362268",
		   		"dateOfBirth":null,"dateOfAnniversary":null,"prefferedMode":null,"password":"$2a$10$fFwEJDzQIcOxVbA3WpuwEu2i.6G.VcyoZrEveEd0COd5i0giLVbBm",
		   		"agreedPrvPolicy":"Y","agreedTermCond":"Y","agreedRecEmailNews":"Y","registrationDate":"2020-01-16","registrationIP":null,
		   		"regEmailToken":null,"regEmailTokenExpiryDate":null,"regEmailTokenVerifiedFlag":"N","updateDate":null,"updateIP":null,*/
		   		isCTBexist= true;
			   	$('#userpassdiv').css('display','none');
				
		   		user.custid = data.dataVO[0].customer.custId;
    			user.firstname = data.dataVO[0].customer.name;
    			user.lastname = data.dataVO[0].customer.lastname;
    			user.mobile = data.dataVO[0].customer.mobile;
			    user.dob = data.dataVO[0].customer.dateOfBirth;
    			user.emailid = data.dataVO[0].customer.email;
				user.title = data.dataVO[0].customer.salutation;
				user.address1 = data.dataVO[0].customer.address1;
				user.address2 = data.dataVO[0].customer.address2;
				user.location = data.dataVO[0].customer.location;
				user.state = data.dataVO[0].customer.stateCode;
				user.city = data.dataVO[0].customer.cityCode;
				user.pincode = data.dataVO[0].customer.pinCode;
				user.agreeprvtnc = data.dataVO[0].customer.agreedPrvPolicy;
    			user.agreeemailnews = data.dataVO[0].customer.agreedRecEmailNews;

    			user.session_code=data.dataVO[0].customer.customerLoginHistory.session_token;


    			$('#forgot_useremail').val('');
    			//$('#forgot_pass').val('');
  
			   localStorage.setItem('usernamehyundai',user.mobile);
			   localStorage.setItem('ctbpasswordhyundai',pwd);
			   localStorage.setItem('ctbfirstname',user.firstname);
			   localStorage.setItem('ctblastname',user.lastname);
			   localStorage.setItem('ctbcustid',user.custid);
			   localStorage.setItem('ctbemailid',user.emailid);
			   localStorage.setItem('ctbtitle',user.title);
			   localStorage.setItem('ctbaddress1',user.address1);
			   localStorage.setItem('ctbaddress2',user.address2);
			   localStorage.setItem('ctblocation',user.location);
			   localStorage.setItem('ctbstate',user.state);
			   localStorage.setItem('ctbcity',user.city);
			   localStorage.setItem('ctbpincode',user.pincode);
			    localStorage.setItem('session_code',user.session_code);
			   //localStorage.setItem('ctbagreeprvtnc',user.agreeprvtnc);
			   //localStorage.setItem('ctbagreeemailnews',user.agreeemailnews);
			   

				

				
			

					 $.ajax({
			url: SERVER1+'apis/check_member_registration_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
			
			data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': user.mobile,'vinNumber':vin},
			   beforeSend  : function() {
                  $("#wait").css("display","block");
            },
            complete: function() {
                $("#wait").css("display","none");
            },
			success: function(data, textStatus, xhr) {
			 console.log(data.data);
			 //console.log(textStatus);
			if(data.error=='Member not registered.' || data.data=='Member registered but vehicle not registered')
			 {
			 	isMMPexist= false;	
			 	$.ajax({
				url: SERVER+'forgot_pswd.asp',
				type: 'GET',
				timeout: 30000,
				data: {'mobileno': user.mobile},
				   beforeSend  : function() {
                  $("#wait").css("display","block");
            },
            complete: function() {
                $("#wait").css("display","none");
            },
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.toLowerCase()=='success'){
					 //startWatch();
					 console.log("In forgot_pswd.asp");
					 $('#login-msg').html('The  passcode has been sent to your mobile.Please check your SMS.');
				  
					  localStorage.setItem("SMSMNO",user.mobile);
					 
				      $('#username').val(user.mobile);
					  localStorage.setItem('usernamehyundai',user.mobile);
					 
					  $.mobile.changePage("#myaccount");


					}
					  
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
		 		});

			 }
			 else if (data.data=='Member registered but with different vehicle.')
			 {

			 	//$('#register-msg').html('You are registered with different VIN number..Please try with correct');
		 		$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	     		$('#forgot_pass').val('');
	     		$('#forgot_vehicle').val('');
	     		//showPOPup('You are registered with different VIN number..Please try again');
	     		document.getElementById("forgotbody").innerHTML='You are registered with different VIN number..Please try with correct credentials';
	     		$('#forgotpop').popup("open");
	     		

			 }
			else
			{
				isMMPexist= true;
				localStorage.setItem("profiledone_hyundai","true");
			    document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
				//document.getElementById("profilepts").innerHTML=user.balance+' Points';
				document.getElementById("profilenm1").innerHTML='Hey ' +user.firstname+'!';
				//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
				//$.mobile.changePage( "#homepage", { transition: "flip"} );

				authenticate(uname,pwd,'registered-user');






			}
		    },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
			});

			
		   }
		   console.log('third'+isCTBexist);
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });

	}
}

function gotoforgot()
{
	$('#forgotpop').popup("close");
	$.mobile.changePage( "#page-forgot-password", { transition: "flip"} );	
}

function gotologin()
{
	$('#loginpop').popup("close");
	//$.mobile.changePage( "#registered-user", { transition: "flip"} );	
}
function authenticate(uname,pwd,pagename)
{
  /*var uname = $('#username').val();
  //var pwd = $('#password_myacc').val();
  var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();*/
  var phno = localStorage.getItem("phno");
    console.log("uname"+uname);
    console.log("pwd"+pwd);
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  $('#login-msg').html('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd,'phonenos':phno},
   
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) 
    {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
   	user.balance = data.balance;
    user.id = data.id;
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.def_store = data.store;
	user.deviceid = data.device_id;
	user.devicetype = data.device_type;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;
	user.vinSalesModelCode = data.vinSalesModelCode;
	user.vinRegistrationNumber = data.vinRegistrationNumber;
	user.fuelType = data.fuelType;
	user.transmissionType = data.transmissionType;
	user.sellingDealerName = data.sellingDealerName;
	user.sellingDealerNumber = data.sellingDealerNumber;
	user.vinDeliveryDate = data.vinDeliveryDate;
	user.lastRoDate = data.lastRoDate;
	user.vinServiceModelCode = data.vinServiceModelCode;
	user.vinVariantName = data.vinVariantName;
	user.vinExteriorColor = data.vinExteriorColor;
	user.hapInsurancePolicy = data.hapInsurancePolicy;
	user.sellingDealerCity = data.sellingDealerCity;
	user.lastRoBillingAmt = data.lastRoBillingAmt;
	user.nextRoDueDate = data.nextRoDueDate;
	user.basicWrtyStartDate = data.basicWrtyStartDate;
	user.basicWrtyEndDate = data.basicWrtyEndDate;
	user.flag = data.flag;
	user.vinno = data.vinNumber;
	user.title = data.title;
	user.address1 = data.street;
	user.address2 = data.building;
	user.location = data.floor_flat;
	user.state = data.statename;
	user.city = data.city;
	user.pincode = data.postalcode;
	user.profilephoto = data.profilephoto;
	user.interest = data.interest;
	if(data.vin_name==null)
		user.vinname='Primary Vehicle';
	else
	user.vinname=data.vin_name

	checkNotification();

	//getAppIds();
	
	
	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname"+user.firstname);

	console.log("success"+data.status);
    
    $('#username').val('');
    $('#password_myacc').val('');
	  
	console.log('user.firstname......'+user.firstname);	
	console.log('ctbfirstname......'+localStorage.getItem('ctbfirstname'));		   
   if((typeof user.firstname == undefined || user.firstname == null || user.firstname == ''))
   {
   	var ctbfname = localStorage.getItem('ctbfirstname');
   	console.log('ctbfname......'+ctbfname);	
   	if(typeof ctbfname !=undefined && ctbfname !=null)
	   	{
	   		user.firstname = ctbfname;
	   		$('#userpassdiv').css('display','none');
	   	}
		   
   }

   if((typeof user.lastname == undefined || user.lastname == null || user.lastname == ''))
   {
   	var ctblname = localStorage.getItem('ctblastname');
   	if(typeof ctblname !=undefined && ctblname !=null)
   		user.lastname = ctblname;
   }

   if((typeof user.emailid == undefined || user.emailid == null || user.emailid == ''))
   {
   	var ctbemail = localStorage.getItem('ctbemailid');
   	if(typeof ctbemail !=undefined && ctbemail !=null)
   		user.emailid = ctbemail;
   }
    if((typeof user.title == undefined || user.title == null || user.title == ''))
   {
   	var ctbtitle = localStorage.getItem('ctbtitle');
   	if(typeof ctbtitle !=undefined && ctbtitle !=null)
   		user.title = ctbtitle;
   }
   if((typeof user.address1 == undefined || user.address1 == null || user.address1 == ''))
   {
   	var ctbaddress1 = localStorage.getItem('ctbaddress1');
   	if(typeof ctbaddress1 !=undefined && ctbaddress1 !=null)
   		user.address1 = ctbaddress1;
   }
   if((typeof user.address2 == undefined || user.address2 == null || user.address2 == ''))
   {
   	var ctbaddress2 = localStorage.getItem('ctbaddress2');
   	if(typeof ctbaddress2 !=undefined && ctbaddress2 !=null)
   		user.address2 = ctbaddress2;
   }
   if((typeof user.location == undefined || user.location == null || user.location == ''))
   {
   	var ctblocation = localStorage.getItem('ctblocation');
   	if(typeof ctblocation !=undefined && ctblocation !=null)
   		user.location = ctblocation;
   }
   if((typeof user.state == undefined || user.state == null || user.state == ''))
   {
   	var ctbstate = localStorage.getItem('ctbstate');
   	if(typeof ctbstate !=undefined && ctbstate !=null)
   		user.state = ctbstate;
   }
   if((typeof user.city == undefined || user.city == null || user.city == ''))
   {
   	var ctbcity = localStorage.getItem('ctbcity');
   	if(typeof ctbcity !=undefined && ctbcity !=null)
   		user.city = ctbcity;
   }
   if((typeof user.pincode == undefined || user.pincode == null || user.pincode == ''))
   {
   	var ctbpincode = localStorage.getItem('ctbpincode');
   	if(typeof ctbpincode !=undefined && ctbpincode !=null)
   		user.pincode = ctbpincode;
   }
   
   

   localStorage.setItem('usernamehyundai',uname);
   localStorage.setItem('passwordhyundai',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('title',user.title);
   localStorage.setItem('address1',user.address1);
   localStorage.setItem('address2',user.address2);
   localStorage.setItem('location',user.location);
   localStorage.setItem('state',user.state);
   localStorage.setItem('city',user.city);
   localStorage.setItem('pincode',user.pincode);
   localStorage.setItem('profilepic',data.profilephoto);
   localStorage.setItem("profile_pwd",pwd);
   localStorage.setItem("interest",data.interest);

   console.log('kkkkkkkkkkkk'+pwd);
   // localStorage.setItem('passworddd',pwd);

	console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);

	$('#update_email').val(user.emailid);
	$('#update_dob').val(user.dob);
	$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	
	$('#update_email1').val(user.emailid);
	$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
	$('#update_username').val(uname);
	$('#update_pmobile').val(uname);
	$('#update_pmobile1').val(uname);
	$('#vehiclelink').val(localStorage.getItem("vinno"));
	$('#update_title').val(user.title);
	$('#update_title1').val(user.title);

	
	//$('#update_password').val();
	$('#update_flat').val(user.address1);
	$('#update_address').val(user.address2);
	$('#update_loc').val(user.location);
	$('#update_city').val(user.city);

	//$('#update_state').val(user.state);
	$("#update_state option[value^='"+user.state+"']").prop("selected", true);

	console.log('user.state'+user.state);
	
	fetchdistrict1(user.state);
	$('#update_pin').val(user.pincode); 

    if(user.address1!=null)
	$('#update_flat1').val(user.address1);
    if(user.address2!=null)
	$('#update_address1').val(user.address2);
    if(user.location!=null)
	$('#update_loc1').val(user.location);

	$('#update_city1').val(user.city);
	$('#update_state1').val(user.state);
	$("#update_state1 option[value^='"+user.state+"']").prop("selected", true);
	 if(user.pincode!=null)
	$('#update_pin1').val(user.pincode); 
	document.getElementById("profilepic").src = user.profilephoto;
	document.getElementById("cardImagemenu").src = user.profilephoto;
    	
	document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
	//document.getElementById("profilepts").innerHTML=user.total+' Points';
	document.getElementById("profilenm1").innerHTML='Hey ' +user.firstname+'!';
    //document.getElementById("profilepts1").innerHTML=user.total+' points';
	if(typeof user.firstname== undefined || user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
    {
		 user.firstname='';
    }
    if(typeof user.vinno== undefined || user.vinno=='undefined' || user.vinno=='null' || user.vinno==null)
    {
		 user.vinno='';
    }
    console.log('user.vinno'+user.vinno);
    console.log('user.firstname'+user.firstname);
    localStorage.setItem('vinno',user.vinno);
    try{
    //	http://taghash.co/hyundai/uploads/profile_9717049993.jpg
    document.getElementById("cardImagemenu").src = uploadURL+'uploads/profile_'+localStorage.getItem("usernamehyundai");
    	
    }catch(err)
    {
    document.getElementById("cardImagemenu").src = localStorage.getItem("profilepic");	
    }
	if(user.vinno =='' || user.firstname=='' )
    {
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
    else
    {
	    localStorage.setItem("profiledone_hyundai","true");
	    document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		//document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML='Hey ' +user.firstname+'!';
		//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		
	     //$.mobile.changePage( "#homepage", { transition: "fadein"} );

		setTimeout(function(){
			$.mobile.changePage( "#homepage", { transition: "fadein"} );
		}, 2000)
		
		
		
    }
   }else{
		 $('#login-msg').html('Authentication failed');
		 $('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	     $('#forgot_pass').val('');
	     if(pagename == 'registered-user')
		 	$.mobile.changePage( "#registered-user", { transition: "flip"} );
		 else
		 	$.mobile.changePage( "#myaccount", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernamehyundai');
	pwd = localStorage.getItem('passwordhyundai');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    
	if(localStorage.getItem("imagedata")!=null)
	   {
		document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
		
	   }
	if(localStorage.getItem("cardPic")==null || localStorage.getItem("cardPic")=='null' || localStorage.getItem("cardPic")=='undefined' )
	   {
		//document.getElementById("cardImage").src = 'img/person_img.png';
		//document.getElementById("cardImagepunch").src = 'img/person_img.png';
		
	   }
	else
	   {
		//document.getElementById("cardImage").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		//document.getElementById("cardImagepunch").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
	   }
   
    }
  });
 }

 $.ajax({
        url: CTBSERVER+'/exists.ctb',
        type: 'POST',
        timeout: 50000,
        async:false,
        dataType: 'json',
        
        data:JSON.stringify({'mobile': uname}),
          
        success: function(data, textStatus, xhr) {
       if(data.dataVO[0].message=='Mobile no. already exists.')
       {
          isCTBexist= true;
         

       }
       else
       {
          isCTBexist= false;
        }

        console.log('Four'+isCTBexist);

     
       // isCTBexist=true;
       },
       error: function(xhr, textStatus, errorThrown) {
							
							
							//alert('Could not connect to Server, make sure you are connected to Internet');
						   
		}
	  });
}

$(document).on('pageshow', '#gifslider', function (event, ui) {
			
			
		setTimeout( function() {


				if(localStorage.getItem("usernamehyundai")!=null &&  localStorage.getItem("usernamehyundai")!='' && (localStorage.getItem("passwordhyundai")==null || localStorage.getItem("passwordhyundai")==''))
				{

                                        $.mobile.changePage( '#myaccount',{transition: "slide"});
                                                                              
									
				}
				else if(localStorage.getItem("usernamehyundai")==null || localStorage.getItem("usernamehyundai")=='' )
                {
                                                                                                
                                       $.mobile.changePage( '#page-forgot-password',{transition: "slide"} );    
                }
                  else
				{
					   $.mobile.changePage( '#homepage',{transition: "fadein"} );  
					   
				}
	
								    
			}, 5840);
			
			
			
			
			
})
$(document).on('pageshow', '#profile', function (event, ui) {

	//alert('sss'+user.vinno);
	/*
	try{
UXCam.tagScreenName("Profile");  
	UXCam.logEvent("Profile", "Profile");
	}
	catch(err)
	{
		
	}
	*/



	var str='<div class="vin_details vehicle_details"><ul>'+
	'<li><h3>VinNumber:</h3><span>'+user.vinno+'</span></li>'+
	'<li><h3>vinSalesModelCode:</h3><span>'+user.vinSalesModelCode+'</span></li>'+
	'<li><h3>vinRegistrationNumber:</h3><span>'+user.vinRegistrationNumber+'</span></li>'+
	//'<h4>fuelType'+user.fuelType+'</h4><h2>'+
	//'<h4>sellingDealerName'+user.sellingDealerName+'</h4><h2>'+
	//'<h4>sellingDealerNumber'+user.sellingDealerNumber+'</h4><h2>'+
	//'<h4>vinDeliveryDate'+user.vinDeliveryDate+'</h4><h2>'+
	
	//'<h4>vinVariantName'+user.vinVariantName+'</h4><h2>'+
	//'<h4>vinExteriorColor'+user.vinExteriorColor+'</h4><h2>'+
	//'<h4>hapInsurancePolicy'+user.hapInsurancePolicy+'</h4><h2>'+
	//'<h4>sellingDealerCity'+user.sellingDealerCity+'</h4><h2>'+
	//'<h4>lastRoBillingAmt'+user.lastRoBillingAmt+'</h4><h2>'+
	'<li><h3>nextRoDueDate:</h3><span>'+user.nextRoDueDate+'</span></li>'+
	//'<h4>basicWrtyStartDate'+user.basicWrtyStartDate+'</h4><h2>'+
	//'<h4>basicWrtyEndDate'+user.basicWrtyEndDate+'</h4><h2>'+*/
	

	'</ul>';
	'</div>';

	document.getElementById('vdetailprofile').innerHTML=str;

	

	if(localStorage.getItem('interest').indexOf('Concerts')>=0)
		document.getElementById("Concerts").checked = true;
	if(localStorage.getItem('interest').indexOf('Dancing')>=0)
		document.getElementById("Dancing").checked = true;
	if(localStorage.getItem('interest').indexOf('Fashion')>=0)
		document.getElementById("Fashion").checked = true;
	if(localStorage.getItem('interest').indexOf('Fitness & Wellness')>=0)
		document.getElementById("Fitness & Wellness").checked = true;
	if(localStorage.getItem('interest').indexOf('Movies')>=0)
		document.getElementById("Movies").checked = true;

	

	//$('#vdetail').val(user.vinno);

}
);

$(document).on('pageinit', '#personalize, #profile', function (event, ui) {
	
	
	$.each($(".pers_block"), function(){
		var r_width  = Math.floor(Math.random() * 50) + 81 
		//console.log(r_width);
		//$(this).css({"width" : r_width})
	})
	
	$(document).on('tap', '#add_interest', function (e, ui) {
		
		/*
		try{

			 UXCam.tagScreenName("Profile Registration");  
			 UXCam.logEvent("Profile Registration", "Profile Registration");
			}
			catch(err)
			{

			}
		*/
		
		e.preventDefault();
		e.stopPropagation();
		
				var favorite = [];
	            $.each($("input[name='interestarea']:checked"), function(){
	                favorite.push($(this).val());
	            });
	           
	            //var interest = $.map($('input[name="reg_interest"]:checked'), function(c){return c.value; });  interest = interest.toString();
	            localStorage.setItem("profile_fvt",favorite.join(", "));
		
			$.mobile.changePage( "#vehicle-link", {transition: "slide"} );
		
	})
	
})



$(document).on('pageinit', '#profilepage', function (event, ui) {

		//console.log('ddddddddddddddddddddddd'+localStorage.getItem("profile_pwd"));
		/*
		try{

		UXCam.tagScreenName("Profile Registration");  
	 UXCam.logEvent("Profile Registration", "Profile Registration");
	 }
	catch(err)
	{
		
	}
	*/

$('#update_pmobile').val(localStorage.getItem("usernamehyundai"));



$('#update_username').val(localStorage.getItem("usernamehyundai"));

		$('#update_password').val(localStorage.getItem("profile_pwd"));
		$('#update_conpassword').val(localStorage.getItem("profile_pwd"));


		$(document).on('tap', '#update_button3', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		if(!isCTBexist){
          if($('#update_password').val().trim()=='')
        {
                 toast('Password cannot be blank');
                document.getElementById('update_password').focus();
                document.getElementById('update_password').scrollIntoView();
        }
       } 
			if($('#update_title').val()=='')
        {
                toast('Title cannot be blank');
                document.getElementById('update_title').focus();
                document.getElementById('update_title').scrollIntoView();
        }
		if($('#update_firstname').val().trim()=='')
        {
                toast('FirstName cannot be blank');
                //$('#update_firstname').focus();
                //$('#update_firstname').scrollIntoView();
               // var elmnt = document.getElementById("update_firstname");
                document.getElementById("update_firstname").focus();

 			    document.getElementById("update_firstname").scrollIntoView();
        }
        /*else if($('#update_lastname').val().trim()=='')
        {
                toast('LastName cannot be blank');
                document.getElementById('update_lastname').focus();
                document.getElementById('update_lastname').scrollIntoView();
        }
        */
        else if($('#update_pmobile').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                document.getElementById('update_pmobile').focus();
                document.getElementById('update_pmobile').scrollIntoView();
        }
        else if($('#update_email').val().trim()=='')
        {
                toast('Email Id cannot be blank');
                document.getElementById('update_email').focus();
                document.getElementById('update_email').scrollIntoView();
        }
        else if($('#update_username').val().trim()=='')
        {
                toast('Username cannot be blank');
                document.getElementById('update_username').focus();
                document.getElementById('update_username').scrollIntoView();
        }
        else if($('#update_password').val().trim()=='')
        {
                toast('Password cannot be blank');
                document.getElementById('update_password').focus();
                document.getElementById('update_password').scrollIntoView();
        }
        else if($('#update_conpassword').val().trim()=='')
        {
                toast('Confirm password cannot be blank');
                document.getElementById('update_conpassword').focus();
                document.getElementById('update_conpassword').scrollIntoView();
        }
        
		else
		{
			
				localStorage.setItem("profile_title",$('#update_title').val());
				localStorage.setItem("profile_fname",$('#update_firstname').val());
				localStorage.setItem("profile_lname",$('#update_lastname').val());
				localStorage.setItem("profile_mob",$('#update_pmobile').val());
				localStorage.setItem("profile_email",$('#update_email').val());
				localStorage.setItem("profile_user",$('#update_username').val());
				localStorage.setItem("profile_pwd",$('#update_password').val());

				
	            //alert('Ajay change tab here');
				//$('#tabs').tabs( "option", "active", 1 );
				$('a[href="#two"]').trigger("click");
				$('a[href="#two"]').removeClass("inactive");
	           // $.mobile.changePage( "#profilepagenew", {transition: "slide"} );
		}	
			
		});



		$(document).on('tap', '#update_button2', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		if(!isCTBexist){
          if($('#update_password').val().trim()=='')
        {
                 toast('Password cannot be blank');
                document.getElementById('update_password').focus();
                document.getElementById('update_password').scrollIntoView();
        }
       } 
			if($('#update_title').val()=='')
        {
                toast('Title cannot be blank');
                document.getElementById('update_title').focus();
                document.getElementById('update_title').scrollIntoView();
        }
		if($('#update_firstname').val().trim()=='')
        {
                toast('FirstName cannot be blank');
                //$('#update_firstname').focus();
                //$('#update_firstname').scrollIntoView();
               // var elmnt = document.getElementById("update_firstname");
                document.getElementById("update_firstname").focus();

 			    document.getElementById("update_firstname").scrollIntoView();
        }
        /*else if($('#update_lastname').val().trim()=='')
        {
                toast('LastName cannot be blank');
                document.getElementById('update_lastname').focus();
                document.getElementById('update_lastname').scrollIntoView();
        }
        */
        else if($('#update_pmobile').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                document.getElementById('update_pmobile').focus();
                document.getElementById('update_pmobile').scrollIntoView();
        }
        else if($('#update_email').val().trim()=='')
        {
                toast('Email Id cannot be blank');
                document.getElementById('update_email').focus();
                document.getElementById('update_email').scrollIntoView();
        }
        else if($('#update_flat').val().trim()=='')
        {
                toast('Address cannot be blank');
                document.getElementById('update_flat').focus();
                document.getElementById('#update_flat').scrollIntoView();
        }
       
        else if($('#update_state').val()=='0')
        {
                toast('State cannot be blank');
                document.getElementById('update_state').focus();
                document.getElementById('update_state').scrollIntoView();
        }
         else if($('#update_city').val()==null)
        {
                toast('City cannot be blank');
                document.getElementById('update_city').focus();
                document.getElementById('update_city').scrollIntoView();
        }
        else if($('#update_pin').val().trim()=='')
        {
                toast('Pincode cannot be blank');
                document.getElementById('update_pin').focus();
                document.getElementById('update_pin').scrollIntoView();
        }
	
		else if($('#update_dob').val().trim()=='')
        {
                toast('DOB cannot be blank');
                 document.getElementById('update_dob').focus();
                document.getElementById('update_dob').scrollIntoView();
                
        }
        else if($('#update_username').val().trim()=='')
        {
                toast('Username cannot be blank');
                document.getElementById('update_username').focus();
                document.getElementById('update_username').scrollIntoView();
        }
        else if($('#update_password').val().trim()=='')
        {
                toast('Password cannot be blank');
                document.getElementById('update_password').focus();
                document.getElementById('update_password').scrollIntoView();
        }
        else if($('#update_conpassword').val().trim()=='')
        {
                toast('Confirm password cannot be blank');
                document.getElementById('update_conpassword').focus();
                document.getElementById('update_conpassword').scrollIntoView();
        }
        else if(!$("#tnc").is(":checked"))
		{
			    toast('Please agree to our Terms of Use');
                document.getElementById('tnc').focus();
                document.getElementById('tnc').scrollIntoView();
		}
		else
		{
			
				localStorage.setItem("profile_title",$('#update_title').val());
				localStorage.setItem("profile_fname",$('#update_firstname').val());
				localStorage.setItem("profile_lname",$('#update_lastname').val());
				localStorage.setItem("profile_mob",$('#update_pmobile').val());
				localStorage.setItem("profile_addr1",$('#update_flat').val());
				localStorage.setItem("profile_addr2",$('#update_address').val());
				localStorage.setItem("profile_loc",$('#update_loc').val());
				localStorage.setItem("profile_city",$('#update_city').val());
				localStorage.setItem("profile_state",$('#update_state').val());
				localStorage.setItem("profile_pin",$('#update_pin').val());
				localStorage.setItem("profile_dob",$('#update_dob').val());
				localStorage.setItem("profile_email",$('#update_email').val());
				localStorage.setItem("profile_user",$('#update_username').val());
				localStorage.setItem("profile_pwd",$('#update_password').val());

				
	            localStorage.setItem("profile_tnc","Y");
	            if($("#subscribe").is(":checked"))
	            	localStorage.setItem("profile_sub","Y");
	        	else
	        		localStorage.setItem("profile_sub","N");
	            
	            
	            $.mobile.changePage( "#personalize", {transition: "slide"} );
		}	

		console.log('five'+isCTBexist);
			
		});

		
	});

function customerRegistration()
{
	
	  var title = localStorage.getItem("profile_title");			
	  var fname = localStorage.getItem("profile_fname");
	  var lname = localStorage.getItem("profile_lname");
	  var mob = localStorage.getItem("profile_mob");
	  var addr1 = localStorage.getItem("profile_addr1");
	  var addr2 = localStorage.getItem("profile_addr2");
	  var loc = localStorage.getItem("profile_loc");

	  var city = localStorage.getItem("profile_city");
	  var ct = city.split("-");
	  var state = localStorage.getItem("profile_state");
	  var st = state.split("-");
	  var pin = localStorage.getItem("profile_pin");

	  var email = localStorage.getItem("profile_email");
      var birthday = localStorage.getItem("profile_dob");
	  
	  var user = localStorage.getItem("profile_user");
	  var pwd = localStorage.getItem("profile_pwd");

	  //alert(pwd);


	  var dob = birthday.split('-');
	  var mm = dob.length == 3 ? dob[1] : '';
      var dd = dob.length == 3 ? dob[2] : '';
	  var yyyy = dob.length == 3 ? dob[0] : '';

	  var interest = localStorage.getItem("profile_fvt");
	  var tnc = localStorage.getItem("profile_tnc");
	  var sub = localStorage.getItem("profile_sub");
	  
	  /*vehicle details*/

	  var vinsalesmodelcode = $('#vinsalesmodelcode').text();
	  var vinregistrationnumber = $('#vinregistrationnumber').text();
	  var fueltype = $('#fueltype').text();
	  var transmissiontype = $('#transmissiontype').text();
	  var sellingdealername = $('#sellingdealername').text();
	  var sellingdealernumber = $('#sellingdealernumber').text();
	  var vindeliverydate = $('#vindeliverydate').text();
	  var lastrodate = $('#lastrodate').text();
	  var vinservicemodelcode = $('#vinservicemodelcode').text();
	  var vinvariantname = $('#vinvariantname').text();
	  var vinexteriorcolor = $('#vinexteriorcolor').text();
	  var hapinsurancepolicy = $('#hapinsurancepolicy').text();
	  var sellingdealercity = $('#sellingdealercity').text();
	  var lastrobillingamt = $('#lastrobillingamt').text();
	  var nextroduedate = $('#nextroduedate').text();
	  var basicwrtystartdate = $('#basicwrtystartdate').text();
	  var basicwrtyenddate = $('#basicwrtyenddate').text();
	  var vinname= $('#vin_name').val();

	  console.log('six'+isCTBexist);
	   if(!isCTBexist){
	   	if(user=='' || pwd=='')
	  	{
			 toast('Please enter username/ password');
	  	}
	  }
	  if(mob=='' || fname==''  || email=='')
	  {
		 toast('Please enter mandatory fields');
	  }
	  else
	  {

	  		if(isCTBexist)
	  		{
	  		if(typeof localStorage.getItem('ctbpasswordhyundai') == undefined || localStorage.getItem('ctbpasswordhyundai')== null || localStorage.getItem('ctbpasswordhyundai')=='')
	  			{
	  				//do nothing
	  			}
	  		else
	  		{
	  			pwd = localStorage.getItem('ctbpasswordhyundai');
	  		}
	  		
$("#wait").css("display","block");
	  		
		  
	  		$.ajax({
		    url: CTBSERVER+'/updateCustomer.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    
		    data:JSON.stringify({ "customer": { "custId": encodeURIComponent(localStorage.getItem("ctbcustid")),"name" : fname+' '+lname, "mobile": mob, "email": email,"password": pwd,"salutation": title,
"address1" : addr1,"address2" : addr2, "location" : loc, "stateCode" : st[1], "cityCode" : ct[1],"pinCode" : pin,
"agreedRecEmailNews": sub, "agreedTermCond": tnc,"agreedPrvPolicy": tnc}}),
		     beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    xhr.setRequestHeader('Authorization',  localStorage.getItem('session_code'));
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
		    success: function(data, textStatus, xhr) {
		  	console.log('data in register'+JSON.stringify(data.dataVO[0].message));
		   
		  // if(data.dataVO[0].message=='CTB customer registration success.' || data.dataVO[0].message=='Customer cannot be registered because email id exists.' || data.dataVO[0].message=='Customer cannot be registered because mobile no. exists.')
		   if(data.dataVO[0].message=='CTB customer updated successfully.')
		   {
			   //call mloyal registration

			     $.ajax({
		  url: SERVER+'mloyalprofileupdate.asp',
		  type: 'GET',
		  timeout: 50000,
		  data: {



				
				'mobileno': mob,
				'password': pwd,
				'firstName': fname,
				'lastName': lname,
				'deviceid': reg_id,
				'devicetype': deviceType,
				'emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
				'vinNumber':$('#vehiclelink').val(),
				'interest': interest,
				'vinSalesModelCode': vinsalesmodelcode,
				'vinRegistrationNumber': vinregistrationnumber,
				'fuelType': fueltype,
				'transmissionType': transmissiontype,
				'sellingDealerName': sellingdealername,
				'sellingDealerNumber': sellingdealernumber,
				'vinDeliveryDate': vindeliverydate,
				'lastRoDate': lastrodate,
				'vinServiceModelCode': vinservicemodelcode,
				'vinVariantName': vinvariantname,
				'vinExteriorColor': vinexteriorcolor,
				'hapInsurancePolicy': hapinsurancepolicy,
				'sellingDealerCity': sellingdealercity,
				'lastRoBillingAmt': lastrobillingamt,
				'nextRoDueDate': nextroduedate,
				'basicWrtyStartDate': basicwrtystartdate,
				'basicWrtyEndDate': basicwrtyenddate,
				'vinname':vinname,
				'flag': '',
				'title': title,
				'address1': addr1,
				'address2': addr2,
				'location': loc,
				'city':ct[0],
				'state':st[0],
				'pincode':pin,
				'latitude':localStorage.getItem('lat'),
				'longitude':localStorage.getItem('lng'),
				'profilepic':localStorage.getItem("profilepic")
				},
		   
			success: function(data, textStatus, xhr) {
		 
				console.log('JSONDATA:'+JSON.stringify(data));

				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');
						user.firstname=fname;
						user.lastname=lname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;
						user.mobile = localStorage.getItem("profile_mob");
						localStorage.setItem("profiledone_hyundai","true");
						//$.mobile.changePage( "#homepage", { transition: "slide"} );
						$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	    				$('#forgot_pass').val(localStorage.getItem("profile_pwd"));
	    				authenticate(user,pwd,'registered-user');
		 				//$.mobile.changePage( "#registered-user", { transition: "flip"} );
		 				//alert('user.mobile'+localStorage.getItem("usernamehyundai"));
		 				$.ajax({
						    url: SERVER1+'apis/issue_coupon_json_api.asp',
						    type: 'GET',
						    timeout: 50000,
						    dataType: 'json', //xml/html/script/json/jsonp
						    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': localStorage.getItem("usernamehyundai")},
						    success: function(data, textStatus, xhr) {
						    						    
						    	
						   },
						    error: function(xhr, textStatus, errorThrown) {
							
							
							alert('Could not connect to Server, make sure you are connected to Internet');
						   
						    }
						  });

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);

				  //resetPharmafields();
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
  
		   }
		   else
		   {
		   		//Fail and not call mloyal regoistration
		   		toast(data.dataVO[0].message);


		   }
		    },
		    error: function(xhr, textStatus, errorThrown) {

		    			    	//Anoop ad update not working
		    			    	$("#wait").css("display","none");

		    			     $.ajax({
		  url: SERVER+'mloyalprofileupdate.asp',
		  type: 'GET',
		  timeout: 50000,
		  data: {



				
				'mobileno': mob,
				'password': pwd,
				'firstName': fname,
				'lastName': lname,
				'deviceid': reg_id,
				'devicetype': deviceType,
				'emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
				'vinNumber':$('#vehiclelink').val(),
				'interest': interest,
				'vinSalesModelCode': vinsalesmodelcode,
				'vinRegistrationNumber': vinregistrationnumber,
				'fuelType': fueltype,
				'transmissionType': transmissiontype,
				'sellingDealerName': sellingdealername,
				'sellingDealerNumber': sellingdealernumber,
				'vinDeliveryDate': vindeliverydate,
				'lastRoDate': lastrodate,
				'vinServiceModelCode': vinservicemodelcode,
				'vinVariantName': vinvariantname,
				'vinExteriorColor': vinexteriorcolor,
				'hapInsurancePolicy': hapinsurancepolicy,
				'sellingDealerCity': sellingdealercity,
				'lastRoBillingAmt': lastrobillingamt,
				'nextRoDueDate': nextroduedate,
				'basicWrtyStartDate': basicwrtystartdate,
				'basicWrtyEndDate': basicwrtyenddate,
				'vinname':vinname,
				'flag': '',
				'title': title,
				'address1': addr1,
				'address2': addr2,
				'location': loc,
				'city':ct[0],
				'state':st[0],
				'pincode':pin,
				'latitude':localStorage.getItem('lat'),
				'longitude':localStorage.getItem('lng'),
				'profilepic':localStorage.getItem("profilepic")
				},
		   
			success: function(data, textStatus, xhr) {
		 
				console.log('JSONDATA:'+JSON.stringify(data));

				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');
						user.firstname=fname;
						user.lastname=lname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;
						user.mobile = localStorage.getItem("profile_mob");
						localStorage.setItem("profiledone_hyundai","true");
						//$.mobile.changePage( "#homepage", { transition: "slide"} );
						$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	    				$('#forgot_pass').val(localStorage.getItem("profile_pwd"));
	    				authenticate(user,pwd,'registered-user');
		 				//$.mobile.changePage( "#registered-user", { transition: "flip"} );
		 				//alert('user.mobile'+localStorage.getItem("usernamehyundai"));
		 				$.ajax({
						    url: SERVER1+'apis/issue_coupon_json_api.asp',
						    type: 'GET',
						    timeout: 50000,
						    dataType: 'json', //xml/html/script/json/jsonp
						    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': localStorage.getItem("usernamehyundai")},
						    success: function(data, textStatus, xhr) {
						    						    
						    	
						   },
						    error: function(xhr, textStatus, errorThrown) {
							
							
							alert('Could not connect to Server, make sure you are connected to Internet');
						   
						    }
						  });

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);

				  //resetPharmafields();
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
  



		    	//END ANoop
		 
		    }
		  });

		
	  		}
	  		else
	  		{
	  			$("#wait").css("display","block");
			$.ajax({
		    url: CTBSERVER+'/register.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    
		    data:JSON.stringify({ "customer": { "name" : fname+' '+lname, "mobile": mob, "email": email,"password": pwd,"salutation": title,
"address1" : addr1,"address2" : addr2, "location" : loc, "stateCode" : st[1], "cityCode" : ct[1],"pinCode" : pin,
"agreedRecEmailNews": sub, "agreedTermCond": tnc,"agreedPrvPolicy": tnc}}),
		     beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
		    success: function(data, textStatus, xhr) {
		  	console.log('data in register'+JSON.stringify(data.dataVO[0].message));
		   
		  // if(data.dataVO[0].message=='CTB customer registration success.' || data.dataVO[0].message=='Customer cannot be registered because email id exists.' || data.dataVO[0].message=='Customer cannot be registered because mobile no. exists.')
		   if(data.dataVO[0].message=='CTB customer registration success.')
		   {
			   //call mloyal registration

			     $.ajax({
		  url: SERVER+'mloyalprofileupdate.asp',
		  type: 'GET',
		  timeout: 50000,
		  data: {



				
				'mobileno': mob,
				'password': pwd,
				'firstName': fname,
				'lastName': lname,
				'deviceid': reg_id,
				'devicetype': deviceType,
				'emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
				'vinNumber':$('#vehiclelink').val(),
				'interest': interest,
				'vinSalesModelCode': vinsalesmodelcode,
				'vinRegistrationNumber': vinregistrationnumber,
				'fuelType': fueltype,
				'transmissionType': transmissiontype,
				'sellingDealerName': sellingdealername,
				'sellingDealerNumber': sellingdealernumber,
				'vinDeliveryDate': vindeliverydate,
				'lastRoDate': lastrodate,
				'vinServiceModelCode': vinservicemodelcode,
				'vinVariantName': vinvariantname,
				'vinExteriorColor': vinexteriorcolor,
				'hapInsurancePolicy': hapinsurancepolicy,
				'sellingDealerCity': sellingdealercity,
				'lastRoBillingAmt': lastrobillingamt,
				'nextRoDueDate': nextroduedate,
				'basicWrtyStartDate': basicwrtystartdate,
				'basicWrtyEndDate': basicwrtyenddate,
				'vinname':vinname,
				'flag': '',
				'title': title,
				'address1': addr1,
				'address2': addr2,
				'location': loc,
				'city':ct[0],
				'state':st[0],
				'pincode':pin,
				'latitude':localStorage.getItem('lat'),
				'longitude':localStorage.getItem('lng'),
				'profilepic':localStorage.getItem("profilepic")
				},
		   
			success: function(data, textStatus, xhr) {
		 
				console.log('JSONDATA:'+JSON.stringify(data));

				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');
						user.firstname=fname;
						user.lastname=lname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;
						user.mobile = localStorage.getItem("profile_mob");
						localStorage.setItem("profiledone_hyundai","true");
						//$.mobile.changePage( "#homepage", { transition: "slide"} );
						$('#forgot_user').val(localStorage.getItem("usernamehyundai"));
	    				$('#forgot_pass').val(localStorage.getItem("profile_pwd"));
	    				authenticate(user,pwd,'registered-user');
		 				//$.mobile.changePage( "#registered-user", { transition: "flip"} );
		 				//alert('user.mobile'+localStorage.getItem("usernamehyundai"));
		 				$.ajax({
						    url: SERVER1+'apis/issue_coupon_json_api.asp',
						    type: 'GET',
						    timeout: 50000,
						    dataType: 'json', //xml/html/script/json/jsonp
						    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': localStorage.getItem("usernamehyundai")},
						    success: function(data, textStatus, xhr) {
						    						    
						    	
						   },
						    error: function(xhr, textStatus, errorThrown) {
							
							
							alert('Could not connect to Server, make sure you are connected to Internet');
						   
						    }
						  });

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);

				  //resetPharmafields();
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
  
		   }
		   else
		   {
		   		//Fail and not call mloyal regoistration
		   		toast(data.dataVO[0].message);


		   }
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });

		}
          
      
	  }
}


function vehicleRegistration()
{
	
	  
	  /*vehicle details*/

	  var mob = localStorage.getItem("usernamehyundai");
	  var vinsalesmodelcode = $('#vinsalesmodelcode_new').text();
	  var vinregistrationnumber = $('#vinregistrationnumber_new').text();
	  var fueltype = $('#fueltype_new').text();
	  var transmissiontype = $('#transmissiontype_new').text();
	  var sellingdealername = $('#sellingdealername_new').text();
	  var sellingdealernumber = $('#sellingdealernumber_new').text();
	  var vindeliverydate = $('#vindeliverydate_new').text();
	  var lastrodate = $('#lastrodate_new').text();
	  var vinservicemodelcode = $('#vinservicemodelcode_new').text();
	  var vinvariantname = $('#vinvariantname_new').text();
	  var vinexteriorcolor = $('#vinexteriorcolor_new').text();
	  var hapinsurancepolicy = $('#hapinsurancepolicy_new').text();
	  var sellingdealercity = $('#sellingdealercity_new').text();
	  var lastrobillingamt = $('#lastrobillingamt_new').text();
	  var nextroduedate = $('#nextroduedate_new').text();
	  var basicwrtystartdate = $('#basicwrtystartdate_new').text();
	  var basicwrtyenddate = $('#basicwrtyenddate_new').text();
	  var vinname= $('#vin_name_new').val();
	  var user = localStorage.getItem("usernamehyundai");
	  var pwd = localStorage.getItem("profile_pwd");

	  
	  if(vinname=='')
	  {
		 toast('Please enter mandatory fields');
	  }
	  else
	  {
	  		
		$.ajax({
		  url: SERVER1+'apis/vehicle_json_api.asp',
		  type: 'GET',
		  timeout: 50000,
		  data: {



				
				'mobileno': mob,
				'vinNumber':$('#vehiclelink_new').val(),
				'vinSalesModelCode': vinsalesmodelcode,
				'vinRegistrationNumber': vinregistrationnumber,
				'fuelType': fueltype,
				'transmissionType': transmissiontype,
				'sellingDealerName': sellingdealername,
				'sellingDealerNumber': sellingdealernumber,
				'vinDeliveryDate': vindeliverydate,
				'lastRoDate': lastrodate,
				'vinServiceModelCode': vinservicemodelcode,
				'vinVariantName': vinvariantname,
				'vinExteriorColor': vinexteriorcolor,
				'hapInsurancePolicy': hapinsurancepolicy,
				'sellingDealerCity': sellingdealercity,
				'lastRoBillingAmt': lastrobillingamt,
				'nextRoDueDate': nextroduedate,
				'basicWrtyStartDate': basicwrtystartdate,
				'basicWrtyEndDate': basicwrtyenddate,
				'vinname':vinname,
				
				},
		   
			success: function(data, textStatus, xhr) {
		 
				console.log('JSONDATA:'+JSON.stringify(data));

				if (data.indexOf("Data Updated")  >=0  ||  data.indexOf("Data Added")  >=0 )
				{
					   
					   
						toast('New Vehicle has been linked  successfully.');
						authenticate(user,pwd,'registered-user');
						$.ajax({
						    url: SERVER1+'apis/issue_coupon_json_api.asp',
						    type: 'GET',
						    timeout: 50000,
						    dataType: 'json', //xml/html/script/json/jsonp
						    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': localStorage.getItem("usernamehyundai")},
						    success: function(data, textStatus, xhr) {
						    						    
						    	
						   },
						    error: function(xhr, textStatus, errorThrown) {
							
							
							alert('Could not connect to Server, make sure you are connected to Internet');
						   
						    }
						  });
						

				}
				else if(data=='Failed')
					toast('New Vehicle link failed.Please try again');
				else
					toast(data);



				  //resetPharmafields();
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
  
		 }
		
}


	
	

$(document).on('pageinit', '#profilepage_fb', function (event, ui) {

	    console.log("in profilepage");
	
		$(document).on('tap', '#update_button_fb', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname_fb').val();
		var lastname = $('#update_lastname_fb').val();
		var mobile = user.mobile;
		var email = $('#update_email_fb').val();
		var mm;
		var dd;
		var yyyy;
		if(user.dob!=null || user.dob !='null')
			{
		var birthday = $('#update_dob_fb1').val();
		var dob = birthday.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
			}
		else
			{
			mm = $('#update_mm1').val();
		    dd = $('#update_dd1').val();
		    yyyy =$('#update_yyyy1').val();
			}

    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				console.log("Anoop"+data);
				
				 
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg_fb').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg_fb').html('Update failed.');
				else
					$('#update_response_msg_fb').html(data);
					

					//showHome();
					//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		//document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML='Hey ' +user.firstname+'!';
		//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		
	}
                $.mobile.changePage( "#homepage", {transition: "flip"} );
		        
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		
	});
	if($('#update_firstname_fb').val()=='' || $('#update_firstname_fb').val()=='null' || $('#update_firstname_fb').val()==null || $('#update_firstname_fb').val()=='undefined')
	{
		        $('#update_firstname_fb').val(user.firstname);
	            $('#update_lastname_fb').val(user.lastname);
	
	            $('#update_email_fb').val(user.emailid);
				try{
				if(user.dob!=null || user.dob!='null' || user.dob==' ')
					{
					$('#updt_1').css('display','none');
	                $('#update_dob_fb1').val(user.dob);
                    $('#updt_2').css('display','block');
					}
					else
					{
					$('#updt_2').css('display','none');
	               // $('#update_dob_fb1').val(user.dob);
                    $('#updt_1').css('display','block');
					}
				}catch(err)
		        {
					txt="There was an error on this page.\n\n"; 
					txt+="Error description: " + err.message + "\n\n"; 
					alert(txt);
				}
	}
	});





function updateprofile()
{

		if($('#update_title1').val().trim()=='')
        {
                toast('Title cannot be blank');
                $('#update_title1').focus();
                $('#update_title1').scrollIntoView();
        }
		if($('#update_firstname1').val().trim()=='')
        {
                toast('FirstName cannot be blank');
                $('#update_firstname1').focus();
                $('#update_firstname1').scrollIntoView();
        }
        /*else if($('#update_lastname1').val().trim()=='')
        {
                toast('LastName cannot be blank');
                $('#update_lastname1').focus();
                $('#update_lastname1').scrollIntoView();
        }
        */
        else if($('#update_dob1').val().trim()=='')
        {
                toast('DOB cannot be blank');
                $('#update_dob1').focus();
                $('#update_dob1').scrollIntoView();
        }
         else if($('#update_flat1').val().trim()=='')
        {
                toast('Address cannot be blank');
                $('#update_flat1').focus();
                $('#update_flat1').scrollIntoView();
        }
        else if($('#update_city1').val().trim()=='')
        {
                toast('City cannot be blank');
                $('#update_city1').focus();
                $('#update_city1').scrollIntoView();
        }
        else if($('#update_state1').val().trim()=='')
        {
                toast('State cannot be blank');
                $('#update_state1').focus();
                $('#update_state1').scrollIntoView();
        }
        else if($('#update_pin1').val().trim()=='')
        {
                toast('Pincode cannot be blank');
                $('#update_pin1').focus();
                $('#update_pin1').scrollIntoView();
        }
        else
        {

        var title = $('#update_title1').val();
		var fname = $('#update_firstname1').val();
		var lname = $('#update_lastname1').val();
		var birthday = $('#update_dob1').val();
		var email=$('#update_email1').val();
		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';
		//var devid=$('#push_reg_no').val();

		var addr1 = $('#update_flat1').val();
	    var addr2 = $('#update_address1').val();
	    var loc = $('#update_loc1').val();

	    var city = $('#update_city1').val();
	    var ct = city.split("-");
	    var state = $('#update_state1').val();
	    var st = state.split("-");
	    var pin = $('#update_pin1').val();

	    var interest = localStorage.getItem("profile_fvt");
	    var tnc = localStorage.getItem("profile_tnc");
	    var sub = localStorage.getItem("profile_sub");

	    var pwd = localStorage.getItem('passwordhyundai');
	    if(typeof localStorage.getItem('ctbpasswordhyundai') == undefined || localStorage.getItem('ctbpasswordhyundai')== null || localStorage.getItem('ctbpasswordhyundai')=='')
          {
            localStorage.getItem("profile_pwd");
          }
        else
        {
          pwd = localStorage.getItem('ctbpasswordhyundai');
        }
        if(pwd==''|| typeof pwd == undefined || pwd == null)
        	pwd = localStorage.getItem('passwordhyundai');

        console.log('pwd'+pwd);
	   /* $.ajax({
        url: CTBSERVER+'customer/updateCustomer.ctb',
        type: 'POST',
        timeout: 50000,
        dataType: 'json',
        async: false,
        data:JSON.stringify({ "customer": { "custId": localStorage.getItem("ctbcustid"),"name" : fname+' '+lname, "mobile": user.mobile, "email": email,"password": pwd,"salutation": title,
"address1" : addr1,"address2" : addr2, "location" : loc, "stateCode" : st[1], "cityCode" : ct[1],"pinCode" : pin,
"agreedRecEmailNews": sub, "agreedTermCond": tnc,"agreedPrvPolicy": tnc}}),
        complete: function(xhr, textStatus) {
        },
        success: function(data, textStatus, xhr) {
        console.log('data in register'+JSON.stringify(data.dataVO[0].message));
       
      // if(data.dataVO[0].message=='CTB customer registration success.' || data.dataVO[0].message=='Customer cannot be registered because email id exists.' || data.dataVO[0].message=='Customer cannot be registered because mobile no. exists.')
       if(data.dataVO[0].message=='CTB customer updated successfully.')


       {*/

       	var favorite1 = [];
	            $.each($("input[name='interestarea1']:checked"), function(){
	                favorite1.push($(this).val());
	            });



       		$.ajax({
		    url: CTBSERVER+'/login.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:JSON.stringify({'mobile': user.mobile,'password':localStorage.getItem('passwordhyundai')}),
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {




		    	  		$.ajax({
						    url: CTBSERVER+'/updateCustomer.ctb',
		    				type: 'POST',
		    				timeout: 50000,
		    				dataType: 'json',
		    				
		    				data:JSON.stringify({ "customer": { "custId": encodeURIComponent(data.dataVO[0].customer.custId),"name" : fname+' '+lname, "mobile": user.mobile, "email": email,"password": pwd,"salutation": title,
								"address1" : addr1,"address2" : addr2, "location" : loc, "stateCode" : st[1], "cityCode" : ct[1],"pinCode" : pin,
								"agreedRecEmailNews": sub, "agreedTermCond": tnc,"agreedPrvPolicy": tnc}}),
		    						 beforeSend: function (xhr) {

		    						 	console.log('sssss'+data.dataVO[0].customer.customerLoginHistory.session_token);
		    						 	$("#wait").css("display","block");
                    
                    				xhr.setRequestHeader('Authorization',  data.dataVO[0].customer.customerLoginHistory.session_token);
                				},
		   						
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
		    						success: function(data, textStatus, xhr) {

		    							$.ajax({


		  url: SERVER+'mloyalprofileupdate.asp',
		  type: 'GET',
		  timeout: 50000,
		  data: {
				
				'mobileno': user.mobile,
				'password': decodeURIComponent(pwd),
				'firstName': fname,
				'lastName': lname,
				'deviceid': user.deviceid,
				'devicetype': user.devicetype,
				'emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
				'interest': favorite1.join(", "),
				'vinNumber':user.vinno,
				'vinSalesModelCode': user.vinSalesModelCode,
				'vinRegistrationNumber': user.vinRegistrationNumber,
				'fuelType': user.fuelType,
				'transmissionType': user.transmissionType,
				'sellingDealerName': user.sellingDealerName,
				'sellingDealerNumber': user.sellingDealerNumber,
				'vinDeliveryDate': user.vinDeliveryDate,
				'lastRoDate': user.lastRoDate,
				'vinServiceModelCode': user.vinServiceModelCode,
				'vinVariantName': user.vinVariantName,
				'vinExteriorColor': user.vinExteriorColor,
				'hapInsurancePolicy': user.hapInsurancePolicy,
				'sellingDealerCity': user.sellingDealerCity,
				'lastRoBillingAmt': user.lastRoBillingAmt,
				'nextRoDueDate': user.nextRoDueDate,
				'basicWrtyStartDate': user.basicWrtyStartDate,
				'basicWrtyEndDate': user.basicWrtyEndDate,
				'flag': user.flag,
				'title': title,
				'address1': addr1,
				'address2': addr2,
				'location': loc,
				'city':ct[0],
				'state':st[0],
				'pincode':pin,
				'latitude':localStorage.getItem('lat'),
				'longitude':localStorage.getItem('lng'),
				'profilepic':localStorage.getItem("profilepic")
				
				},
		   
			success: function(data, textStatus, xhr) {
		 
				console.log('JSONDATA:'+JSON.stringify(data));

				if (data.indexOf("Success")>=0)
				{
					   
					    isMMPexist = true;
						toast('Your profile has been updated successfully.');
						user.firstname=fname;
						user.lastname=lname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;
						localStorage.setItem("profiledone_hyundai","true");
						$.mobile.changePage( "#homepage", { transition: "slide"} );
						
		 				
				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);

				  //resetPharmafields();
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });


		  							

		  					 },
		   					 error: function(xhr, textStatus, errorThrown) {

		   					 	$.ajax({


				  url: SERVER+'mloyalprofileupdate.asp',
				  type: 'GET',
				  timeout: 50000,
				  data: {
					
				'mobileno': user.mobile,
				'password': pwd,
				'firstName': fname,
				'lastName': lname,
				'deviceid': user.deviceid,
				'devicetype': user.devicetype,
				'emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
				'interest': localStorage.getItem("profile_fvt"),
				'vinNumber':user.vinno,
				'vinSalesModelCode': user.vinSalesModelCode,
				'vinRegistrationNumber': user.vinRegistrationNumber,
				'fuelType': user.fuelType,
				'transmissionType': user.transmissionType,
				'sellingDealerName': user.sellingDealerName,
				'sellingDealerNumber': user.sellingDealerNumber,
				'vinDeliveryDate': user.vinDeliveryDate,
				'lastRoDate': user.lastRoDate,
				'vinServiceModelCode': user.vinServiceModelCode,
				'vinVariantName': user.vinVariantName,
				'vinExteriorColor': user.vinExteriorColor,
				'hapInsurancePolicy': user.hapInsurancePolicy,
				'sellingDealerCity': user.sellingDealerCity,
				'lastRoBillingAmt': user.lastRoBillingAmt,
				'nextRoDueDate': user.nextRoDueDate,
				'basicWrtyStartDate': user.basicWrtyStartDate,
				'basicWrtyEndDate': user.basicWrtyEndDate,
				'flag': user.flag,
				'title': title,
				'address1': addr1,
				'address2': addr2,
				'location': loc,
				'city':ct[0],
				'state':st[0],
				'pincode':pin,
				'latitude':localStorage.getItem('lat'),
				'longitude':localStorage.getItem('lng'),
				'profilepic':localStorage.getItem("profilepic")
				
				},
		   
			success: function(data, textStatus, xhr) {
		 
				console.log('JSONDATA:'+JSON.stringify(data));

				if (data.indexOf("Success")>=0)
				{
					   
					    isMMPexist = true;
						toast('Your profile has been updated successfully.');
						user.firstname=fname;
						user.lastname=lname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;
						localStorage.setItem("profiledone_hyundai","true");
						$.mobile.changePage( "#homepage", { transition: "slide"} );
						
		 				
				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);

				  //resetPharmafields();
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
		 
		   					 }
		  				});



	
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });

	
		
		/*}
       else
       {
          //Fail and not call mloyal regoistration
          toast(data.dataVO[0].message);


       }
        },
        error: function(xhr, textStatus, errorThrown) {
     
        }
      });*/
	}
	$.ajax({
						    url: SERVER1+'apis/issue_coupon_json_api.asp',
						    type: 'GET',
						    timeout: 50000,
						    dataType: 'json', //xml/html/script/json/jsonp
						    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': localStorage.getItem("usernamehyundai")},
						    success: function(data, textStatus, xhr) {
						    						    
						    	
						   },
						    error: function(xhr, textStatus, errorThrown) {
							
							
							alert('Could not connect to Server, make sure you are connected to Internet');
						   
						    }
						  });
						
}


function aboutprg(){
	

	    $("#navBdr").css('display', 'none');
        $("#navBdr_about").css('display', 'block');
        $("#navBdr_coupon").css('display', 'none');
        $("#navBdr_points").css('display', 'none');

		$("#MESSAGES").css('display', 'none');
		$("#ABOUT").css('display', 'block');
		$("#COUPONS").css('display', 'none');
		$("#POINTS").css('display', 'none');
		renderTemplatedetail('aboutus');
		//document.getElementById("barcontentplist").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
        
        $.mobile.changePage( "#mloyalpg", {transition: "flip"} );
  }   

function showInbox(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	//document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	//document.getElementById("headername").innerHTML='Messages';
	//var main = document.getElementById("cardcontent");
	//main.style.display = 'none';
	$("#navBdr").css('display', 'block');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'block');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('inbox', 'msg_history_json.asp');
	}
}
function showLoyalty(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Points';
	 var main = document.getElementById("cardcontent");
	main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'block');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'block');
    
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('loyalty', 'points_history_json.asp');
	}
}
function showCoupons(){
	/*if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{*/
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Coupons';
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'block');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'block');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	var str='';
			str = '<div class="coupon active">';
            str += '<h2 class="coupon_code">AJSPS123G</h2>';
            str += '<h3 class="validity">Valid Till : <span>31st Dec 2019</span></h3>';
            str += '<h3 class="coupon_no">December Delight</h3>';
            str += '<a href="#tnc">T&amp;C* </a>';
            str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl=AJSPS123G&choe=UTF-8" style="padding:10px;"/></div>';
            str += '<div class="coupon_state "></div>';
            str += '</div></div>';
		
		
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;
	//showTabContent('coupons', 'cpns_history_json.asp');
	//}
}
function showServices()
{
	openInWebView('https://www.hyundai.com/in/en/connect-to-service/hyundai-service/book-a-service');
}

function showclicktobuy()
{
	setTimeout(function(){
		openInWebView('https://clicktobuy.hyundai.co.in/#/customer/select-a-car','Click to Buy');		
	},700)
}

function showspurl(url)
{
	setTimeout(function(){
		openInWebView(url,'');		
	},700)
}
function showTnc()
{
	
		openInWebView('https://mmpdev.hyundai.co.in/autoever/tnc/tnc.html','Terms Of Use');		
	
}


function showTnc(url)
{

	setTimeout(function(){
		openInWebView(url,'Terms and Conditions');		
	},700)

}

function showRewards(){
	 $.mobile.changePage( "#rewards", { transition: "none"} ); 
	//openInWebView('http://mmpdev.hyundai.co.in/autoever/microsite/');
	//RewardsNA();
	/*
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn_star.png" class="mem_acc_icon_rewardstore"></span><span><a href="javascript:showcategories();"><img src="img/menu_icon.png" class="rewardstore_menu"></a></span>';
     document.getElementById("headername").innerHTML='Rewardstore';
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	showTabContent('rewardstore', 'coupons_json.asp');
	
	$("a[data-role='button']").button();
	}*/
}
function showcategories(){

    $.mobile.changePage( "#reward-cat", { transition: "none"} ); 
    showTabContent('reward-cat', 'categories_json.asp');
}
function showcatbrands(catid){
	//return;
 setTimeout(function(){
 	/*
	try{

	UXCam.tagScreenName("Coupon Page "+catid);  
	UXCam.logEvent("Coupon Page "+catid, "Coupon Page "+catid);
	 }
	catch(err)
	{
		
	}
	*/

	$("#reward-brand .ui-content").html('');
	if(catid == '')
    	$('#header_title').html('Tracker');
    else if(catid == 'All')
    	$('#header_title').html('All Offers');
    else if(catid == '2') 	
    	$('#header_title').html('Core');
    else if(catid == '3') 	
    	$('#header_title').html('Mobility');
    else
   		$('#header_title').html('Lifestyle');
    $.mobile.changePage( "#reward-brand", { transition: "none"} ); 
	//showTabContent('reward-brand', 'coupons_json.asp?cat_id='+catid);
	globalcatid = catid;
	if(catid == 'All')
		catid = '';
	$.ajax({
    url: SERVER1+'apis/view_issued_coupon_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': user.mobile,'cid':catid},
    success: function(data, textStatus, xhr) {
   // console.log('data in reward-brand'+JSON.stringify(data));
    
   

    if(data.data=='Coupons not available.')	
    {
    	

			$.mobile.changePage( "#failpage", { transition: "none"} );

			document.getElementById("errorfunction").href="javascript:showHome1()";
    		document.getElementById("faildesc").innerHTML = 'No Coupons Available!!';
    }
    else if(globalcatid == '')
    {

    	var str = '';
    	var noofacive=0;
		str += '<div class="lifestyle_slider owl-carousel owl-theme">';
    	for(var i=0;i<data.data.length;i++)
    	{
    	 if(data.data[i].CouponFlag == 'Activated')
	      {
	      	noofacive++;
	      	console.log(data.data[i].CouponFlag);
			  
			  	
			  	str += '<div class="coupon_block" style="background:url('+imgSERVER+data.data[i].BrandLogo+') no-repeat center">';
			  	str += '<div class="brand_name">';
			  //	str += '<h2>'+data.data[i].Brand+'</h2>';
				str += '</div>';
	            str += '<div class="coupon_block_inner">';
	            str += '<div class="coupon active">';
	            str += '<div class="text-center mb-20">';
	            str += '<div class="btn_wrapper">';
	            str += '<div class="coupon_flag">'+data.data[i].CouponFlag+'</div>';
	            str += '</div>';
	            str += '</div>';
	            str += '<ul class="active_c_details">';
	            str += '<li>';
	             if(data.data[i].vin_name!='')
	            str += '<h3>Vehicle Name:</h3> <span>'+data.data[i].vin_name+'</span>';
	        else
	        	str += '<h3>Vehicle Name:</h3> <span>Primary Vehicle</span>';
			  	str += '</li>';
			  	 str += '<li>';
	            str += '<h3>Vehicle Number :</h3> <span>'+data.data[i].vin_number+'</span>';
			  	str += '</li>';
	            str += '<li>';
	            str += '<h3>Category :</h3> <span>'+data.data[i].Category+'</span>';
			  	str += '</li>';
			  	str += '<li>';
			  	if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<h3>bs:</h3><span> '+data.data[i].BrandDescription+'</span>';
	            else
	            str += '<span> '+data.data[i].CouponDescription+'</span>';

			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Valid Till : </h3><span>'+data.data[i].CouponExpiry+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Offer Code : </h3><span>'+data.data[i].CouponCode+'</span>';
			  	str += '</li>';
	            
	            //str += '<input type="text" name="couponcode2" id="couponcode2" class="coupon_code active" value="'+data.data[i].CouponCode+'" readonly>';
	          	str += '<li>';
	            str += '<h3>Offer Statue : </h3><span>'+data.data[i].CouponFlag+'</span>';
			  	str += '</li>';
	          	str += '<li>';
	            str += '<h3>Offer Activation Date :</h3> <span>'+data.data[i].CouponActivationDate+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Offer Redeemed Date :</h3> <span></span>';
			  	str += '</li>';
	          
	            str += '</ul>';

	            try{

					brandlink=TNCURL+data.data[i].Brand.split(' ').join('_')+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';

				}
				catch(r)
				{

						brandlink=TNCURL+data.data[i].Brand+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


					

				}
	            str += '</div>';
	            //str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
	           // str += '<div class="coupon_state "></div>';
	            
	            
	      		                           
	            str += '</div></div>';
	    
	        //document.getElementById("activatecpn").href = "javascript:activatecoupon(\'"+data.data[i].CouponId+"\',\'"+data.data[i].CouponCode+"\',\'"+offername+"\',\'"+data.data[i].CouponExpiry+"\')";
	    
	      }
	      else
	      {
	      	// $.mobile.changePage( "#failpage", { transition: "none"} );

			//document.getElementById("errorfunction").href="javascript:showHome1()";
    		//document.getElementById("faildesc").innerHTML = 'No Active Coupon Found!';
	      }
    	}

		str += '</div>';
		setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)

		console.log(str);
		if(noofacive==0)
		{
			 $.mobile.changePage( "#failpage", { transition: "none"} );

			document.getElementById("errorfunction").href="javascript:showHome1()";
    		document.getElementById("faildesc").innerHTML = 'No Active Coupon Found!';
		}
		else
		{
			$("#reward-brand .ui-content").html(str);
    	    $('.lifestyle_slider').trigger('to.owl.carousel', [2,400,true] );
		}



    	
    }
    else if(globalcatid == 'All')
    {

    	var str = '';
		str += '<div class="lifestyle_slider owl-carousel owl-theme">';

		var limit=localStorage.getItem('limit');
		
		if(limit==null)
			limit=0;



		//alert(limit);
		
		var datalimit=data.data.length;

		if((parseInt(limit)+9)<=datalimit)
			datalimit=parseInt(limit)+9;
		


    	for(var i=0;i<datalimit;i++)
    	{
    		
			  
			  	
			  	str += '<div class="coupon_block" id=coupon_block'+i+' style="background:url('+imgSERVER+data.data[i].BrandLogo+') no-repeat center">';
			  	str += '<div class="brand_name">';
			  //	str += '<h2>'+data.data[i].Brand+'</h2>';
				str += '</div>';
	            str += '<div class="coupon_block_inner">';
	            str += '<div class="coupon active">';
	            str += '<div class="text-center mb-20">';
	            str += '<div class="btn_wrapper">';
	            str += '<div class="coupon_flag">'+data.data[i].CouponFlag+'</div>';
	            str += '</div>';
	            str += '</div>';
	            str += '<ul class="active_c_details">';
	             str += '<li>';
	             if(data.data[i].vin_name!='')
	            str += '<h3>Vehicle Name:</h3> <span>'+data.data[i].vin_name+'</span>';
	        else
	        	str += '<h3>Vehicle Name:</h3> <span>Primary Vehicle</span>';
			  	str += '</li>';
			  	 str += '<li>';
	            str += '<h3>Vehicle Number:</h3> <span>'+data.data[i].vin_number+'</span>';
			  	str += '</li>';
	           
	            str += '<li>';
	            str += '<h3>Category :</h3> <span>'+data.data[i].Category+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<span> '+data.data[i].BrandDescription+'</span>';
	            else
	            str += '<span> '+data.data[i].CouponDescription+'</span>';

			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Valid Till : </h3><span>'+data.data[i].CouponExpiry+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Offer Code : </h3><span>'+data.data[i].CouponCode+'</span>';
			  	str += '</li>';
	            
	            //str += '<input type="text" name="couponcode2" id="couponcode2" class="coupon_code active" value="'+data.data[i].CouponCode+'" readonly>';
	          	str += '<li>';
	            str += '<h3>Offer Statue : </h3><span>'+data.data[i].CouponFlag+'</span>';
			  	str += '</li>';
	          	str += '<li>';
	            str += '<h3>Offer Activation Date :</h3> <span>'+data.data[i].CouponActivationDate+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Offer Redeemed Date :</h3> <span></span>';
			  	str += '</li>';
	          
	            str += '</ul>';

	            	            try{

					brandlink=TNCURL+data.data[i].Brand.split(' ').join('_')+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';

				}
				catch(r)
				{

						brandlink=TNCURL+data.data[i].Brand+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


					

				}

	            str += '</div>';
	            //str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
	           // str += '<div class="coupon_state "></div>';
	            
	            
	      		                           
	            str += '</div></div>';
	    
	        //document.getElementById("activatecpn").href = "javascript:activatecoupon(\'"+data.data[i].CouponId+"\',\'"+data.data[i].CouponCode+"\',\'"+offername+"\',\'"+data.data[i].CouponExpiry+"\')";
	        
	          if(i==data.data.length)
	          	localStorage.setItem('limit','0');
              else
	          localStorage.setItem('limit',i);
	      
    	}

		str += '<div class="browse_all"><a href="javascript:showcatbrands(\'All\');"><img src="images/browse_all.png" class="img-responsive" alt="" /><span>Browse More</span></a></div>';
		str += '</div>';

		
		setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				dots:true,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				startPosition: parseInt(localStorage.getItem('limit'))-8,
				autoplay:false,
    			autoWidth:false,
    			pagination:false, navigation:true,
			  	navText: ['<','>']
			});
		},100)
    	$("#reward-brand .ui-content").html(str);

    	$('.lifestyle_slider').trigger('to.owl.carousel', [2,400,true] );
    	console.log('coupon_block'+localStorage.getItem('limit'));
    }
    else
    {
    renderTemplate('reward-brand', data);
    localStorage.setItem('data1',JSON.stringify(data));
    }

   },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
}, 700)
}


function showcatbrands_new(catid){
	//return;
 setTimeout(function(){
 	/*
	try{

	UXCam.tagScreenName("Coupon Page "+catid);  
	UXCam.logEvent("Coupon Page "+catid, "Coupon Page "+catid);
	 }
	catch(err)
	{
		
	}
	*/

	$("#reward-brand .ui-content").html('');
	if(catid == '')
    	$('#header_title').html('Tracker');
    else if(catid == 'All')
    	$('#header_title').html('All Offers');
    else if(catid == '2') 	
    	$('#header_title').html('Core');
    else if(catid == '3') 	
    	$('#header_title').html('Mobility');
    else
   		$('#header_title').html('Lifestyle');
    $.mobile.changePage( "#reward-brand", { transition: "none"} ); 
	//showTabContent('reward-brand', 'coupons_json.asp?cat_id='+catid);
	globalcatid = catid;
	if(catid == 'All')
		catid = '';
	$.ajax({
    url: REWARDSERVER+'coupons_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'cat_id':catid},
    success: function(data, textStatus, xhr) {
    console.log('data in reward-brand'+JSON.stringify(data));
    
   

    if(data.data=='Coupons not available.')	
    {

			$.mobile.changePage( "#failpage", { transition: "none"} );

			document.getElementById("errorfunction").href="javascript:showHome1()";
    		document.getElementById("faildesc").innerHTML = 'No Coupons Available!!';
    }
    /*else if(globalcatid == '')
    {

    	var str = '';
		str += '<div class="lifestyle_slider owl-carousel owl-theme">';
    	for(var i=0;i<data.data.length;i++)
    	{
    		if(data.data[i].CouponFlag == 'Activated')
	      {
			  
			  	
			  	str += '<div class="coupon_block" style="background:url('+imgSERVER+data.data[i].BrandLogo+') no-repeat center">';
			  	str += '<div class="brand_name">';
			  	str += '<h2>'+data.data[i].Brand+'</h2>';
				str += '</div>';
	            str += '<div class="coupon_block_inner">';
	            str += '<div class="coupon active">';
	            str += '<div class="text-center mb-20">';
	            str += '<div class="btn_wrapper">';
	            str += '<div class="coupon_flag">'+data.data[i].CouponFlag+'</div>';
	            str += '</div>';
	            str += '</div>';
	            str += '<ul class="active_c_details">';
	            str += '<li>';
	             if(data.data[i].vin_name!='')
	            str += '<h3>Vehicle Name:</h3> <span>'+data.data[i].vin_name+'</span>';
	        else
	        	str += '<h3>Vehicle Name:</h3> <span>Primary Vehicle</span>';
			  	str += '</li>';
			  	 str += '<li>';
	            str += '<h3>Vehicle Number :</h3> <span>'+data.data[i].vin_number+'</span>';
			  	str += '</li>';
	            str += '<li>';
	            str += '<h3>Category :</h3> <span>'+data.data[i].Category+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Coupon Detail :</h3><span> '+data.data[i].BrandDescription+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Valid Till : </h3><span>'+data.data[i].CouponExpiry+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Coupon Code : </h3><span>'+data.data[i].CouponCode+'</span>';
			  	str += '</li>';
	            
	            //str += '<input type="text" name="couponcode2" id="couponcode2" class="coupon_code active" value="'+data.data[i].CouponCode+'" readonly>';
	          	str += '<li>';
	            str += '<h3>Coupon Statue : </h3><span>'+data.data[i].CouponFlag+'</span>';
			  	str += '</li>';
	          	str += '<li>';
	            str += '<h3>Coupon Activation Date :</h3> <span>'+data.data[i].CouponActivationDate+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Coupon Redeemed Date :</h3> <span></span>';
			  	str += '</li>';
	          
	            str += '</ul>';
	            str += '</div>';
	            //str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
	           // str += '<div class="coupon_state "></div>';
	            
	            
	      		                           
	            str += '</div></div>';
	    
	        //document.getElementById("activatecpn").href = "javascript:activatecoupon(\'"+data.data[i].CouponId+"\',\'"+data.data[i].CouponCode+"\',\'"+offername+"\',\'"+data.data[i].CouponExpiry+"\')";
	    
	      }
    	}
		str += '</div>';
		setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)
    	$("#reward-brand .ui-content").html(str);
    }
    else if(globalcatid == 'All')
    {

    	var str = '';
		str += '<div class="lifestyle_slider owl-carousel owl-theme">';

		var limit=localStorage.getItem('limit');
		if(limit==null)
			limit=0;



		//alert(limit);
		
		var datalimit=data.data.length;

		if((parseInt(limit)+9)<=datalimit)
			datalimit=parseInt(limit)+9;

    	for(var i=0;i<datalimit;i++)
    	{
    		
			  
			  	
			  	str += '<div class="coupon_block" id=coupon_block'+i+' style="background:url('+imgSERVER+data.data[i].BrandLogo+') no-repeat center">';
			  	str += '<div class="brand_name">';
			  	str += '<h2>'+data.data[i].Brand+'</h2>';
				str += '</div>';
	            str += '<div class="coupon_block_inner">';
	            str += '<div class="coupon active">';
	            str += '<div class="text-center mb-20">';
	            str += '<div class="btn_wrapper">';
	            str += '<div class="coupon_flag">'+data.data[i].CouponFlag+'</div>';
	            str += '</div>';
	            str += '</div>';
	            str += '<ul class="active_c_details">';
	             str += '<li>';
	             if(data.data[i].vin_name!='')
	            str += '<h3>Vehicle Name:</h3> <span>'+data.data[i].vin_name+'</span>';
	        else
	        	str += '<h3>Vehicle Name:</h3> <span>Primary Vehicle</span>';
			  	str += '</li>';
			  	 str += '<li>';
	            str += '<h3>Vehicle Number:</h3> <span>'+data.data[i].vin_number+'</span>';
			  	str += '</li>';
	           
	            str += '<li>';
	            str += '<h3>Category :</h3> <span>'+data.data[i].Category+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Coupon Detail :</h3><span> '+data.data[i].BrandDescription+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Valid Till : </h3><span>'+data.data[i].CouponExpiry+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Coupon Code : </h3><span>'+data.data[i].CouponCode+'</span>';
			  	str += '</li>';
	            
	            //str += '<input type="text" name="couponcode2" id="couponcode2" class="coupon_code active" value="'+data.data[i].CouponCode+'" readonly>';
	          	str += '<li>';
	            str += '<h3>Coupon Statue : </h3><span>'+data.data[i].CouponFlag+'</span>';
			  	str += '</li>';
	          	str += '<li>';
	            str += '<h3>Coupon Activation Date :</h3> <span>'+data.data[i].CouponActivationDate+'</span>';
			  	str += '</li>';
			  	str += '<li>';
	            str += '<h3>Coupon Redeemed Date :</h3> <span></span>';
			  	str += '</li>';
	          
	            str += '</ul>';
	            str += '</div>';
	            //str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
	           // str += '<div class="coupon_state "></div>';
	            
	            
	      		                           
	            str += '</div></div>';
	    
	        //document.getElementById("activatecpn").href = "javascript:activatecoupon(\'"+data.data[i].CouponId+"\',\'"+data.data[i].CouponCode+"\',\'"+offername+"\',\'"+data.data[i].CouponExpiry+"\')";
	          if(i==data.data.length)
	          	localStorage.setItem('limit','0');
              else
	          localStorage.setItem('limit',i);
	      
    	}
		str += '<div class="browse_all"><a href="javascript:showcatbrands(\'All\');"><img src="images/browse_all.png" class="img-responsive" alt="" /><span>Browse More</span></a></div>';
		str += '</div>';
		setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				dots:true,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				autoplay:false,
    			autoWidth:false,
    			pagination:false, navigation:true,
			  	navText: ['<','>']
			});
		},100)
    	$("#reward-brand .ui-content").html(str);

    	$('.lifestyle_slider').trigger('to.owl.carousel', [2,400,true] );
    	console.log('coupon_block'+localStorage.getItem('limit'));
    }*/
    else
    {
    renderTemplate('reward-brand', data);
    localStorage.setItem('data_1',JSON.stringify(data));
    }

   },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
}, 700)
}


function shownotbrands(){
/*
	try{

	UXCam.tagScreenName("Notitication Page");  
	UXCam.logEvent("Notitication Page", "Notitication Page");
	 }
	catch(err)
	{
		
	}
	*/

		$('#header_title').html('Notitication');
    $.mobile.changePage( "#not-brand", { transition: "none"} ); 
	//showTabContent('reward-brand', 'coupons_json.asp?cat_id='+catid);
	
	$.ajax({
   
   url: SERVER+'not_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'mno': localStorage.getItem('usernamehyundai')},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
    
   

    if(data.length==0)	
    {

			$.mobile.changePage( "#failpage", { transition: "none"} );

			document.getElementById("errorfunction").href="javascript:showHome1()";
    		document.getElementById("faildesc").innerHTML = 'No Notitication Available!!';
    }
    else 
    {

    	var str = '';
		str += '<div class="lifestyle_slider owl-carousel owl-theme">';
    	for(var i=0;i<data.length;i++)
    	{
    		
                str += '<div class="coupon_block">';
	            str += '<div class="coupon_block_inner">';
                str += '<div class="coupon active">';
                str += '<div class="alpha">';
			 	//str += '<div class="c_qr">';
	            //str += '<img src="https://chart.googleapis.com/chart?'+data.data[i].CouponCode+'&chs=150x150" alt="" >';
	           if(data[i].image!='')
	                    str += '<img src="'+data[i].image+'" alt="" class="img-responsive" >';
	            else
	            	  str += '<img src=\'images/n_icon.png\' alt="" class="img-responsive" >';
	            	
				//str += '</div>';
	            //str += '<p style="font-size: 17px;">Coupon Detail : '+data[i].msg+'</p>';
	            str += '<p style="font-size: 17px;">'+data[i].msg+'</p>';
	           // str += '<h3 class="validity">Valid Till : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	            str += '</div>';
	           
			//str += '<p class="txtSmallMenu_offer">T&amp;C Apply* </p>';
			str += '</div>';
	            
	            
	      		                           
	            str += '</div></div>';
	    
	       
	      
    	}
		str += '</div>';
		setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)
    	$("#not-brand .ui-content").html(str);
    }
   

   },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
}
function viewcart(){
	var main = document.getElementById("cardcontent");
	main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	  renderTemplate('viewcart',cart);
	  $("a[data-role='button']").button();

	 
}

function showSpecial(){
	
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#page-forgot-password", { transition: "none"} ); 
	}
   
	else
	{
	//document.getElementById("barcontentspecials").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	$.mobile.changePage( "#specials", { transition: "none"} );
	//document.getElementById("left-panel").panel( "close" );
	try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	//renderTemplate('specials', '');
	showTabContent('specials', 'specials_json.asp');
	}
	
}

function gobackfromstore()
{
    if(backstore=='home')
    {
        showHome1();
    }
    else if(backstore=='store')
    {
        showStores();
    }
}

function showStores(){
	
	backstore = 'home';
	openInWebView('https://www.hyundai.com/in/en/buy-a-car/find-a-dealer-and-website');
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	//$.mobile.changePage( "#stores", { transition: "none"} );

	
	//showTabContent('citylist', 'city_locator_json.asp');


}

function getCityId(id)
{
       city_id=id;
	   backstore = 'store';
	   $.mobile.changePage( "#stores", { transition: "none"} );
	   showTabContent('centre', 'store_locator_json.asp?city='+city_id);
	  
      
}


function showTabContent_Map(addr,ind) {
var url="https://delhidaredevilsadda.com/latlong.php";
 console.log(url+'&addr='+addr);
	$.getJSON(
		url, {
		//page: url,
		addr : addr
	}, function (json) {
       console.log("SSSS"+JSON.stringify(json));
	  
	    
		var lat,lng;
		try
		{
		lat=json.results[0].geometry.location.lat;
		lng=json.results[0].geometry.location.lng;	
		}
		catch (err)
		{
			lat="";
			lng="";
		}
        
		
		if(lat !="" && lng !="")
			{
			 drawMap(new google.maps.LatLng(lat, lng),ind);
			//openInWebView('http://maps.google.com/maps/api/staticmap?center='+lat+','+lng+'&zoom=14&amp;size=304x250&scale=2&amp;sensor=false&markers=color:green|'+lat+','+lng+'&key=AIzaSyCAAjJ5FAg8NmaZ9594yQXq-t1HzcgYocs&size=279x183');
			}
			else
			{
				toast("Location could not be traced");
			}
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

   function drawMap(latlng,index) {
	   
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			

			var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById(index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }



function showTabContent_Map1(addr) {
var url="https://maps.googleapis.com/maps/api/geocode/json";
	$.getJSON(
		url, {
		//page: url,
		latlng : addr,
		sensor : 'false'
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json.results[0].address_components[3]));
		
		for(var i=0;i<json.results[0].address_components.length;i++)
		{
		console.log("SSSS"+JSON.stringify(json.results[0].address_components[i].types[0]));
		if(json.results[0].address_components[i].types[0]=='locality')
			{
        var cityname= json.results[0].address_components[i].long_name;
        if(cityarr.indexOf(cityname))
				{
			  var j = cityarr.indexOf(cityname);
			  getCityId(cityidarr[j]);
				}
			}
		}
		
		
		
		
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function showTabContent(id, url) {
console.log("url"+url);
var tabserver='';
if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
	{
	tabserver = REWARDSERVER;
	}
else
	{
	
	tabserver = SERVER;
	}

	$.getJSON(
		tabserver+url, {
		//page: url,
		mno : user.mobile
	}, function (json) {
       console.log("SSSS"+JSON.stringify(json));
			
		renderTemplate(id, json);
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function openInWebView(url,str)
	{

			
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
         // alert('window.localStorage.mode'+window.localStorage.mode);
         if(url.indexOf('http')>=0){
          if(window.localStorage.mode == "dark") {



		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#000000'
    },
    toolbar: {
        height: 50,
        color: '#000000'
    },
    title: {
     color: '#3399cc',
     marginLeft: '30px',
     align: "left",
     showPageTitle: true,
     staticText: str, 
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'images/browser_header_back.png',
    	wwwImagePressed: 'images/browser_header_back.png',
        align: 'left',
        marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            wwwImage: '',
    		wwwImagePressed: '',
    		wwwImageDensity: 1,
    		event: ''
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


          }
else
{

		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#ffffff'
    },
    toolbar: {
        height: 50,
        color: '#ffffff'
    },
    title: {
     color: '#3399cc',
     marginLeft: '-10px',
     align: "left",
     showPageTitle: true,
     staticText: str, 
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'images/browser_header_back.png',
    	wwwImagePressed: 'images/browser_header_back.png',
        align: 'left',
        marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            wwwImage: '',
    		wwwImagePressed: '',
    		wwwImageDensity: 1,
    		event: ''
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});



}
}
else {
	 toast('Online redemption not applicable!');
	}

	
	}


function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	//console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="img/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsBonus" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="rIcon"><span>Bonus Points :' + json.bonuspoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("POINTS").innerHTML=str;   
		
		
		break;
	case 'specials':
		//json = JSON.parse('[{"AdName":"Whatsnew1","AdDesc":"Whatsnew1","AdImgURL":"./images/whats-new-1.png","AdVideoURL":null},{"AdName":"Whatsnew2","AdDesc":"Whatsnew2","AdImgURL":"./images/whats-new-2.png","AdVideoURL":null}]');
		
		if(json.length == 0)
		{
			str = 'No New Offers Found';
		}
		else
		{
			str += '<div class="whats_new_slider owl-carousel owl-theme">';
			for (var i=0;i<json.length;i++ )
			{
			
			 console.log('Video:'+json[i].AdVideoURL);
			  if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
				    str += '<div class="wn_offer">';
					//str += '<h3>'+json[i].AdName+'</h3>';
					//str += '<p>'+json[i].AdDesc+'</p>';
					str += '<a href=javascript:showspurl(\''+json[i].AdLinkURL+'\')><img src='+imgSERVER+'/m/'+json[i].AdImgURL+' alt="" class="img-responsive" /></a>';
					str += '</div>';
			 
				}
				else
				{
					 console.log('Img:'+json[i].AdVideoURL);
					str += '<div class="specials7">';
					//str += '<h3>'+json[i].AdName+'</h3>';
					//str += '<p>'+json[i].AdDesc+'</p>';
					str += '<video width="320" height="240" controls="controls" poster='+imgSERVER+'/m/'+json[i].AdImgURL+' onClick=this.play();>';
					str += '<source src='+json[i].AdVideoURL+'  this.play();/>';
					str += '</video>';
					str += '</div>';
				}
			}
			
			str += '</div>';
			
		}
        setTimeout(function(){
			var _owl2 = $(".whats_new_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:false,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)
		document.getElementById("spec").innerHTML=str;  
		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = 'No Coupons Found';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
            str += '<div>';
            if(json.data[i].couponstatus == 'Active')
            {
                str += '<div class="coupon active">';
            }
         else
            {
                str += '<div class="coupon inactive">';
            }
            str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
            str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
            str += '<h3 class="coupon_no">'+json.data[i].offername+'</h3>';
            str += '<a href="#tnc">T&amp;C* </a>';
            str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
            str += '<div class="coupon_state "></div>';
            str += '</div></div>';
		
		}
		}
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;
		break;
	case 'inbox':
		
		console.log('json'+JSON.stringify(json));
		
		str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		for(var i=0;i<json.length;i++ )
		{
		str += '<li data-icon="false">';
        str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
		str += '<img src="img/open.png" class="msgImg"/>';
        str += '</div><div class="ui-block-b" style="width:85%;">';
        str += '<div class="MsgBlk"><span class="MsgBdr">';
        str += '<span class="msghdr">DM-CafeWL</span><span class="msgTime">'+json[i].msgtime+'</span>';
		str += '<span class="msgDate">' + json[i].msgdate + '</span>';
        str += '<span class="msgTxt">'+json[i].msg+'</span>';
        str += '</span></div></div></div></li>';
	
		}
		
		str +='</ul>';
		document.getElementById("MESSAGES").innerHTML=str;
		break;


		case 'centre':
   //console.log('inside centre');
      console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('Online')==0)
   continue;
   
  
      str += '<li data-icon="false" class="storeList"><h3 class="storeName">'+json[i].storename+','+json[i].storelocation+'</h3><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }
  //str +='<div  id=map-canvas'+i+' style="height:300px;width:400px;"></li>';
  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;
  /*for (var i=0;i<json.length;i++ )
  {
   if(json[i].storename.indexOf('Email Admin')==0)
   continue;
   
      showTabContent_Map(json[i].storeaddress,i);
  }*/
   $('#ul_locator_sub').listview();
  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	     console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			if(json.data[i].cityid!='9')
			{
				cityidarr[i]=json.data[i].cityid;
				cityarr[i]=json.data[i].cityname;
				//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
				str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
			}
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands(\'lifestyle\');" class="lt_shop_a"><h2>Lifestyle</h2></a></li>';
   str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands(\'mygarage\');" class="lt_shop_a"><h2>My Garage</h2></a></li>';
   str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands(\'mobility\');" class="lt_shop_a"><h2>Mobility</h2></a></li>';
   /*for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }*/
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   var brandarr=[];
   //console.log('json'+JSON.stringify(json)); 
			str += '<div class="lifestyle_slider owl-carousel owl-theme">';

			console.log('JSON'+JSON.stringify(json.data));
   for (var i=0;i<json.data.length;i++ )
  {
  		/*
   		str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
		str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
		str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
		str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
		str += '<div class="ui-block-b wid40"><div class="flt_rght">';
		str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
		str += '</div></div></div><hr class="style-one">';
		str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
		str += '</span></div></div></div></div>';
		str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
		str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   		*/
   		//console.log('json.data[i].Brand'+json.data[i].Brand);


   		if(!brandarr.includes(json.data[i].BrandId))
   		{
   			brandarr.push(json.data[i].BrandId);
   			//if(json.data[i].BrandId=='26')
   			//	str += '<a href="#" class="offer_btm btn_animation" onclick = "javascript:openInWebView(\'https://www.eazydiner.com/delhi-ncr?loc=chandni-chowk-north-delhi\');" style="background:url('+imgSERVER+json.data[i].BrandLogo+') no-repeat center">';
   			//else if(json.data[i].BrandId=='27')
   			//	str += '<a href="#" class="offer_btm btn_animation" onclick = "javascript:openInWebView(\'https://www.oyorooms.com/\');" style="background:url('+imgSERVER+json.data[i].BrandLogo+') no-repeat center">';
   			//else
   				str += '<a href="#" class="offer_btm btn_animation" onclick = "javascript:getVoucher(\''+json.data[i].BrandId+'\', \''+json.data[i].Brand+'\');" >';
			
	        str +='<div class="coupon_img"><img src="'+imgSERVER+json.data[i].BrandLogo+'" class="img-responsive"></div>';
			
           //  str += '<a class="coupon_close1" href="#" data-rel="back">+</a>';
			str += '<div class="brand_name">';
		  //str += '<h2>'+brandname+'</h2>';
            str += '</div>';
	        //str += '<div class="ui-grid-solo">';			
	        str += '<div class="ls_block">';
/*	        if(json.data[i].BrandId=='5')
	        {
	        	
	        	str += '<h1 class="offer_heading">Special Offer <strong><a href="javascript:openInWebView(\'https://gaana.com/\');">'+json.data[i].Brand+'</a></strong></h1>';
	        }
	        else
	        {
			str += '<h1 class="offer_heading">Special Offer <strong>'+json.data[i].Brand+'</strong></h1>';
			}*/
			str += '<h1 class="offer_heading">'+json.data[i].Brand+'</h1>';
			//str += '<h2 class="brand_desc">'+json.data[i].BrandDescription+'</h2>';
			//str += '<p class="txtSmallMenu_offer">*Terms &amp; Conditions apply</p>';
	        
	       // str += '<div class="ui-block-b width30 rew_img"><img src="'+imgSERVER+json.data[i].BrandLogo+'" class="img-responsive" alt=""></div>';
			//str += '</div>';
	        str += '<div class="text-center mt-10">';
	        //str += '<div class="btn_wrapper p_relative">';
			str += '<span class="btn_primary " data-role="none" >View Offers</span>';                               

	        //str += '</div>';
			str += '</div>';
	        str += '</div>';
	        str += '</a>';
    	}	
 
  		}
		str += '</div>';
			
			setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:true,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)
			
			
			
        $("#" + pageID + " .ui-content").html(str);
			
			
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="https://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_facebook':
		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.summary.total_count;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				//<!--<div class="f_hdr_time" id="f_hdr_time">'+jQuery.timeago(json.data[i].updated_time)+'</div>-->
				//str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.data[i].from.name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.data[i].from.category+'</span></div>';
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
				{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
				}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><div class=f_bdy_likes>'+lk+' Likes</div><hr class=hori /><div class=f_bdy_lcs><span><img src=img/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=img/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=img/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':
		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:25%;"><img src="img/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:75%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':

		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;

		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':

		var json = JSON.parse(json)
		var length = JSON.stringify(json.images.length);

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/>';
				//str+='<span class="f_hdr_desc" id="f_hdr_desc">'+json.images[i].node.edge_media_to_caption.edges[0].node.text+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.images[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.images[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Offer Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}


function renderTemplatedetail(pageID) {
var str = '';



	switch (pageID) {
		
		case 'aboutus':

			console.log('cardname:-'+user.firstname+' '+user.lastname);
			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
			
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			document.getElementById("tpoint").innerHTML = 'POINTS: ' +user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+user.mobile+'&choe=UTF-8" style="padding:10px;"/>';

			if(parseInt(user.balance)>=0 && parseInt(user.balance)<=2500)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
			   //document.getElementById('topslab').className = '';

		       document.getElementById('silverslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Silver Member';
            }
            else if(parseInt(user.balance)>=2501 && parseInt(user.balance)<=10000)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
			   //document.getElementById('topslab').className = '';

		       document.getElementById('goldslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Gold Member';
            }
			/*else if(parseInt(user.balance)>=25001 && parseInt(user.balance)<=50000)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
			   document.getElementById('topslab').className = '';

		       document.getElementById('platinumslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Gold Member';
            }*/
            else if(parseInt(user.balance)>=10001)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
			   //document.getElementById('topslab').className = '';

		       document.getElementById('platinumslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Diamond Member';
            }

			break;

		case 'page-card':
			
			document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpoint").innerHTML = tstr;
			document.getElementById("barimg").innerHTML = '<img src="https://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';

			document.getElementById("headername").innerHTML='Membership';
			 
			break;


			case 'page-card-punch':
			
			


						document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
			var pstr='<span style="color:#ffffff;"><br><br>';
			console.log("user.visit_frequency)"+user.visit_frequency);
            //user.visit_frequency='2';
			console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
			 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star11.png"/>';
			}
			 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star.png"/>';
			}
			pstr +='</span>'
			console.log("pstr"+pstr);



            document.getElementById("card_punches").innerHTML =pstr;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		   
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpunch").innerHTML = tstr;
			
			document.getElementById("headernamepunch").innerHTML='Membership';
			break;

		    case 'shop':
            str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
            str +='</ul>';
			
            $("#" + pageID + " .ui-content").html(str);
    $('#ul_shop').listview();
   break;
  
	}
	}





function shareMessagefb(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
	window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
}

function shareMessagetw(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
      window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
	window.plugins.socialsharing.share(msg,brandname);
}

function showTabContentRSS(id, url) {
  if(url==json_fb)
	{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json);

     

          localStorage.setItem('facebook_hyundai',JSON.stringify(json.item));
     

    

       }).error(function () {
		 try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('facebook_hyundai')));
		 }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 
}
if(url==RSS_youtube)
{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.feed.entry);

     

          localStorage.setItem('youtube_hyundai',JSON.stringify(json.feed.entry));
     

    

       }).error(function () {
		   try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('youtube_hyundai')));
		   }
		   catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_twitter)
{


  $.ajax({
                url: url,
                type: 'GET',
                timeout: 50000,
				dataType: 'json',
                success: function (data, textStatus, xhr) {

				console.log(JSON.stringify(data));
				renderTemplate(id, data);

			
            //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
            localStorage.setItem('twitter_hyundai', JSON.stringify(data));
                },
                error: function (xhr, textStatus, errorThrown) {
					var err = eval("(" + xhr.responseText + ")");

					alert(err.Message);

                  try {
				} catch (err)
				{
					renderTemplate(id, JSON.parse(localStorage.getItem('twitter_hyundai')));
					//alert('here in catch');
				}
            //alert("Oops network error!!Please try again");
                }
            });


}
else if(url==RSS_pinterest)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.body);
			
     
		  console.log(JSON.stringify(json.body));
          localStorage.setItem('pinterest_hyundai',JSON.stringify(json.body));
       

    

       }).error(function () {
		   try{
			    renderTemplate(id,JSON.parse(localStorage.getItem('pinterest_hyundai')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 

}
else if(url==RSS_tumblr)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('tumblr_hyundai',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('tumblr_hyundai')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_instagram)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.user);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('instagram_hyundai',JSON.stringify(json.user));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('instagram_hyundai')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}



 
}
//newfeedback
function changeRate(element)
{

	//var tImage = document.getElementById('rate_img');

	if(element=='b_icon1')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','0.4');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='1';
		document.getElementById("fdbk_text").innerHTML='Poor';
		//tImage.src = 'assets/images/rating_img.png';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon2')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='2';
		document.getElementById("fdbk_text").innerHTML='Fair';
		
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon3')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='3';
		document.getElementById("fdbk_text").innerHTML='Good';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon4')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','0.4');
		rating='4';
		document.getElementById("fdbk_text").innerHTML='Awesome';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon5')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','1');
		rating='5';
		document.getElementById("fdbk_text").innerHTML='Excellent';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else
	{
		rating='0';
	}
}

function rateFeed(){
	console.log("Rating:"+rating+" by:"+user.mobile);
}

/*$(document).on('pageshow', '#reward-brand', function (event, ui) {
	
	var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });
	
		$(".offer_btm").on("swipeup", function(){
			console.log("26");
			//$.mobile.changePage( "#reward-brand", { transition: "slideup"} ); 
		})
})*/



$(document).on('pageshow', '#feedback', function (event, ui) {

	$('#feed_mobile').val(user.mobile);
	loadLocation();

});

function submitFeedback(){

// console.log("Rating:"+rating);

 var range=$('input[name="radio-choice-a"]:checked').val();
 var quality=$('input[name="radio-choice-b"]:checked').val();
 var valueformoney=$('input[name="radio-choice-c"]:checked').val();
 var staff=$('input[name="radio-choice-d"]:checked').val();
 var satisfaction=$('input[name="radio-choice-e"]:checked').val();
 var ambience=$('input[name="radio-choice-f"]:checked').val();
 var shopagain=$('input[name="radio-choice-g"]:checked').val();
 var refer=$('input[name="radio-choice-h"]:checked').val();
 var mobile=$('#feed_mobile').val();
 var bill_loc = $('#bill_loc').val();
 var comments=$('#feed_suggestion').val();


 if(mobile==''){
		  toast('Please enter mandatory fields!');
		}
 else{

   $.ajax({
   url: SERVER+'feedback_json.asp', //login.php
    type: 'GET',
    timeout: 50000,
    dataType: 'html', //xml/html/script/json/jsonp
    data: {

				'MobileNo': user.mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': bill_loc,    
				'Var1': range,   
				'Var2': quality,     
				'Var3': valueformoney, 
				'Var4': staff,    
				'Var5': satisfaction,      
				'Var6': ambience,     
				'Var7': shopagain,        
				'Var8': refer,             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': comments,
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
					
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));

				$('#feedfrm').hide();

				$('#feedbackmsg').html('Thanks for submitting your feedback.');

				$('input[name="radio-choice-a"]').attr('checked', false);
				$('input[name="radio-choice-a"]').prop('checked',false);
				$('input[name="radio-choice-b"]').attr('checked', false);
				$('input[name="radio-choice-b"]').prop('checked',false);
				$('input[name="radio-choice-c"]').attr('checked', false);
				$('input[name="radio-choice-c"]').prop('checked',false);
				$('input[name="radio-choice-d"]').attr('checked', false);
				$('input[name="radio-choice-d"]').prop('checked',false);
				$('input[name="radio-choice-e"]').attr('checked', false);
				$('input[name="radio-choice-e"]').prop('checked',false);
				$('input[name="radio-choice-f"]').attr('checked', false);
				$('input[name="radio-choice-f"]').prop('checked',false);
				$('input[name="radio-choice-g"]').attr('checked', false);
				$('input[name="radio-choice-g"]').prop('checked',false);
				$('input[name="radio-choice-h"]').attr('checked', false);
				$('input[name="radio-choice-h"]').prop('checked',false);

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}
//ends here

function playvideo(url)
{
	
	//window.plugins.videoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
	openInWebView(url); 

}


function mobilecoupon()
{
	var mainpop = document.getElementById('mainpop'); 
    mainpop.style.display = 'none';
	var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
	var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'block';
	$.ajax({
			url: SERVER+'get_active_voucher_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				mobileno: user.mobile,
				
							
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						smallImage1.innerHTML = '<div>You will shortly receive a sms with your mobile coupon</div>';
						

				}
			
	
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	
}

function showRewards1(){
	try{
		popupCloseRight1.remove();
	}catch(err) 
	{	}
		showRewards();
}


function showHome(){
 $.mobile.changePage( "#page-card", { transition: "none"} ); 
 var oth = document.getElementById("othercontent");
 var main = document.getElementById("cardcontent");  
 oth.style.display = 'none';
 main.style.display = 'block';
 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	
 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
 document.getElementById("headername").innerHTML='Membership';	
}
function showrewardspage()
{
	showcatbrands(globalcatid);
}
function showHome1(){
	
 $.mobile.changePage( "#homepage", { transition: "none"} ); 

 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	

}
function showLogin()
{
	 localStorage.clear();
	 $.mobile.changePage( "#page-forgot-password", { transition: "none"} ); 
}

function successHandler (result) {
	//alert('Callback Success! Result = '+result)
	}
function errorHandler(error) {
	 //alert(error);
	}

function receivedEventDummy(id) {
	var str = '';
	str +='<div class="notification_section">';
	str +='<div class="notification_overlay">';
	str +='</div>';
	str +='<div class="notification_pop">';
	str +='<a class="notification_close" onclick="closePop()">+</a>';
	str +='<div class="notification_block">';
	str +='<p class="notification_msg">Set your new tab and homepage to Yahoo to keep up with the latest news.</p>';
	str +='</div>';
	str +='</div>';
	str +='</div>';	
	$("#homepage").prepend(str);
	
};
function receivedEvent(id) {
       				
/*
 var push = PushNotification.init({ "android": {"senderID": "668824291290"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
					 alert(reg_id);
					 localStorage.setItem("reg_id",reg_id);
                     });
                   
                     push.on('notification', function(data) {
						//alert(data.message);
						//showInbox();
						 var str = '';
						 str +='<div class="notification_section">';
						 str +='<div class="notification_overlay">';
						 str +='</div>';
						 str +='<div class="notification_pop">';
						 str +='<a class="notification_close" onclick="closePop()">+</a>';
						 str +='<div class="notification_block">';
						 str +='<p class="notification_msg">'+data.message+'</p>';
						 str +='</div>';
						 str +='</div>';
						 str +='</div>';	
					     $("#homepage").prepend(str);
                     });
          
                     push.on('error', function(e) {
						//alert(e);
						 
						 str +='<p class="notification_msg">'+e+'</p>';
						 $("#homepage").prepend(str);
                     });
					
					
	*/


	const push = PushNotification.init({
			android: {
				senderID: '668824291290'
			},
		    browser: {
		        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
		    },
			ios: {
				alert: "true",
				badge: "true",
				sound: "true"
			},
			windows: {}
		});

		push.on('registration', (data) => {
				 reg_id=data.registrationId;
				 //alert(reg_id);
				localStorage.setItem("reg_id",reg_id);
		});

		push.on('notification', (data) => {


						 var str = '';
						 str +='<div class="notification_section">';
						 str +='<div class="notification_overlay">';
						 str +='</div>';
						 str +='<div class="notification_pop">';
						 str +='<a class="notification_close" onclick="closePop()">+</a>';
						 str +='<div class="notification_block">';
						 str +='<p class="notification_msg">'+data.message+'</p>';
						 str +='</div>';
						 str +='</div>';
						 str +='</div>';	
					     $("#homepage").prepend(str);
			// data.message,
			// data.title,
			// data.count,
			// data.sound,
			// data.image,
			// data.additionalData
		});

		push.on('error', (e) => {
			 str +='<p class="notification_msg">'+e+'</p>';
						 $("#homepage").prepend(str);
		});

				
    }

function closePop(){
		$(".notification_section").remove();
	}

function getContacts(){


 try{
 var optFilter = new ContactFindOptions();
 optFilter.filter = "";  // to return all contacts
 optFilter.multiple = true; // return multiple results
 var fields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers];
 
 // get all contacts
 navigator.contacts.find(fields,gcsSuccess, gcsError, optFilter);
 }
 catch(err)
 {
     txt="There was an error loading contacts.\n\n"; 
     txt+="Error description: " + err.message + "\n\n"; 
    // alert(txt); 
    
 }
}

/* get all contacts success */
function gcsSuccess(contacts){
 
 //alert("Contact sync start"+contacts.length);
 if( contacts.length != 0 ){
  // get formatted names and sort
  var names = new Array();
  var contactnos = new Array();
  
  
  for(var i=0; i<contacts.length; ++i){


   if( contacts[i].phoneNumbers == null )
            continue;

   
   
               
           
            
 

   
   if(contacts[i].name){
    var pname = contacts[i].displayName != null ? contacts[i].displayName: "No name";
     names.push(pname);
    
    }

   // display phone numbers
     if (contacts[i].phoneNumbers){
                              var pNumber = contacts[i].phoneNumbers[0].value; 
      
          contactnos.push(pNumber);
     

     }
   
  }
  names.sort();


  
 var contactstr='<label for="choosefrnd" class="select">Choose Friend:</label><select name="choosefrnd" id="choosefrnd"  onchange="if (this.selectedIndex) doSomething(this.selectedIndex);">';
  for(var i=0; i<names.length; ++i){
   contactstr += '<option value='+contactnos[i]+'>'+names[i]+'</option>';
  }
   contactstr += '</select>';

   //alert(contactstr);
   document.getElementById("allContacts").innerHTML=contactstr;

 } else document.getElementById("allContacts").innerHTML='No Contact';
}

/* get all contacts error */
function gcsError(contactError){
 navigator.notification.alert('Contacts Error');
}

function getContactno(i)
{
$('#search-mobile').val(phonenos.get(i));

}
function doSomething(str)
{
 
 var e = document.getElementById("choosefrnd");
    var strmob = e.options[e.selectedIndex].value;

 $('#giftmno').val(strmob);
 
}
function addincart(i)
{
	ids.push(i);
	cart.cartdata.push({ 
   "index":i,
   "url" : "https://mmpdev.hyundai.co.in/autoever/"+jsonary[i].brand_logo,
   "BrandId" : jsonary[i].brand_id,
   "BrandName" : jsonary[i].brand_name,
   "BrandValue" : jsonary[i].gift_voucher_value,
   "BrandDescription":jsonary[i].brand_description,
   "Validity":jsonary[i].end_date,
    });
   
  indexary.push(jsonary[i].brand_id);
  
  $('#cartval').html(ids.length);
}


 $(document).on('tap', '#view_cart', function (e, ui) {

        checkout();
 
 
});


function checkout(){
   var offers='';
  for (var i=0;i<cart.cartdata.length;i++ )
  {
        offers = offers + cart.cartdata[i].BrandId + ',';
  }
  
        offers = offers.substring(0,offers.length-1);

  $.ajax({
    url: 'https://mmpdev.hyundai.co.in/autoever/Rewards/complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': offers,'redeemval':'0'},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}
var listItems20= "";
var listItems21= "";
var listItems22= "";
var listItems23= "";
var listItems24= "";

function itemget(id)
{
 var listItems= '';
	$.ajax({
   
   url: SERVER+'item_json.asp',
   type: 'GET',
   timeout: 50000,
   async:false,
   
    dataType: 'json',
    data: {'cat': id},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

    	    if(data.length>0){
  
           listItems+= "<div class='profile_select1 offer_select'>"+
									'<select name=itemname id="itemname" class=additional_control  data-role=none data-mini=true data-inline=true>';
	
        
			listItems+= "<option value='0'>--Select--</option>";
        for (var i = 0; i < data.length; i++)
			{
				

                listItems+= "<option value='" + data[i].Item_code + "'>" + data[i].Item_name.toUpperCase() + "</option>";
             } 
           listItems+='</select></div>';
           }

           if(id=='20')
           	listItems20=listItems;
            if(id=='21')
           	listItems21=listItems;
            if(id=='22')
           	listItems22=listItems;
            if(id=='23')
           	listItems23=listItems;
            if(id=='24')
           	listItems24=listItems;



    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });


}

function getVoucher(brandname, brand_name){

	var listItems='';
	

    

   if(brand_name=='MOBIS')
   {
   
          
	 setTimeout(function(){
	
  //https://mmpdev.hyundai.co.in/autoever/apis/view_issued_coupon_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o20&mobileno=XXXXXXXXXX
  //$('#couponissuepopup').popup("open");
  $.mobile.changePage( "#reward-coupon", { transition: "none"} ); 
  var data = JSON.parse(localStorage.getItem("data1"));
    	var str = '';

  //  console.log('hhhhhhhhhhh'+JSON.stringify(data));
	str += '<div class="lifestyle_slider owl-carousel owl-theme">';
    for(var i=0;i<data.data.length;i++)
    {
    	 if(data.data[i].BrandId == brandname)
    	{

    		$('#header_title_coupon').html(data.data[i].Category+'<span class="b_arrow"></span><span class="s_title">'+brand_name+'</span>');
            var cimg='';
            if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            	cimg=''
            else
            	cimg=data.data[i].CouponImage;


            if(cimg!='')
            	 str += '<div class="coupon_block"><div class="coupon_img"><img src="'+cimg+'" class="img-responsive"/></div>';
            else
             str += '<div class="coupon_block"><div class="coupon_img"><img src="'+imgSERVER+'/'+data.data[i].BrandLogo+'" class="img-responsive"/></div>';

             //str += '<a class="coupon_close" href="#" data-rel="back">+</a>';
             str += '<div class="brand_name">';
            // str += '<h2>'+brand_name+'</h2>';
             str += '</div>';
            
           
            if(data.data[i].CouponFlag == 'Issued')
            {
            	str += '<div class="coupon_block_inner1 text-center">';
            	if(data.data[i].CategoryId=='2'){
            	if(data.data[i].vin_name!='')
            	str += '<h3 class="coupon_no">Vehicle : '+data.data[i].vin_name+' ('+data.data[i].vin_number+')</h3>';
                else
                	str += '<h3 class="vehicle_type">Vehicle : Primary Vehicle ('+data.data[i].vin_number+')</h3>';
                 }
                //if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            //str += '<h3>Detail :</h3><span> '+data.data[i].BrandDescription+'</span>';
	            str += '<span> '+data.data[i].BrandDescription+'</span>';
	            //else
	            //str += '<h3> Detail 1111:</h3><span> '+data.data[i].CouponDescription+'</span>';


				
	            str += '<h3 class="validity">Valid Till : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	           // str += '<p class="coup_details">'+data.data[i].BrandDescription+'</p>';
				str += '<div class="text-center">';
				str += '<div class="btn_wrapper p_relative">';

				if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary2 btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
			   else
			   	str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary2 btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
				
	            //str += '<h3> Detail 1111:</h3><span> '+data.data[i].CouponDescription+'</span>';
				//str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary2 btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\');">Activate</button>';
				str += '<div class="bubbles">'; // btn_animation Code
				str += '<span class="bls1">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '<span class="bls2">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '</div>'; // btn_animation Code

				try{

					brandlink=TNCURL+data.data[i].Brand.split(' ').join('_')+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';

				}
				catch(r)
				{

						brandlink=TNCURL+data.data[i].Brand+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


					

				}
				
				str += '</div>';
				str += '</div>';				
				str += '</div>';
               
                str += '<div class="coupon inactive">';



             var cimg='';
            if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            	cimg=''
            else
            	cimg=data.data[i].CouponImage;


            if(cimg!='')
            	 str += '<div class="alpha details_block">';
            else
             str += '<div class="alpha" >';

console.log(data.data[i].CouponDescription);
console.log(data.data[i].CouponDescription.indexOf('GOD'));
 if(data.data[i].CouponDescription.indexOf('God')>=0)
   		str +=listItems20;
   	else if(data.data[i].CouponDescription.indexOf('Car Cushions')>=0)
   		str +=listItems22;
   	else if(data.data[i].CouponDescription.indexOf('Perfume')>=0)
   		str +=listItems21;
   	else if(data.data[i].CouponDescription.indexOf('Care Combo')>=0)
   		str +=listItems23;
   	else if(data.data[i].CouponDescription.indexOf('Car  essentials')>=0)
   		str +=listItems24;


                


			



				/*str += '<div class="c_qr">';
	            //str += '<img src="https://chart.googleapis.com/chart?'+data.data[i].CouponCode+'&chs=150x150" alt="" >';
	            str += '<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+data.data[i].CouponCode+'" alt="" >';
				str += '</div>';*/
				if(data.data[i].CategoryId=='2'){
				if(data.data[i].vin_name!='')
            	str += '<h3 class="vehicle_type">Vehicle : '+data.data[i].vin_name+' ('+data.data[i].vin_number+')</h3>';
                else
                	str += '<h3 class="vehicle_type">Vehicle : Primary Vehicle ('+data.data[i].vin_number+')</h3>';
                }
	           	if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<span> '+data.data[i].BrandDescription+'</span>';
	            else
	            str += '<span> '+data.data[i].CouponDescription+'</span>';

	            str += '<h3 class="validity">Valid Till : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	            //str += '<input type="text" name="couponcode1" id="couponcode1" class="coupon_code_input" data-role="none" value="Coupon Code" readonly>';
	            str += '</div>';
	            str += '<div class="ui-grid-a" style="overflow:visible">';
				str += '<div class="text-center  ui-block-a">';
				str += '<div class="btn_wrapper">';
				str += '<button class="btn_primary" data-role="none" onclick = javascript:couponDetails(\''+brandlink+'\');>Details</button>'; 
				str += '</div>'
				str += '</div>';
	            str += '<div class="text-center ui-block-b">';
				str += '<div class="btn_wrapper p_relative">';

				if(data.data[i].CouponDescription==null || data.data[i].CouponDescription==''){


					 var cimg='';
            		if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            			cimg=''
            		else
            			cimg=data.data[i].CouponImage;


           
				   if(cimg!='')
	            		str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].CouponImage+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
			      else
			      	  str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
	           }
			   else
			   {

			   	 var cimg='';
            		if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            			cimg=''
            		else
            			cimg=data.data[i].CouponImage;
			   	 if(cimg!='')
			   	    str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].CouponImage+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',.\''+data.data[i].BrandDescription+'\');">Activate</button>';
			      else
			      	 str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';

			   }
	           // str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\');">Activate</button>'; 
				str += '<div class="bubbles">'; // btn_animation Code
				str += '<span class="bls1">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '<span class="bls2">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '</div>'; // btn_animation Code
				str += '</div>';
				str += '</div>';
				
				str += '</div>';
				//str += '<p class="txtSmallMenu_offer">T&amp;C Apply* </p>';

			    
            }
         else
            {
            	str += '<div class="coupon_block_inner">';
                str += '<div class="coupon active">';
                str += '<div class="alpha">';
			 	str += '<div class="c_qr">';
	            //str += '<img src="https://chart.googleapis.com/chart?'+data.data[i].CouponCode+'&chs=150x150" alt="" >';
	            str += '<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+data.data[i].CouponCode+'" alt="" >';
				str += '</div>';
				if(data.data[i].CategoryId=='2'){
				if(data.data[i].vin_name!='')
            	str += '<h3 class="vehicle_type">Vehicle : '+data.data[i].vin_name+' ('+data.data[i].vin_number+')</h3>';
                else
                	str += '<h3 class="vehicle_type">Vehicle : Primary Vehicle ('+data.data[i].vin_number+')</h3>';
                }
				if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<span> '+data.data[i].BrandDescription+'</span>';
	            else
	            str += '<span> '+data.data[i].CouponDescription+'</span>';

	            str += '<h3 class="validity">Valid Till : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	            str += '<input type="text" name=couponcode'+data.data[i].CouponCode+' id=couponcode'+data.data[i].CouponCode+' class="coupon_code_input active" data-role="none" value="'+data.data[i].CouponCode+'" readonly>';
	            str += '</div>';
	           // if(brandname == '5')
            //{
				str += '<div class="text-center">';	
				str += '<div class="ui-grid-a">';	
				str += '<div class="ui-block-a">';	
				str += '<div class="btn_wrapper">';
				str += '<button class="btn_primary2" data-role="none" onclick = "javascript:copycoupon(\''+data.data[i].CouponCode+'\',\''+brandname+'\');">Copy</button>';   	
	            str += '</div>';
	            str += '</div>';
	            str += '<div class="ui-block-b">';	
				str += '<div class="btn_wrapper">';
	            str += '<a href="javascript:openInWebView(\''+data.data[i].BrandDescription+'\',\''+data.data[i].Brand+'\');" class="btn_primary2">Redeem now</a>';
				
				str += '</div>';
				str += '</div>';
				str += '</div>';
				str += '</div>';
			//}
			//else
			/*{
				str += '<div class="text-center">';
				str += '<div class="btn_wrapper">';
	            str += '<button class="btn_primary2" data-role="none" onclick = "javascript:copycoupon(\''+data.data[i].CouponCode+'\',\''+brandname+'\');">Copy</button>';
				str += '</div>';
				str += '</div>';	
			}
			*/
			try{

					brandlink=TNCURL+data.data[i].Brand.split(' ').join('_')+'.html'; 



						str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


				}
				catch(r)
				{

					brandlink=TNCURL+data.data[i].Brand+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="priamry_btn2">Details</a></div></div>';


					//str += '<p class="txtSmallMenu_offer">T&amp;C Apply*</p>';

				}
			//str += '<p class="txtSmallMenu_offer">T&amp;C Apply* </p>';
			str += '</div>';
            }
            
             
			
			
			
			
            str += '</div></div>';
		
		    //document.getElementById("activatecpn").href = "javascript:activatecoupon(\'"+data.data[i].CouponId+"\',\'"+data.data[i].CouponCode+"\',\'"+offername+"\',\'"+data.data[i].CouponExpiry+"\')";
		
    	}
	}

	str += '</div>';
	
	setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:true,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)
	
	if(str=='')
	{
		    $.mobile.changePage( "#failpage", { transition: "none"} );

			document.getElementById("errorfunction").href="javascript:showHome1()";
    		document.getElementById("faildesc").innerHTML = 'No Coupons Available!!';
	}
	else
	{

		    //console.log(str);
			document.getElementById("couponbody").innerHTML=str;
	} 
	
    
    	
   
},600)
  
   
   
}
else
{
		 setTimeout(function(){
	
  //https://mmpdev.hyundai.co.in/autoever/apis/view_issued_coupon_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o20&mobileno=XXXXXXXXXX
  //$('#couponissuepopup').popup("open");
  $.mobile.changePage( "#reward-coupon", { transition: "none"} ); 
  var data = JSON.parse(localStorage.getItem("data1"));
    	var str = '';

    console.log('hhhhhhhhhhh'+JSON.stringify(data));
	str += '<div class="lifestyle_slider owl-carousel owl-theme">';
    for(var i=0;i<data.data.length;i++)
    {
    	 if(data.data[i].BrandId == brandname)
    	{

    		$('#header_title_coupon').html(data.data[i].Category+'<span class="b_arrow"></span><span class="s_title">'+brand_name+'</span>');
            var cimg='';
            if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            	cimg=''
            else
            	cimg=data.data[i].CouponImage;
			
			
			

			 if(cimg!='')
            	 str += '<div class="coupon_block"><div class="coupon_img1"><img src="'+cimg+'" class="img-responsive"/></div>';
            else
             str += '<div class="coupon_block"><div class="coupon_img1"><img src="'+imgSERVER+'/'+data.data[i].BrandLogo+'" class="img-responsive"/></div>';
			
			
			
            //if(cimg!='')
//            	 str += '<div class="coupon_block" style="background:url('+cimg+')">';
//            else
//             str += '<div class="coupon_block" style="background:url('+imgSERVER+'/'+data.data[i].BrandLogo+')">';

            // str += '<a class="coupon_close" href="#" data-rel="back">+</a>';
             str += '<div class="brand_name">';
            // str += '<h2>'+brand_name+'</h2>';
             str += '</div>';
            
           
            if(data.data[i].CouponFlag == 'Issued')
            {
            	str += '<div class="coupon_block_inner1">';
            	if(data.data[i].CategoryId=='2'){
            	if(data.data[i].vin_name!='')
            	str += '<h3 class="coupon_no">Vehicle : '+data.data[i].vin_name+' ('+data.data[i].vin_number+')</h3>';
                else
                	str += '<h3 class="vehicle_type">Vehicle : Primary Vehicle <span>('+data.data[i].vin_number+')</span></h3>';
                }
                str += '<span> '+data.data[i].BrandDescription+'</span>';
	            //else
	            //str += '<h3> Detail 1111:</h3><span> '+data.data[i].CouponDescription+'</span>';


				
	            str += '<h3 class="validity">Valid Till : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	           // str += '<p class="coup_details">'+data.data[i].BrandDescription+'</p>';
				str += '<div class="text-center">';
				str += '<div class="btn_wrapper p_relative">';

				if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary2 btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
			   else
			   	str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary2 btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';

               




  	            //str += '<h3> Detail 1111:</h3><span> '+data.data[i].CouponDescription+'</span>';
				//str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary2 btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\');">Activate</button>';
				str += '<div class="bubbles">'; // btn_animation Code
				str += '<span class="bls1">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '<span class="bls2">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '</div>'; // btn_animation Code

				try{

					brandlink=TNCURL+data.data[i].Brand.split(' ').join('_')+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';

				}
				catch(r)
				{

						brandlink=TNCURL+data.data[i].Brand+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


					

				}
				
				str += '</div>';
				str += '</div>';				
				str += '</div>';
               
                str += '<div class="coupon inactive">';



             var cimg='';
            if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            	cimg=''
            else
            	cimg=data.data[i].CouponImage;


            if(cimg!='')
            	 str += '<div class="alpha details_block">';
            else
             str += '<div class="alpha" >';




                ;


			str +=listItems;



				/*str += '<div class="c_qr">';
	            //str += '<img src="https://chart.googleapis.com/chart?'+data.data[i].CouponCode+'&chs=150x150" alt="" >';
	            str += '<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+data.data[i].CouponCode+'" alt="" >';
				str += '</div>';*/
				if(data.data[i].CategoryId=='2'){
				if(data.data[i].vin_name!='')
            	str += '<h3 class="vehicle_type">Vehicle : '+data.data[i].vin_name+' ('+data.data[i].vin_number+')</h3>';
                else
                	str += '<h3 class="vehicle_type">Vehicle : Primary Vehicle ('+data.data[i].vin_number+')</h3>';
                }
	           	if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<span> '+data.data[i].BrandDescription+'</span>';
	            else
	            str += '<span> '+data.data[i].CouponDescription+'</span>';

	            str += '<h3 class="validity">Valid Till 3333333 : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	            //str += '<input type="text" name="couponcode1" id="couponcode1" class="coupon_code_input" data-role="none" value="Coupon Code" readonly>';
	            str += '</div>';
	            str += '<div class="ui-grid-a" style="overflow:visible">';
				str += '<div class="text-center  ui-block-a">';
				str += '<div class="btn_wrapper">';
				str += '<button class="btn_primary" data-role="none" onclick = javascript:couponDetails(\''+brandlink+'\');>Details</button>'; 
				str += '</div>'
				str += '</div>';
	            str += '<div class="text-center ui-block-b">';
				str += '<div class="btn_wrapper p_relative">';

				if(data.data[i].CouponDescription==null || data.data[i].CouponDescription==''){


					 var cimg='';
            		if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            			cimg=''
            		else
            			cimg=data.data[i].CouponImage;


           
				   if(cimg!='')
	            		str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].CouponImage+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
			      else
			      	  str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
	           }
			   else
			   {

			   	 var cimg='';
            		if(data.data[i].CouponImage==null || data.data[i].CouponImage=='')
            			cimg=''
            		else
            			cimg=data.data[i].CouponImage;


			   	 if(cimg!='')
			   	 	 {
			   	 	 	 if (data.data[i].BrandId=='26' || data.data[i].BrandId=='33')
			            	  str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:openInWebView(\''+data.data[i].BrandDescription+'\',\''+data.data[i].Brand+'\');">Activate</button>';
			           
			            else
			            	  str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].CouponImage+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
			            
			       } 
			      else {
			      	
			      	  if (data.data[i].BrandId=='26' || data.data[i].BrandId=='33')
			            	  str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:openInWebView(\''+data.data[i].BrandDescription+'\',\''+data.data[i].Brand+'\');">Activate</button>';
			           
			               else 
			      	           str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].CouponDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\',\''+data.data[i].CategoryId+'\',\''+data.data[i].BrandDescription+'\');">Activate</button>';
                    }
			   }
	           // str += '<button id=active_btn'+data.data[i].CouponId+' class="btn_primary btn_animation" data-role="none" onclick = "javascript:activatecoupon(\''+data.data[i].CouponId+'\',\''+data.data[i].CouponCode+'\',\''+data.data[i].BrandDescription+'\',\''+data.data[i].CouponExpiry+'\',\''+brandname+'\',\''+data.data[i].BrandLogo+'\',\''+data.data[i].Brand+'\',\''+data.data[i].vin_name+'\',\''+data.data[i].vin_number+'\');">Activate</button>'; 
				str += '<div class="bubbles">'; // btn_animation Code
				str += '<span class="bls1">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '<span class="bls2">'; // btn_animation Code
				str += '</span>'; // btn_animation Code
				str += '</div>'; // btn_animation Code
				str += '</div>';
				str += '</div>';
				
				str += '</div>';
				//str += '<p class="txtSmallMenu_offer">T&amp;C Apply* </p>';

			    
            }
         else
            {
            	str += '<div class="coupon_block_inner">';
                str += '<div class="coupon active">';
                str += '<div class="alpha">';
			 	str += '<div class="c_qr">';
	            //str += '<img src="https://chart.googleapis.com/chart?'+data.data[i].CouponCode+'&chs=150x150" alt="" >';
	            str += '<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+data.data[i].CouponCode+'" alt="" >';
				str += '</div>';
				if(data.data[i].CategoryId=='2'){
				if(data.data[i].vin_name!='')
            	str += '<h3 class="vehicle_type">Vehicle : '+data.data[i].vin_name+' ('+data.data[i].vin_number+')</h3>';
                else
                	str += '<h3 class="vehicle_type">Vehicle : Primary Vehicle ('+data.data[i].vin_number+')</h3>';
                }
				if(data.data[i].CouponDescription==null || data.data[i].CouponDescription=='')
	            str += '<span> '+data.data[i].BrandDescription+'</span>';
	            else
	            str += '<span> '+data.data[i].CouponDescription+'</span>';

	            str += '<h3 class="validity">Valid Till : <span>'+data.data[i].CouponExpiry+'</span></h3>';
	            str += '<input type="text" name=couponcode'+data.data[i].CouponCode+' id=couponcode'+data.data[i].CouponCode+' class="coupon_code_input active" data-role="none" value="'+data.data[i].CouponCode+'" readonly>';
	            str += '</div>';
	         // if(brandname != '27' || brandname != '33')
            //{
				str += '<div class="text-center">';	
				str += '<div class="ui-grid-a">';	
				str += '<div class="ui-block-a">';	
				str += '<div class="btn_wrapper">';
				str += '<button class="btn_primary2" data-role="none" onclick = "javascript:copycoupon(\''+data.data[i].CouponCode+'\',\''+brandname+'\');">Copy</button>';   	
	            str += '</div>';
	            str += '</div>';
	            str += '<div class="ui-block-b">';	
				str += '<div class="btn_wrapper">';
	            str += '<a href="javascript:openInWebView(\''+data.data[i].BrandDescription+'\',\''+data.data[i].Brand+'\');" class="btn_primary2">Redeem now</a>';
				
				str += '</div>';
				str += '</div>';
				str += '</div>';
				str += '</div>';
			//}
			//else
			/*{
				str += '<div class="text-center">';
				str += '<div class="btn_wrapper">';
	            str += '<button class="btn_primary2" data-role="none" onclick = "javascript:copycoupon(\''+data.data[i].CouponCode+'\',\''+brandname+'\');">Copy2222</button>';
				str += '</div>';
				str += '</div>';	
			}
			*/
			try{

					brandlink=TNCURL+data.data[i].Brand.split(' ').join('_')+'.html'; 



						str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


				}
				catch(r)
				{

					brandlink=TNCURL+data.data[i].Brand+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


					//str += '<p class="txtSmallMenu_offer">T&amp;C Apply*</p>';

				}
			//str += '<p class="txtSmallMenu_offer">T&amp;C Apply* </p>';
			str += '</div>';
            }
            
             
			
			
			
			
            str += '</div></div>';
		
		    //document.getElementById("activatecpn").href = "javascript:activatecoupon(\'"+data.data[i].CouponId+"\',\'"+data.data[i].CouponCode+"\',\'"+offername+"\',\'"+data.data[i].CouponExpiry+"\')";
		
    	}
	}

	str += '</div>';
	
	setTimeout(function(){
			var _owl2 = $(".lifestyle_slider");
 			_owl2.owlCarousel({
				items:1,
				loop:false,
				margin:0,
				merge:true,
				nav:false,
			  	dots:true,
				autoplay:false,
    			autoWidth:false,
			  	navText: ['<','>']
			});
		},100)
	
	if(str=='')
	{
		    $.mobile.changePage( "#failpage", { transition: "none"} );

			document.getElementById("errorfunction").href="javascript:showHome1()";
    		document.getElementById("faildesc").innerHTML = 'No Coupons Available!!';
	}
	else
	{

		    console.log(str);
			document.getElementById("couponbody").innerHTML=str;
	} 
	
    
    	
   
},600)

}
	
}

function couponDetails(url){


//	$(e).parents('.coupon_block').find(".coupon_block_inner1").slideDown("fast");
		openInWebView(url,'TnC');		
	
}

$(document).on("click", function(e){	
	
	if(!$(e.target).is('.coupon_block_inner1, .btn_primary, .coupon_block_inner1 .validity,.coupon_block_inner1 .validity span,  .coupon_block_inner1 .coupon_no, .coupon_block_inner1 .coup_details, .coupon_block_inner1 .txtSmallMenu_offer')) {
		//console.log(e.target);
		$(".coupon_block_inner1").slideUp("fast");
	}
	
})



function activatecoupon(couponid,couponcode,offername,couponexpiry,brandname,brandimage, brand_name,vinname,vinno,catid,branddesc)
{
	/*
	try{

	UXCam.tagScreenName("Coupon Activated "+brandname+'--'+couponcode);  
	 UXCam.logEvent("Coupon Activated "+brandname+'--'+couponcode, "Coupon Activated "+brandname+'--'+couponcode);

	 }
	catch(err)
	{
		
	}
	*/
	var itemcode=$('#itemname').val();

	

	setTimeout(function(){
		document.getElementById('active_btn'+couponid).innerHTML ='Please wait..'

		//https://mmpdev.hyundai.co.in/autoever/apis/activate_issued_coupon_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o20&mobileno=XXXXXXXXXX&CouponId=XX&CouponCode=XXXXXXXX
		$.ajax({
		url: SERVER1+'apis/activate_issued_coupon_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json', //xml/html/script/json/jsonp
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': user.mobile,'CouponId':couponid,'CouponCode':couponcode,'item_variance':itemcode},
		success: function(data, textStatus, xhr) {
			var str = '';
				 str += '<div style="padding:0 20px">';
				 if(brandimage.startsWith('http'))
				 	str += '<div class="coupon_block" style="background:url('+brandimage+')">';
				 else
				   str += '<div class="coupon_block" style="background:url('+imgSERVER+'/'+brandimage+')">';
				// str += '<a class="coupon_close" href="#" data-rel="back">+</a>';
				 str += '<div class="brand_name">';
				 str += '<h2>'+brand_name+'</h2>';
				 str += '</div>';
				str += '<div class="coupon_block_inner">';


					str += '<div class="coupon active">';

				str += '<div class="alpha">';
				str += '<div class="c_qr">';


				str += '<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+couponcode+'" alt=""  class="img-responsive" >';
				str += '</div>';
                str += '<h3 class="vehicle_type">Vehicle : '+vinname+' ('+vinno+')</h3>';
				str += '<h3 class="coupon_no">'+offername+'</h3>';

				if(brandname=='14'){
					couponexpiry='07/01/2021';
					if(offername.trim()=='30% off on Self Drive Rentals in Indi')
					{
						couponcode='HardCode1';
						branddesc='https://www.avis.co.in';
					 	
					} 
					else if(offername.trim()=='35% off on Chauffeur Drive Rentals in India')
					{
						couponcode='HardCode2';
						branddesc='https://www.avis.co.in/1';


					 }
					 else
					 {
					 	couponcode='HardCode3';
					 	branddesc='https://www.avis.co.in/2';

					 }


				}
				str += '<h3 class="validity">Valid Till : <span>'+couponexpiry+'</span></h3>';




				str += '<input type="text" name=couponcode'+couponcode+' id=couponcode'+couponcode+' class="coupon_code_input active" data-role="none" value="'+couponcode+'" readonly>';


				str += '</div>';



				//if(brandname == '5')
				
			//	{
					str += '<div class="text-center">';	
					str += '<div class="ui-grid-a">';	
					str += '<div class="ui-block-a">';	
					str += '<div class="btn_wrapper">';
					str += '<button class="btn_primary2" data-role="none" onclick = "javascript:copycoupon(\''+couponcode+'\',\''+brandname+'\');">Copy</button>';   	
					str += '</div>';
					str += '</div>';
					str += '<div class="ui-block-b">';	
					str += '<div class="btn_wrapper">';
					str += '<a href="javascript:openInWebView(\''+branddesc+'\',\''+brand_name+'\');" class="btn_primary2">Redeem now</a>';
					str += '</div>';
					str += '</div>';
					str += '</div>';
					str += '</div>';
				//}
				/*else
				{
					str += '<div class="text-center">';
					str += '<div class="btn_wrapper">';
					str += '<button class="btn_primary2" data-role="none" onclick = "javascript:copycoupon(\''+couponcode+'\',\''+brandname+'\');">Copy</button>';   	
					str += '</div>';
					str += '</div>';	
				}
				*/



				//str += '<p class="txtSmallMenu_offer">T&amp;C Apply* </p>';

				try{

					brandlink=TNCURL+brand_name.split(' ').join('_')+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';

				}
				catch(r)
				{

					brandlink=TNCURL+brand_name+'.html'; 

					str += '<div class="text-center"><div class="btn_wrapper"><a href=javascript:showTnc(\''+brandlink+'\'); class="btn_primary2">Details</a></div></div>';


					//str += '<p class="txtSmallMenu_offer">T&amp;C Apply*</p>';

				}
				
				str += '</div>';
				str += '</div></div>';



				str +='</div>';




		document.getElementById("couponbody").innerHTML=str;
		getCatVou(catid);


	   },
		error: function(xhr, textStatus, errorThrown) {


		alert('Could not connect to Server, make sure you are connected to Internet');

		}
	  });
  },1000);



}

function getCatVou(catid)
{

	$.ajax({
    url: SERVER1+'apis/view_issued_coupon_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': user.mobile,'cid':catid},
    success: function(data, textStatus, xhr) {
    localStorage.setItem('data1',JSON.stringify(data));
    },
    error: function(xhr, textStatus, errorThrown) {


		alert('Could not connect to Server, make sure you are connected to Internet');

		}
   })

}
function copycoupon(couponcode,brandname)
{

	
 
	
  /* Select the text field */
  var aux=document.getElementById('couponcode'+couponcode)
  aux.select();
 
  /* Copy the text inside the text field */
  document.execCommand("copy");
  toast("Offer code copied to clipboard");
  
}

function showPOPup(msg)
{

	var $popUp = $("<div id=sharepopnot />").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		//showHome();
		
		
		
        
    }).css({
            'width': '270px',            
            //'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '##9ea3bb'
    });
    //create a title for the popup
    $("<div />", {
        html: "<span>"+msg+"</span> <div class=\"ui-grid-a mt-30 mb-20\">"+
        "<div class=\"ui-block-solo\" style=\"padding: 0 10px\"> <a href=\"#page-forgot-password\" class=\"btn btn_primary\" id=\"popnot\">OK</a> </div>"+
      "</div>"
    }).appendTo($popUp);

    //create a message for the popup

		
    //create a back button
    

    $popUp.popup('open').trigger("create");

}


function giftfriend(){
  var to_mob=$('#giftmno').val();
  var val=$('#giftpt').val();
  $.ajax({
    url: 'https://mmpdev.hyundai.co.in/autoever/m/gift_points_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'tomobileno': to_mob,'gift_points':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function showRecharge()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Coming Soon...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

function RewardsNA()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#69534A'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'RewardStore is coming soon.\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

$(document).bind('keydown', function(event) {

  if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
    event.preventDefault();
  }
});

function shareApp()
{
	AppRate.promptForRating(true);
	//window.plugins.socialsharing.share('Hi, Join Hyundai Rewards.', null, 'https://180.179.202.114/shareimg/hyundai.jpg', 'https://mmpdev.hyundai.co.in/autoever/mapp');
}

function rateApp()
{
	   // alert('Rate');
	
		AppRate.promptForRating();

	
	//window.open('https://taghash.co/hyunrateapp.php'); // or itms://
}

function rateApp1()
{
	   // alert('Rate');
	
		AppRate.promptForRating(false);

	
	//window.open('https://taghash.co/hyunrateapp.php'); // or itms://
}

// onSuccess Geolocation
    //
    function onGeoSuccess(position) {
       /* var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/
	 var latlng = position.coords.latitude+','+position.coords.longitude;
	 showTabContent_Map1(latlng);
							
    }

    // onError Callback receives a PositionError object
    //
    function onGeoError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function getNearStores(){
     navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
	 
}

function showPopuppage4(){
$.mobile.changePage( "#popuppage4", { transition: "slide"} ); 
	showTabContent('popuppage4', 'cpns_history_json.asp');
	
	
}

function showshoplinks(str)
{
 $.mobile.changePage( "#innershop", {transition: "flip"} );
 var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
 var the_width = $(window).width();
 var str1='';
	if(str=='S1')
	{
	//openInWebView('https://www.damilano.com/women');
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=1" width='+the_width+' height='+the_height+' /></embed>';
	}
	else if(str=='S2')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=5" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/men');
	}
	else if(str=='S3')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=7" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/leather-accessories');
	}
	else if(str=='S4')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=9" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/business-essentials');
	}
	else if(str=='S5')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=11" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/travel');
	}
	else if(str=='S6')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=4" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/home-195');
	}
	else if(str=='S7')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=6" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/');
	}
    else if(str=='S8')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=8" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/');

	}
	else if(str=='S9')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=10" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/');
	}
    else if(str=='S10')
	{
	str1='<embed src="https://skrestaurants.com/brandpage.aspx?bid=12" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('https://www.damilano.com/');

	}

	document.getElementById("barcontentinnershop").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
    $("#innerdata").html(str1);
 //$("#innershop .ui-content").html(str1);
}


function showFbNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'block');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'block');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_facebook', json_fb);
	
}

function showTwitterNew(){

	$("#navBdr_twitter").css('display', 'block');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'block');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_twitter', RSS_twitter);
    
}

function showInstagramNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'block');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'block');
    $("#PINTEREST").css('display', 'none');
	
	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	//showTabContentRSS('socialwall_instagram', RSS_instagram);

	$.instagramFeed({
		'username': 'cafewanderlust',
		'get_raw_json': true,
		'callback': displayInstagram
	});
   
  
}

function displayInstagram(json)
{
	//console.log('instagram1:'+json);

	renderTemplate('socialwall_instagram',json);
}

function showYoutubeNew(){

    openInWebView('https://www.youtube.com/');
  
}

function showPinterestNew(){
	
	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'block');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'block');

	$.mobile.changePage( "#socialpg", { transition: "none"} );
	showTabContentRSS('socialwall_pinterest', RSS_pinterest);
	
}


function showShop()
{
    openInWebView('https://www.cafewanderlust.in/');
	//$.mobile.changePage( "#menupg", { transition: "none"} );
   
}
function showShop11()
{

    $.mobile.changePage( "#feedback", { transition: "none"} );
   
}

function loadLocation()
{
   var cityid='';
   $.ajax({
   
   url: SERVER+'store_locator_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'city': cityid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";
        for (var i = 0; i < data.length; i++)
			{
				if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0 || data[i].storename.indexOf('test')==0)
				continue;

                listItems+= "<option value='" + data[i].storeid + "'>" + data[i].storename + "</option>";
             } 
      
	  $("#bill_loc").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}

function drawMap(latlng,index) {
    
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };
   

   var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById('map-canvas'+index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function bonusHistory()
{
	var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#ffffff",
                "text-shadow": "none",
                "color": "#000000",
				"box-shadow": "",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2000)
            .fadeOut(400, function () {
               $(this).remove();
            });
}

/*
function capturePhoto1()
{
    
			$("input[type=file]").trigger("click");
		
}

$("input[type=file]").change(function(){
			
    
    var aFormData = new FormData();
    
  // alert($("input[type=file]")[0].files[0]);

    aFormData.append("filename", $("input[type=file]")[0].files[0]);
    
    

	aFormData.append("mobile", localStorage.getItem("usernamehyundai"));
    aFormData.append("brand", "cafewanderlust");
     

	
	$.ajax(
    {
      url         : "https://103.25.128.61:9296/mloyalfileupload/fileupload1.php",
      type        : "POST",
      contentType : false,
      processData : false,
      data        : aFormData,
      success     : 
        function(data)
        {

		  toast("Your picture has been updated..Please reload page to see changes");
   
         document.getElementById("cardImagemenu").src='https://103.25.128.61/projects/mloyalfileupload/uploads/cafewanderlust_'+localStorage.getItem("username")+'.jpg';
      //   document.getElementById("cardImage").src='https://103.25.128.61:9296/mloyalfileupload/uploads/cafewanderlust_'+localStorage.getItem("username")+'.jpg';
        }
    });

	

});


*/


			function capturePhoto() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspopprofile").popup();
				$("#optionspopprofile").popup("open");
           }


            function capturePhotonew() {

			  try{
				$("#optionspopprofile").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGallery() {

			    try{
				$("#optionspopprofile").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhoto(imageURI) {

				

				var b_Image = document.getElementById('profilepic');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				localStorage.setItem('imagedata',b_Image.src );
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				//golbal_shop_id=Math.ceil(Math.random() * 1000)
				var fName='profile_'+localStorage.getItem('usernamehyundai');



				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;
				
						statusDom=document.getElementById("profile_photo_status");
						statusDomdiv=document.getElementById("profile_photo_status_div");

				var ft = new FileTransfer();
				localStorage.setItem('profilepic',uploadURL+'uploads/'+filenmdoc);
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	localStorage.setItem('profilepic',uploadURL+'uploads/'+filenmdoc);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(uploadURL+"upload_bill_new.php"), win, failPhoto, options, true);
			}

			function failPhoto()
			{

			}


			function capturePhotoPanel() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspoplogo").popup();
				$("#optionspoplogo").popup("open");
           }


            function capturePhotonewPanel() {

			  try{
				$("#optionspoplogo").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhotologo, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGalleryPanel() {

			    try{
				$("#optionspoplogo").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhotologo, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhotologo(imageURI) {

				 try{
				$("#optionspoplogo").popup("close");
				}catch(err) 
				{	}

				

				var b_Image = document.getElementById('cardImagemenu');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				localStorage.setItem('imagedata',b_Image.src );
				
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				
				var fName='profile_'+localStorage.getItem('usernamehyundai');

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			   
				var ft = new FileTransfer();
				localStorage.setItem('profilepic',uploadURL+'uploads/'+filenmdoc);
				

	  
				
				ft.upload(imageURI, encodeURI(uploadURL+"upload_bill_new.php"), win, failPhotologo, options, true);
			}

			function failPhotologo()
			{

			}

			/**************Feedback photo***********************/
			function capturefeedPhoto() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspopfeed").popup();
				$("#optionspopfeed").popup("open");
           }


            function capturePhotofeednew() {

			  try{
				$("#optionspopfeed").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhotofeed, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadfeedGallery() {

			    try{
				$("#optionspopfeed").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhotofeed, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhotofeed(imageURI) {

				

				var b_Image = document.getElementById('feedbackpic');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				localStorage.setItem('imagedata',b_Image.src );
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				var feedid=Math.ceil(Math.random() * 1000)
				var fName='fd_'+localStorage.getItem('usernamehyundai')+'_'+feedid;



				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;
				
						statusDom=document.getElementById("feed_photo_status");
						statusDomdiv=document.getElementById("feed_photo_status_div");

				var ft = new FileTransfer();
				localStorage.setItem('feedpic',uploadURL+'uploads/'+filenmdoc);
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	localStorage.setItem('feedpic',uploadURL+'uploads/'+filenmdoc);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(uploadURL+"upload_bill_new.php"), win, failPhoto, options, true);
			}

			function failPhoto()
			{

			}
			/**************end Feedback photo*******************/


		    function win(r) {
				toast("Image uploaded successfully!");
				//$("#wait").css("display","none"); // hide it initially
				 
			}

			function fail(error) {
				toast("There was an error uploading image");
				//$("#wait").css("display","none"); // hide it initially
				
			}

			function onFail(message) {
				toast('Failed because: ' + message);
			}


function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

	

    return http.status != 404;

}

function tokenHandler(result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    reg_id = result;
    localStorage.setItem("reg_id",reg_id);
    //alert(reg_id);
}

function openBrowser(url)
 {
	
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#472011'
    },
    toolbar: {
        height: 75,
        color: '#472011'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'img/leftMenu_back.png',
        wwwImagePressed: 'img/leftMenu_back.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}


function fetchVehicle()
{


var vinno = $('#vehother').val();
if(vinno!=0){
var uname = localStorage.getItem('usernamehyundai');

$.mobile.changePage( "#vehical_details", { transition: "flip"} );


var data1=JSON.parse(localStorage.getItem('vehdet'));



var listItems= "<div class=profile_select>"+
									'<select name=vehother id="vehother" class=additional_control  data-role=none data-mini=true data-inline=true onchange=javascript:fetchVehicle();>';
									
			listItems+= "<option value='0'>--Select Vehicle--</option>";
			//listItems+= '<option value=' + user.vinNumber+'>'+user.vinname+'</option>';
            for (var i = 0; i < data1.data.length; i++)
			{
				
                if(data1.data[i].vin_number==vinno)
				listItems+= '<option value=' + data1.data[i].vin_number+' selected>'+data1.data[i].vin_name+'</option>';
				else
				listItems+= '<option value=' + data1.data[i].vin_number+'>'+data1.data[i].vin_name+'</option>';
			   
            } 

            listItems+= '</select>';
			listItems+= '</div>';



if($("#vehother").prop('selectedIndex')!=1){
	var str= "";

  $.ajax({
   url: SERVER1+'apis/get_vehicle_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
     data: {'mobileno': localStorage.getItem('usernamehyundai'),'vinnumber':vinno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

    	console.log(JSON.stringify(data));
  
   if(data.data.length>0)
   {

   	       // listItems=   localStorage.getItem('vehdet');
            str +=listItems;




                str +='<div class="vin_details">';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Chasis No:</h3><span class="member_role" id="vinNumberdisplay">'+data.data[0].vin_number+'</span></li>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+data.data[0].vin_sales_model_code+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+data.data[0].vin_registration_number+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+data.data[0].fuel_type+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+data.data[0].transmission_type+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+data.data[0].vin_delivery_date+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+data.data[0].vin_service_model_code+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+data.data[0].vin_variant_name+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+data.data[0].vin_exterior_color+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+data.data[0].hap_insurance_policy+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+data.data[0].selling_dealer_name+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+data.data[0].selling_dealer_number+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+data.data[0].selling_dealer_city+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+data.data[0].last_ro_date+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+data.data[0].hap_insurance_policy+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+data.data[0].next_ro_due_date+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+data.data[0].basic_wrty_startdate+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+data.data[0].basic_wrty_enddate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        
			  $("#vdetailHome").html(str);
	
     }
     else 
     {
     	   

     	        str +='<div class="vin_details">';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Chasis No:</h3><span class="member_role" id="vinNumberdisplay">'+checkforundefined(localStorage.getItem('vinno'))+'</span></li>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+checkforundefined(user.vinSalesModelCode)+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+checkforundefined(user.vinRegistrationNumber)+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+checkforundefined(user.fuelType)+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+checkforundefined(user.transmissionType)+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+checkforundefined(user.vinDeliveryDate)+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+checkforundefined(user.vinservicemodelcode)+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+checkforundefined(user.vinVariantName)+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+checkforundefined(user.vinExteriorColor)+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+checkforundefined(user.sellingDealerName)+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+checkforundefined(user.sellingdealernumber)+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+checkforundefined(user.sellingDealerCity)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+checkforundefined(user.lastRoDate)+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+checkforundefined(user.nextRoDueDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+checkforundefined(user.basicWrtyStartDate)+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+checkforundefined(user.basicWrtyEndDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        
			  $("#vdetailHome").html(str);
	
     }


        
      
	  
		   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}
else
{

var str= "";
	 
            str +=listItems;



     	        str +='<div class="vin_details">';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Chasis No:</h3><span class="member_role" id="vinNumberdisplay">'+checkforundefined(localStorage.getItem('vinno'))+'</span></li>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+checkforundefined(user.vinSalesModelCode)+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+checkforundefined(user.vinRegistrationNumber)+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+checkforundefined(user.fuelType)+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+checkforundefined(user.transmissionType)+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+checkforundefined(user.vinDeliveryDate)+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+checkforundefined(user.vinservicemodelcode)+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+checkforundefined(user.vinVariantName)+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+checkforundefined(user.vinExteriorColor)+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+checkforundefined(user.sellingDealerName)+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+checkforundefined(user.sellingdealernumber)+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+checkforundefined(user.sellingDealerCity)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+checkforundefined(user.lastRoDate)+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+checkforundefined(user.nextRoDueDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+checkforundefined(user.basicWrtyStartDate)+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+checkforundefined(user.basicWrtyEndDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        
			  $("#vdetailHome").html(str);


}


}
}


function showVDHome() {
	var vinno = localStorage.getItem('vinno');
	var uname = localStorage.getItem('usernamehyundai');
	
	$.mobile.changePage( "#vehical_details", { transition: "flip"} );

	/*user.vinSalesModelCode = data.vinSalesModelCode;
	user.vinRegistrationNumber = data.vinRegistrationNumber;
	user.fuelType = data.fuelType;
	user.transmissionType = data.transmissionType;
	user.sellingDealerName = data.sellingDealerName;
	user.sellingDealerNumber = data.sellingDealerNumber;
	user.vinDeliveryDate = data.vinDeliveryDate;
	user.lastRoDate = data.lastRoDate;
	user.vinServiceModelCode = data.vinServiceModelCode;
	user.vinVariantName = data.vinVariantName;
	user.vinExteriorColor = data.vinExteriorColor;
	user.hapInsurancePolicy = data.hapInsurancePolicy;
	user.sellingDealerCity = data.sellingDealerCity;
	user.lastRoBillingAmt = data.lastRoBillingAmt;
	user.nextRoDueDate = data.nextRoDueDate;
	user.basicWrtyStartDate = data.basicWrtyStartDate;
	user.basicWrtyEndDate = data.basicWrtyEndDate;
	user.vinno = data.vinNumber;
	*/
	var str= "";

  $.ajax({
   url: SERVER1+'apis/get_vehicle_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
     data: {'mobileno': localStorage.getItem('usernamehyundai')},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   if(data.data.length>0)
   {
   	       if(data.data.length>1){
           var listItems= "<div class=profile_select>"+
									'<select name=vehother id="vehother" class=additional_control  data-role=none data-mini=true data-inline=true onchange=javascript:fetchVehicle();>';
									
			listItems+= "<option value='0'>--Select Vehicle--</option>";

			//listItems+= '<option value=' + user.vinNumber+' selected>'+user.vinname+'</option>';
            for (var i = 0; i < data.data.length; i++)
			{

               if(data.data[i].vin_name!='')
               {
                if(data.data[i].vin_number==user.vinno)
				   listItems+= '<option value=' + data.data[i].vin_number+' selected>'+data.data[i].vin_name+'</option>';
			    else
			    	listItems+= '<option value=' + data.data[i].vin_number+'>'+data.data[i].vin_name+'</option>';

		    	}
			   else
			   {
			   	if(data.data[i].vin_number==user.vinno)
			   			listItems+= '<option value=' + data.data[i].vin_number+' selected>Primary Vehicle</option>';
			   else
			   		listItems+= '<option value=' + data.data[i].vin_number+' >Primary Vehicle</option>';

			   }
            } 

            listItems+= '</select>';
			listItems+= '</div>';

			localStorage.setItem('vehdet',JSON.stringify(data));

            str +=listItems;
            }




                str +='<div class="vin_details">';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Chasis No:</h3><span class="member_role" id="vinNumberdisplay">'+checkforundefined(localStorage.getItem('vinno'))+'</span></li>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+checkforundefined(user.vinSalesModelCode)+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+checkforundefined(user.vinRegistrationNumber)+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+checkforundefined(user.fuelType)+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+checkforundefined(user.transmissionType)+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+checkforundefined(user.vinDeliveryDate)+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+checkforundefined(user.vinservicemodelcode)+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+checkforundefined(user.vinVariantName)+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+checkforundefined(user.vinExteriorColor)+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+checkforundefined(user.sellingDealerName)+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+checkforundefined(user.sellingdealernumber)+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+checkforundefined(user.sellingDealerCity)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+checkforundefined(user.lastRoDate)+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+checkforundefined(user.nextRoDueDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+checkforundefined(user.basicWrtyStartDate)+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+checkforundefined(user.basicWrtyEndDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        
			  $("#vdetailHome").html(str);
	
     }
     else
     {
     	   

     	  str +='<div class="vin_details">';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Chasis No:</h3><span class="member_role" id="vinNumberdisplay">'+checkforundefined(localStorage.getItem('vinno'))+'</span></li>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+checkforundefined(user.vinSalesModelCode)+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+checkforundefined(user.vinRegistrationNumber)+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+checkforundefined(user.fuelType)+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+checkforundefined(user.transmissionType)+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+checkforundefined(user.vinDeliveryDate)+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+checkforundefined(user.vinservicemodelcode)+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+checkforundefined(user.vinVariantName)+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+checkforundefined(user.vinExteriorColor)+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+checkforundefined(user.sellingDealerName)+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+checkforundefined(user.sellingdealernumber)+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+checkforundefined(user.sellingDealerCity)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+checkforundefined(user.lastRoDate)+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+checkforundefined(user.hapInsurancePolicy)+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+checkforundefined(user.nextRoDueDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+checkforundefined(user.basicWrtyStartDate)+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+checkforundefined(user.basicWrtyEndDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        
			  $("#vdetailHome").html(str);
	
     }


        
      
	  
		   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

		        
		        
		      
	
	
	/*$.ajax({
    url: GDMSSERVER+'getVinStatus/'+user.vinno+'/'+uname,
    type: 'GET',
    timeout: 50000,
    dataType: 'text',
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
    	console.log('data in vinstatus'+data);
    	if(data == 'Y' || data == 'V')
    	{
			$.ajax({
		    url: GDMSSERVER+'getVinDetails/'+vinno,
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {
		  		console.log('data in vindetails'+data.vinRegistrationNumber);
		  
	  
	  
		        var str= "";
		        
		        str +='<div class="vin_details">';
		        str +='<h2>VEHICLE DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+data.vinSalesModelCode+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+data.vinRegistrationNumber+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+data.fuelType+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+data.transmissionType+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+data.vinDeliveryDate+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+data.vinservicemodelcode+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+data.vinVariantName+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+data.vinExteriorColor+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+data.hapInsurancePolicy+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>DEALER DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+data.sellingDealerName+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+data.sellingdealernumber+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+data.sellingDealerCity+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+data.lastRoDate+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+data.hapInsurancePolicy+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+data.nextRoDueDate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>WARRANTY DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+data.basicWrtyStartDate+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+data.basicWrtyEndDate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        
			  $("#vdetailHome").html(str);
			  //$("#vdetailHome").fadeIn();
		   
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });
    	}
	},
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
  */
	
}

function toggleDetails(e){
	//console.log(e)
	$(e).toggleClass("rotate_90");
	$(e).parent("h2").next("ul").slideToggle("fast");
}
function toggleDetails1(e){

	$(".profile_content").slideToggle("fast");
	$(".profile_details h2 a").toggleClass("rotate_90");
	
	
}



function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'||str==null||str=='null')
    {
        str='';
    }
        return str;
}

function showvdetail()
{

	 if($('#vehiclelink').val().trim()=='')
        {
                toast('VIN No cannot be blank');
                $('#vehiclelink').focus();
                $('#vehiclelink').scrollIntoView();
        }
     else if($('#vehiclelink').val().trim().length<17)
        {
                toast('Not a valid VIN No');
                $('#vehiclelink').val('');
                $('#vehiclelink').focus();
                $('#vehiclelink').scrollIntoView();
        }
    else
    {
	var vinno = $('#vehiclelink').val();
	var uname = localStorage.getItem('usernamehyundai');
	$.ajax({
    url: GDMSSERVER+'getVinStatus/'+vinno+'/'+uname,
    type: 'GET',
    timeout: 50000,
    dataType: 'text',
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
    	console.log('data in vinstatus'+data);
    	if(data == 'Y' || data == 'V')
    	{
			$.ajax({
		    url: GDMSSERVER+'getVinDetails/'+vinno,
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {
		  		console.log('data in vindetails'+data.vinRegistrationNumber);
		  
	  
	  
		        var str= ""; 
		        
		        str +='<div class="vin_details">';
		        str +='<div class="ui-grid-solo">'+
                    '<div class="ui-block-a">'+
                        '<div class="profile_input" style="padding:10px">'+
                           'Give your vechicle a name: <input type="text" placeholder="Enter Vehicle Name" autocomplete="off"  data-role="none" id="vin_name" />'+
                        '</div>'+
                   '</div>'+
               '</div>';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+checkforundefined(data.vinSalesModelCode)+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+checkforundefined(data.vinRegistrationNumber)+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+checkforundefined(data.fuelType)+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+checkforundefined(data.transmissionType)+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+checkforundefined(data.vinDeliveryDate)+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+checkforundefined(data.vinservicemodelcode)+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+checkforundefined(data.vinVariantName)+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+checkforundefined(data.vinExteriorColor)+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+checkforundefined(data.hapInsurancePolicy)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+checkforundefined(data.sellingDealerName)+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+checkforundefined(data.sellingdealernumber)+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+checkforundefined(data.sellingDealerCity)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+checkforundefined(data.lastRoDate)+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+checkforundefined(data.hapInsurancePolicy)+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+checkforundefined(data.nextRoDueDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+checkforundefined(data.basicWrtyStartDate)+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+checkforundefined(data.basicWrtyEndDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="text-center mb-20"><div class="btn_wrapper"><a href="javascript:customerRegistration();" class="btn_primary light_btn">Confirm</a></div></div>';
		      
			  $("#vehicle_form").slideUp();
				
				setTimeout(function(){
					$("#vdetail").html(str);
				}, 200)
			  
		   
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {

		 
		    }
		  });
    	}
    	else
    	{

    		//-------------------------------------------------------------------
    		/*
    		toast('Vehicle not found');

    			$.ajax({
		    url: GDMSSERVER+'getVinDetails/'+vinno,
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {
		  		console.log('data in vindetails'+data.vinRegistrationNumber);
		  
	  
	  
		        var str= "";
		        
		        str +='<div class="vin_details">';
		        str +='<h2>VEHICLE DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+data.vinSalesModelCode+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+data.vinRegistrationNumber+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+data.fuelType+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+data.transmissionType+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+data.vinDeliveryDate+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+data.vinservicemodelcode+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+data.vinVariantName+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+data.vinExteriorColor+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+data.hapInsurancePolicy+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>DEALER DETAILS</h2>';
		        str +='<ul class="vin_details">';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+data.sellingDealerName+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+data.sellingdealernumber+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+data.sellingDealerCity+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+data.lastRoDate+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+data.hapInsurancePolicy+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+data.nextRoDueDate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>WARRANTY DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+data.basicWrtyStartDate+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+data.basicWrtyEndDate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="btndiv"><a href="javascript:customerRegistration();" class="btnclass">Confirm</a></div>';
		      
			  $("#vdetail").html(str);
		   
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });
    			*/

    		//-------------------------------------------------------------------
    		$.mobile.changePage( "#failpage", { transition: "none"} );
    		document.getElementById("faildesc").innerHTML = 'No such Vehicle Registration No / Mobile No found!!';
    	}
	},
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}
}


function showvdetail_new()
{

	 if($('#vehiclelink_new').val().trim()=='')
        {
                toast('VIN No cannot be blank');
                $('#vehiclelink').focus();
                $('#vehiclelink').scrollIntoView();
        }
     else if($('#vehiclelink_new').val().trim().length<17)
        {
                toast('Not a valid VIN No');
                $('#vehiclelink').val('');
                $('#vehiclelink').focus();
                $('#vehiclelink').scrollIntoView();
        }
    else
    {
	var vinno = $('#vehiclelink_new').val();
	var uname = localStorage.getItem('usernamehyundai');
	$.ajax({

    url: GDMSSERVER+'getVinStatus/'+vinno+'/'+uname,
   // url: GDMSSERVER+'getVinStatus/55555555555555555/'+uname,
    type: 'GET',
    timeout: 50000,
    dataType: 'text',
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
    	console.log('data in vinstatus'+data);
    	if(data == 'Y' || data == 'V')
    	{
			$.ajax({
		    url: GDMSSERVER+'getVinDetails/'+vinno,
		    //url: GDMSSERVER+'getVinDetails/55555555555555555',
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {
		  		console.log('data in vindetails'+data.vinRegistrationNumber);
		  
	  
	  
		        var str= ""; 
		        
		        str +='<div class="vin_details">';
		        str +='<div class="ui-grid-solo">'+
                    '<div class="ui-block-a">'+
                        '<div class="profile_input">'+
                           'Give your vechicle a name: <input type="text"  data-role="none" id="vin_name_new" />'+
                        '</div>'+
                   '</div>'+
               '</div>';
		        str +='<h2>Vehicle Details <a href="#" onclick="javascript:toggleDetails(this)" class="rotate_90"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul style="display:block">';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode_new">'+checkforundefined(data.vinSalesModelCode)+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber_new">'+checkforundefined(data.vinRegistrationNumber)+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype_new">'+checkforundefined(data.fuelType)+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype_new">'+checkforundefined(data.transmissionType)+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate_new">'+checkforundefined(data.vinDeliveryDate)+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode_new">'+checkforundefined(data.vinservicemodelcode)+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname_new">'+checkforundefined(data.vinVariantName)+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor_new">'+checkforundefined(data.vinExteriorColor)+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy_new">'+checkforundefined(data.hapInsurancePolicy)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>Dealer Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername_new">'+checkforundefined(data.sellingDealerName)+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno_new">'+checkforundefined(data.sellingdealernumber)+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity_new">'+checkforundefined(data.sellingDealerCity)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate_new">'+checkforundefined(data.lastRoDate)+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt_new">'+checkforundefined(data.hapInsurancePolicy)+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate_new">'+checkforundefined(data.nextRoDueDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>Warranty Details <a href="#" onclick="javascript:toggleDetails(this)"><img src="images/arrow_icon.png" class="img-responsive" alt /></a></h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate_new">'+checkforundefined(data.basicWrtyStartDate)+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate_new">'+checkforundefined(data.basicWrtyEndDate)+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="text-center mb-20"><div class="btn_wrapper"><a href="javascript:vehicleRegistration();" class="btn_primary light_btn">Confirm</a></div></div>';
		      
			  $("#vehicle_form").slideUp();
				
				setTimeout(function(){
					$("#vdetail_new").html(str);
				}, 200)
			  
		   
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {

		 
		    }
		  });
    	}
    	else
    	{

    		//-------------------------------------------------------------------
    		/*
    		toast('Vehicle not found');

    			$.ajax({
		    url: GDMSSERVER+'getVinDetails/'+vinno,
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {
		  		console.log('data in vindetails'+data.vinRegistrationNumber);
		  
	  
	  
		        var str= "";
		        
		        str +='<div class="vin_details">';
		        str +='<h2>VEHICLE DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Vehicle Sales Model Code:</h3><span class="member_role" id="vinsalesmodelcode">'+data.vinSalesModelCode+'</span></li>';
				str +='<li><h3>Vehicle Reg No:</h3><span class="member_role" id="vinregistrationnumber">'+data.vinRegistrationNumber+'</span></li>';
		        str +='<li><h3>Fuel Type:</h3><span class="member_role" id="fueltype">'+data.fuelType+'</span></li>';
		        str +='<li><h3>Transmission Type:</h3><span class="member_role" id="transmissiontype">'+data.transmissionType+'</span></li>';
		        str +='<li><h3>Vehicle Delivery Date:</h3><span class="member_role" id="vindeliverydate">'+data.vinDeliveryDate+'</span></li>';
		        str +='<li><h3>Service Model Code:</h3><span class="member_role" id="vinservicemodelcode">'+data.vinservicemodelcode+'</span></li>';
		        str +='<li><h3>Variant Name:</h3><span class="member_role" id="vinvariantname">'+data.vinVariantName+'</span></li>';
		        str +='<li><h3>Exterior Color:</h3><span class="member_role" id="vinexteriorcolor">'+data.vinExteriorColor+'</span></li>';
		        str +='<li><h3>HAP Insurance Policy:</h3><span class="member_role" id="hapinsurancepolicy">'+data.hapInsurancePolicy+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';		        
		        str +='<h2>DEALER DETAILS</h2>';
		        str +='<ul class="vin_details">';
		        str +='<li><h3>Dealer Name:</h3><span class="member_role" id="sellingdealername">'+data.sellingDealerName+'</span></li>';
		        str +='<li><h3>Dealer No:</h3><span class="member_role" id="sellingdealerno">'+data.sellingdealernumber+'</span></li>';
		        str +='<li><h3>Selling Dealer City:</h3><span class="member_role" id="sellingdealercity">'+data.sellingDealerCity+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>RO DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Last RO Date:</h3><span class="member_role" id="lastrodate">'+data.lastRoDate+'</span></li>';
		        str +='<li><h3>Last RO Billing Amt:</h3><span class="member_role" id="lastrobillingamt">'+data.hapInsurancePolicy+'</span></li>';
		        str +='<li><h3>Next RO Due Date:</h3><span class="member_role" id="nextroduedate">'+data.nextRoDueDate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="vin_details">';
		        str +='<h2>WARRANTY DETAILS</h2>';
		        str +='<ul>';
		        str +='<li><h3>Warranty Start Date:</h3><span class="member_role" id="basicwrtystartdate">'+data.basicWrtyStartDate+'</span></li>';
		        str +='<li><h3>Warranty End Date:</h3><span class="member_role" id="basicwrtyenddate">'+data.basicWrtyEndDate+'</span></li>';
		        str +='</ul>';
		        str +='</div>';
		        str +='<div class="btndiv"><a href="javascript:customerRegistration();" class="btnclass">Confirm</a></div>';
		      
			  $("#vdetail").html(str);
		   
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });
    			*/

    		//-------------------------------------------------------------------
    		$.mobile.changePage( "#failpage", { transition: "none"} );
    		document.getElementById("faildesc").innerHTML = 'No such Vehicle Registration No / Mobile No found!!';
    	}
	},
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}
}


function isDate18orMoreYearsOld(dt) {
		var mm ='';
		var dd ='';
		var yyyy = '';
		var birthday = new Date($('#'+dt).val());
		
		 
		var age = parseInt((Date.now() - birthday) / (31557600000));
		
		if(age>=18)
	{
			
			return true;
	}
		
		toast('Age cannot be less than 18 years');
		$('#'+dt).val('');
		return false;
}
function checkemail(str)
{
	var str1 = $('#'+str).val();



	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str1))  
  {  
    return (true);  
  }  
  
    toast("You have entered an invalid email address!"); 
	$('#'+str).val('');
    return (false);
}


function checkpin(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==6)
	{
		return (true);
		
	}
	toast('Invalid Pin');
	$('#'+str).val('');
	return (false);
}
function matchpassword(val,val1)
{
	var str = $('#'+val).val();
	var str1 = $('#'+val1).val();
	if(str == str1)
	{
		return (true);
	}
	toast("Password mismatch.Please try again."); 
	$('#'+val1).val('');
    return (false);
}

function opencomings()
{
	toast('Coming Soon!');
}
function checkcustomerexists_mmp(mob,vin)
{

		  //https://mmpdev.hyundai.co.in/autoever/apis/check_member_registration_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o20&mobileno=9818747077&vinNumber=xxx
		 $.ajax({
			url: SERVER1+'apis/check_member_registration_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
			
			data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','mobileno': mob,'vinNumber':vin},
			success: function(data, textStatus, xhr) {
			 console.log(data.data);
			 //console.log(textStatus);
			if(data.error=='Member not registered.' || data.data=='Member registered but vehicle not registered')
			 {
			 	return false;	
			 }
			else
			{
				return true;
			}
		    },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
			});
  		
}
function checkcustomerexists(mob)
{
	
	$.ajax({
		    url: CTBSERVER+'/exists.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		   
		    data:JSON.stringify({'mobile': mob}),
		    
		    beforeSend  : function() {
                  $("#wait").css("display","block");
            },
            complete: function() {
                $("#wait").css("display","none");
            },
		    success: function(data, textStatus, xhr) {
		  		//console.log('data in checkcustomerexists'+JSON.stringify(data.dataVO[0].message));
		   
		   if(data.dataVO[0].message=='Mobile no. already exists.')
		   {
		   	return true;
		   }
		   else
		   {
		   	return false;
		   }
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });

}

$(document).on('pageinit', '#faqs', function (event, ui) {

/*
	try{

	UXCam.tagScreenName("Faq Page");  
	 UXCam.logEvent("Faq Page", "Faq Page");

	 }
	catch(err)
	{
		
	}
	*/

	$.ajax({
		    url: SERVER1+'mapp/faq.json',
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {
		  		var str = '';
		  		for(var i=0;i<data.length;i++)
		  		{
		  			var ans = nl2br(data[i].answer);
		  			str += '<div class="faq_block">';
						str += '<div class="collapsible" data-iconpos="right">';
					 	str += '<h4>'+data[i].question+'</h3>'
					 	str += '<p>'+ans+'</p>';
						str += '</div>';
					str += '</div>';
					
		  		}
		   		str += '<div class="text-center mt-20 mb-20"><div class="btn_wrapper" style="width:180px;max-width:initial"><a href="javascript:filecomplaint();" class="btn_primary light_btn">Send A Query</a></div></div>';
		   		$("#faqs .ui-content").html(str);
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });
	
			setTimeout(function(){
				//alert("jgjhg");
				$(".collapsible").collapsible();
			}, 1000)

});


$(document).on('pageshow', '#sos', function (event, ui) {

	
/*
	try{

	UXCam.tagScreenName("SOS");  
	 UXCam.logEvent("SOS Page", "SOS Page");

	 }
	catch(err)
	{
		
	}

*/
	$.ajax({
		    url: SERVER1+'mapp/cont1.json',
		    type: 'GET',
		    timeout: 50000,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {

		    	//data=JSON.parse(data);

		    	
		    	console.log('sssssssssssssss'+JSON.stringify(data));




		  		var str = '<div class="sos_section">';
		  		for(var i=0;i<data.length;i++)
		  		{
		  			var ans = nl2br(data[i].answer);
		  			str += '<div class="sos_block">';
                    str += '<h3 class="sos_name">'+data[i].question+'</h3>';
                     str += '<h4 class=sos_number><a href=tel:'+ans+'>'+ans+'</a></h4>';  
                      str += '<h4 class=sos_number><a href=mailto:'+data[i].answer1+'>'+data[i].answer1+'</a></h4>';                                  
          			str += '</div>';
		  		}
		   		str += '</div>';
		   		$("#sos_ht").html(str);
		   		console.log(str);
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {

		    	console.log('textStatus'+textStatus);
		 
		    }
		  });

});


function nl2br (str, is_xhtml) {
     var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
     return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  } 

  function filecomplaint()
{
	/*
	try{

	UXCam.tagScreenName("Complaint Page");  
	 UXCam.logEvent("Complaint Page", "Complaint Page");

	 }
	catch(err)
	{
		
	}
	*/
		$.mobile.changePage( "#querypage");
}

function submitcomplaint()
{
	
	var complaint = $('#Comments_complaint').val();
	 if(complaint==''){
		  toast('You have not entered your problem');
		}else{


			$.ajax({
			url: SERVER+'feedback_json.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {


				'MobileNo': localStorage.getItem('usernamehyundai'),
				'FirstName': localStorage.getItem('firstname'),
				'LastName': localStorage.getItem('lastname'),
				'EmailId': localStorage.getItem('emailid'),       
				'StoreId': localStorage.getItem('def_store'),    
				'Var1': localStorage.getItem('feedpic'),   
				'Var2': complaint,     
				'Var3': $('#querytype').val(), 
				'Var4': '',    
				'Var5': '',      
				'Var6': '',     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': '',
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
				
					
				
			},
			success: function(data, textStatus, xhr) {
				
				    
					
				toast('Your complaint has been registered. Will get back to you shortly');

				$.mobile.changePage( "#homepage", {transition: "flip"} );
				
				$('#Comments_complaint').val('');
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		}
}

function forgotpassword()
{
	/*var logintype = localStorage.getItem('loginType');
	if(logintype==null)
		logintype == 'Mobile';

	if(typeof logintype == undefined || logintype == null)
	{
		logintype == 'Mobile';
	}*/
	var logintype = $("input[name='forgot_login']:checked").val();
	localStorage.setItem('loginType',logintype);

	var mob = $('#forgot_user').val();
	var eml = $('#forgot_useremail').val();

//https://uatclicktobuy.hyundai.co.in/ctb/customer/forgot-password/change-via-mobile.ctb
//https://uatclicktobuy.hyundai.co.in/ctb/customer/forgot-password/change-via-email.ctb
	if(logintype == 'Mobile')
	{
		if(mob=='')
		{
				toast('Mobile No cannot be blank');
                $('#forgot_user').focus();
                $('#forgot_user').scrollIntoView();
		}
		else
		{
			var loginuser = localStorage.setItem('login',mob);
		$.ajax({
			    url: CTBSERVER+'/forgot-password/change-via-mobile.ctb',
			    type: 'POST',
			    timeout: 50000,
			    dataType: 'json',
			   
			    data:JSON.stringify({'mobile': mob}),
			    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			    success: function(data, textStatus, xhr) {
			  		console.log('data in forgotpassword'+JSON.stringify(data));
			   
			   if(data.dataVO[0].message=='Forgot Password request OTP generated successfully.')
			   {
			   	var otp = data.dataVO[0].otpNumber;
			   	localStorage.setItem("fotp",otp);
			   	/*
			   	$.ajax({
 						 url: SERVER1+'apis/smsapi.asp?apiuid=MLOYALAPI&apipswd=M0B!Q$T@2o19&apiflag=send_otp&mobnum='+mob+'&user_otp='+otp,
  								success: function(data) {
   								
  								}
				});
				*/
			   	$.mobile.changePage( "#forgotpasswordscreen", {transition: "slide"} );
			   	$('#f_username').val(mob);
			   }
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
			  });
		}
	}
	else
	{
		toast('Coming Soon');
	/*if(eml=='')
		{
				toast('Email Id cannot be blank');
                $('#forgot_useremail').focus();
                $('#forgot_useremail').scrollIntoView();
		}
	else
		{
		var loginuser = localStorage.setItem('login',eml);
		$.ajax({
			    url: CTBSERVER+'customer/forgot-password/change-via-email.ctb',
			    type: 'POST',
			    timeout: 50000,
			    dataType: 'json',
			    async: false,
			    data:JSON.stringify({'email': eml}),
			    complete: function(xhr, textStatus) {
			    },
			    success: function(data, textStatus, xhr) {
			  		console.log('data in forgotemail'+JSON.stringify(data));
			    if(data.dataVO[0].message=='Forgot Password request email token generated successfully.')
			   {
			   	var otp = data.dataVO[0].emailToken;
			   	localStorage.setItem("fotp",otp);
			   	$.mobile.changePage( "#forgotpasswordscreen", {transition: "slide"} );
			   	$('#f_username').val(eml);
			   }
			   
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
			  });
		}*/
	}

}

function changepasswordscreen()
{
	var logintype = localStorage.getItem('loginType');
	var otp = localStorage.getItem("fotp");
	var val = $('#f_token').val();
	var loginuser = localStorage.getItem('login');
	if(otp!=val)
	{
		toast('Password mismatch. Try again');
	}
	else
	{
	//https://uatclicktobuy.hyundai.co.in/ctb/customer/forgot-password/validateOTP.ctb?mobile=9717049995&otpNumber=891841
	if(logintype == 'Mobile')
		{
		$.ajax({
			    url: CTBSERVER+'/forgot-password/validateOTP.ctb',
			    type: 'POST',
			    timeout: 50000,
			    dataType: 'json',
			    
			    data:JSON.stringify({'mobile': loginuser,'otpNumber':val}),
			   beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			    success: function(data, textStatus, xhr) {
			  		console.log('data in changepasswordscreen'+JSON.stringify(data));
			   
			   if(data.dataVO[0].message=='Forgot Password request OTP verification successful.')
			   {
			   	$.mobile.changePage( "#changepasswordscreen", {transition: "slide"} );
			   	$('#c_username').val(loginuser);
			   }
			   else
			   {
			   	toast(data.dataVO[0].message);
			   }
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
			  });
		}
	else
		{
		//https://uatclicktobuy.hyundai.co.in/ctb/customer/forgot-password/validateToken.ctb
		$.ajax({
			    url: CTBSERVER+'/forgot-password/validateToken.ctb',
			    type: 'POST',
			    timeout: 50000,
			    dataType: 'json',
			    
			    data:JSON.stringify({'email': loginuser,'emailToken':val}),
			    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			    success: function(data, textStatus, xhr) {
			  		console.log('data in changepasswordscreen'+JSON.stringify(data));
			   
			   if(data.dataVO[0].message=='Forgot password request email token verification successful.')
			   {
			   	$.mobile.changePage( "#changepasswordscreen", {transition: "slide"} );
			   	$('#c_username').val(loginuser);
			   }
			   else
			   {
			   	toast(data.dataVO[0].message);
			   }
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
			  });	
		}
	}
}


function resendotp()
{
	var logintype = localStorage.getItem('loginType');
	var loginuser = localStorage.getItem('login');

	if(logintype == 'Mobile')
	{
		$('#forgot_user').val(loginuser);
	}
	else
	{
		$('#forgot_useremail').val(loginuser);
	}
	forgotpassword();
	
}

function confirmchangepassword()
{
	var logintype = localStorage.getItem('loginType');
	var user = $('#c_username').val();
	var pass = $('#c_password').val();
	var cpass = $('#conf_password').val();
	var otp = localStorage.getItem("fotp");


	if(logintype == 'Mobile')
	{
	$.ajax({
			    url: CTBSERVER+'/forgot-password/confirm-via-mobile.ctb',
			    type: 'POST',
			    timeout: 50000,
			    dataType: 'json',
			   
			    data:JSON.stringify({'mobile': user,'otpNumber':otp,'changePassword':{'password':pass,'passwordRepeat':cpass}}),
			    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			    success: function(data, textStatus, xhr) {
			  		console.log('data in confirmchangepassword'+JSON.stringify(data));
			   
			   
			   	toast(data.dataVO[0].message);
			   	//https://mmpdev.hyundai.co.in/autoever/m/update_pswd.asp?mobileno=9818747077&password=1234
			   	if(data.dataVO[0].message == 'Password change was successful for Forgot Password request.')
               {
			   	$.ajax({
				url: SERVER+'update_pswd.asp',
				type: 'GET',
				timeout: 30000,
				data: {'mobileno': user,'password':pass},
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.toLowerCase()=='success' ||  data.toLowerCase()=='failed'){
					 //startWatch();
					 $.mobile.changePage( "#registered-user", {transition: "slide"} );
			   	
				   	$("input[name='forgot_login'][value='"+logintype+"']").attr("checked", true);
				    var loginuser = localStorage.getItem('login');

						if(logintype == 'Mobile')
						{
							$('#forgot_user').val(loginuser);
						}
						else
						{
							$('#forgot_useremail').val(loginuser);
						}


					}
					  
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
		 		});
			    }
			   	
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
			  });
		}
		else
		{

		$.ajax({
			    url: CTBSERVER+'/forgot-password/confirm-via-email.ctb',
			    type: 'POST',
			    timeout: 50000,
			    dataType: 'json',
			   
			    data:JSON.stringify({'email': user,'emailToken':otp,'changePassword':{'password':pass,'passwordRepeat':cpass}}),
			    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
                    
                    
                },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			    success: function(data, textStatus, xhr) {
			  		console.log('data in confirmchangepassword'+JSON.stringify(data));
			   
			   
			   	toast(data.dataVO[0].message);
			   		if(data.dataVO[0].message == 'Password change was successful for Forgot Password request.')
               {
               	//https://mmpdev.hyundai.co.in/autoever/apis/get_mobile_byemail_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o20&email=vikash@mobiquest.com
			   		$.ajax({
				url: SERVER+'apis/get_mobile_byemail_json_api.asp',
				type: 'GET',
				timeout: 30000,
				data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o20','email': user},
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.data[0].mobileno.length>0){
				 	var mob = data.data[0].mobileno;
			   	$.ajax({
				url: SERVER+'update_pswd.asp',
				type: 'GET',
				timeout: 30000,
				data: {'mobileno': mob,'password':pass},
				success: function(data, textStatus, xhr) {
				// console.log(data);
				// console.log(textStatus);
				 if(data.toLowerCase()=='success' ||  data.toLowerCase()=='failed'){
					 //startWatch();
					 $.mobile.changePage( "#registered-user", {transition: "slide"} );
			   	
				   	$("input[name='forgot_login'][value='"+logintype+"']").attr("checked", true);
				    var loginuser = localStorage.getItem('login');

						if(logintype == 'Mobile')
						{
							$('#forgot_user').val(loginuser);
						}
						else
						{
							$('#forgot_useremail').val(loginuser);
						}
					}
					  
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
		 		});
		 		}
					  
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
		 		});
			   }
			    },
			    error: function(xhr, textStatus, errorThrown) {
			 
			    }
			  });
		}
}

function loadAllStates()
{
    var now = new Date();
	var dd = now.getDate();
	var mm = parseInt(now.getMonth())+1;
	var yyyy = now.getFullYear();

	//$('#homepagefooter').trigger('destroy.owl.carousel');
if(typeof localStorage.getItem('state'+dd+mm+yyyy) == 'undefined' || localStorage.getItem('state'+dd+mm+yyyy) == null)
	{
	//https://autoever.mloyalretail.com/apis/Get_allstate_json_api.asp
   $.ajax({
   url: SERVER1+'apis/Get_allstate_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
			listItems+= "<option value='0'>--Select State--</option>";
        for (var i = 0; i < data.data.length; i++)
			{
				listItems+= "<option value='" + data.data[i].stateid +"-"+ data.data[i].statecode + "'>" + data.data[i].statename + "</option>";
            } 

        localStorage.setItem('state'+dd+mm+yyyy,listItems);
		$today = new Date();
		$yesterday = new Date($today);
		$yesterday.setDate($today.getDate() - 1); 


				
		var dd1 = $yesterday.getDate();
		var mm1 = parseInt($yesterday.getMonth())+1;
		var yyyy1 = $yesterday.getFullYear();
		localStorage.removeItem('state'+dd1+mm1+yyyy1);
      
	  $("#update_state").html(listItems);
	  $("#update_state1").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

   }
	else
	{
		var listItems = localStorage.getItem('state'+dd+mm+yyyy);
		$("#update_state").html(listItems);
		$("#update_state1").html(listItems);
	}
	 
}

function fetchDistrictlist(sid)
{
  var stateid = $('#'+sid).val();
  fetchdistrict1(stateid);
}

function fetchdistrict1(stateid)
{
	if(stateid!=null){
 var st = stateid.split("-");
  $.ajax({
   
  // https://mmpdev.hyundai.co.in/autoever/apis/Get_allcity_json_api.asp?stateid=5
   url: SERVER1+'apis/Get_allcity_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'stateid': st[0]},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select City*-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(data.data[i].citycode!=null)	
			{
				
					listItems+= "<option value='" + data.data[i].cityid + "-" + data.data[i].citycode + "'>" + data.data[i].cityname + "</option>";	
			}
			
		}


				  $("#update_city").html(listItems);
				  $("#update_city1").html(listItems);

				  $("#update_city option[value^='"+user.city+"']").prop("selected", true);
				  $("#update_city1 option[value^='"+user.city+"']").prop("selected", true);
				  
  
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}
}


function changepasswordfn()
{
	if($('#old_password').val().trim()=='')
        {
                toast('Old Password cannot be blank');
                $('#old_password').focus();
                $('#old_password').scrollIntoView();
        }
    else if($('#new_password').val().trim()=='')
        {
                toast('New Password cannot be blank');
                $('#new_password').focus();
                $('#new_password').scrollIntoView();
        }
    else if($('#retype_password').val().trim()=='')
        {
                toast('Re-Type Password cannot be blank');
                $('#retype_password').focus();
                $('#retype_password').scrollIntoView();
        }
	else{
			var oldpassword = $('#old_password').val();
			var newpassword = $('#new_password').val();
			var retypepassword = $('#retype_password').val();

	   		$.ajax({
		    url: CTBSERVER+'/login.ctb',
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:JSON.stringify({'mobile': localStorage.getItem('usernamehyundai'),'password':localStorage.getItem('passwordhyundai')}),
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {




		    	  		$.ajax({
						    url: CTBSERVER+'/change-password/confirm.ctb',
		    				type: 'POST',
		    				timeout: 50000,
		    				dataType: 'json',
		    				
		    				data:JSON.stringify({ "customer_id": encodeURIComponent(data.dataVO[0].customer.custId),"changePassword": {"oldPassword" : oldpassword, "password": newpassword, "passwordRepeat": retypepassword}}),
		    						 beforeSend: function (xhr) {

		    						 	console.log('sssss'+data.dataVO[0].customer.customerLoginHistory.session_token);
		    						 	$("#wait").css("display","block");
                    
                    				xhr.setRequestHeader('Authorization',  data.dataVO[0].customer.customerLoginHistory.session_token);
                				},
		   						
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
		    			success: function(data, textStatus, xhr) {
		    			console.log('login in change pwd'+JSON.stringify(data.dataVO[0].message));
		    			toast(data.dataVO[0].message);
		    				if(data.dataVO[0].message == 'Password change is successful.')
		    					{
		    						$.ajax({
									url: SERVER+'update_pswd.asp',
									type: 'GET',
									timeout: 30000,
									data: {'mobileno': localStorage.getItem('usernamehyundai'),'password':newpassword},
									success: function(data, textStatus, xhr) {
									// console.log(data);
									// console.log(textStatus);
									 if(data.toLowerCase()=='success' ||  data.toLowerCase()=='failed'){
										 //startWatch();
										 $.mobile.changePage( "#registered-user", {transition: "slide"} );
								   	
										}
										  
								    },
								    error: function(xhr, textStatus, errorThrown) {
								 
								    }
							 		});

		    					}
		  							

		  					 },
		   					 error: function(xhr, textStatus, errorThrown) {

		   					 	
		 
		   					 }
		  				});



	
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {
		 
		    }
		  });

	
		
		
	}

}


function changeMode(chkPassport) {
        
        chkPassport.checked ? alert("block" ): alert("none");

    }

 function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}



function showNotification()
{

//shownotbrands();

$.ajax({

url: SERVER+'not_json.asp',
type: 'GET',
timeout: 50000,
dataType: 'json',
data: {'mno': localStorage.getItem('usernamehyundai')},
complete: function(xhr, textStatus) {
},
success: function(data, textStatus, xhr) {


var listItems= "";


var setime = (data[0].msgdate+data[0].msgtime);
localStorage.setItem("nottimeseen",setime);

for (var i = 0; i < data.length; i++)
{

/*if(data[i].type=='ShowOnHomePage')
{

	 var str = '';
						 str +='<div class="notification_section">';
						 str +='<div class="notification_overlay">';
						 str +='</div>';
						 str +='<div class="notification_pop">';
						 str +='<a class="notification_close" onclick="closePop()">+</a>';
						 str +='<div class="notification_block p_relative">';
						 str +='<div class="notification_img1"><img src="'+data[i].image+'" class="img-responsive" /></div>';
						 str +='<p class="notification_msg1">'+data[i].msg+'</p>';
						 str +='</div>';
						 str +='</div>';
						 str +='</div>';	
					     $("#homepage").prepend(str);
}
*/

listItems+= "<div class=\"notifications_thread\" >";
if(data[i].image!='')
listItems+= "<div class=\"notifications_img\"><img src=\""+data[i].image+"\" class=\"img-responsive\"></div>";
else
listItems+= "<div class=\"notifications_img\"><img src=\"images/shopping_icon.png\" class=\"img-responsive\"></div>";

listItems+="<div class=\"notification_content\"><p class=\"noti_text\">"+data[i].msg+"</p>";
listItems+="<p class=\"noti_date\">"+data[i].msgdate+' '+data[i].msgtime+"</p>";
listItems+="</div>";
listItems+="</div>";
listItems+="</div>";
}

console.log(listItems);

$("#notifications_thread").html(listItems);


},
error: function(xhr, textStatus, errorThrown) {

}
});
$.mobile.changePage( "#notifications", {transition: "slide"} );

}
$(document).ready(function(){
	
})

var gettime;
var seetime;
function checkNotification()
{

//shownotbrands();

$.ajax({

url: SERVER+'not_json.asp',
type: 'GET',
timeout: 50000,
dataType: 'json',
data: {'mno': localStorage.getItem('usernamehyundai')},
complete: function(xhr, textStatus) {
},
success: function(data, textStatus, xhr) {


var listItems= "";

var today = new Date();
var t_date = new Date(today.getFullYear(),today.getMonth(),today.getDate());


if(data.length>0)
{


	for (var i = 0; i < data.length; i++)
		{

			var split_date=data[i].msgdate.split('-');


		
			var msg_date = new Date(split_date[0],split_date[1]-1,split_date[2]);

		

			var Difference_In_Time = t_date.getTime() - msg_date.getTime(); 

			var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

			console.log('Difference_In_Days'+Difference_In_Days);

	  if(Difference_In_Days<3)
	  {

		if(data[i].type=='ShowOnHomePage')
		{

	 					var str = '';
						 str +='<div class="notification_section">';
						 str +='<div class="notification_overlay">';
						 str +='</div>';
						 str +='<div class="notification_pop">';
						 str +='<a class="notification_close" onclick="closePop()">+</a>';
						 str +='<div class="notification_block p_relative">';
						 str+= "<div class=\"notifications_img1\"><img src=\""+data[i].image+"\" class=\"img-responsive\"></div>";
						 //str +='<p class="notification_msg">'+data[i].image+'</p>';
						 str +='<p class="notification_msg1">'+data[i].msg+'</p>';
						 str +='</div>';
						 str +='</div>';
						 str +='</div>';	
					     $("#homepage").prepend(str);
		}
	  }
	}
	var j = parseInt(data.length-1);
	gettime = (data[0].msgdate+data[0].msgtime);
	seetime = localStorage.getItem("nottimeseen");
	console.log('gettime'+gettime+'.....seetime'+seetime);
	if(gettime == seetime){
	localStorage.setItem("seennotification", "true");
	document.getElementById("ncount_home").innerHTML = '';
	document.getElementById("ncount_vehicle").innerHTML= '';
	document.getElementById("ncount_faq").innerHTML= '';
	document.getElementById("ncount_partner").innerHTML= '';
	document.getElementById("ncount_query").innerHTML= '';
	document.getElementById("ncount_special").innerHTML= '';
	document.getElementById("ncount_rewardbrand").innerHTML= '';
	document.getElementById("ncount_rewardcoupon").innerHTML= '';
	$(".notification_btn img").removeClass("shake");
		
	}
	else
	{
	localStorage.removeItem("seennotification");
	document.getElementById("ncount_home").innerHTML= '<span class="noti_active"></span>' ;
	document.getElementById("ncount_vehicle").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_faq").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_partner").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_query").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_special").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_rewardbrand").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_rewardcoupon").innerHTML= '<span class="noti_active"></span>';
		if((".notification_btn .noti_active").length > 0) {
			$(".notification_btn img").addClass("shake");
		}
	}
  }

},
error: function(xhr, textStatus, errorThrown) {

}
});




}
$(document).on("pagechange", function(){
if(gettime == seetime){
	localStorage.setItem("seennotification", "true");
	document.getElementById("ncount_home").innerHTML = '';
	document.getElementById("ncount_vehicle").innerHTML= '';
	document.getElementById("ncount_faq").innerHTML= '';
	document.getElementById("ncount_partner").innerHTML= '';
	document.getElementById("ncount_query").innerHTML= '';
	document.getElementById("ncount_special").innerHTML= '';
	document.getElementById("ncount_rewardbrand").innerHTML= '';
	document.getElementById("ncount_rewardcoupon").innerHTML= '';
	$(".notification_btn img").removeClass("shake");
		
	}
	else
	{
	localStorage.removeItem("seennotification");
	document.getElementById("ncount_home").innerHTML= '<span class="noti_active"></span>' ;
	document.getElementById("ncount_vehicle").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_faq").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_partner").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_query").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_special").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_rewardbrand").innerHTML= '<span class="noti_active"></span>';
	document.getElementById("ncount_rewardcoupon").innerHTML= '<span class="noti_active"></span>';
		if((".notification_btn .noti_active").length > 0) {
			$(".notification_btn img").addClass("shake");
		}
	}
})

$(document).on('pageshow', '#notifications', function (event, ui) {
	document.getElementById("ncount_home").innerHTML = '';
	document.getElementById("ncount_vehicle").innerHTML= '';
	document.getElementById("ncount_faq").innerHTML= '';
	document.getElementById("ncount_partner").innerHTML= '';
	document.getElementById("ncount_query").innerHTML= '';
	document.getElementById("ncount_special").innerHTML= '';
	document.getElementById("ncount_rewardbrand").innerHTML= '';
	document.getElementById("ncount_rewardcoupon").innerHTML= '';
	localStorage.setItem("seennotification", "true");
})

$('.scrollable').pullToRefresh({
    callback: function() {
        var def = $.Deferred();
        
        setTimeout(function() {
            def.resolve();      
        }, 3000); 

        return def.promise();
    }
});


function showGeolocation()
{
	

	if (navigator.geolocation)
	{
        navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
    } 
	else
	{
        toast('Location could not be traced..');
    }
	
}

function showGeolocation1()
{
	try{
 cordova.plugins.locationAccuracy.request(
          function() {
            console.log("testhigh success");
            setTimeout(function() {
              getPosition();
            }, 1500);
          },
          function() {
            alert("error");
          },
          cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
 }
 catch(e)
 {
 //	alert(e.toString());

 	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);

 }
        
      //  navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}
function getPosition() {
         navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}


function geolocationSuccess(position) 
{
		//var latlng = position.coords.latitude+','+position.coords.longitude;

		
		
		user.latitude_hyn = position.coords.latitude;
		user.longitude_hyn = position.coords.longitude;

		localStorage.setItem('lat',user.latitude_hyn);
		localStorage.setItem('lng',user.longitude_hyn);

		//alert(user.latitude_hyn);

		
}

function geolocationError(error) {
        /*toast('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');*/
}


function onImgError(source){
        source.src = "images/No_image.jpg";
        source.onerror = ""; 
        return true; 
    } 

$(document).on('pageshow', '#partners', function (event, ui) {

	

	$.ajax({
		    url: SERVER1+'mapp/partners.json',
		    type: 'GET',
		    timeout: 50000,
		    async:false,
		    dataType: 'json',
		    complete: function(xhr, textStatus) {
		    },
		    success: function(data, textStatus, xhr) {

		    	//data=JSON.parse(data);

		    	//console.log(JSON.stringify(data));

		    	

			   str='';

			    

			   for(var k=0;k<data.length;k++)
			   {
			   	console.log('sssssssssssss'+data[k].image);
			   	str+='<div class="partner">'+
			   		'<img src='+data[k].image+' class=img-responsive>'+
			   '</div>';


			   }
			   console.log(str);
			   document.getElementById('partnerslogos').innerHTML=str;
			   

		    	

		  		
		   
		    },
		    error: function(xhr, textStatus, errorThrown) {

		    	console.log('textStatus'+textStatus);
		 
		    }
		  });



 });
