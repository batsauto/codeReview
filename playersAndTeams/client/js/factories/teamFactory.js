myAppModule.factory("teamFactory", function() {
  var teams = [
    {name: "Seahawks"},
    {name: "49ers"},
    {name: "Honeybagers"}
  ];

  var factory = {};

  factory.getTeams = function(callback) {
    callback(teams);
  }

  factory.addTeam = function(team) {
    teams.push(team);
  }

  factory.removeTeam = function($index) {
    teams.splice(teams.indexOf($index), 1);
  }
  return factory;
})
