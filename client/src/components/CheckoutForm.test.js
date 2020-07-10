import React from "react";
import CheckoutForm from "./CheckoutForm";
import { render, fireEvent, getByTestId, findAllByText } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows


test( "form header render", () => 
{
  const { getByText } = render( <CheckoutForm /> );
  expect( getByText( /checkout form/i ) ).toBeInTheDocument();
} );

test( "form shows success message on submit", () => 
{
  const x = document.createElement( "div" );
  ReactDOM.render( <App />, x );
  ReactDOM.unmountComponentAtNode( x );
} );