import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  // handler function to delete

  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    //send a DELETE request to the server for a specific product
    if (response.ok) {
      // if the response is successful redirect to the home page
      router.push("/");
    }
  }

  // handle to update-edit

  async function handleEdit(productData) {
    ///not needed because ProductForm will handle these three lines already:
    // productData.preventDefault();
    // const formData = new FormData(productData.target);
    // const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      {isEditMode ? (
        <>
          <ProductForm defaultData={data} onSubmit={handleEdit} />

          <button onClick={() => setIsEditMode(!isEditMode)}>CANCEL</button>
        </>
      ) : (
        <button onClick={() => setIsEditMode(!isEditMode)}>EDIT</button>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
