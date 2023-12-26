import { render } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server"; //this comes from server and not just react-rputer-dom

test("logo should load", () => {
  const header = render(
    <StaticRouter>
      {/* we need staticRouter because the appRouter in app.js is created using createBrowserRouter(cBR)
            and since we are not testing on an actual browser, the cBR won't work when it encounters the "link" */}
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo") //this is like getElementById and this logo has to be the id in our headerComponent where we have the logo
  expect(logo[0].src).toBe("http://localhost/dummyLogo.png") //[0] because getAllByTestId is geting all the elements that have id logo so it's returning the array
  //and we need the first one.
});
