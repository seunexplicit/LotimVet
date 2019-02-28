var animal = angular.module('myApp',['ngAnimate', 'ngSanitize']);
animal.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('//').endSymbol('//');

});

function animalprocessor($scope, $sce, $interval, dogPicture){
	$scope.showmenu =false;
 	$scope.clickedButton = "/images/unclicked.png";

 	$scope.showMenu = function(){
 			$scope.showmenu=!$scope.showmenu;
 			if($scope.showmenu==true) $scope.clickedButton="/images/clicked.png";
 			else  $scope.clickedButton="/images/unclicked.png";
 	}

var count = 0;
var interval;
$scope.clicked = false;
$scope.getAddress = dogPicture[0].animalAddress[0];
$scope.animalName = dogPicture[0].animalName;
$scope.animalDescription = $sce.trustAsHtml(dogPicture[0].animalDescription);
$scope.i = 0;

function changeAddress(){
	if(count == 0 && dogPicture[$scope.i].animalAddress.length==2) count = 1;
	else if(count == 1) count = 0;
	$scope.getAddress = dogPicture[$scope.i].animalAddress[count];
}; 
interval = $interval(changeAddress, 7000);

$scope.getPicture = function(dName){
	$scope.clicked = !$scope.clicked;
	
		$interval.cancel(interval);

		for(var i = 0; i<dogPicture.length; i++){
			if(dogPicture[i].animalName==dName){
				$scope.i =i;
				$scope.getAddress = dogPicture[i].animalAddress[0];
				$scope.animalName = dogPicture[i].animalName;
				$scope.animalDescription = $sce.trustAsHtml(dogPicture[i].animalDescription);
				interval = $interval(changeAddress,7000);
			}
		}
}

}

function ShortNote($interval, $scope){
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

 	var counts = 1;
 	var animateInterval;

 	$scope.bgd =  bgpicture[0].ngclass;
 	$scope.shortNote = bgpicture[0].shortNote;

 	function animateBackground(){
 		if(counts<2){
 			counts++;
 		}
 		else{
 			counts=0;
 		}
 		$scope.bgd =  bgpicture[counts].ngclass;
 		$scope.shortNote = bgpicture[counts].shortNote;
 	}
 	$interval(animateBackground, 10000);
}

