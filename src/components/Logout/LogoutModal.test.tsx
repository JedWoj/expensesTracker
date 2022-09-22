import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import LogoutModal from './LogoutModal';

const closeModal = jest.fn();

describe('logoutModal tests', () => {
    it('btn cancel works', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <LogoutModal closeModal={closeModal} />
            </BrowserRouter>
        </Provider>);
        const cancelBtn = screen.getByText('Cancel');
        userEvent.click(cancelBtn);
        expect(closeModal).toHaveBeenCalled();
    })
})