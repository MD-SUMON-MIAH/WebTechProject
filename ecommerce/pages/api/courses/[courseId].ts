import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types/utils";
import { supabase } from "../../utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user: any = await getCourseFromSupabase(req.query.courseId as string);
  res.status(200).json(user);
}

const getCourseFromSupabase = async (id: string) => {
  const { data, error, status } = await supabase
    .from("Course")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return { status: 403, message: error.message };
  }
  return { status: 200, data: data };
};
