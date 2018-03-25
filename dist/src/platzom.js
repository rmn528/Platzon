'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var platzom = function platzom(str) {
  var translation = str;

  //Si la palabra termina en "ar" , se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith("z")) {
    translation += 'pe';
  }

  // si la palabra traducida tiene 10 o mas letras,
  // se debe partir a la mitad y unir con un guión del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  var minMay = function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      if (capitalize) {
        translation += char.toUpperCase();
      } else {
        translation += char.toLowerCase();
      }
      capitalize = !capitalize;
    }
    return translation;
  };

  // si la palabra original es un palindromo,
  // ningura regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas
  if (str === reverse(str)) {
    translation = minMay(str);
  }

  return translation;
};

exports.default = platzom;