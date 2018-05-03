import device_1 from "../../device_imgs/device_1.png";
import device_2 from "../../device_imgs/device_2.png";
import device_3 from "../../device_imgs/device_3.png";
import device_4 from "../../device_imgs/device_4.png";
import device_5 from "../../device_imgs/device_5.png";
import device_6 from "../../device_imgs/device_6.png";

const initialState = {
  data: [
    {
      imageUrl: device_1,
      status: 0,
      name: "bulpedak",
      version: "1.1.1",
      model: "EdgeSwitch 8-Port 150W",
      ipAddress: "49.17.219.34"
    },
    {
      imageUrl: device_2,
      status: 0,
      name: "vazlu",
      version: "1.1.1",
      model: "UFiber Nano",
      ipAddress: "180.186.229.10"
    },
    {
      imageUrl: device_2,
      status: 1,
      name: "jomaoza",
      version: "1.1.1",
      model: "UFiber OLT",
      ipAddress: "160.456.269.34"
    },
    {
      imageUrl: device_3,
      status: 1,
      name: "Rice_14",
      version: "1.1.0",
      model: "EdgePoint Router 8-Port",
      ipAddress: "123.176.222.50"
    },
    {
      imageUrl: device_4,
      status: 2,
      name: "ipoti",
      version: "1.1.0",
      model: "EdgePoint Router 8-Port",
      ipAddress: "154.158.171.16"
    },
    {
      imageUrl: device_5,
      status: 3,
      name: "Zimmerman_19",
      version: "6.0.7",
      model: "UFiber OLT",
      ipAddress: "196.123.235.192"
    },
    {
      imageUrl: device_6,
      status: 4,
      name: "Craig_10",
      version: "1.9.7",
      model: "UFiber OLT",
      ipAddress: "93.205.56.19"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
