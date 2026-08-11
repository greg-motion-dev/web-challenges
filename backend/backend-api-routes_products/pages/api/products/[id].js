import { getProductById } from "@/services/productServices";
import useRouter from "next/router";
import useSWR from "swr";

export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json(getProductById(id));

  const router = useRouter();
}
