const initialState = {
  data: [
    {
      image_url: "",
      status: 0,
      name: "bulpedak",
      version: "1.1.1",
      model: "EdgeSwitch 8-Port 150W",
      ipAddress: "49.17.219.34"
    },
    {
      image_url: "",
      status: 0,
      name: "vazlu",
      version: "1.1.1",
      model: "UFiber Nano",
      ipAddress: "180.186.229.10"
    },
    {
      image_url: "",
      status: 1,
      name: "jomaoza",
      version: "1.1.1",
      model: "UFiber OLT",
      ipAddress: "160.456.269.34"
    },
    {
      image_url: "",
      status: 1,
      name: "Rice_14",
      version: "1.1.0",
      model: "EdgePoint Router 8-Port",
      ipAddress: "123.176.222.50"
    },
    {
      image_url: "",
      status: 2,
      name: "ipoti",
      version: "1.1.0",
      model: "EdgePoint Router 8-Port",
      ipAddress: "154.158.171.16"
    },
    {
      image_url: "",
      status: 3,
      name: "Zimmerman_19",
      version: "6.0.7",
      model: "UFiber OLT",
      ipAddress: "196.123.235.192"
    },
    {
      image_url: "",
      status: -1,
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
