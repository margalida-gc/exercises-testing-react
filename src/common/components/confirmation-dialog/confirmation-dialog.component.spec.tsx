import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ConfirmationDialogComponent } from './confirmation-dialog.component'
import userEvent from '@testing-library/user-event';

describe('common/components/confirmation-dialog/confirmation-dialog.component specs', () => {
    it('should render a dialog element', () => {
        // Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'dialog title',
            labels: {
                closeButton: 'close',
                acceptButton: 'accept',
            }
        };

    //Act
    render(<ConfirmationDialogComponent {...props}/>)
    const dialogElement = screen.getByRole('dialog')
    const closeButton = screen.getByRole('button', {name: 'close'})
    const acceptButton = screen.getByRole('button', {name: 'accept'})

    //Assert
    expect(dialogElement).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();

})

it('should not render a dialog element', () => {
    // Arrange
    const props = {
        isOpen: false,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'dialog title',
        labels: {
            closeButton: 'close',
            acceptButton: 'accept',
        }
    };

//Act
render(<ConfirmationDialogComponent {...props}/>)
const dialogElement = screen.queryByRole('dialog')

//Assert
expect(dialogElement).not.toBeInTheDocument();

})

it('click closed button', () => {
    // Arrange
    const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'dialog title',
        labels: {
            closeButton: 'close',
            acceptButton: 'accept',
        }
    };

//Act
render(<ConfirmationDialogComponent {...props}/>)
const closeButton = screen.getByRole('button', {name: 'close'})
userEvent.click(closeButton);

//Assert
expect(props.onClose).toHaveBeenCalled();

})

it('click accept button', () => {
    // Arrange
    const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'dialog title',
        labels: {
            closeButton: 'close',
            acceptButton: 'accept',
        }
    };

//Act
render(<ConfirmationDialogComponent {...props}/>)
const closeButton = screen.getByRole('button', {name: 'accept'})
userEvent.click(closeButton);

//Assert
expect(props.onAccept).toHaveBeenCalled();

})
})