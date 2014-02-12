var App = {};

App.Init = function(){

	App.Cache();
	App.Bind();
	App.Size();

	App.Run();

};

App.Cache = function(){

	App.dom = {};
	App.win = {};

};

App.Bind = function(){

	$(window).resize(function(){
		App.Size();
	});

};

App.Size = function(){

	App.win.window = $(window);
	App.win.width = App.win.window.width();
	App.win.height = App.win.window.height();

};

App.Run = function(){

	console.log('App Running');

};



$(document).ready(function(){

	App.Init();

});