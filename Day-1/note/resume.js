// ce jour, 14 avril, nous avons parler entre-autres: des loops(conditions), des functions, de templates.

// Ici, on fait de l'interpollation dans les chaînes. C'est le Template

const nom = "Ronald";
const age = 25;
console.log(`Nom: ${nom}, Âge: ${age}`);

// On a aussi traiter ceci pour une declaration possée:

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Sinon, on a une déclaration classique comme suit:

function greet(name) {
  return `Bonjour ${name}`;
}
console.log(greet("Kwokam Tatou Ronald Steve"));

// Condition declaration syntaxe for testing for major or minor & another giving rights to admin and limiting access to user and exiting if any of the above.

const age = 20;
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

const role = "admin";
switch (role) {
  case "admin":
    console.log("Accès complet");
    break;
  case "user":
    console.log("Accès limité");
    break;
  default:
    console.log("Aucun accès");
}

// Définition d'une fonction pour vérifier l'âge et afficher le statut
function checkUser(name, age) {
  // Utilisation d'un opérateur ternaire pour vérifier si l'utilisateur est majeur
  const status = age >= 18 ? "majeur" : "mineur";
  // Affichage formaté avec interpolation (template literals)
  console.log(`Utilisateur: ${name} | Statut: ${status}`);
}


// Boucle for pour exécuter checkUser 3 fois avec des valeurs différentes
for (let i = 0; i < 3; i++) {
  // Appel de la fonction avec un nom et un âge évolutif
  checkUser(`Personne${i}`, 15 + i * 3); 
}

// Déclaration d'une fonction fléchée (arrow function) pour évaluer une note
const note = (score) => {
  // Condition pour attribuer une appréciation selon le score
  if (score >= 90) return "Excellent";
  else if (score >= 70) return "Bien";
  else return "À améliorer";
};


// Appel de la fonction note() et affichage du résultat
console.log(`Note attribuée: ${note(82)}`);

// Talking of Loops for & While 

for (let i = 0; i < 5; i++) {
  console.log("Boucle n°", i);
}

let i = 0;
while (i < 3) {
  console.log("While loop", i);
  i++;
}
