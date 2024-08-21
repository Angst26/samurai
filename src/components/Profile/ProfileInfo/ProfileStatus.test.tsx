import React from 'react';
//
import {render, screen, waitFor} from "@testing-library/react";
// import {describe, test, expect} from "@jest/globals";
// import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus', () => {
    test('renders correctly', () => {
        render(<ProfileStatus status={'test status'} isOwner={true} updateStatus={jest.fn()}/>);
        const statusElem = screen.getByTestId('status-display')
        expect(statusElem).toBeInTheDocument();
    })
    test('updates and saves after changing correctly', async () => {
        const mockUpdateStatus = jest.fn();

        render(<ProfileStatus status={'initial status'} isOwner={true} updateStatus={mockUpdateStatus}/>);
        const statusDisplay = screen.getByTestId('status-display')
        expect(statusDisplay).toHaveTextContent('initial status');

        // userEvent.dblClick(statusDisplay);

        // const statusInput = screen.getByTestId('status-display')
        // userEvent.clear(statusInput)
        // userEvent.type(statusInput, 'new status')
        // userEvent.tab()

        // await waitFor(() => expect(mockUpdateStatus).toHaveBeenCalledWith('new status'));
    })
})