import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
// import EmployeeAttendancePieChart from "./piechartdata";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import PieChart from "examples/Charts/PieChart";
import reportspiechartdata from "layouts/dashboard/data/reportspiechartdata";
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import DataTable1 from "./table";
import CustomPieChart from "./CustomPieChart";
import MDAlert from "components/MDAlert";


function Mypage(){
    // const social =reportsBarChartData
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
            <Grid container spacing={6} style={{ overflow: "auto" }}>
            
            <Grid item xs={12} md={6} lg={8}> {/* Add a Grid item for the table */}
            <MDBox mb={3}>
              <DataTable1 /> {/* Render your DataTable1 component */}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <CustomPieChart/>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <MDAlert>Hello ,welcome to my page!</MDAlert>
              
              </MDBox>
            </Grid>
            </Grid>
            </MDBox>
            
            <Footer/>
        </DashboardLayout>
    )
}
export default Mypage;
