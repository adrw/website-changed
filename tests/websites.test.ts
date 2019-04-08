import { testBlazeVacancies, websites } from "../src"
import axios from "axios"
const htmlParser = require("html-parser")

if (testBlazeVacancies) {
  describe("blaze-vacancies", () => {
    it("blaze-vacancies", () => {
      return axios
        .get("http://www.blazeproperties.ca/index.php/vacancies")
        .then(resp => {
          expect(resp.data).toBeDefined()
          let vacanciesH2 = false
          let vacanciesList = false
          let vacanciesSnapshot: string[] = []
          htmlParser.parse(resp.data, {
            openElement: (name: string) => {
              if (name == "h2") {
                vacanciesH2 = true
              }
            },
            closeElement: (name: string) => {
              if (vacanciesH2 && name === "h2") {
                vacanciesList = true
              }
            },
            text: (value: string) => {
              if (vacanciesH2 && value !== "Vacancies") {
                vacanciesH2 = false
              }
              if (vacanciesList && value === "Sorry, no vacancy.") {
                vacanciesList = false
              }
              if (
                vacanciesList &&
                value.trim().length !== 0 &&
                value.trim() !== ","
              ) {
                vacanciesSnapshot.push(value)
              }
            }
          })
          expect(vacanciesSnapshot).toMatchSnapshot()
        })
    })
  })
}

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
