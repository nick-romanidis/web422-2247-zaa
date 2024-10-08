import { studentModel, mongooseConnect } from "@/lib/dbUtils";

export default async function handler(req, res) {
    const method = req.method;

    await mongooseConnect();

    switch (method) {
        case 'GET':
            const students = await studentModel.find().exec();
            res.status(200).json(students);
            break;

        case 'POST':
            const { name } = req.body;
            const newStudent = new studentModel({ name });
            await newStudent.save();
            
            res.status(200).json({ message: `Added student with name ${name}` });
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}