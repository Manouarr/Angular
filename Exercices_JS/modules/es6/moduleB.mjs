import val from './moduleA.mjs';

import val2 from './moduleA.mjs'; //Le nom importé n'a aucune importance

import * as objModule from './moduleA.mjs'; //Import global du module

import { f1 } from './moduleA.mjs'; //Import d'un élément spécifique

import { f2 as fonction2 } from './moduleA.mjs';

import valDefault, { f3 } from './moduleA.mjs';

console.log(val); //Test export

console.log(val2); //Test export 

console.log(objModule); //Objet englobant tous les exports

f1(); //Exécution f1

fonction2(); //Exécution f2

console.log(valDefault); //Test export 

f3(); //Exécution f3