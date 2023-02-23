var app = angular.module("site");

app.service('CharCreatorService', [function(){

  this.freebiePts = 15;
  this.freebieMode = false;
  this.freebieSpent = 0;
  
  this.charPlayer = null;
  this.charChronicle = null;
  this.charName = null;
  this.charConcept = null;
  this.charNature = null;
  this.charGeneration = "11th";
  this.charSire = null;
  this.loadedCharacter = false;

  this.getPlayer = function(){
    return this.charPlayer;
  }

  this.generations = ["6th", "7th",
                      "8th", "9th", "10th", "11th", "12th",
                      "13th", "14th", "15th"];

  this.getFreebiePts = function(){
    return this.freebiePts;
  }
  this.changeFreebiePts = changeFreebiePts;
  this.toggleFreebieMode = toggleFreebieMode;

  function changeFreebiePts(addPts, flaw){
    //Add to freebie pts spent when using anything other than a flaw.
    if(!flaw)
      this.freebieSpent -= addPts;

    this.freebiePts += addPts;
  }

  function toggleFreebieMode(){
    if(this.freebieSpent > 0){
      return;
    }
    this.freebieMode = !this.freebieMode;
  }
}]);
