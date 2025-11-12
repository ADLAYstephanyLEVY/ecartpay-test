import apiClient from "@/api/axios";

class ActivityService {
  /*
   * GET /api/activity : payment status afeter oirder made
   * @returns {Array}
   */

  async getActivity() {
    const response = apiClient.get("/activity");
    return response;
  }
}

export default new ActivityService();
