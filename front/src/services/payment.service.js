import apiClient from "@/api/axios";

class PaymentService {
  /*
   * POST /api/checkout
   * @param {Object} data
   * @returns {Object}
   */
  async createCheckout(data) {
    const response = await apiClient.post("/checkout", data);
    return response.data;
  }

  /*
   * GET /api/transactions (summary)
   * @returns {Array}
   */
  async getTransactionsSummary() {
    const response = await apiClient.get("/transactions");
    return response.data;
  }

  /*
   * GET /api/transactions (all)
   * @returns {Array}
   */
  async getAllTransactions() {
    const response = await apiClient.get("/transactions/all");
    return response.data;
  }
}

export default new PaymentService();
