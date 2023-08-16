// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { data, error } = await updateTeacherInfo({ ...req.body });
    if (error) {
      return res.status(403).json({ error });
    }
    return res.status(200).json(data);
  }
  return res.status(403).json({ status: 403, message: "Invalid request!" });
}

const updateTeacherInfo = async (teacher: any) => {
  const { data, error } = await supabase
    .from("Teacher")
    .upsert(teacher)
    .single();

  if (error) {
    return { error: "Invalid request!" };
  }

  return { data: data };
};
