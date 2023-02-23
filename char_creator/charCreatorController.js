var app = angular.module("site");

app.controller("CharCreatorController",
 ['CharCreatorService', 'LoginService', '$scope', 'SaveService', '$window',
 function(CharCreatorService, LoginService, $scope, SaveService, $window){

   this.freeMode = location.hash.includes("free");

   this.setPlayer = setPlayer;
   function setPlayer(charPlayer){
     CharCreatorService.charPlayer = charPlayer;
   }

   this.setChronicle = setChronicle;
   function setChronicle(charChronicle){
     CharCreatorService.charChronicle = charChronicle;
   }

   this.setName = setName;
   function setName(charName){
     CharCreatorService.charName = charName;
   }

   this.setConcept = setConcept;
   function setConcept(charConcept){
     CharCreatorService.charConcept = charConcept;
   }

   this.setArchetype = setArchetype;
   function setArchetype(charArchetype){
     CharCreatorService.charArchetype = charArchetype;
   }

   this.customDemeanor = false;
   this.setDemeanor = setDemeanor;
   function setDemeanor(charDemeanor){
     CharCreatorService.charDemeanor = charDemeanor;
   }

   this.setSire = setSire;
   function setSire(charSire){
     CharCreatorService.charSire = charSire;
   }

   this.setGeneration = setGeneration;
   function setGeneration(charGeneration){
     CharCreatorService.charGeneration = charGeneration;
   }

   this.loggedIn = LoginService.loggedIn();

   // this.freeMode = getFreeMode();
   // function getFreeMode(){
   //   return CharCreatorService.freeMode;
   // }

   this.charPlayer = getCharPlayer();
   function getCharPlayer(){
     return CharCreatorService.charPlayer;
   };

   this.charChronicle = getCharChronicle();
   function getCharChronicle(){
     return CharCreatorService.charChronicle;
   }

   this.charName = getCharName();
   function getCharName(){
     return CharCreatorService.charName;
   }

   this.charConcept = getCharConcept();
   function getCharConcept(){
     return CharCreatorService.charConcept;
   }

   this.charArchetype = getCharArchetype();
   function getCharArchetype(){
     return CharCreatorService.charArchetype;
   }

   this.charSire = getCharSire();
   function getCharSire(){
     return CharCreatorService.charSire;
   }

   this.charGeneration = getCharGeneration();
   function getCharGeneration(){
     return CharCreatorService.charGeneration;
   }

   this.generations = getGenerations();
   function getGenerations(){
     return CharCreatorService.generations;
   }

   this.toggleFreebieMode = toggleFreebieMode;
   this.getFreebiePts = getFreebiePts;

   function toggleFreebieMode(){
     CharCreatorService.toggleFreebieMode();
   }

   this.freebiePts = getFreebiePts();
   function getFreebiePts(){
     return CharCreatorService.freebiePts;
   }

   this.maxFreePts = 22;
   this.maxFlawBonus = 7;

   this.ArchetypeList = ["Architect", "Artist", "Bully",
                              "Caregiver", "Child", "Competitor",
                              "Con Artist", "Conformist", "Curious",
                              "Curmudgeon", "Cultured", "Enigma",
                              "Fanatic", "Fighter", "Freak",
                              "Free Spirit", "Judge", "Know-It-All",
                              "Introvert", "Leader", "Loner",
                              "Loose Cannon", "Martyr", "Mediator",
                              "Mercenary", "Monster", "Penitent",
                              "Protector", "Rationalist", "Royalty",
                              "Survivor", "Type-A Personality", "Teacher",
                              "Traditionalist", "Troublemaker", "Toady",
                              "Trickster", "Unflappable", "Untrustworthy"];

   var self = this;
   $scope.$on('loadCharacter', function(){
     self.charPlayer = CharCreatorService.charPlayer;
     self.charChronicle = CharCreatorService.charChronicle;
     self.charName = CharCreatorService.charName;
     self.charConcept = CharCreatorService.charConcept;
     self.charArchetype = CharCreatorService.charArchetype;
     self.charDemeanor = CharCreatorService.charDemeanor;
     self.charSire = CharCreatorService.charSire;
     self.charGeneration = CharCreatorService.charGeneration;
     $scope.$apply();
   })

   $scope.$on('resetCharacter', function(){
     self.charPlayer = null;
     self.charChronicle = null;
     self.charName = null;
     self.charConcept = null;
     self.charArchetype = null;
     self.charDemeanor = null;
     self.charSire = null;
     self.charGeneration = "13th";
   });

}]);
