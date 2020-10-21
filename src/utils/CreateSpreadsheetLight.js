import zipcelx from "zipcelx";
export const createSpreadsheetLight = async (records) => {
  let config = {
    filename: "data",
    sheet: {
      data: [
        [
          { value: "day", type: "string" },
          { value: "scheduleWindowStart", type: "string" },
          { value: "scheduleWindowEnd", type: "string" },
          { value: "address", type: "string" },
          { value: "custerName", type: "string" },
          { value: "productTitle", type: "string" },
          { value: "quantity", type: "string" },
        ],
      ],
    },
  };

  for (let record of records) {
    const {
      date,
      scheduleWindowStart,
      scheduleWindowEnd,
      address,
      customerName,
      productTitle,
      quantity,
    } = record;
    config.sheet.data.push([
      { value: date, type: String },
      { value: scheduleWindowStart, type: String },
      { value: scheduleWindowEnd, type: String },
      { value: address, type: String },
      { value: customerName, type: String },
      { value: productTitle, type: String },
      { value: quantity, type: String },
    ]);
  }

  zipcelx(config);
};
