import { rest } from 'msw';
import { GET_TICKETS_DATA, POST_TICKET_DATA } from './data';

const baseUrl = `${process.env.REACT_APP_BASE_URL}/tickets`;

const handlers = [
    // Handles a POST /tickets request
    rest.post(`${baseUrl}`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ message: 'ticket.created' })
        );
    }),

    // Handles a GET /tickets request
    rest.get(`${baseUrl}`, (req, res, ctx) => {
        return res(ctx.json(GET_TICKETS_DATA));
    }),
];

export default handlers;
