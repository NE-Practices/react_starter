import { ColumnDef } from "@tanstack/react-table";

export interface Users {
  names: string;
  email: string;
  telephone: string;
}

export const userColumns = (): ColumnDef<Users>[] => [
  {
    accessorKey: "names",
    header: "Username",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "telephone",
    header: "Phone number",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => info.getValue(),
  },
];
