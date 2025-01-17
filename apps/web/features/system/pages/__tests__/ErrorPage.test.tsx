import { ErrorPage } from '@/features/system/pages';
import { render, screen } from '@/entry-point/config/tests/test-utils';

describe('errorPage test', () => {
  it('should contain error passed status code', () => {
    render(<ErrorPage statusCode={500} />);
    expect(screen.getByTestId('error-status-code')).toBe('500');
  });
});
