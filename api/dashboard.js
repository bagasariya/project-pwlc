import supabase from "./supabase.js";

export default async function handler(req, res) {
  try {

    // hitung karyawan
    const { count: karyawan } = await supabase
      .from("karyawan")
      .select("*", { count: "exact", head: true });

    // hitung area
    const { count: area } = await supabase
      .from("area")
      .select("*", { count: "exact", head: true });

    // hitung pekerjaan
    const { count: pekerjaan } = await supabase
      .from("pekerjaan")
      .select("*", { count: "exact", head: true });

    // ambil 5 karyawan terbaru
    const { data: latestKaryawan } = await supabase
        .from("karyawan")
        .select("*")
        .order("id", { ascending: false })
        .limit(5);

    return res.status(200).json({
      karyawan,
      area,
      pekerjaan,
      latestKaryawan
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}