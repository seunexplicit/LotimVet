var admin = angular.module('adminApp', ['ngSanitize']);

admin.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('//').endSymbol('//');
});

admin.controller('adminController', ['$scope', function($scope){
	$scope.displayedContent='message_window.html';
}]);
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
admin.controller('messageController', ['$scope', '$http', '$window', function($scope, $http, $window){
	
	$scope.messagesShow = true;
	var sDate="";

	$http.get('/messages/676777/HjjkkJkk/get')
	.then(
	function(response){
		$scope.messages = response.data;
		for(var i = 0; i<$scope.messages.length; i++){
			for(var j=0; j<$scope.messages[i].ques_ans.length; j++){
				if($scope.messages[i].ques_ans[j].question.viewed=='no-view'){
					$scope.messages[i].viewed='no-view';
					break;
				}
			}
		}
	},
	function(error){
		$scope.messages = [];
	});

	$scope.clickArrow = function(arrow){
		if(arrow=='backward'){
			if($scope.messagesShow==true&&$scope.message!=undefined){
				$scope.messageshow();
			}
		}
		else if(arrow=='forward'){
			if($scope.messagesShow==false){
				$scope.messageshow();
			}
		}
	}
	$scope.messageshow = function(){
		$scope.messagesShow = !$scope.messagesShow;
		$scope.messageShow = !$scope.messagesShow;
	}

	$scope.getMessage = function(messageID){
		$scope.showWarningButton = true;

		$http.get('/message/hjj778ffdf/gfh/888/get', {params:{messageId:messageID}})
		.then(
		function(response){
			$scope.message = response.data;

			$scope.ques = $scope.message.ques_ans;

			if($scope.message.legality==3){
			$scope.showWarningButton = false;
			$scope.warning_value = "User Suspended";
			var setDate = $scope.message.ld;
			var todayDate = new Date();
			todayDate = todayDate.getTime();
			if(setDate<=todayDate){
				$scope.message.legality = 1;
				$http.post('/validity/jk57fhhgh/78d/yy',{
					email:$scope.message.email,
					legality:$scope.message.legality,
					ld: (new Date()).getTime()
				}).then(function(response){}, function(response){});
			} 
		}

		else if($scope.message.legality==2){
			$scope.warning_value = "Suspend User";
			var todayDate = new Date();
			todayDate = todayDate.getTime();
			var setDate = $scope.message.ld;
			if(setDate<=todayDate){
				$scope.message.legality = 1;
				$http.post('/validity/jk57fhhgh/78d/yy',{
					email:$scope.message.email,
					legality:$scope.message.legality,
					ld: (new Date()).getTime()
				}).then(function(response){}, function(response){});
			} 
		}

		else if($scope.message.legality==1){
			$scope.warning_value = "Send Warning";
		}
		},
		function(error){
		});	
	}

	$scope.setLegality = function(messageEmail){
		var sure = $window.confirm("Are you sure you want to issue warning");
		if(sure){
			var ld = new Date();
			if($scope.message.legality<3){
				$scope.message.legality= $scope.message.legality+1;
				if ($scope.message.legality==2) {
					ld = new Date();
					ld.setMonth(ld.getMonth()+1);
					ld = ld.getTime();

				}
				else if($scope.message.legality==3){
					ld = new Date();
					ld.setMonth(ld.getMonth()+2);
					ld  = ld.getTime();
					$scope.showWarningButton = false; 
				}
			}
			else
				$scope.message.legality = 1;
			$http.post('/validity/jk57fhhgh/78d/yy',{
					email:messageEmail,
					legality:$scope.message.legality,
					ld:ld
				}).then(function(response){}, function(response){});
		}
		else
			return;
	}

	$scope.setAnswer = function(reply, questionID){
		var answer = {
			texts: reply,
			date: new Date()
		}
		for(var i = 0; i<$scope.ques.length; i++){
			if($scope.ques[i]._id==questionID){
				$scope.ques[i].answer = answer;
				$scope.ques[i].question.viewed = 'view';
			}
		}
		$http.post('/answer/675775677/KloYhYYj/',{
			email:$scope.message.email,
			updateAnswer:$scope.ques
		}).then(function(response){console.log(response.data)}, function(response){console.log(response.data)});

	}

	$scope.deleteMessage = function(messageID){

		var verify = $window.confirm("Are You sure, You want to delete this message");

		if(verify){
		$http.post('/deleteMessage/jdhj5dh673/hjhsjhd', {
			email:$scope.message.email,
			messageID:messageID
		}).then(function(response){
			$window.alert('Message Successfully remove');
		}, function(response){
			$window.alert('Message Was not Successfully remove');
		});
		}
		else{
			return;
		}
	}

	$scope.deleteUser = function(messageEmail){
		var verify = $window.confirm("Are You sure, You want to delete this user");
		if(verify){
			$http.post( '/deteleUser/hgy8uydy423/eew3232&4',{email:messageEmail})
			.then(function(response){$window.alert('User Successfully Deleted');}, 
				function(response){$window.alert('Could not Delete User');});

			for(var i=0; i<$scope.messages.length; i++){
				if($scope.messages[i].email==messageEmail){
					$scope.messages.splice(i,1);
				}
			}
		}
	else{
		return;
	}
	}

}]);

