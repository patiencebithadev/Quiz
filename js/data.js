var questionBank = {
    math: [
        { q: "Quel est le résultat de la dérivée de f(x) = x² ?", options: ["2x", "x", "2", "x²"], answer: 0, level: "facile" },
        { q: "Combien font 7 factorielle (7!) ?", options: ["720", "5040", "40320", "120"], answer: 1, level: "moyen" },
        { q: "Quelle est la limite de (1 + 1/n)^n quand n tend vers l'infini ?", options: ["0", "1", "e", "Infini"], answer: 2, level: "difficile" }
    ],
    stats: [
        { q: "Que mesure l'écart-type ?", options: ["La moyenne", "La dispersion des données", "La médiane", "L'effectif total"], answer: 1, level: "facile" },
        { q: "Si la probabilité d'un événement est 0, l'événement est :", options: ["Certain", "Impossible", "Probable", "Aléatoire"], answer: 1, level: "facile" },
        { q: "Comment appelle-t-on une distribution symétrique en forme de cloche ?", options: ["Loi de Poisson", "Loi Uniforme", "Loi Normale (Gaussienne)", "Loi Binomiale"], answer: 2, level: "moyen" }
    ],
    algo: [
        { q: "Quelle structure de données fonctionne en mode LIFO (Last In, First Out) ?", options: ["File (Queue)", "Pile (Stack)", "Tableau", "Arbre"], answer: 1, level: "facile" },
        { q: "Quelle est la complexité temporelle du tri par fusion (Merge Sort) dans le pire des cas ?", options: ["O(n)", "O(n²)", "O(n log n)", "O(1)"], answer: 2, level: "difficile" },
        { q: "Quel mot-clé est utilisé pour arrêter une boucle en JavaScript/C ?", options: ["stop", "break", "exit", "return"], answer: 1, level: "facile" }
    ]
};