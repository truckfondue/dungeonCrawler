$(document).on('ready', function() {
 
// keybindings

  Mousetrap.bind('?', function() { alert('keyboard shortcuts'); });
  Mousetrap.bind('right', function() { 
    // alert('room 1'); 
    if ( $('.current').hasClass('central') === true ) {
      $('.current').removeClass('current').addClass('hide');
      $('.room-1').removeClass('hide').addClass('current');
    }
    else if ( $('.current').hasClass('room-3') === true ) {
      $('.current').removeClass('current').addClass('hide');
      $('.central').removeClass('hide').addClass('current');
    }
    });
  Mousetrap.bind('left', function() { 
      if ( $('.current').hasClass('room-1') === true ) {
        $('.current').removeClass('current').addClass('hide');
        $('.central').removeClass('hide').addClass('current');
      }
      else if ( $('.current').hasClass('central') === true ){
        $('.current').removeClass('current').addClass('hide');
        $('.room-3').removeClass('hide').addClass('current');
      }

    });
   
  Mousetrap.bind('up', function() {
      if ( $('.current').hasClass('room-2') === true ) {
        $('.current').removeClass('current').addClass('hide');
        $('.central').removeClass('hide').addClass('current');

      }
      else if ( $('.current').hasClass('central') === true ) {
        $('.current').removeClass('start').addClass('hide');
        $('.room-4').removeClass('hide').addClass('current');
      }
    });
  Mousetrap.bind('down', function() {  
      if ( $('.current').hasClass('room-4') === true ) {
        $('.current').removeClass('current').addClass('hide');
        $('.central').removeClass('hide').addClass('current');
      }
      else if ( $('.current').hasClass('central') === true ) {
        $('.current').removeClass('current').addClass('hide');
        $('.room-2').removeClass('hide').addClass('current');
      }
    });
  Mousetrap.bind('c', function() {  
    alert('central'); 
    $('.current').removeClass('current').addClass('hide');
    $('.central').removeClass('hide').addClass('current');
    });


 
$('#play').on('click', function(){
      // alert('ready to play?');
      $('#play').addClass('hide');
        // .attr('id', null);
      $('.central').removeClass('hide')
        .addClass('current');
        // .appendTo('#play');
        console.log('working');
       // user.push( new  Player((playerName.toLowerCase()), "sticks", 1000));
       $('.user-data').removeClass('hide');
       mike.name = prompt('What would you like to name your player?');
       // var newUser =  new  Player(playerName, "sticks", 1000);
       // user.unshift(newUser);
       // console.log(newUser.name, newUser.inventory, newUser.health, newUser.strength);
       // return (newUser.name, newUser.inventory, newUser.health, newUser.strength);
      $('.user-name').closest('div').find('span').text(mike.name);
      $('.user-health').find('span').text(mike.health);
      $('.user-strength').find('span').text(mike.strength);
      $('.user-items').find('span').text(mike.inventory); 

      $('#user-control').removeClass('hide');
    });


// var player =  new  Player(prompt('What would you like to name your player?'), "sticks", 1000);
   // user.unshift(newUser);
   // console.log(newUser.name, newUser.inventory, newUser.health, newUser.strength);
   // return (newUser.name, newUser.inventory, newUser.health, newUser.strength);



});



// A game will be an instance of the World COnstructor

var World = function(name, player, rooms) {
	this.name = name;
	this.player = player;
	this.rooms = rooms;
	// this.items = items;//rooms will have items
	// this.monsters = monsters;
};

var Player = function(name, inventory, strength){
	this.name = name;
	this.inventory = inventory; //make inventory default
	//prototype to inspect monsters
	//prototype to pick up items in Rooms
	//prototype to consume Items
	//prototupe to drop items from the inventory
	this.health = 100; //default value of 100
	this.strength = strength;
	// Inventory will be linked to an array of items created via the Item constructor
	// fight methodMons
};

var Room = function(plan) {
	// this.navigationInformation = navigationInformation;
	// this.monsters = monsters;
	// this.items = items; //Add items to the plan rather than as an argument to Room
	this.plan = plan;
	// prototype for placement of monsters and items
};

