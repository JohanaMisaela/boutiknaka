import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import tableIcons from "../../examples/MaterialTableIcon";

  // Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
function Admin() {
  const data =[
    {
      id: 1,
      gender: "mr",
      nom: "John",
      prenom: "Doe",
      email: "johndoe@example.com",
      nrue: "123",
      departement: "ABC",
      ville: "XYZ",
      Pays: "Country",
      tel: "1234567890"
    },
    {
      id: 2,
      gender: "ms",
      nom: "Jane",
      prenom: "Smith",
      email: "janesmith@example.com",
      nrue: "456",
      departement: "DEF",
      ville: "PQR",
      Pays: "Country",
      tel: "9876543210"
    },
    // Add more data objects here if needed
  ]

  const [tableData, setTableData] = useState();
  const handleSaveRow: MaterialTableProps<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };
  

  return(
   <DashboardLayout>
      <DashboardNavbar />
      
      <MaterialTable
            title="List"
            columns={[
              { title: 'Id', field: 'id' },
              { title: 'Gender', field: 'gender' },
              { title: 'Nom', field: 'nom' },
              { title: 'Prénom', field: 'prenom' },
              { title: 'Email', field: 'email' },
              { title: 'N rue', field: 'nrue' },
              { title: 'Département', field: 'departement' },
              { title: 'Ville', field: 'ville' },
              { title: 'Pays', field: 'Pays' },
              { title: 'Telephone', field: 'tel' },
            ]}
            data={data}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              filtering:true
            }}
          />
      <Footer />
    </DashboardLayout> 
  )
}

export default Admin