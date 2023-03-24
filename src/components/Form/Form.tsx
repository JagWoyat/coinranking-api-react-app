import React, { useState } from "react";
import styled from "styled-components";
import { FormData } from "../../types/formData";
import { FormWrapper } from "./styles";

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    symbol: "",
    iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    price: "",
    marketCap: "",
    websiteUrl: "https://bitcoin.org",
    description: "",
    rank: "",
    change: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Rank:
        <select
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
        >
          <option value="">Select a rank</option>
          <option value="1-99">1-99</option>
          <option value="100-299">100-299</option>
          <option value="300-499">300-499</option>
          <option value=">500">More than 500</option>
        </select>
      </label>
      <label>
        Name:
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Symbol:
        <input
          type="text"
          required
          name="symbol"
          value={formData.symbol}
          onChange={handleChange}
        />
      </label>
      <label>
        Icon link:
        <input
          type="text"
          required
          name="iconUrl"
          value={formData.iconUrl}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          required
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Change:
        <select
          name="change"
          value={formData.change}
          onChange={handleChange}
          required
        >
          <option value="">Select a change</option>
          <option value="Increasing">Increasing</option>
          <option value="Decreasing">Decreasing</option>
        </select>
      </label>
      <label>
        Market cap:
        <input
          type="number"
          required
          name="marketCap"
          value={formData.marketCap}
          onChange={handleChange}
        />
      </label>
      <label>
        Website:
        <input
          type="text"
          required
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </FormWrapper>
  );
}
