import supabase from "./supabase.js";

export default async function handler(req, res) {
  try {

    if (req.method === "GET") {
      const { data, error } = await supabase.from("proyek").select("*");
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const { nama, lokasi, tanggal_mulai, deadline } = req.body;

      const { error } = await supabase
        .from("proyek")
        .insert([{ nama, lokasi, tanggal_mulai, deadline }]);

      if (error) throw error;

      return res.status(200).json({ message: "Berhasil tambah" });
    }

    if (req.method === "DELETE") {
      const { id } = req.body;

      const { error } = await supabase
        .from("proyek")
        .delete()
        .eq("id", id);

      if (error) throw error;

      return res.status(200).json({ message: "Berhasil hapus" });
    }

    if (req.method === "PUT") {
      const { id, nama, lokasi, tanggal_mulai, deadline } = req.body;

      const { error } = await supabase
        .from("proyek")
        .update({ nama, lokasi, tanggal_mulai, deadline })
        .eq("id", id);

      if (error) throw error;

      return res.status(200).json({ message: "Berhasil update" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}