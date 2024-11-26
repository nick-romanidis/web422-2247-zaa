import Home from '@/pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe("Home Page", () => {
    test("Renders a link to vercel", () => {
        const { container } = render(<Home />);

        const child = container.querySelector("main div");

        expect(child).toBeTruthy();

        const childLinks = child.querySelectorAll("a");

        expect(childLinks.length).toBeGreaterThan(0);

        let vercelLinks = 0;

        childLinks.forEach(link => {
            if (link.href.includes("https://vercel.com")) {
                vercelLinks++;
            }
        });

        expect(vercelLinks).toBeGreaterThan(0);
    });
});