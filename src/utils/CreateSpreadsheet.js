import Excel from "exceljs";
import { saveAs } from "file-saver";

export const  createSpreadsheet = async (records) => {
  const workbook = new Excel.Workbook();

  const workSheet = workbook.addWorksheet("Fake Data");

  workSheet.columns = [
    { header: "day", key: "day" },
    { header: "scheduleWindowStart", key: "scheduleWindowStart" },
    { header: "scheduleWindowEnd", key: "scheduleWindowEnd" },
    { header: "address", key: "address" },
    { header: "customerName", key: "customerName" },
    { header: "productTitle", key: "productTitle" },
    { header: "quantity", key: "quantity" },
  ];

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
    workSheet.addRow([
      date,
      scheduleWindowStart,
      scheduleWindowEnd,
      address,
      customerName,
      productTitle,
      quantity,
    ]);
  }


  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  const fileExtension = ".xlsx";
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: fileType });
  saveAs(blob, `fakeData${fileExtension}`);
};
