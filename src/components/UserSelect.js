import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-width: 1px;
  border-radius: 0.375rem;
  border-color: #e5e7eb;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  appearance: none;
  font-size: 1rem;
  margin-top: 4px;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
`;

// TODO: wire up to API
export const UserSelect = () => {
  return (
    <div>
      <StyledLabel>Current User</StyledLabel>
      <StyledSelect>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </StyledSelect>
    </div>
  );
};
