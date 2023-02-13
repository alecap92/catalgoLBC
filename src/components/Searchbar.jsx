import { useCallback, useState } from "react";
import { useRouter } from "next/router";

export const Searchbar = () => {
  const [searchedProduct, setSearchedProduct] = useState("");
  const router = useRouter();

  const handleSearch = useCallback(
    (e, query = "") => {
      e.preventDefault();
      if (!query) return;

      router.push(`/buscador?q=${query}`);
    },
    [router]
  );

  return (
    <form
      onSubmit={(e) => handleSearch(e, searchedProduct)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <input
        style={{
          width: "100%",
          marginRight: "20px",
        }}
        type="text"
        name=""
        id=""
        value={searchedProduct}
        onChange={(e) => setSearchedProduct(e.target.value)}
        placeholder="What type of Product are you looking for?"
        className="form-control"
      />
      <button
        style={{
          background: "#B9A46D",
          padding: "7px 15px",
          border: "none",
          borderRadius: "10px",
          color: "white",
        }}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
