import {render,screen} from "@testing-library/react";
import ContactComponent from "../ContactComponent";
import"@testing-library/jest-dom";


describe("Contact Us page Test Case",()=>{
test("should load contact us component",()=>{
   render(<ContactComponent/>)

   const heading= screen.getByRole('heading');
   
   expect(heading).toBeInTheDocument();
});


test("should load button in component",()=>{
    render(<ContactComponent/>)
 
    // const button= screen.getByRole('button'); have multiple ways to find button
    const button= screen.getByText('Submit');

    
    expect(button).toBeInTheDocument();
 });


 test("should load input in component",()=>{
    render(<ContactComponent/>)
 
    // const button= screen.getByRole('buttongetByText'); have multiple ways to find button
    const input= screen.getByPlaceholderText('name');

    
    expect(input).toBeInTheDocument();
 });


 test("should load  2 multiple input in component",()=>{
    render(<ContactComponent/>)
 
    // const button= screen.getByRole('buttongetByText'); have multiple ways to find button

    //Querying
    const inputBoxes= screen.getAllByRole('textbox');



    expect(inputBoxes.length).toBe(2);
 });
})

