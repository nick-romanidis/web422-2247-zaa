import ClickCounter from '@/components/ClickCounter';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

describe("ClickCounter Component", () => {
    test("Increase count by 1 when clicked", async () => {

        const { container } = render(<ClickCounter />);

        const button = container.querySelector("button");

        expect(button).toBeTruthy();

        expect(button.innerHTML).toContain("0");

        const user = userEvent.setup();
        await user.click(button);

        expect(button.innerHTML).toContain("1");

    });
});