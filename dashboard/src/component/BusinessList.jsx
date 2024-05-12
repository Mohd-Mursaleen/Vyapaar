/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTable } from "react-table";

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

  const columns = React.useMemo(
    () => [
      {
        Header: "Business Name",
        accessor: "nameOfBusiness"
      },
      {
        Header: "Account Holder",
        accessor: "accountHolderName"
      },
      {
        Header: "PAN Number",
        accessor: "panCardNumber"
      },
      {
        Header: "Aadhar Number",
        accessor: "aadharCardNumber"
      },
      {
        Header: "GST Number",
        accessor: "gstNumber"
      },
      {
        Header: "Address",
        accessor: "businessAddress"
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: businesses });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        {...getTableProps()}
        className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-6 py-3">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => navigate(`/loan/${row.original._id}`)}
                className="cursor-pointer hover:bg-gray-100"
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BusinessList;
