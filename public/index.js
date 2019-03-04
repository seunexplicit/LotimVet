 var lotim = angular.module('myApp',['ngCookies', 'ngSanitize', 'ngAnimate']);

 lotim.config(function($interpolateProvider){
 	$interpolateProvider.startSymbol('//').endSymbol('//');
 });

 lotim.controller('lotimController', function($scope, $sce, $interval, $window, $location){
 	$scope.searchContent = [
 	{ item:"Article", link:"/article", No:1},
 	{ item:"Boerboel", link:"/dog/#boerboel-dog", No:2},
 	{ item:"Bengal", link:"/cat/#bengal-cat", No:3},
 	{ item:"Dog Breed", link:"/dog", No:4},
 	{ item:"Bull dog", link:"/dog/#bull-dog", No:5},
 	{ item:"Burmese", link:"/cat/#burmese", No:6},
 	{ item:"Cat Breed", link:"/cat", No:7},
 	{ item:"Bullmastiff", link:"/dog/#bullmastiff-dog", No:8},
 	{ item:"Egyptian mau", link:"/cat/#egyptian-mau", No:9},
 	{ item:"Poultry", link:"/poultry", No:10},
 	{ item:"Chihuahua", link:"/dog/#chihuahua-dog", No:11},
 	{ item:"European Shorthair", link:"/cat/#european-shorthair", No:12},
 	{ item:"Chowchow", link:"/dog/#chowchow-dog", No:13},
 	{ item:"Oriental Shorthair", link:"/cat/#oriental-shorthair", No:14},
 	{ item:"Sheep Breed", link:"/sheep", No:15},
 	{ item:"Caucasian", link:"/dog/#caucasian-dog", No:16},
 	{ item:"Duroc", link:"/pig/#duroc", No:17},
 	{ item:"Doberman", link:"/dog/#doberman-dog", No:18},
 	{ item:"Landrace", link:"/pig/#landrace", No:19},
 	{ item:"Goat", link:"/goat", No:20},
 	{ item:"Dalmatian", link:"/dog/#dalmatian-dog", No:21},
 	{ item:"Hampshire", link:"/pig/#hampshire", No:22},
 	{ item:"cattle Breed", link:"/cattle", No:23},
 	{ item:"English Mastiff", link:"/dog/#english-mastiff", No:24},
 	{ item:"Adamawa Gudali", link:"/cattle/#adamawa-gudali", No:25},
 	{ item:"Ask a Vet", link:"/askAVet", No:26},
 	{ item:"German Shephered", link:"/dog/#german-shepherd", No:27},
 	{ item:"Keteku", link:"/cattle/#keteku-cattle", No:28},
 	{ item:"Great Dane", link:"/dog/#great-dane", No:29},
 	{ item:"Kuri", link:"/cattle/#kuri-cattle", No:30},
 	{ item:"Zoonosis", link:"/article/?q=5c7cfab07422c30017845ca3", No:31},
 	{ item:"Lhasa Apso", link:"/dog/#lhasa-apso", No:32},
 	{ item:"Ndama", link:"/cattle/#ndama-cattle", No:33},
 	{ item:"Vaccination", link:"/article/?q=5c7cfb367422c30017845ca4", No:34},
 	{ item:"Neopolitan Mastiff", link:"/dog/#neopolitan-mastiff", No:35},
 	{ item:"Red Bororo", link:"/cattle/#red-bororo", No:36},
 	{ item:"Pitbull", link:"/dog/#pitbull-dog", No:37},
 	{ item:"Sokoto Gudali", link:"/cattle/#sokoto-gudali", No:38},
 	{ item:"Sahel", link:"/goat/#sahel-goat", No:39},
 	{ item:"Red Sokoto", link:"/goat/#red-sokoto", No:40},
 	{ item:"Pug", link:"/dog/#pug-dog", No:41},
 	{ item:"White Fulani", link:"/cattle/#white-fulani", No:42},
 	{ item:"ISA Brown", link:"/poultry/#isa-brown", No:43},
 	{ item:"Samoyed", link:"/dog/#samoyed-dog", No:44},
 	{ item:"Balami", link:"/sheep/#balami", No:45},
 	{ item:"Red Broiler", link:"/poultry/#red-broiler", No:46},
 	{ item:"Rhode Island Red", link:"/poultry/#rhode-island-red", No:47},
 	{ item:"Cornish cross", link:"/poultry/#cornish-cross", No:48},
 	{ item:"Saint Benard", link:"/dog/#saint-benard", No:49},
 	{ item:"Yankasa", link:"/sheep/#yankasa", No:50},
 	{ item:"Tibetan Mastiff", link:"/dog/#tibetan-mastiff", No:51},
 	{ item:"West African Dwarf Goat", link:"/goat/#west-african-dwarf", No:52},
 	{ item:"Uda", link:"/sheep/#uda-sheep", No:53},
 	{ item:"West African Dwarf Sheep", link:"/sheep/#west-african-dwarf", No:54},
 	{ item:"Chartreux", link:"/cat/#chartreux", No:55},
 	{ item:"Ragdoll cat", link:"/cat/#ragdoll-cat", No:56},
 	{ item:"Siamese", link:"/cat/#siamese-cat", No:57},
 	{ item:"Rottweiler", link:"/dog/#rottweiler-dog", No:58},
 	{ item:"Yorkshire", link:"/pig/#yorkshire", No:59},
 	{ item:"Livestock Farming", link:"/article/?q=5c7cfba97422c30017845ca5", No:60},
 	{ item:"Pig Rearing", link:"/article/?q=5c7d5f6f10d90b001728f420", No:61},
 	{ item:"Poultry Farming", link:"/article/?q=5c7d5b3810d90b001728f41f", No:662}
 	];

 	$scope.findItem = function(num){
 		$window.location.href = $scope.searchContent[num-1].link;
 		console.log(num);
 	}

 	var bgpicture = [{
 		pic_url: 'images/cat-on-lap2.png',
 		captions: '<i>Cat are so Lovely<br/>Why You should <br/>Own a Cat</i>',
 		ngclass:'background1',
 		articleAddress:'?q=5c7d654210d90b001728f421',
 		shortNote:'Lotim takes your pet health seriously'
 	},
 	{
 		pic_url:'images/zoonosis.jpg',
 		captions: '<i>Zoonosis<br/>A Major Threat<br/>To Human Health</i>',
 		ngclass:'background2',
 		articleAddress:'?q=5c7cfab07422c30017845ca3',
 		shortNote:'You Matters, We Matters, Your Animals Matters'
 	},
 	{
 		pic_url:'images/vaccine.jpg',
 		captions: '<i>Protect Humanity and Animal likewise<br/>by keeping up with<br/>Animal vaccination</i>',
 		ngclass:'background3',
 		articleAddress:'?q=5c7cfb367422c30017845ca4',
 		shortNote:'Make Lotim Your choice vet hub as we build a safe environment for you and your animal'
 	},
 	];

 	var count = 1;
 	$scope.bool= true;
 	var animateInterval;

 	$scope.pic_url = bgpicture[0].pic_url;
 	$scope.captions = $sce.trustAsHtml(bgpicture[0].captions);
 	$scope.bgd =  bgpicture[0].ngclass;
 	var aAddress = bgpicture[0].articleAddress;
 	$scope.shortNote = bgpicture[0].shortNote;

 	function animateBackground(){
 		if(count<2){
 			count ++;
 		}
 		else{
 			count=0;
 		}
 		$scope.pic_url = bgpicture[count].pic_url;
 		$scope.captions = $sce.trustAsHtml(bgpicture[count].captions);
 		$scope.bgd =  bgpicture[count].ngclass;
 		$scope.shortNote = bgpicture[count].shortNote;
 		aAddress = bgpicture[count].articleAddress; 
 	}

 	animateInterval = $interval(animateBackground, 10000);

 	$scope.showMinorColumn=false;
 	$scope.showmenu =false;
 	$scope.clickedButton = "images/unclicked.png";

 	$scope.showMenu = function(number){
 		if(number==1){
 			$scope.showMinorColumn=!$scope.showMinorColumn;
 			if($scope.showmenu==true) $scope.showmenu=false;
 		}
 		else{
 			$scope.showmenu=!$scope.showmenu;
 			if($scope.showmenu==true) $scope.clickedButton="images/clicked.png";
 			else  $scope.clickedButton="images/unclicked.png";
 			if($scope.showMinorColumn==true) $scope.showMinorColumn=false;
 		}
 	}

 	$scope.relocateArticle = function(){
 			$window.location.href="article/"+aAddress;
 	}

 });


