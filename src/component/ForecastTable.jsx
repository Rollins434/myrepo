// src/ForecastTable.jsx
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
 // Optional: For styling

const ForecastTable = () => {
  // Sample data
  const data = React.useMemo(
    () => [
      {
        date: "10/1/2024",
        weekday: "Tuesday",
        forecast: { grossAdds: 1095, disconnects: 480, upgrades: 615 },
        actualsCY: { grossAdds: 1103, disconnects: 835, upgrades: 768 },
        actualsPY: { grossAdds: 1029, disconnects: 366, upgrades: 663 },
        yoyActuals: { grossAdds: "7.19%", disconnects: "-8.47%", upgrades: "15.84%" },
      },
      {
        date: "10/2/2024",
        weekday: "Wednesday",
        forecast: { grossAdds: 1196, disconnects: 464, upgrades: 732 },
        actualsCY: { grossAdds: 1151, disconnects: 838, upgrades: 813 },
        actualsPY: { grossAdds: 1170, disconnects: 470, upgrades: 700 },
        yoyActuals: { grossAdds: "-1.62%", disconnects: "-28.09%", upgrades: "16.14%" },
      },
      // Add more rows as needed
    ],
    []
  );

  // Define columns with grouped headers
  const columns = React.useMemo(
    () => [
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Weekday",
        accessorKey: "weekday",
      },
      {
        header: "Forecast",
        columns: [
          {
            header: "Gross Adds",
            accessorKey: "forecast.grossAdds",
          },
          {
            header: "Disconnects",
            accessorKey: "forecast.disconnects",
          },
          {
            header: "Upgrades",
            accessorKey: "forecast.upgrades",
          },
        ],
      },
      {
        header: "Actuals CY",
        columns: [
          {
            header: "Gross Adds",
            accessorKey: "actualsCY.grossAdds",
          },
          {
            header: "Disconnects",
            accessorKey: "actualsCY.disconnects",
          },
          {
            header: "Upgrades",
            accessorKey: "actualsCY.upgrades",
          },
        ],
      },
      {
        header: "Actuals PY",
        columns: [
          {
            header: "Gross Adds",
            accessorKey: "actualsPY.grossAdds",
          },
          {
            header: "Disconnects",
            accessorKey: "actualsPY.disconnects",
          },
          {
            header: "Upgrades",
            accessorKey: "actualsPY.upgrades",
          },
        ],
      },
      {
        header: "YOY Actuals",
        columns: [
          {
            header: "Gross Adds",
            accessorKey: "yoyActuals.grossAdds",
          },
          {
            header: "Disconnects",
            accessorKey: "yoyActuals.disconnects",
          },
          {
            header: "Upgrades",
            accessorKey: "yoyActuals.upgrades",
          },
        ],
      },
    ],
    []
  );

  // Initialize the table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={header.isPlaceholder ? "empty-header" : ""}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
