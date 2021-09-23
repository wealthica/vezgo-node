class Accounts {
  constructor(api) {
    this.api = api.userApi;
  }

  async getList() {
    const response = await this.api.get('/accounts');
    if (!response.ok) throw response.originalError;

    return response.data;
  }

  async getOne(id) {
    if (!id) throw new Error('Please provide a valid Vezgo account id.');

    const response = await this.api.get(`/accounts/${id}`);
    if (!response.ok) throw response.originalError;

    return response.data;
  }

  async remove(id) {
    if (!id) throw new Error('Please provide a valid Vezgo account id.');

    const response = await this.api.delete(`/accounts/${id}`);
    if (!response.ok) throw response.originalError;
  }
}

module.exports = Accounts;
