var admin = angular.module('adminApp', [ng-Sanitize]);
admin.contoller('messageContoller', ['$scope', '$http', '$window', function($scope, $http, $window){
	
	$scope.messagesShow = true;

	$http.get('messages/676777/HjjkkJkk/get')
	.success(function(data, status, headers, config){
		$scope.messages = data;
	})
	.error(function(data, status, headers, config){
		$scope.messages = [];
	});
	$scope.messageshow = function(){
		$scope.messagesShow = !$scope.messagesShow;
		$scope.messageShow = !$scope.messagesShow;
	}
	$scope.getMessage = function(messageID){
		$scope.showWarningButton = true;
		$http.get('message/hjj778ffdf/gfh/888/get', {params:{messageID:messageID}})
		.success(function(data, status, headers, config){
			$scope.message = data;
		})
		.error(function(){
			$scope.message = [];
		});
		if($scope.message.legality==3){
			$scope.showWarningButton = false;
			var setDate = $scope.message.ld.getTime();
			var todayDate = new Date();
			todayDate = todayDate.getTime();
			if(setDate<=todayDate){
				$scope.message.legality = 1;
				$http.post('validity/jk57fhhgh/78d/yy',{
					email:$scope.message.email,
					legality:$scope.message.legality,
					ld: new Date()
				});
			} 
		}

		else if($scope.message.legality==2){
			$scope.warning_value = "Suspend User";
			var setDate = $scope.message.ld.getTime();
			var todayDate = new Date();
			todayDate = todayDate.getTime();
			if(setDate<=todayDate){
				$scope.message.legality = 1;
				$http.post('validity/jk57fhhgh/78d/yy',{
					email:$scope.message.email,
					legality:$scope.message.legality,
					ld: new Date()
				});
			} 
		}
		else if($scope.message.legality==1){
			$scope.warning_value = "Send Warning";
		}
	}
	$scope.setLegality = function(){
		var sure = $window.confirm("Are you sure you want to issue warning");
		if(sure){
			var ld;
			if($scope.message.legality<3){
				$scope.message.legality= $scope.message.legality+1;
				if ($scope.message.legality==2) {
					ld = new Date();
					ld.setMonth(ld.getMonth()+1);

				}
				else if($scope.message.legality==3){
					ld = new Date();
					ld.setMonth(ld.getMonth()+2);
					$scope.showWarningButton = false; 
				}
			}
			else
				$scope.message.legality = 1;
			$http.post('validity/jk57fhhgh/78d/yy',{
					email:messageEmail,
					legality:$scope.message.legality,
					ld:ld
				}
			);
		}
		else
			return;
	}

	$scope.setAnswer = function(reply, questionID){
		$scope.message.ques_ans[index].answer.texts = reply;
		$http.post('/answer/675775677/KloYhYYj/',{
			email:$scope.message.email,
			questionId: questionID,
			reply:reply
		});

	}

}]);
admin.directive('articleDirective',function(){
	restrict: E,
	transclude: false,
	 
});
admin.contoller('articleController', ['$sce','$scope', '$http', '$window', function($sce, $scope, $http, $window){

	$scope.showArticles = true; 

	$http.get('article/mJKlkdHHDg/7899d/dd/get')
	.success(function(data, status, headers, config){
		$scope.articles = data;
	})
	.error(function(data, status, headers, config){
		$scope.articles = data;
	});

	$scope.articlePost = function(aTitle, aText, aAuthor, aRef){
		var nd = var Date();
		$http.post('article/j67687HJt_op/YhhTAGb/',{
			title: aTitle,
			text: aText,
			author: aAuthor,
			reference: aRef,
			date: nd
		}).success(function(data, status, headers, config){
			$window.alert("Article successfully Posted");
			$scope.showInput=false;
		}).error(function(data, status, headers, config){
			$window.alert("Couldn't Post Article");
		});
	}

	$scope.getArticle = function(articleID){
		$http.get('article/hjfhjhf/898989/jj/get',{params:{
			articleId:articleID
		}})
		.success(function(data, status, headers, config){
			$scope.article = data;
		})
		.error(function(data, status, headers, config){
			$scope.artcicle = ["An error occur!"];
		});

		$scope.showArticles = !$scope.showArticles;
		$scope.showArticle = !$scope.showArticles;
	}
	
	$scope.makeEdit = function(){
		var title = $scope.article.title;
		var text = $scope.article.texts;
		var author = $scope.article.author;
		var ref = $scope.artcle.reference;

		$scope.showArticle = !$scope.showArticle;
		$scope.showEdit = !scope.showArticle;

		$scope.cancelEdit = function(){
			$scope.article.title = title;
			$scope.article.texts = text;
			$scope.article.author = author;
			$scope.article.reference = ref;

			$scope.showEdit = !$scope.showEdit;
			$scope.showArticle = !$scope.showArticle;
		}

		$scope.editArticle = function(){
			$http.post('updaetarticle/dfgfr445/989h/j',{
				title:$scope.article.title,
				texts:$scope.article.texts,
				author:$scope.article.author,
				reference:$scope.article.reference
			})
			.success(function(data, status, headers, config){
				$window.alert("Changes made sucessfully");
				$scope.showEdit = !$scope.showEdit;
				$scope.showArticle = !$scope.showArticle;
			})
			.error(function(data, status, headers, config){
				$window.alert("Not successfully updated");
			});
		}
	}

	$scope.deleteArticle = function(articleID){
		$http.post('deletearticle/fhhghjud/565/78hj',{
			articleId:articleID
		})
		.success(function(data, status, headers, config){
			$window.alert("Article successfully Deleted");
			$scope.showArticle = !$scope.showArticle;
			$scope.showArticles = !$scope.showArticles;
		})
		.error(function(data, status, headers, config){
			$window.alert("Article could not be Deleted");
		});
	}
}]);