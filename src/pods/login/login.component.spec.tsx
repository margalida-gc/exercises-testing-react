import React from 'react'
import { render, screen } from '@testing-library/react'
import {LoginComponent} from './login.component'
import userEvent from '@testing-library/user-event';

describe('pods/login/login.component specs', () => {
    it('render components Login', () => {
        // Arrange
        const props = {
            onLogin: jest.fn()
        };

    //Act
    render(<LoginComponent {...props}/>)
    const userInputElement = screen.getByRole('textbox')
    const passwordInputElement = screen.getByLabelText('Contraseña *')
    const buttonElement = screen.getByRole('button', {name: /login/i})
   

    //Assert
    expect(userInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

})
})