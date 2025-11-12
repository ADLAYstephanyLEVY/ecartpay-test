import apiClient from "@/api/axios";

class OrderService {
  /*
   * POST /api/orders
   * @param {Object} data
   * @returns {Object}
   */
  async createOrder(data) {
    const response = await apiClient.post("/orders", data);
    return response.data;
  }
}

export default new OrderService();
