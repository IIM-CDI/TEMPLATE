// Exemple de test unitaire
// tests/utils/dateUtils.test.js

import { formatDateFR, calculateAge, isFutureDate } from '../utils/dateUtils.js';

describe('dateUtils', () => {
  describe('formatDateFR', () => {
    it('should format date in French format', () => {
      const date = new Date('2024-03-15');
      const result = formatDateFR(date);
      expect(result).toBe('15 mars 2024');
    });

    it('should handle string dates', () => {
      const result = formatDateFR('2024-12-25');
      expect(result).toBe('25 décembre 2024');
    });
  });

  describe('calculateAge', () => {
    it('should calculate correct age', () => {
      // Simuler une date courante pour le test
      const mockDate = new Date('2024-03-15');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const birthDate = '1990-03-15';
      const age = calculateAge(birthDate);
      expect(age).toBe(34);

      global.Date.mockRestore();
    });

    it('should handle birthday not yet occurred this year', () => {
      const mockDate = new Date('2024-03-10');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const birthDate = '1990-03-15';
      const age = calculateAge(birthDate);
      expect(age).toBe(33);

      global.Date.mockRestore();
    });
  });

  describe('isFutureDate', () => {
    it('should return true for future dates', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      
      expect(isFutureDate(futureDate)).toBe(true);
    });

    it('should return false for past dates', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      
      expect(isFutureDate(pastDate)).toBe(false);
    });
  });
});