import { AddTicketsFormValues } from '../forms/AddTicketsForm';
import { TicketsListTableItemVM } from '../tables/TicketsListTable';

export const GET_TICKETS_DATA: TicketsListTableItemVM[] = [
    {
        id: 'addc65a8-c759-41d8-a18a-89fe446ad484',
        title: 'title',
        description: 'test description',
        price: 10,
        amount: 4,
        supplier: 'test supplier',
        email: 'test2@example.com',
    },
    {
        id: '6892b98b-9b87-4520-9a9e-7528f1d78cb4',
        title: 'title 2',
        description: 'test description 2',
        price: 10,
        amount: 4,
        supplier: 'test supplier 2',
        email: 'test2@example.com',
    },
];

export const POST_TICKET_DATA: AddTicketsFormValues = {
    supplier: 'Sit ipsum in ipsum ',
    amount: 23,
    price: 329,
    description: 'Dolore in et rerum a',
    title: 'Laborum omnis deseru',
    email: 'tatyla@mailinator.com',
};
