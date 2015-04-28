$(document).on('ready', function() {
  
});

$('#play').on('click', function(){
	console.log(room1);
	// $('.playground').after(room1);
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

var plan1 =
  ["############################",
   "#      #    #             ##",
   "#                   x      #",
   "#          #####           #",
   "##   i     #   #    ##     #",
   "###           ##     #     #",
   "#           ###      #     #",
   "#   ####                   #",
   "#   ##        %            #",
   "#    #                 ### #",
   "#    #                     #",
   "############################"];

var plan2 =
  ["############################",
   "#                     ######",
   "#    ***                **##",
   "#   *##**         **  x  *##",
   "#    ***     i    ##**    *#",
   "#                 ##***   *#",
   "#                 ##**    *#",
   "#   i       #*            *#",
   "#*          #**           *#",
   "#***        ##**    x    **#",
   "#*****     ###***       *###",
   "############################"];

var plan3 =
  ["############################",
   "#                      #####",
   "#    ##                 ####",
   "#   ####                  ##",
   "#    ##       i            #",
   "#                          #",
   "#                ###       #",
   "#               #####      #",
   "#                ###       #",
   "# %        ###        x    #",
   "#        #######           #",
   "############################"];


var plan4 =
  ["############################",
   "#                      #####",
   "#    ##                 ####",
   "#   ####     i            ##",
   "#    ##                    #",
   "#                          #",
   "#      i         ###       #",
   "#            %   #####     #",
   "#                ###       #",
   "# x        ###        x    #",
   "#        #######           #",
   "############################"];

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




















