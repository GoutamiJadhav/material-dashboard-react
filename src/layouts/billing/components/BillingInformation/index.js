// /**
// =========================================================
// * Material Dashboard 2 React - v2.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Card from "@mui/material/Card";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// // Billing page components
// import Bill from "layouts/billing/components/Bill";

// function BillingInformation() {
//   return (
//     <Card id="delete-account">
//       <MDBox pt={3} px={2}>
//         <MDTypography variant="h6" fontWeight="medium">
//           Billing 
//         </MDTypography>
//       </MDBox>
//       <MDBox pt={1} pb={2} px={2}>
//         <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
//           <Bill
//             name="oliver liam"
//             company="viking burrito"
//             email="oliver@burrito.com"
//             vat="FRB1235476"
//           />
//           <Bill
//             name="lucas harper"
//             company="stone tech zone"
//             email="lucas@stone-tech.com"
//             vat="FRB1235476"
//           />
//           <Bill
//             name="ethan james"
//             company="fiber notion"
//             email="ethan@fiber.com"
//             vat="FRB1235476"
//             noGutter
//           />
//         </MDBox>
        
//       </MDBox>
//     </Card>
    
//   );
// }

// export default BillingInformation;
import React, { useState } from 'react';
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import { TextField, Button, Grid } from '@mui/material';


const NewBillingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    vat: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/add-billing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to add billing information');
      }

      const responseData = await response.json();
      console.log(responseData); // Assuming the response is logged for demonstration purposes
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card>
    <MDBox pt={1} pb={2} px={2}>
      <MDTypography variant="h6" fontWeight="medium">
         BillingForm
        </MDTypography>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="VAT"
            name="vat"
            value={formData.vat}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </MDBox>
    </Card>
  );
};

export default NewBillingForm;
