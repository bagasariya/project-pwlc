import supabase from "./supabase.js";

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { data } = await supabase
      .from("penugasan")
      .select(`
        id,
        karyawan:karyawan_id (nama),
        proyek:proyek_id (nama),
        area:area_id (nama)
      `);

    return res.json(data);
  }

  if (req.method === "POST") {
    const { karyawan_id, proyek_id, area_id } = req.body;

    await supabase.from("penugasan").insert([
      { karyawan_id, proyek_id, area_id }
    ]);

    return res.json({ message: "ok" });
  }
}