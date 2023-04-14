import { server } from './app/mocks/server';
import '@testing-library/jest-dom';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
