import { useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  state: string;
  city?: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: 'Zachary',
      lastName: 'Davis',
    },
    address: '261 Battle Ford',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Robert',
      lastName: 'Smith',
    },
    address: '566 Brakus Inlet',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Yan',
    },
    address: '7777 Kuhic Knoll',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'John',
      lastName: 'Upton',
    },
    address: '722 Emie Stream',
    state: 'Washington',
  },
  {
    name: {
      firstName: 'Nathan',
      lastName: 'Harris',
    },
    address: '1 Kuhic Knoll',
    state: 'Nebraska',
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'Domain',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Founding Date',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Other Information',
      },
      {
        id: 'rating',
        header: 'Rating',
        columnDefType: 'display', 
        Cell: ({ row }) => (<div></div>),
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnFilters: false,
    enableGlobalFilter: true,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    initialState: {
      showGlobalFilter: true,
    },
    positionGlobalFilter: "left",
    mantineSearchTextInputProps: {
      placeholder: "Search by Domain"
    }
    //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MantineReactTable table={table} />;
};

export default Example;
