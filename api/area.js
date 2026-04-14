import supabase from "./supabase.js";

export default async function handler(req, res) {
  try {
    // GET
    if (req.method === "GET") {
      const { data, error } = await supabase.from("area").select("*");
      if (error) throw error;
      return res.status(200).json(data);
    }

    // POST
    if (req.method === "POST") {
      const { nama } = req.body;
      const { error } = await supabase.from("area").insert([{ nama }]);
      if (error) throw error;
      return res.status(200).json({ message: "Berhasil tambah" });
    }

    // DELETE
    if (req.method === "DELETE") {
      const { id } = req.body;
      const { error } = await supabase.from("area").delete().eq("id", id);
      if (error) throw error;
      return res.status(200).json({ message: "Berhasil hapus" });
    }

    // UPDATE
    if (req.method === "PUT") {
      const { id, nama } = req.body;
      const { error } = await supabase
        .from("area")
        .update({ nama })
        .eq("id", id);

      if (error) throw error;
      return res.status(200).json({ message: "Berhasil update" });
    }

    res.status(405).json({ message: "Method not allowed" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}