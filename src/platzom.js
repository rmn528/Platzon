const platzom = (str) => {
  let translation = str;

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
  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length/2));
    const secondHalf = translation.slice(Math.round(length/2));
    translation = `${firstHalf}-${secondHalf}`;
  }

  const reverse = (str) => (
    str.split('').reverse().join('')
  );

  const minMay = (str) => {
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
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

export default platzom;