lotim.controller('questionController', ['$scope', '$http','$window', '$cookies', '$q', function($scope, $http, $window, $cookies, $q){

	$scope.allowUser = true;
	var cookieAvailable = false;
	$scope.vMessage = "You are advise to ask vet related question only to keep using this platform";
	
	function allowSendQuestion(Email){

		return $q(function(resolve, reject){
			$http.get('/message/hjk7gh/8989/df/gfh/78/get', {params:{messageId:Email}}).then(
			function(response){
				var data = response.data;
				if(data){
						console.log(data.legality);
						var now = new Date();
						now = now.getTime();

						if(data.ld<=now){
							data.legality = 1;
							$http.post('/validity/jk57fhhgh/78d/yy',{
							email: data.email,
							legality: data.legality,
							ld: (new Date()).getTime()
							}).then(function(response){}, function(response){});
						}
					
						else {

							if(data.legality==2){
								$scope.vMessage = "You are on warning for sending irrelevant question" 
								+ ", please ensure to send related question to keep using this platform";
						 	}
							else if(data.legality==3){
								$scope.vMessage = "you have been suspended from using this platform"+
								", please keep checking when you will have access to this platform again";
								$scope.allowUser = false;
							
							}
						}
				}
				resolve('complete');
			},
			function(response){
				reject('uncomplete');
			});	
		});
	}

	var cookieEmail = $cookies.get('userEmail');
	if(cookieEmail){
		var promise = allowSendQuestion(cookieEmail);
		promise.then(function(response){
			cookieAvailable = true;
		}, function(response){
		});
	}	

	$scope.sendQuestion  = function(Name, Email, question){

		function  postQuestion(){
			if($scope.allowUser){
					
					var Question ={
					question:question,
					viewed:'no-view',
					date: new Date()
					}; 

				$http.post('/question/45667788/YghTrH', {
					name:Name, 
					email:Email, 
					updateQuestion:Question
				})
				.then(
				function(response){
						$window.alert('Message Sent Successfully');
				},
				function(response){
						$window.alert("Unsuccessful");
				});		
			}
			else{
				return;
			}
	}
	
				
				if(!cookieAvailable){ 
					var promise = allowSendQuestion(Email);
					promise.then(function(response){
						postQuestion();
						var now = new Date();
						now.setMonth(now.getMonth()+2); 
						$cookies.put('userEmail', Email, {'expires': now});
						console.log(response);
					}, function(response){
						console.log(response);
					});
				}
				else{
					postQuestion();
				}

	}
}]);

