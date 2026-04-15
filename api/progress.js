import supabase from "./supabase.js";

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { data } = await supabase
      .from("progress")
      .select(`
        id,
        proyek:proyek_id (nama),
        pekerjaan:pekerjaan_id (nama),
        persen,
        tanggal
      `);

    return res.json(data);
  }

  if (req.method === "POST") {
    const { proyek_id, pekerjaan_id, persen, tanggal } = req.body;

    await supabase.from("progress").insert([
      { proyek_id, pekerjaan_id, persen, tanggal }
    ]);

    return res.json({ message: "ok" });
  }
}