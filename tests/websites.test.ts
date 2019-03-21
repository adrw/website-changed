import { websites } from "../src"
import axios from "axios"

websites.map(url => {
  describe("websites", () => {
    it(url, () => {
      return axios.get(url).then(resp => {
        expect(resp.data).toBeDefined()
        expect(resp.data).toMatchSnapshot()
      })
    })
  })
})
