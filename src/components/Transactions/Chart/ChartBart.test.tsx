import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import ChartBar from './ChartBar';

describe('ChartBar tests', () => {
    it('chartbar has correct label', () => {
        render(<ChartBar label='Jan' value={10} maxValue={100}/>);
        const chartBarLabel = screen.getByText('Jan', {exact: true});
        expect(chartBarLabel).toBeInTheDocument();
    })

    it('Chartbar has height of 10%', () => {
        render(<ChartBar label='Jan' value={10} maxValue={100}/>);
        const chartbar = screen.getByTestId('chart');
        expect(chartbar).toHaveStyle({height: '10%'})
    })
})