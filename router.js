var express = require('express');

module.exports = function(app){
	var question = require('./controller/Question_controller.js');
	var article = require('./controller/Article_controller.js');
	
	app.use(express.static(__dirname+'/public'));
	
	app.get('/', function(req, res){
		res.render('index.html');
	});

	function login_page(req, res){
		res.write("<form method='POST' action='/adminpage/lmf/jfkl898/pcount/reminder' style='margin:10% auto 25% auto;'>");
		res.write("<div style='margin-top:10px'><label style='width:7%; float:left'>Username</label><input type='text' name='username' style='width:15%; clear:left'/></div>");
		res.write("<div style='margin-top:10px'><label style='width:7%; float:left'>Password</label><input type='password' name='password' style='width:15%; clear:left'/></div>");
		res.write("<div style='margin-top:10px; margin-left:7%'><input type='submit' value='Log-In'></div>");
		res.end("</form>");
	}

	var render = false;

	app.all('/adminpage/lmf/jfkl898/pcount/reminder', function(req, res){

		var user='LotimVetServicelfm1999';
		var pass = 'lotimvetservicelfm1999';

		if(req.body.username!=undefined){
			if(!(req.body.username==user && req.body.password==pass)){
				
				res.writeHead(200,{"Content-Type":"text/html"});
				res.write('You do not have permission to Log-in this page<br/>');
				login_page(req, res);
			}
			else{
				render= true;
				res.redirect('/adminpagelmfjfkl67866pcounterreminder');
			}
		}
		else{
			res.writeHead(200,{"Content-Type":"text/html"});
			login_page(req, res);
		}
	});

	app.get('/adminpage', function(req, res){
		res.redirect('/adminpagelmfjfkl67866pcounterreminder');
	});

	app.get('/adminpagelmfjfkl67866pcounterreminder', function(req, res){
		if(render){
			res.render('adminpage.html');
		}
		else{
			res.redirect('/adminpage/lmf/jfkl898/pcount/reminder');
		}
	});

	app.get('/dog', function(req, res){
		res.render('dog.html');
	});

	app.get('/cat', function(req, res){
		res.render('cat.html');
	});

	app.get('/poultry', function(req, res){
		res.render('poultry.html');
	});

	app.get('/goat', function(req, res){
		res.render('goat.html');
	});

	app.get('/sheep', function(req, res){
		res.render('sheep.html');
	});

	app.get('/pig', function(req, res){
		res.render('pig.html');
	});

	app.get('/cattle', function(req, res){
		res.render('cattle.html');
	});

	app.get('/adminpagearticle', function(req, res){
		res.render('article_window');
	});

	app.get('/message', function(req, res){
		res.render('message_window');
	});
	app.get('/askAvet', function(req, res){
		res.render('askAVet.html');
	});
	app.get('/article', function(req, res){
		res.render('article.html');
	});

	app.post('/question/45667788/YghTrH', question.addQuestion);
	app.post('/answer/675775677/KloYhYYj/', question.addAnswer);
	app.post('/article/j67687HJt_op/YhhTAGb/', article.addArticle);
	app.post('/commnent/hjhjDHFGFGuII/6767/hhfh', article.addComment);
	app.post('/deletearticle/fhhghjud/565/78hj', article.deleteArticle);
	app.post('/updaetarticle/dfgfr445/989h/j', article.updateArticle);
	app.get('/messages/676777/HjjkkJkk/get', question.getMessages);
	app.get('/article/mJKlkdHHDg/7899d/dd/get', article.getArticles);
	app.get('/article/hjfhjhf/898989/jj/get', article.getArticle);
	app.post('/validity/jk57fhhgh/78d/yy', question.setValidity);
	app.get('/message/hjj778ffdf/gfh/888/get', question.getMessage);
	app.get('/message/hjk7gh/8989/df/gfh/78/get', question.getMessage2);
	app.post('/deleteMessage/jdhj5dh673/hjhsjhd', question.deleteMessage);
	app.post('/deteleUser/hgy8uydy423/eew3232&4', question.deleteUser);
}