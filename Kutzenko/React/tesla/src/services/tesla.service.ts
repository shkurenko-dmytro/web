import axios from "axios"

class TeslaService {
  private URL_SLIDER_DATA = 'https://tests-ipny.onrender.com/api/posts'

  getData() {
    return axios.get<ICar[]>(this.URL_SLIDER_DATA)
  }
}

export default new TeslaService