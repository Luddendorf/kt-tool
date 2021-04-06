"use strict";

// Task 5
const dominator = { shiptype: "ultra-dominator" };
const transport = { shiptype: "transport" };
const meteor = { shiptype: "meteor-field-passer" };

const standart = { capsuletype: "standart" };
const armored = { capsuletype: "armored" };
const poor = { capsuletype: "poor" };

const ion = { enginetype: "ion-engine" };
const antiMatter = { enginetype: "anti-matter-engine" };
const plasma = { enginetype: "plasma-engine" };

const megadeath = { advancedscaner: "Megadeath-5000" };
const scan = {
  scanForEnemies: function () {
    console.log("Enemy detected!");
  },
};
const antiMeteor = {
  meteorDestroyer: function () {
    console.log("Meteor has been destroyed!");
  },
};

function createSpaceShip(shipType, capsuleType, engineType) {
  if (shipType == dominator) {
    return Object.assign(
      {},
      shipType,
      capsuleType,
      engineType,
      scan,
      megadeath
    );
  } else if (shipType == transport) {
    return Object.assign(
      {}, 
      shipType, 
      capsuleType, 
      engineType
      );
  } else if (shipType == meteor) {
    return Object.assign(
      {}, 
      shipType, 
      capsuleType, 
      engineType, 
      antiMeteor
      );
  }
}

console.log(createSpaceShip(meteor, armored, ion));