var Item = function(name, value, description) {
	//items will have abilities
	//method to add stregth
	//method to add health
	this.name = name;
	this.value = value;
	this.description = description;
};

var Monster = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;

	// when killed it will be removed from their containing room
	// drops an elixr when health goes to zero.
};

// World
var dungeonCrawler = new World('Dungeon Crawler', mike, room1);

//Room
var room1 = new Room([plan1, plan2, plan3, plan4]);

// Player

var mike = new Player('Mike', 'pythons', 1000);

// Item

var smallHealth = new Item('Small health', 50, 'Adds 50 health to your character.');
var largeHealth = new Item('Large Health', 200, 'Adds 200 health to your character.');
var steroids = new Item('Steroids', 1000, 'Can you say the HULK?');

// Monster
// 
var ruby = new Monster ('Ruby', 75, 10);
var snarlax = new Monster ('Snarlax', 50, 5);


// o represent monsters
// # represent borders
// i represents enemies
// The container will hold the location of items and monsters

// var plan1 =
//   ["############################",
//    "#      #    #             ##",
//    "#                   x      #",
//    "#          #####           #",
//    "##   i     #   #    ##     #",
//    "###           ##     #     #",
//    "#           ###      #     #",
//    "#   ####                   #",
//    "#   ##        %            #",
//    "#    #                 ### #",
//    "#    #                     #",
//    "############################"];

// var plan2 =
//   ["############################",
//    "#                     ######",
//    "#    ***                **##",
//    "#   *##**         **  x  *##",
//    "#    ***     i    ##**    *#",
//    "#                 ##***   *#",
//    "#                 ##**    *#",
//    "#   i       #*            *#",
//    "#*          #**           *#",
//    "#***        ##**    x    **#",
//    "#*****     ###***       *###",
//    "############################"];

// var plan3 =
//   ["############################",
//    "#                      #####",
//    "#    ##                 ####",
//    "#   ####                  ##",
//    "#    ##       i            #",
//    "#                          #",
//    "#                ###       #",
//    "#               #####      #",
//    "#                ###       #",
//    "# %        ###        x    #",
//    "#        #######           #",
//    "############################"];


// var plan4 =
//   ["############################",
//    "#                      #####",
//    "#    ##                 ####",
//    "#   ####     i            ##",
//    "#    ##                    #",
//    "#                          #",
//    "#      i         ###       #",
//    "#            %   #####     #",
//    "#                ###       #",
//    "# x        ###        x    #",
//    "#        #######           #",
//    "############################"];

  var Point = function(x, y){
  		this.x = x;
  		this.y = y;
  };

  Point.prototype.add = function(other){
  	return new Point(this.x = other.x, this.y + other.y);
  };

  Point.prototype.isEqualTo = function(other) {
  	return ( this.x === other.x && this.y === other.y );
  };






var plan1=  ["####                    ####",
             "#                          #",
             "#                          #",
             "                            ",
             "                            ",
             "                            ",
             "                            ",
             "                            ",
             "                            ",
             "#                          #",
             "#                          #",
             "####                    ####"];

var plan2=  ["############################",
             "#                          #",
             "#                          #",
             "                           #",
             "                           #",
             "                           #",
             "                           #",
             "                           #",
             "                           #",
             "#                          #",
             "#                          #",
             "############################"];

var plan3=  ["####                    ####",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "############################"];

var plan4=  ["############################",
             "#                          #",
             "#                          #",
             "#                           ",
             "#                           ",
             "#                           ",
             "#                           ",
             "#                           ",
             "#                           ",
             "#                          #",
             "#                          #",
             "############################"];

var plan5=  ["############################",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "#                          #",
             "####                    ####"];

// Mousetrap.bind(['right'])





//none of the below functions created white space and adequate html elements

// var planRender =  function(arr) {
//     for (var i = 0; i < arr.length; i++) {
//     arr[i] = "<div>" + arr[i] + "</div>";
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === ' ') {
//         arr[i][j] == '&nbsp';
//       };
//     };
//   };
// }


// testArr = [];
// var testRender = function(str) {
//    for (var j = 0; j < str.length; j++) {
//    str[j].concat( "<span>" + str[j] + "</span>" );
//    testArr.push(str[j]);
//   };
// }















