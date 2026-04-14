export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  // sementara hardcode dulu
  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      success: true
    });
  } else {
    return res.status(401).json({
      success: false
    });
  }
}