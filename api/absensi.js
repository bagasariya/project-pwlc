import supabase from "./supabase.js";

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { karyawan_id } = req.query;

    const { data } = await supabase
      .from("absensi")
      .select("*")
      .eq("karyawan_id", karyawan_id);

    return res.json(data);
  }

  if (req.method === "POST") {
    const { karyawan_id, tanggal, jam_masuk, jam_pulang } = req.body;

    await supabase.from("absensi").insert([
      { karyawan_id, tanggal, jam_masuk, jam_pulang }
    ]);

    return res.json({ message: "ok" });
  }

  if (req.method === "PUT") {
    const { id, jam_masuk, jam_pulang } = req.body;

    await supabase
      .from("absensi")
      .update({ jam_masuk, jam_pulang })
      .eq("id", id);

    return res.json({ message: "updated" });
  }
}