var mongoose = require('mongoose');

var article = mongoose.model('article');
var comment = mongoose.model('comment');

exports.addComment = function(req, res){
	var newComment = new comment(req.body.articleComment);
	var query = article.findOne().where('_id', req.body.articleID);
	query.exec(function(err, doc){
			doc.comments.push(newComment);
			doc.save(function(err, data){
				if(!err){
					res.json('success');
				}
			});
	});
}

exports.addArticle = function(req, res){
	var newArticle = new article({
		author:req.body.author,
		title:req.body.title,
		text:req.body.text,
		reference:req.body.reference,
		date:req.body.date,
		sDate:req.body.sDate
	});
	newArticle.save(function(err, doc){
		if(err){
			res.json(err);
			console.log(err);
		}
		else{
			res.json(doc);
			console.log(doc);
		}
	});
}
exports.getArticles = function(req, res){
	var queries = article.find();
	queries.exec(function(err, doc){
		if(err){
			res.json('could not fetch document');
		}
		else{
			res.json(doc);
		}
	});
}

exports.getArticle = function(req, res){
	var queries = article.findOne().where('_id', req.query.articleId);

	queries.exec(function(err, data){
			if(err) res.json([]);
			else res.json(data);
	});
}
exports.updateArticle = function(req, res){
	var query = article.findOne().where('_id',req.body.articleId);
	query.exec(function(err, data){
		if(err) return;
		data.set('title',req.body.title);
		data.set('text',req.body.text);
		data.set('reference', req.body.reference);
		data.set('author',req.body.author);

		data.save();
	});

}

exports.deleteArticle = function(req, res){
	var queries = article.findOne().where('_id',req.body.articleId).deleteOne();
	queries.exec(function(err, doc){
		if(err) return;
		else{
			res.json('Successful');
		}
	});
}

