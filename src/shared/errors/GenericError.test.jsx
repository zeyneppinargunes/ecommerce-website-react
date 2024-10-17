import { describe, expect, test } from 'vitest';
import { render, screen, configure } from '@testing-library/react';
import GenericError from './GenericError';

describe('GenericError', () => {
  const error = { message: 'test error' };

  test('renders', () => {
    render(<GenericError error={error} />);
    expect(screen.getByText('Error occured: test error')).toBeDefined();
  });
});
