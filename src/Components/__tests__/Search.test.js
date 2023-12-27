import { render } from "@testing-library/react";
import BodyComponent from "../BodyComponent.js";
import { Provider } from "react-redux";
import store from "../../Utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { dummyData } from "../../mocks/dummyData.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: ()=>{
        return Promise.resolve(dummyData)
    },
  });
});

test("Testing the Search Bar", () => {
  <StaticRouter>
    <Provider store={store}>
      <BodyComponent />
    </Provider>
  </StaticRouter>;
});
