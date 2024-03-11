import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Appstore from "../../utils/Appstore";
import HeaderComponent from "../HeaderComponent"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



test('should load Header Component and login button', () => {
   render(
   <BrowserRouter>
   <Provider store={Appstore}>
    <HeaderComponent  />
   </Provider>
   </BrowserRouter>
    );


    // const loginBtn=screen.getByRole('button',{name: "Login"});

    const cartItems=screen.getByText("Cart (0 items)")
    expect(cartItems).toBeInTheDocument();
});
