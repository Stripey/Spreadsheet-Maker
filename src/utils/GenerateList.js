import faker from "faker";

const timeStart = ["3:00 pm", "4:00 pm", "5:00pm"];
const timeEnd = ["6:00 pm", "7:00 pm", "8:00pm"];
export const GenerateList = () => {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    let object = {
      date: faker.date.past().toDateString(),
      scheduleWindowStart: timeStart[Math.floor(Math.random() * 3)],
      scheduleWindowEnd: timeEnd[Math.floor(Math.random() * 3)],
      address: faker.address.streetAddress(),
      customerName: faker.name.findName(),
      productTitle: faker.commerce.productName(),
      quantity: faker.random.number(),
    };
    arr.push(object);
  }

  return arr;
};
