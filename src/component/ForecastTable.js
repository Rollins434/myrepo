import React from "react";
import { useTable } from "@tanstack/react-table";

const ForecastTable = () => {
  // Sample data, similar to what you uploaded
  const data = React.useMemo(() => [
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
  ], []);

  const columns = React.useMemo(() => [
    { accessorKey: "date", header: "Date" },
    { accessorKey: "weekday", header: "Weekday" },
    {
      header: "Forecast",
      columns: [
        { accessorKey: "forecast.grossAdds", header: "Gross Adds" },
        { accessorKey: "forecast.disconnects", header: "Disconnects" },
        { accessorKey: "forecast.upgrades", header: "Upgrades" },
      ],
    },
    {
      header: "Actuals CY",
      columns: [
        { accessorKey: "actualsCY.grossAdds", header: "Gross Adds" },
        { accessorKey: "actualsCY.disconnects", header: "Disconnects" },
        { accessorKey: "actualsCY.upgrades", header: "Upgrades" },
      ],
    },
    {
      header: "Actuals PY",
      columns: [
        { accessorKey: "actualsPY.grossAdds", header: "Gross Adds" },
        { accessorKey: "actualsPY.disconnects", header: "Disconnects" },
        { accessorKey: "actualsPY.upgrades", header: "Upgrades" },
      ],
    },
    {
      header: "YOY Actuals",
      columns: [
        { accessorKey: "yoyActuals.grossAdds", header: "Gross Adds" },
        { accessorKey: "yoyActuals.disconnects", header: "Disconnects" },
        { accessorKey: "yoyActuals.upgrades", header: "Upgrades" },
      ],
    },
  ], []);

  const table = useTable({ data, columns });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder ? null : header.renderHeader()}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {cell.renderCell()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ForecastTable;
