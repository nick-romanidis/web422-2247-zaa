export default function handler(req, res) {
    const method = req.method;
    const id = req.query.id;

    switch (method) {
        case 'GET':
            res.status(200).json({ message: `Get Student with ID ${id}` });
            break;

        case 'PUT':
            const { name } = req.body;
            res.status(200).json({ message: `Update Student with ID ${id}, set name to ${name}` });
            break;

        case 'DELETE':
            res.status(200).json({ message: `Delete Student with ID ${id}` });
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}