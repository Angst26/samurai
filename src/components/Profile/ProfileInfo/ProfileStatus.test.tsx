// import React from 'react';
//
import {render, screen} from "@testing-library/react";
// import {describe, test, expect} from "@jest/globals";
import '@testing-library/jest-dom';
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus', () => {
    test('renders correctly', () => {
        render(<ProfileStatus status={'test status'} isOwner={true} updateStatus={jest.fn()}/>);
        const statusElem = screen.getByText('test status')
        expect(statusElem).toBeInTheDocument();
    })
})