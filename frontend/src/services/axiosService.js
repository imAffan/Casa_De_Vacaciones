import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/api/' : '/api/';

class AxiosService {
  axiosInstance = null;

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
    });
    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('freshbnb_token');
      if (token) config.headers.Authorization = `Bearer ${token}`; /* Bearer name changed*/
      return config;
    });
  }

  get freshbnbAxios() {
    return this.axiosInstance;
  }
}

export default new AxiosService();
