export const testBlazeVacancies = false

export const websites: string[] = ["https://adrw.xyz"].concat(
  testBlazeVacancies
    ? [
        "http://www.blazeproperties.ca/index.php/properties/abercrombie-place",
        "http://www.blazeproperties.ca/index.php/properties/belmont-village",
        "http://www.blazeproperties.ca/index.php/properties/camelot",
        "http://www.blazeproperties.ca/index.php/properties/cripple-creek",
        "http://www.blazeproperties.ca/index.php/properties/cripple-creek",
        "http://www.blazeproperties.ca/index.php/properties/tivoli",
        "http://www.blazeproperties.ca/index.php/properties/union-lane"
      ]
    : []
)
