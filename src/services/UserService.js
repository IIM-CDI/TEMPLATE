// Exemple de service
// services/UserService.js

/**
 * Service pour gérer les utilisateurs
 */
class UserService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Récupère les informations d'un utilisateur
   * @param {string} userId - L'ID de l'utilisateur
   * @returns {Promise<Object>} Les données de l'utilisateur
   */
  async getUser(userId) {
    try {
      const response = await this.apiClient.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      throw new Error('Impossible de récupérer les données utilisateur');
    }
  }

  /**
   * Met à jour les informations d'un utilisateur
   * @param {string} userId - L'ID de l'utilisateur
   * @param {Object} userData - Les nouvelles données
   * @returns {Promise<Object>} L'utilisateur mis à jour
   */
  async updateUser(userId, userData) {
    try {
      const response = await this.apiClient.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      throw new Error('Impossible de mettre à jour l\'utilisateur');
    }
  }
}

export default UserService;