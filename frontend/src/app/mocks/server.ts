// import API mocking utilities from Mock Service Worker
import { setupServer } from 'msw/node';
import handlers from './handlers';

export const server = setupServer(...handlers);