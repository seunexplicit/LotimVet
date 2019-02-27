mongoose = require('mongoose');

var Question = mongoose.model('question');
var visitorMessage = mongoose.model('visitorMessage');
var Answer = mongoose.model('answer');

exports.addQuestion = function(req, res){
	var newQuestion = new Question(req.body.updateQuestion);
	var qA = {
		question:newQuestion,
		answer:{}
	}
	 var query = visitorMessage.findOne().where('email', req.body.email);
	 query.exec(function(err, doc){
	 if(doc!=null){
		var queries = doc.update({
			$push:{ques_ans:qA}
		});
		queries.exec(function(err, data){
			if(err) res.json(err);
			else res.json(data);
		});
	}
	 else{
	 	var newMessage = new visitorMessage({
	 		name: req.body.name,
	 		email: req.body.email,
	 		ques_ans: {question: newQuestion, answer:{}}
	 	});

	 	newMessage.save(function(err, doc){
	 		if(err){
	 			res.json(err);
	 		}
	 		else{
	 			res.json(doc);
	 			console.log(doc);
	 		}
	 	});
	 }
	 });
}

exports.addAnswer = function(req, res){
	var query = visitorMessage.findOne().where('email',req.body.email);
	query.exec(function(err, doc){
		doc.set('ques_ans', req.body.updateAnswer);
		doc.save(function(err, data){
			if(err){res.json(err);}
			else {res.json(data);}
		});
	});
}

exports.getMessages = function(req, res){
	var queries = visitorMessage.find();
	queries.exec(function(err, doc){ 
		if(!doc){
			res.json('cannot fetch messages');
		}
		else{
			res.json(doc);
		}
	});
}
exports.getMessage = function(req, res){
	var queries = visitorMessage.findOne().where('_id',req.query.messageId);
	queries.exec(function(err, doc){
		if(err){
			res.json('');
		}
		else
		{
			res.json(doc);
		}
	});
}
exports.getMessage2 = function(req, res){
	var queries = visitorMessage.findOne().where('email',req.query.messageId);
	queries.exec(function(err, doc){
		if(err){
			res.json('');
		}
		else
		{
			res.json(doc);
		}
	});
}
exports.deleteUser = function(req, res){
	var query = visitorMessage.findOne().where('email', req.body.email).deleteOne();
	query.exec(function(err, doc){
		if(err){res.json(err);}
		else res.json(doc);
	});
}
exports.deleteMessage = function(req, res){
	var query = visitorMessage.findOne().where('email', req.body.email);
	query.exec(function(err, doc){
		doc.ques_ans.pull(req.body.messageID);
		doc.save(function(err, data){
			if(err){
				res.json(err);
			}
			else{
				res.json('success');
			}
		});
	});
}
exports.setValidity = function(req, res){
	 var query = visitorMessage.findOne().where('email',req.body.email);
	 query.exec(function(err, doc){
	 	var Query = doc.update({$set:{
	 		legality:req.body.legality,
	 		ld:req.body.ld
	 		}});
	 	Query.exec(function(err, data){
	 		if(data){console.log(data);}
	 	});
	 });
}
