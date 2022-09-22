import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AddExpenseForm from './AddExpenseForm';
import store from '../../../store';

describe('AddExpenseForm tests - invalid', () => {
    it('shows error message in value label when no value', async () => {
        render(<Provider store={store}>
            <BrowserRouter>
            <AddExpenseForm />
            </BrowserRouter>
            </Provider>);
        const submitBtn = screen.getByRole('button');
        userEvent.click(submitBtn);
        const valueErr = await screen.findByText('Value is required');
        expect(valueErr).toBeInTheDocument();
    })

    it('shows error message in category label when no value', async () => {
        render(<Provider store={store}>
            <BrowserRouter>
            <AddExpenseForm />
            </BrowserRouter>
            </Provider>);
        const submitBtn = screen.getByRole('button');
        userEvent.click(submitBtn);
        const categoryErr = await screen.findByText('Category is required');
        expect(categoryErr).toBeInTheDocument();
    })

    it('shows error message in date label when no value', async () => {
        render(<Provider store={store}>
            <BrowserRouter>
            <AddExpenseForm />
            </BrowserRouter>
            </Provider>);
        const submitBtn = screen.getByRole('button');
        userEvent.click(submitBtn);
        const dateErr = await screen.findByText('Date is required');
        expect(dateErr).toBeInTheDocument();
    })

    it('shows error message in category label when too short value', async () => {
        render(<Provider store={store}>
            <BrowserRouter>
            <AddExpenseForm />
            </BrowserRouter>
            </Provider>);
        const submitBtn = screen.getByRole('button');
        const categorInput = screen.getByPlaceholderText('Category');
        userEvent.type(categorInput, 'a');
        userEvent.click(submitBtn);
        const categoryErr = await screen.findByText('Category must be longer than 2 characters');
        expect(categoryErr).toBeInTheDocument();
    })
})