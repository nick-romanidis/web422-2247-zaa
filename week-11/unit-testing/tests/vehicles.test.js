import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/vehicles/[id]';

describe("/api/vehicles/[id] test", () => {
    test("Returns a vehicle", async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {
                id: '1'
            }
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                id: 1,
            })
        );
    });

});