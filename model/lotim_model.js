var mongoose = require('mongoose');

var schema = mongoose.Schema;

var commentSchema = new schema({
	name:{type: String, default:'Anonymous'},
	date:String,
	text:{type:String, required:true}
},{_id:false});

mongoose.model('comment', commentSchema);

var articleSchema = new schema({
	title:{type:String, required:true},
	author:{type: String, required: true},
	reference:{type:String},
	date:{type:Date, default:Date.now},
	sDate:String,
	text:{type: String, required:true},
	comments:[commentSchema]

});

mongoose.model('article', articleSchema);

articleSchema.index({date:-1});

var answerSchema = new schema({
	texts : String,
	date: {type: Date, default: Date.now}
}, {_id:false});

mongoose.model('answer', answerSchema);

var questionSchema = new schema({
	question : {type: String},
	viewed: {type: String, enum : ['view','no-view'], default:'no-view'},
	date : {type: Date, default: Date.now}
});

mongoose.model('question', questionSchema);

var visitorMessageSchema = new schema({
	name: {type: String, default: 'Anonymous'},
	email: {type:String, required:true, unique:true},
	legality:{type:Number, enum:[1,2,3], default: 1},
	date:{type: Date, default: Date.now},
	ld:Number,
	ques_ans:[{
		question: questionSchema,
		answer: answerSchema
	}]
});

mongoose.model('visitorMessage', visitorMessageSchema);
visitorMessageSchema.index({date:-1});



