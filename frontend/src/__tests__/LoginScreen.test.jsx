import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from '../components/LoginScreen';

// Mock the fetch API globally
global.fetch = vi.fn();

describe('LoginScreen Authorization component', () => {
  it('prevents submission with blank credentials', async () => {
    const handleLogin = vi.fn();
    render(<LoginScreen onLogin={handleLogin} />);
    
    // Click button passively without filling inputs
    const btn = screen.getByText(/Authorize & Proceed/i);
    fireEvent.click(btn);
    
    // Evaluate synchronous validation
    expect(await screen.findByText(/All credentials \(Name, Email, Access Code\) required./i)).toBeInTheDocument();
    expect(handleLogin).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('calls the backend Vault when credentials are provided', async () => {
    // Stage mock implementation
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: 'success', exam_id: '14001' })
    });

    const handleLogin = vi.fn();
    render(<LoginScreen onLogin={handleLogin} />);
    
    // Mock user inputs
    fireEvent.change(screen.getByPlaceholderText(/Jane Doe/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/corporate address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/ASTUTE-XXXX/i), { target: { value: 'DEMO-14001' } });
    
    // Execute
    const btn = screen.getByText(/Authorize & Proceed/i);
    fireEvent.click(btn);
    
    expect(screen.getByText(/Verifying.../i)).toBeInTheDocument();

    // Ensure it eventually calls the router hand-off
    await waitFor(() => {
      expect(handleLogin).toHaveBeenCalledWith('Test User', 'test@example.com', 'DEMO-14001', '14001', undefined);
    });
  });
});
