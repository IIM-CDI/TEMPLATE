// Exemple d'utilitaire
// utils/dateUtils.js

/**
 * Utilitaires pour la manipulation des dates
 */

/**
 * Formate une date au format français
 * @param {Date|string} date - La date à formater
 * @returns {string} La date formatée (ex: "15 mars 2024")
 */
export const formatDateFR = (date) => {
  const dateObj = new Date(date);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return dateObj.toLocaleDateString('fr-FR', options);
};

/**
 * Calcule l'âge à partir d'une date de naissance
 * @param {Date|string} birthDate - La date de naissance
 * @returns {number} L'âge en années
 */
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Vérifie si une date est dans le futur
 * @param {Date|string} date - La date à vérifier
 * @returns {boolean} True si la date est dans le futur
 */
export const isFutureDate = (date) => {
  return new Date(date) > new Date();
};