
export type TableMapType = {
    fourSeatTableRowOne: TableType[];
    fourSeatTableRowTwo: TableType[];
    twoSeatTable: TableType[];
    longTable: TableType[];
  }
  
  export type TableType = {
    id: string;
    taken: boolean;
    selected: boolean;
  };
  
  export type Reservation = {
    reservationId: string,
    name: string,
    email: string,
    date: string,
    time: string,
    tableId: string,
    status: string,
    phone: number
  }