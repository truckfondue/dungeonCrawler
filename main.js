$(document).on('ready', function() {
  
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
};

var Room = function(monsters, items) {
	// this.navigationInformation = navigationInformation;
	this.monsters = monsters;
	this.items = items;
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
var room1 = new Room([snarlax, ruby], [largeHealth, steroids]);

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