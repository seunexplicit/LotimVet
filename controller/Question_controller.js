var mongoose = require('mongoose');
const nodemailer = require('nodemailer');

var Question = mongoose.model('question');
var visitorMessage = mongoose.model('visitorMessage');
var Answer = mongoose.model('answer');


async function main(mail, message, Subject){

  let account = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user:'lotimvetservice@gmail.com',
      pass: 'lotimvetservicelfm'
    },
    tls:{
    	rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Lotim Vet Service" <no-reply>',
    to: mail,
    subject: Subject,
    html: message 
  };
  
  let info = await transporter.sendMail(mailOptions);
}



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
	 		}
	 	});
	 }
	 });

	 var name;

	 if(!req.body.name){
	 	name= "Anonymous";
	 }
	 else{
	 	name = req.body.name;
	 }
	  var message = '<div style="color:rgb(45%, 75%, 89%); width: 450px">Thank you for reaching out to Lotim Vet Service Mr/Mrs/Miss <span style="text-transform:capitalize; color:rgb(40%, 45%, 65%);">'+name
	   +'</span></div><div style="color:rgb(45%, 75%, 89%); width: 450px">you will get a reply in less than 24hours <br/><br/><br/><br/>Keep using this platform and don\'t hesitate to contact Lotim Vet Service For your'+
	   ' animal and pet care and for support service</div><br/><br/><h4 style="color:rgb(45%, 79%, 75%)"><a href="https://www.twitter.com/lotimvetservic1" target="_blank">'+
	   'Twitter</a></h4><h4 style="color:rgb(70%, 79%, 75%)"><a href="https://www.facebook.com/lotimvetservices" target="_blank">Facebook</a></h4><h4 style="color:rgb(45%, 79%, 75%)">'+
	   '<a href="mailto:lotimvetservice@gmail.com">Send Email</a></h4><span style="color:rgb(45%, 79%, 75%)">Phone Contact: +234-815-063-7434,  +234-708-175-2782</span>';

	var subject ="Lotim Vet Receipt Acknowledgment";	

  	main(req.body.email, message, subject).catch(console.error);
}

exports.addAnswer = function(req, res){
	var query = visitorMessage.findOne().where('email',req.body.email);
	var question, answer;
	query.exec(function(err, doc){
		doc.set('ques_ans', req.body.updateAnswer);
		doc.save(function(err, data){
			if(err){res.json(err);}
			else {res.json(data);}
		});

		question = "Question: "+ doc.ques_ans[req.body.questID].question.question;
		answer = "Answer:" + doc.ques_ans[req.body.questID].answer.texts
		subject = "Lotim Vet Reply;"

		var message = '<div style="color:rgb(35%, 65%, 89%)">'+question+'</div><br/><br/><div style="color:rgb(35%, 69%, 89%)">'+answer+'</div><br/><br/><br/><br/>Keep using this platform and don\'t hesitate to contact Lotim Vet Service For your'+
	   'For your animal and pet care and for support service</div><br/><br/><h4 style="color:rgb(70%, 79%, 75%)"><a href="https://www.twitter.com/lotimvetservic1" target="_blank">'+
	   'Twitter</a></h4><h4 style="color:rgb(70%, 79%, 75%)"><a href="https://www.facebook.com/lotimvetservices" target="_blank">Facebook</a></h4><h4 style="color:rgb(70%, 79%, 75%)">'+
	   '<a href="mailto:lotimvetservice@gmail.com">Send Email</a></h4><span style="color:rgb(70%, 79%, 75%)">Phone Contact: +234-815-063-7434,  +234-708-175-2782</span>';
	
		main(req.body.email, message, subject).catch(console.error);
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
