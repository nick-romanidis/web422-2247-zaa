// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const method = req.method;

  switch (method) {
    case 'GET':
      res.status(200).json({ name: "John Doe" });
      break;

    case 'POST':
      res.status(200).json({ name: req.body.name });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

}
