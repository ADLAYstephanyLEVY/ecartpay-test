import apiClient from "@/api/axios";

class ProductService {
  /*
   * GET /api/products
   * @returns {Array}
   */
  async getAllProducts() {
    try {
      const response = await apiClient.get("/products");
      return response.data;
    } catch (err) {
      console.log(err, " Error getting products");
      throw err;
    }
  }

  /*
   * POST /api/products
   * @param {Object} data
   * @returns {Object}
   */
  async createProduct(data) {
    const response = await apiClient.post("/products", data);
    return response.data;
  }
}

export default new ProductService();