animal.controller('animalController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){


	var dogPicture = [
	{ animalName:'Boerboel', animalAddress:['/images/Boerboel1.png','/images/Boerboel2.png'],
	 animalDescription:'<span class="dbt">Origin: </span><span>South Africa</span><br/><span class="dbt">Color: </span><span>fawns, brindle, browns, black and reds with or without black mask</span><br/><span class="dbt">Life Span: </span><span>9 to 11 years</span><br/><span class="dbt">Height: </span><span>22 to 27 inches</span><br/><span class="dbt">Temperament: </span><span>Intelligent, Calm, Confident</span><br/><span class="dbt">Average puppy Price: </span><span>N250,000-N450,000</span><br/><span class="dbt">Litter: </span><span>5-12 Puppies</span><br/>'
	},
	{ animalName:'Bulldog', animalAddress:['/images/Bulldog1.png','/images/Bulldog2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>British</span><br/><span class="dbt">Color: </span><span>fawns, brindle, and thick white</span><br/><span class="dbt">Life Span: </span><span>8 to 11 years</span><br/><span class="dbt">Height: </span><span>12 to 16 inches</span><br/><span class="dbt">Temperament: </span><span>Docile, Friendly, Gregarious, Willful</span><br/><span class="dbt">Average puppy Price: </span><span>N100-N150</span><br/><span class="dbt">Litter: </span><span>5-10 Puppies</span><br/>'
	},
	{ animalName:'Bullmastiff', animalAddress:['/images/Bullmastiff1.png','/images/Bullmastiff2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>United State</span><br/><span class="dbt">Color: </span><span>fawn, shades of brindle</span><br/><span class="dbt">Life Span: </span><span>8 to 10 years</span><br/><span class="dbt">Height: </span><span>60 to 70 cm</span><br/><span class="dbt">Temperament: </span><span>Sensitive, Independent, Obedient</span><br/><span class="dbt">Average puppy Price: </span><span>N100,000-N200,000</span><br/><span class="dbt">Litter: </span><span>4-13 Puppies</span><br/>'
	},
	{ animalName:'Caucasian Shepherd', animalAddress:['/images/Caucasian1.png','/images/Caucasian2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Caucasus Region</span><br/><span class="dbt">Color: </span><span>solid colours, except blue and solid blacks but haves spots</span><br/><span class="dbt">Life Span: </span><span>10 to 12 years</span><br/><span class="dbt">Height: </span><span>65 to 75 cm</span><br/><span class="dbt">Temperament: </span><span>Self-confident, Independent, Intelligent</span><br/><span class="dbt">Average puppy Price: </span><span>N100,000-N150,000</span><br/><span class="dbt">Litter: </span><span>5-10 Puppies</span><br/>'
	},
	{ animalName:'Chihuahua', animalAddress:['/images/Chihuahua1.png','/images/Chihuahua2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Mexico</span><br/><span class="dbt">Color: </span><span>Chocolate, Cream, White, Black, Gold</span><br/><span class="dbt">Life Span: </span><span>14 to 20 years</span><br/><span class="dbt">Height: </span><span>6 to 10 inches</span><br/><span class="dbt">Temperament: </span><span>Loyalty, Intelligent</span><br/><span class="dbt">Average puppy Price: </span><span>N150,000-N200,000</span><br/><span class="dbt">Litter: </span><span>2-5 Puppies</span><br/>'
	},
	{ animalName:'Chowchow', animalAddress:['/images/Chowchow1.png','/images/Chowchow2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>China</span><br/><span class="dbt">Color: </span><span>red, black blue and cream</span><br/><span class="dbt">Life Span: </span><span>12 to 15 years</span><br/><span class="dbt">Height: </span><span>17 to 20 inches</span><br/><span class="dbt">Temperament: </span><span>Loyal, Mid-Aggressive</span><br/><span class="dbt">Average puppy Price: </span><span>N150,000-N250,000</span><br/><span class="dbt">Litter: </span><span>4-7 Puppies</span><br/>'
	},
	{ animalName:'Dalmatian', animalAddress:['/images/Dalmatian1.png','/images/Dalmatian2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Croatia</span><br/><span class="dbt">Color: </span><span>solid white, and black spot</span><br/><span class="dbt">Life Span: </span><span>12 to 18 years</span><br/><span class="dbt">Height: </span><span>22 to 24 inches</span><br/><span class="dbt">Temperament: </span><span>Dependable, Playful, Energize. Poorly Bred can be of ill temperament</span><br/><span class="dbt">Average puppy Price: </span><span>N200,000-N250,000</span><br/><span class="dbt">Litter: </span><span>6-12 Puppies</span><br/>'
	},
	{ animalName:'Doberman', animalAddress:['/images/Doberman1.png','/images/Doberman2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Germany</span><br/><span class="dbt">Color: </span><span>red, black blue and fawn</span><br/><span class="dbt">Life Span: </span><span>9 to 12 years</span><br/><span class="dbt">Height: </span><span>25 to 28 inches</span><br/><span class="dbt">Temperament: </span><span>Highly Intelligent, Aggressive, Fearless, Obedient</span><br/><span class="dbt">Average puppy Price: </span><span>N70,000-N150,000</span><br/><span class="dbt">Litter: </span><span>6-10 Puppies</span><br/>'
	},
	{ animalName:'English Mastiff', animalAddress:['/images/English mastiff1.png','/images/English mastiff2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>England</span><br/><span class="dbt">Color: </span><span>shades of fawn colour</span><br/><span class="dbt">Life Span: </span><span>8 to 12 years</span><br/><span class="dbt">Height: </span><span>27 to 35 inches</span><br/><span class="dbt">Temperament: </span><span>Noblest of dog breed, Powerful, Gentle, Couragous</span><br/><span class="dbt">Average puppy Price: </span><span>N100,000-N150,000</span><br/><span class="dbt">Litter: </span><span>5-10 Puppies</span><br/>'
	},
	{ animalName:'German Shepherd', animalAddress:['/images/German shepherd1.png','/images/German shepherd2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Germany</span><br/><span class="dbt">Color: </span><span>Black and mixture of other colours such as tan, silver, red</span><br/><span class="dbt">Life Span: </span><span>12 to 15 years</span><br/><span class="dbt">Height: </span><span>22 to 26 inches</span><br/><span class="dbt">Temperament: </span><span>Moderatively active, Obedient, Inqusitive</span><br/><span class="dbt">Average puppy Price: </span><span>N50,000-N100,000</span><br/><span class="dbt">Litter: </span><span>4-10 Puppies</span><br/>'
	},
	{ animalName:'Great Dane', animalAddress:['/images/Great Dane1.png','/images/Great dane2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Germany</span><br/><span class="dbt">Color: </span><span>fawn, brindle, black, mantle or blue</span><br/><span class="dbt">Life Span: </span><span>8 to 10 years</span><br/><span class="dbt">Height: </span><span>24 to 45 inches</span><br/><span class="dbt">Temperament: </span><span>Diginity, Powerful, Affectionate and naturally Protective</span><br/><span class="dbt">Average puppy Price: </span><span>N150,000-N250,000</span><br/><span class="dbt">Litter: </span><span>10-15 Puppies</span><br/>'
	},
	{ animalName:'Lhasa Apso', animalAddress:['/images/Lhasa apso.png','/images/Lhasa apso2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Tibet</span><br/><span class="dbt">Color: </span><span>All dog color</span><br/><span class="dbt">Life Span: </span><span>12 to 14 years</span><br/><span class="dbt">Height: </span><span>10 to 11 inches</span><br/><span class="dbt">Temperament: </span><span>Alert Ownerness, Independent, fair Obedience & Intelligent</span><br/><span class="dbt">Average puppy Price: </span><span>N50,000-N120,000</span><br/><span class="dbt">Litter: </span><span>4-6 Puppies</span><br/>'
	},
	{ animalName:'Neopolitan Mastiff', animalAddress:['/images/Neopolitan mastiff1.png','/images/Neopolitan mastiff2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Italy</span><br/><span class="dbt">Color: </span><span>brindle, black, blue, twany</span><br/><span class="dbt">Life Span: </span><span>8 to 10 years</span><br/><span class="dbt">Height: </span><span>24 to 30 inches</span><br/><span class="dbt">Temperament: </span><span>Obedient, Fearless, Stubborn, Protective</span><br/><span class="dbt">Average puppy Price: </span><span>N80,000-N150,000</span><br/><span class="dbt">Liters: </span><span>6-12 Puppies</span><br/>'
	},
	{ animalName:'Pitbull', animalAddress:['/images/pitbull1.png','/images/Pitbull2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>America</span><br/><span class="dbt">Color: </span><span>black, white, grey, fawn and tan</span><br/><span class="dbt">Life Span: </span><span>8 to 15 years</span><br/><span class="dbt">Height: </span><span>17 to 21 inches</span><br/><span class="dbt">Temperament: </span><span>Very Aggressive, Great intelligence, Silly Display, Protective</span><br/><span class="dbt">Average puppy Price: </span><span>N70,000-N150,000</span><br/><span class="dbt">Litter: </span><span>4-8 Puppies</span><br/>'
	},
	{ animalName:'Pug', animalAddress:['/images/Pug1.png','/images/Pug2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>China</span><br/><span class="dbt">Color: </span><span>black, fawn, Apricot, grey and white</span><br/><span class="dbt">Life Span: </span><span>12 to 15 years</span><br/><span class="dbt">Height: </span><span>10 to 15 inches</span><br/><span class="dbt">Temperament: </span><span>Fun-loving, Highly Companable, Stubborn, Sociable</span><br/><span class="dbt">Average puppy Price: </span><span>N200,000-N350,000</span><br/><span class="dbt">Litter: </span><span>4-7 Puppies</span><br/>'
	},
	{ animalName:'Rottweiler', animalAddress:['/images/Rottweiler.png','/images/Rottweiler2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Germany</span><br/><span class="dbt">Color: </span><span>tan, blue, black and Mohogany</span><br/><span class="dbt">Life Span: </span><span>8 to 10 years</span><br/><span class="dbt">Height: </span><span>22 to 27 inches</span><br/><span class="dbt">Temperament: </span><span>Fearless, Confident, Calm, Powerful</span><br/><span class="dbt">Average puppy Price: </span><span>N70,000-N150,000</span><br/><span class="dbt">Litter: </span><span>7-12 Puppies</span><br/>'
	},
	{ animalName:'Samoyed', animalAddress:['/images/Samoyed1.png','/images/Samoyed2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Siberia & Russia</span><br/><span class="dbt">Color: </span><span>white, silver</span><br/><span class="dbt">Life Span: </span><span>12 to 13 years</span><br/><span class="dbt">Height: </span><span>18 to 22 inches</span><br/><span class="dbt">Temperament: </span><span>Fun Loving, Dilligently watchful</span><br/><span class="dbt">Average puppy Price: </span><span>N40,000-N80,000</span><br/><span class="dbt">Litter: </span><span>4-7 Puppies</span><br/>'
	},
	{ animalName:'Saint Bernard', animalAddress:['/images/Saint Bernard1.png','/images/Saint Bernard2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Italy & Switzerland</span><br/><span class="dbt">Color: </span><span>brindle, brown, red, white, mantle</span><br/><span class="dbt">Life Span: </span><span>12 to 13 years</span><br/><span class="dbt">Height: </span><span>28 to 35 inches</span><br/><span class="dbt">Temperament: </span><span>Lively, Friendly, Gentle, Watchful, Calm</span><br/><span class="dbt">Average puppy Price: </span><span>N180,000-N300,000</span><br/><span class="dbt">Litter: </span><span>4-10 Puppies</span><br/>'
	},
	{ animalName:'Tibetan Mastiff', animalAddress:['/images/Tibetan.png','/images/Tibetan2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Tibet</span><br/><span class="dbt">Color: </span><span>Black, Tan & (Brown, Black), Red Gold, Blue Grey</span><br/><span class="dbt">Life Span: </span><span>12 to 15 years</span><br/><span class="dbt">Height: </span><span>25 to 33 inches</span><br/><span class="dbt">Temperament: </span><span>Tenacious, Stubborn, Intelligent, Strong Willed, Protective</span><br/><span class="dbt">Average puppy Price: </span><span>N500,000-N1,000,000</span><br/><span class="dbt">Litter: </span><span>6-12 Puppies</span><br/>'
	}
	];

		animalprocessor($scope, $sce, $interval, dogPicture);
		ShortNote($interval, $scope);

}]);

animal.controller('catController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){

	var catPicture = [
	{ animalName:'Bengal', animalAddress:['/images/Bengal1.png','/images/Bengal2.png'],
	 animalDescription:'<span class="dbt">Origin: </span><span>America</span><br/><span class="dbt">Color: </span><span>silver, brown, black, snow, red, cinnamon, smoke, charcoal and marbled</span><br/><span class="dbt">Life Span: </span><span>14 to 16 years</span><br/><span class="dbt">Weight: </span><span>4 to 6 kg</span><br/><span class="dbt">Temperament: </span><span>Smart, Playful</span><br/>'
	},
	{ animalName:'Burmese', animalAddress:['/images/Burmese1.png','/images/Burmese2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Thailand</span><br/><span class="dbt">Color: </span><span>various solid colors, and uniform</span><br/><span class="dbt">Life Span: </span><span>10 to 17 years</span><br/><span class="dbt">Weight: </span><span>4 to 6 kg</span><br/><span class="dbt">Temperament: </span><span>Friendly, Gentle, Kind and Outgoing</span><br/><br/>'
	},
	{ animalName:'Chartreux', animalAddress:['/images/Chartreux1.png','/images/Chartreux2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>France</span><br/><span class="dbt">Color: </span><span>blue, grey</span><br/><span class="dbt">Life Span: </span><span>12 to 15 years</span><br/><span class="dbt">weight: </span><span>3 to 7 kg</span><br/><span class="dbt">Temperament: </span><span>Quite, Observant and Intelligent</span><br/>'
	},
	{animalName:'Egyptian Mau', animalAddress:['/images/Egyptian Mau1.png','/images/Egyptian Mau2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Egypt</span><br/><span class="dbt">Color: </span><span>Bronze color, with black spots</span><br/><span class="dbt">Life Span: </span><span>13 to 16 years</span><br/><span class="dbt">weight: </span><span>4 to 7 kg</span><br/><span class="dbt">Temperament: </span><span>Gentle and Reserve</span><br/>'
	},
	{ animalName:'European Shorthair', animalAddress:['/images/European shorthair1.png','/images/European shorthair2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Europe</span><br/><span class="dbt">Color: </span><span>Silver, blue, White, Black</span><br/><span class="dbt">Life Span: </span><span>14 years Averagely</span><br/><span class="dbt">Weight: </span><span>4 to 7 kg</span><br/><span class="dbt">Temperament: </span><span>Playful, Intelligent</span><br/>'
	},
	{ animalName:'Oriental Shorthair', animalAddress:['/images/Oriental1.png','/images/Oriental2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>America</span><br/><span class="dbt">Color: </span><span>various range of color and patterns</span><br/><span class="dbt">Life Span: </span><span>10 to 15 years</span><br/><span class="dbt">Weight: </span><span>4 to 9 kg</span><br/><span class="dbt">Temperament: </span><span>Social and Intelligent</span><br/>'
	},
	{ animalName:'Ragdoll', animalAddress:['/images/Ragdoll1.png','/images/Ragdoll2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>America</span><br/><span class="dbt">Color: </span><span>gray and White pattern mostly</span><br/><span class="dbt">Life Span: </span><span>15 years averagely</span><br/><span class="dbt">Weight: </span><span>4 to 9 kg</span><br/><span class="dbt">Temperament: </span><span>Docile and Calm</span><br/>'
	},
	{ animalName:'Siamese', animalAddress:['/images/Siamese1.png','/images/Siamese2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Thailand</span><br/><span class="dbt">Color: </span><span>seal, blue, chocolate and lilac</span><br/><span class="dbt">Life Span: </span><span>15 to 20 years</span><br/><span class="dbt">Weight: </span><span>3 to 5 kg</span><br/><span class="dbt">Temperament: </span><span>Highly Intelligent, Caring and Seek Companion</span><br/>'
	}];

	animalprocessor($scope, $sce, $interval, catPicture);
	ShortNote($interval, $scope);

}]);

animal.controller('cattleController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){

 	var cattlePicture = [
	{ animalName:'Adamawa Gudali', animalAddress:['/images/Adamawa Gudali.png','/images/Adamawa Gudali2.png'],
	 animalDescription:'<span class="dbt">Origin: </span><span>Adamawa Nigeria</span><br/><span class="dbt">Color: </span><span>white, black, red and brown</span><br/><span class="dbt">Popularity: </span><span>2%</span><br/><span class="dbt">Purpose: </span><span>Draught Animal, Beef Source, Dairy Production</span><br/>'
	},
	{ animalName:'Keteku', animalAddress:['/images/Keteku.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>white, grey and black</span><br/><span class="dbt">Popularity: </span><span>7.5%</span><br/><span class="dbt">Purpose: </span><span>Beef Source</span><br/>'
	},
	{ animalName:'Kuri', animalAddress:['/images/kuri1.png','/images/Kuri2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Niger</span><br/><span class="dbt">Color: </span><span>Variable colors, but mostly white and black</span><br/><span class="dbt">Popularity: </span><span>>5%</span><br/><span class="dbt">Purpose: </span><span>Meat, Milk and Work</span><br/>'
	},
	{animalName:'Ndama', animalAddress:['/images/Ndama1.png','/images/Ndama2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Senegal and Gambia</span><br/><span class="dbt">Color: </span><span>brown</span><br/><span class="dbt">Popularity: </span><span></span><br/><span class="dbt">Purpose: </span><span>Meat and Milk</span><br/>'
	},
	{ animalName:'Red Bororo', animalAddress:['/images/Red bororo.png',],
	animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>Brown</span><br/><span class="dbt">Popularity: </span><span>3<sup>rd</sup> Most Populous</span><br/><span class="dbt">Purpose: </span><span>Meat and Milk</span><br/>'
	},
	{ animalName:'Sokoto Gudali', animalAddress:['/images/Sokoto Gudali1.png','/images/Sokoto Gudali2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>White and Grey Majorly</span><br/><span class="dbt">Popularity: </span><span>2<sup>nd</sup> most populous</span><br/><span class="dbt">Purpose: </span><span>Milk and Meat</span><br/>'
	},
	{ animalName:'White Fulani', animalAddress:['/images/White fulani.png',],
	animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>white</span><br/><span class="dbt">Popularity: </span><span>Most Populous</span><br/><span class="dbt">Purpose: </span><span>Meat and Milk</span><br/>'
	}];

	animalprocessor($scope, $sce, $interval, cattlePicture);
	ShortNote($interval, $scope);

}]);

animal.controller('goatController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){

 	var goatPicture = [
	{ animalName:'Red Maradi', animalAddress:['/images/Red sokoto.png'],
	 animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>Mahogany tints, Red Majorly</span><br/><span class="dbt">Weight: </span><span>23-30kg</span><br/><span class="dbt">Litter Size: </span><span>2-3 kids</span><br/><span class="dbt">Purpose: </span><span>Meat and Milk Production</span><br/><span class="dbt">Height: </span><span> 62cm-67cm</span><br/>'
	},
	{ animalName:'Sahel', animalAddress:['/images/Sahel.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Mali Majorly</span><br/><span class="dbt">Color: </span><span>pure white, cream to red, black with spread of gray, gray, brown or black</span><br/><span class="dbt">Weight: </span><span>25 - 56kg</span><br/><span class="dbt">Litter Size: </span><span>1-2 kids</span><br/><span class="dbt">Purpose: </span><span>Meat and Skin Production</span><br/><span class="dbt">Height: </span><span>65cm-85cm</span><br/>'
	},
	{ animalName:'West African Dwarf', animalAddress:['/images/West African dwarf goat.png','/images/West African dwarf goat2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>West and Central Africa</span><br/><span class="dbt">Color: </span><span>dark brown, black, red, white, and multi color</span><br/><span class="dbt">Weight: </span><span>18kg - 25kg</span><br/><span class="dbt">Litter Size: </span><span>2-3 kids</span><br/><span class="dbt">Purpose: </span><span>Meat and Milk Production</span><br/><span class="dbt">Height: </span><span>30cm - 50cm</span><br/>'
	}];

	animalprocessor($scope, $sce, $interval, goatPicture);
	ShortNote($interval, $scope);

}]);

animal.controller('sheepController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){

 	var sheepPicture = [
	{ animalName:'Balami', animalAddress:['/images/Balami1.png','/images/Balami2.png'],
	 animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>White</span><br/><span class="dbt">Weight: </span><span>35kg - 60kg</span><br/>'
	},
	{ animalName:'Yankasa', animalAddress:['/images/Yankasa.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Nigeria</span><br/><span class="dbt">Color: </span><span>White coat with black patches</span><br/><span class="dbt">Weight: </span><span>20kg - 40kg</span><br/>'
	},
	{ animalName:'Uda', animalAddress:['/images/Uda sheep.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Central and West Africa</span><br/><span class="dbt">Color: </span><span>white posterior and brown or black anterior</span><br/><span class="dbt">Weight: </span><span></span><br/>'
	},
	{animalName:'West African Dwarf', animalAddress:['/images/West African dwarf sheep.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>West Africa</span><br/><span class="dbt">Color: </span><span>all white, black, brown, or spotted black or brown on a white coat</span><br/><span class="dbt">Weight: </span><span>Averagely 25kg</span><br/>'
	}];

	animalprocessor($scope, $sce, $interval, sheepPicture);
	ShortNote($interval, $scope);

}]);

animal.controller('pigController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){


 	var pigPicture = [
	{ animalName:'Duroc', animalAddress:['/images/Duroc1.png','/images/Duroc2.png'],
	 animalDescription:'<span class="dbt">Origin: </span><span>United State of America</span><br/><span class="dbt">Color: </span><span>Reddish brown, Orange brown and Deep mahogany red</span><br/><span class="dbt">Weight: </span><span>250-300kg</span><br/><span class="dbt">Litter size: </span><span>Average of 9</span><br/>'
	},
	{ animalName:'Hampshire', animalAddress:['/images/Hampshire.png','/images/hampshire2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>England</span><br/><span class="dbt">Color: </span><span>black and white band round the middle</span><br/><span class="dbt">Weight: </span><span>250kg to 300kg</span><br/><span class="dbt">Litter size: </span><span>Averagely 9</span><br/>'
	},
	{ animalName:'Landrace', animalAddress:['/images/Landrace1.png','/images/Landrace2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>Denmark</span><br/><span class="dbt">Color: </span><span>White</span><br/><span class="dbt">Weight: </span><span>250kg-400kg</span><br/><span class="dbt">Litter size: </span><span>Averagely 11</span><br/>'
	},
	{animalName:'Yorkshire', animalAddress:['/images/Yorkshire1.png','/images/Yorkshire2.png'],
	animalDescription:'<span class="dbt">Origin: </span><span>America</span><br/><span class="dbt">Color: </span><span>White</span><br/><span class="dbt">Weight: </span><span>250kg - 350kg</span><br/><span class="dbt">Litter size: </span><span>Averagely 12</span><br/>'
	}];

	animalprocessor($scope, $sce, $interval, pigPicture);
	ShortNote($interval, $scope);

}]);

animal.controller('poultryController',['$scope', '$interval', '$sce', function($scope, $interval, $sce){


 	var poultryPicture = [
	{ animalName:'ISA Brown', animalAddress:['/images/Isa brown1.png','images/Isa brown2.png'],
	 animalDescription:'<span class="dbt">Purpose: </span><span>Layers</span><br/><span class="dbt">Productivity: </span><span>300 brown eggs in the first year of laying</span><br/>'
	},
	{ animalName:'Cornish Cross Broiler', animalAddress:['/images/Cornish cross1.png','/images/Cornish cross2.png'],
	animalDescription:'<span class="dbt">Purpose: </span><span>Meat Production</span><br/><span class="dbt">Productivity: </span><span>up to/above 2kg at 6weeks</span><br/>'
	},
	{ animalName:'Red Broiler', animalAddress:['/images/Red broiler1.png','/images/Red broiler2.png'],
	animalDescription:'<span class="dbt">Purpose: </span><span>Meat Production</span><br/><span class="dbt">Productivity: </span><span>takes 12weeks to reach market size</span><br/>'
	},
	{animalName:'Rhode Island Red', animalAddress:['/images/Rhode island red1.png','/images/Rhode Island red2.png'],
	animalDescription:'<span class="dbt">Purpose: </span><span>Layers</span><br/><span class="dbt">Productivity: </span><span>200-300 brown eggs per year</span><br/>'
	}];

	animalprocessor($scope, $sce, $interval, poultryPicture);
	ShortNote($interval, $scope);


}]);	