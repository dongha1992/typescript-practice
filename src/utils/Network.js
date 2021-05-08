import axios from 'axios';
import { BASE_URL } from '@constants/config';

const GeuestToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNzE2MiwiZXhwIjoxNTc4NTQyNDMwLjUyMzkzMn0.-nLNkg4qLMOeEpfq5t3YLoiyce7WZ29Ikind_gpG1RI';

class Network {
  constructor() {
    this.headers = {
      Authorization: GeuestToken,
    };
  }

  setToken(token) {
    this.headers.Authorization = token || GeuestToken;
  }

  getToken() {
    return this.headers.Authorization;
  }

  getError(error, url) {
    let errorMessage = '오류가 발생하였습니다.';
    if (error.response) {
      console.log(
        `[Response] ${url} ${error.response.status}`,
        error.response.data
      );
      if (error.response.data && error.response.data.userMessage) {
        errorMessage = error.response.data.userMessage;
      }
    } else {
      console.log('[Response]', error);
    }
    return {
      err: errorMessage,
    };
  }

  // async _req(url, params, method, headers) {
  //   try {
  //     const t = Date.now();
  //     const res = await axios[method](BASE_URL + url, {
  //       headers: headers || this.headers,
  //       params,
  //     });
  //     console.log(
  //       '[Response]',
  //       `${Date.now() - t}ms`,
  //       method.toUpperCase(),
  //       url,
  //       res.data
  //     );
  //     return res.data
  //   } catch (error) {
  //     return this.getError(error, url);
  //   }
  // }

  // _reqWithData(url, data, method, headers) {
  //   const t = Date.now();
  //   try {
  //     return axios[method](BASE_URL + url, data, {
  //       headers: { ...this.headers, ...headers },
  //     });
  //   } catch (error) {
  //     this.onError(error, url);
  //   }
  // }

  _get = async (url, params, headers) => {
    try {
      const res = await axios.get(BASE_URL + url, {
        headers: headers || this.headers,
        params,
      });
      const data = res.data;
      return data;
    } catch (error) {
      this.onError(error, url);
    }
  };

  _post = (url, data) => {};

  getAllChallenges = () => this._get('/goals/all');
  getAchievements = (id, offset, limit) =>
    this._get(`goals/${id}/achievements?offset=${offset}&limit=${limit}`);
  getChallengeBanners = () => this._get('/challenge-banners');
  getChallengeInformation = (id) => this._get(`/challenges/${id}`);
  postSMSVerificationCode = (phone) => this._post(`/users/sms`, { phone });
}

export default new Network();