admin.controller('articleController', ['$sce','$http', '$window', '$scope',
	function($sce, $http, $window, $scope){

	$scope.showArticles = true;

	$http.get('/article/mJKlkdHHDg/7899d/dd/get')
	.then(
	function(response){
		$scope.articles = response.data;
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
			$scope.article.text = $sce.trustAsHtml($scope.article.text)
		},
		function(error){
			$scope.artcicle = ["An error occur!"];
		});

		$scope.showArticles = !$scope.showArticles;
		$scope.showArticle = !$scope.showArticles;
	};

	$scope.clickArrow = function(arrow){

		if(arrow=='backward'){
			if($scope.showArticles==true && $scope.article!=undefined){
				$scope.showArticles = !$scope.showArticles;
				$scope.showArticle = !$scope.showArticles;
			}
		}
		else if(arrow=='forward'){
			if($scope.showArticle==true){
				$scope.showArticles = !$scope.showArticles;
				$scope.showArticle = !$scope.showArticles;
			}
			if($scope.showEdit==true){
				$scope.cancelEdit();
			}
		}
	}

	$scope.makeEdit = function(){
		var title = $scope.article.title;
		var text = $scope.article.text;
		var author = $scope.article.author;
		var ref = $scope.article.reference;

		$scope.showArticle = !$scope.showArticle;
		$scope.showEdit = !$scope.showArticle;

		$scope.cancelEdit = function(){
			$scope.article.title = title;
			$scope.article.text = text;
			$scope.article.author = author;
			$scope.article.reference = ref;

			$scope.showEdit = !$scope.showEdit;
			$scope.showArticle = !$scope.showArticle;
		};

		$scope.editArticle = function(){
			var verify = $window.confirm("Are You sure, You want to save this changes");
			if(verify){
			$http({
				method: 'POST',
				url: '/updaetarticle/dfgfr445/989h/j',
				data:{
					articleId:$scope.article._id,
					title:$scope.article.title,
					text:$scope.article.text,
					author:$scope.article.author,
					reference:$scope.article.reference
				},
				headers:{'Content-Type':'application/json;charset=utf-8'}
				
			}).then(
			function(data){
				$window.alert("succesfully updated");
			},
			function(error){
				$window.alert('not Successfully updated');
			});
			$scope.showEdit = !$scope.showEdit;
			$scope.showArticle = !$scope.showArticle;
			}
			else{
				return;
			}
		}
	};

	$scope.deleteArticle = function(){
		var verify = $window.confirm("Are You sure, You want to delete this article");
		if(verify){
		$http.post('/deletearticle/fhhghjud/565/78hj', {
			articleId:$scope.article._id
		}).then(
		function(response){
			for(var i = 0; i<$scope.articles.length; i++){
				if($scope.articles[i]._id==$scope.article._id){
					$scope.articles.splice(i, 1);
				}
			};
			$scope.article = [];
			$scope.showArticles = !$scope.showArticles;
			$scope.showArticle = !$scope.showArticles;
			$window.alert("Deleted Successfully");
		},
		function(error){
			$window.alert("Not Successfully deleted");
		});
		}
		else{
			return;
		}
	};

	$scope.articlePost = function(aTitle, aText, aAuthor, aRef){
		$scope.showInput = false;
		var nd = new Date(); var sDate = "";
		sDate += nd.getDate()+"-"+months[nd.getMonth()]+"-20"+(nd.getYear()+"").substr(1,2)+" "+nd.getHours()+":"+nd.getMinutes();
		$http({
			method:'POST',
			url:'/article/j67687HJt_op/YhhTAGb/',
			data:{
				title:aTitle,
				text:aText,
				author:aAuthor,
				reference:aRef,
				date:nd,
				sDate:sDate
			},
			headers:{'Content-Type':'application/json;charset=utf-8'}
		})
		.then(
		function(response){
			$window.alert("Article Successfully posted");
			$scope.showInput = false;
		},
		function(error){
			$window.alert("not Successfully updated");
		});
	}
}]);