lotim.controller('articleController', ['$scope', '$http','$window', '$cookies', '$sce', '$location', '$interval', function($scope, $http, $window, $cookies, $sce, $location, $interval){
	
	var bgpicture = [{
 		ngclass:'background1',
 		shortNote:'Lotim takes your pet health seriously'
 	},
 	{
 		ngclass:'background2',
 		shortNote:'You Matters, We Matters, Your Animals Matters'
 	},
 	{
 		ngclass:'background3',
 		shortNote:'Make Lotim Your choice vet hub as we build a safe environment for you and your animal'
 	}
 	];

 	var count = 1
 	var animateInterval;

 	$scope.bgd =  bgpicture[0].ngclass;
 	$scope.shortNote = bgpicture[0].shortNote;

 	function animateBackground(){
 		if(count<2){
 			count ++;
 		}
 		else{
 			count=0;
 		}
 		$scope.bgd =  bgpicture[count].ngclass;
 		$scope.shortNote = bgpicture[count].shortNote;
 	}

 	animateInterval = $interval(animateBackground, 10000);


	$scope.dButton = false;

	$scope.showMinorColumn=false;
 	$scope.showmenu =false;
 	$scope.clickedButton = "/images/unclicked.png";
 	$scope.clickedButton1 = "/images/unclicked.png";

 	$scope.showMenu = function(number){
 		if(number==1){
 			$scope.showMinorColumn=!$scope.showMinorColumn;
 			if($scope.showMinorColumn==true) $scope.clickedButton="/images/clicked.png";
 			else  $scope.clickedButton="/images/unclicked.png";
 			if($scope.showmenu==true) {$scope.showmenu=false; $scope.clickedButton1="/images/unclicked.png";}
 		}
 		else{
 			$scope.showmenu=!$scope.showmenu;
 			if($scope.showmenu==true) $scope.clickedButton1="/images/clicked.png";
 			else  $scope.clickedButton1="/images/unclicked.png";
 			if($scope.showMinorColumn==true) {$scope.showMinorColumn=false; $scope.clickedButton="/images/unclicked.png";}
 		}
 	}

	$http.get('/article/mJKlkdHHDg/7899d/dd/get')
	.then(
	function(response){
		$scope.articles = response.data;

		var index = $cookies.get('index');
			if(index==undefined){
				var len = $scope.articles.length;
				len = Math.floor(Math.random()*(len-2));
				$scope.article = $scope.articles[len];
				$scope.comments = $scope.article.comments;
				$cookies.put('index', len);
			}
			else{
				$scope.article = $scope.articles[index];
				$scope.comments = $scope.article.comments;
			}
	},
	function(error){
		$scope.articles = error;
	});


	$scope.getArticle = function(articleID){
		$http.get('/article/hjfhjhf/898989/jj/get',{params:{
			articleId:articleID
		}})
		.then(
		function(response){
			$scope.article = response.data;
			if(!$scope.article.text){
				$scope.article.text = "<span style='font-size:200%'><b>Error Getting Article</b></span>";
			}
			$scope.article.text = $sce.trustAsHtml($scope.article.text);
			$scope.comments = $scope.article.comments;
		},
		function(error){
			$scope.artcicle = "An error occur!";
		});
		if($scope.articles!=undefined){
		for(var i = 0; i<$scope.articles.length; i++){
			if($scope.articles[i]._id==articleID){
				$cookies.put('index', i);
			}
		}
		}
	};

	var articleId = $window.location.search.substr(3,$window.location.search.length);
 	if(articleId!=""){$scope.getArticle(articleId);}

	$scope.addComments = function(cName, comment){
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var nd = new Date();
		var sDate="";
		sDate += nd.getDate()+"-"+months[nd.getMonth()]+"-20"+(nd.getYear()+"").substr(1,2)+" "+nd.getHours()+":"+nd.getMinutes();
		var aComment = {
			name: cName,
			date: sDate,
			text: comment
		}

		$http.post('/commnent/hjhjDHFGFGuII/6767/hhfh', {
			articleID:$scope.article._id,
			articleComment:aComment
		}).then(
		function(response){
			$scope.comments.push(aComment);
			$window.alert('Successfully posted');
		}, 
		function(response){
			$window.alert('Comment Was Not Posted Successfully');
			$scope.dButton = false;
		});
	}
}]);