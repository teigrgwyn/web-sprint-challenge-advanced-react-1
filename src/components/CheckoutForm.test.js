import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; // npm-installed already

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // checks that first page title is rendered normally, basically
  render(<CheckoutForm />);
  const title = screen.getByText(/checkout form/i);
  expect(title).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)

     const first = screen.getByLabelText(/first name/i)
     const last = screen.getByLabelText(/last name/i)
     const address = screen.getByLabelText(/address/i)
     const city = screen.getByLabelText(/city/i)
     const state = screen.getByLabelText(/state/i)
     const zip = screen.getByLabelText(/zip/i)
     const checkout = screen.getByRole('button', {name: /checkout/i})
     
     userEvent.type(first, 'First')
     userEvent.type(last, 'Last')
     userEvent.type(address, '123 Net Lane')
     userEvent.type(city, 'City')
     userEvent.type(state, 'State')
     userEvent.type(zip, '12345')

     expect(first).toHaveValue('First')
     expect(last).toHaveValue('Last')
     expect(address).toHaveValue('123 Net Lane')
     expect(city).toHaveValue('City')
     expect(state).toHaveValue('State')
     expect(zip).toHaveValue('12345')

     userEvent.click(checkoutButton)

     const successMessage = screen.getByTestId('successMessage')

     expect(successMessage).toBeInTheDocument()
});
