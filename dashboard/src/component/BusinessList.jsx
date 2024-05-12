import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "@geist-ui/core";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: { "Content-Type": "application/json" }
      };

      try {
        const response = await axios.get(
          "http://localhost:4048/api/businesses",
          options
        );
        setBusinesses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { prop: "nameOfBusiness", label: "Business Name" },
    { prop: "accountHolderName", label: "Account Holder" },
    { prop: "panCardNumber", label: "PAN Number" },
    { prop: "aadharCardNumber", label: "Aadhar Number" },
    { prop: "gstNumber", label: "GST Number" },
    { prop: "businessAddress", label: "Address" }
  ];

  const onRowClick = (data) => {
    navigate(`/loan/${data._id}`);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Table data={businesses} onRow={(data) => onRowClick(data)}>
        {columns.map((column) => (
          <Table.Column
            key={column.prop}
            prop={column.prop}
            label={column.label}
          />
        ))}
      </Table>
    </div>
  );
}

export default BusinessList;
