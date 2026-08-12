import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailsPage() {
  // Get the router instance
  const router = useRouter();

  // extract the dynamic 'id' from the URL query
  const { id } = router.query;

  //fetch data for that specific ID (only fetch if id exists)
  const { data, error, isLoading } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher,
  );

  // handle loading and error states
  if (error) return <div>Failed to load product</div>;
  if (isLoading) return <div>Loading product</div>;
  if (!data) return null;

  // render the single product details

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Price: {data.currency}</p>
      <p>Category: {data.category}</p>
    </div>
  );
}
