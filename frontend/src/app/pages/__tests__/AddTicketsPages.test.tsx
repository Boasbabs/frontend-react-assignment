import { ReactElement } from "react";
import { render, screen, waitFor } from "../../utils/test-utils";
import { AddTicketsPage } from '../add-tickets/AddTicketsPages';
import userEvent from "@testing-library/user-event";
import { AddTicketsFormValues } from "../../forms/AddTicketsForm";

function setup(jsx: ReactElement) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}
const formData: AddTicketsFormValues = {
    supplier: 'Sit ipsum in ipsum ',
    amount: 23,
    price: 329,
    description: 'Dolore in et rerum a',
    title: 'Laborum omnis deseru',
    email: 'tatyla@mailinator.com',
};

describe("AddTicketsPage", () => {
    test('should render page without crashing', () => {
        render(<AddTicketsPage />);
        expect(screen.getByText('Add Tickets')).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Add Tickets" })).toBeInTheDocument();
    });

    test('should be able to submit form', async () => {
        const { user } = setup(<AddTicketsPage />)

        const email = screen.getByPlaceholderText(/email/i)
        const title = screen.getByPlaceholderText(/title/i)
        const description = screen.getByPlaceholderText(/description/i)
        const price = screen.getByPlaceholderText(/price: 0/i)
        const amount = screen.getByPlaceholderText(/amount: 0/i)
        const supplier = screen.getByPlaceholderText(/supplier/i)
        const button = screen.getByRole("button", { name: /Add tickets/i })

        await user.type(email, formData.email)
        await user.type(title, formData.title)
        await user.type(description, formData.description)
        await user.type(price, formData.price.toString())
        await user.type(amount, formData.amount.toString())
        await user.type(supplier, formData.supplier)

        await waitFor(() => user.click(button)) // click submit <button></button>
        expect(email).toHaveValue("");
        expect(title).toHaveValue(""); 

    });

    test('should show form validations when input is empty', async () => {
        const { user } = setup(<AddTicketsPage  />)
        await user.click(screen.getByRole("button", { name: /Add tickets/i }));
        await waitFor(() => {
            expect(screen.getByText(/email is a required field/i)).toBeInTheDocument();
        });
        expect(screen.getByText(/title must be at least 2 characters/i)).toBeInTheDocument();
    });
})
