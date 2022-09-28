import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import PropTypes from "prop-types";
import { Box, Button, Grid, Link, Paper, Rating, Tooltip, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ExpandableCell = ({ value }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box>
      {expanded ? value : value.slice(0, 100)}&nbsp;
      {value.length > 200 && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
          type="button"
          component="button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "view less" : "view more"}
        </Link>
      )}
    </Box>
  );
};

ExpandableCell.propTypes = {
  value: PropTypes.any,
};

function ListBook() {
  const {t} = useTranslation()
  const [pageSize, setPageSize] = useState(10);

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/books/${id}`, { method: "DELETE" });
    setTableData(tableData.filter((customer) => customer.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "pic",
      headerName: "Image",
      width: 100,
      height: 200,
      renderCell: (params) => (
        <img src={params.value} alt="" height={100} width={80} />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 160,
      renderCell: (params) => <ExpandableCell {...params} />,
    },
    {
      field: "selected",
      headerName: "Geners",
      width: 160,
      renderCell: (params) => (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1 }} columns={{ xs: 2 }}>
            {params.value.map((valu, index) => (
              <Grid key={index}>
                <Paper
                  elevation={4}
                  style={{
                    padding: 2,
                    textAlign: "center",
                    margin: 5,
                    borderRadius: 15,
                  }}
                >
                  {valu}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      hideable: false,
      width: 300,
      height: 200,
      renderCell: (params) => <ExpandableCell {...params} />,
    },

    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      renderCell: (params) => <Rating value={params.value} readOnly />,
    },
    {
      field: "actions",
      headerName: "Edit",
      type: "actions",
      width: 130,
      getActions: (params) => [
        <Tooltip title="Edit" placement="left">
          <Button
            startIcon={<ModeEditIcon />}
            color="success"
            style={{ width: 120 }}
            variant="text"
          >
            Edit
          </Button>
        </Tooltip>,
      ],
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "actions",
      width: 120,
      getActions: (params) => [
        <Tooltip title="Delete" placement="left">
          <Button
            startIcon={<DeleteIcon />}
            style={{ width: 120 }}
            color="error"
            variant="text"
            onClick={() => deleteCustomer(params.id)}
          >
            Delete
          </Button>
        </Tooltip>,
      ],
    },
  ];

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  const navigate = useNavigate();
  const handleOnCellClick = (params) => {
    navigate(`/page/${params.id}`);
  };
  const handleAdd = () => {
    navigate(`/addbook`);
  };

  return (
    <>
    <Typography variant="h2" sx={{justifyContent:"center", textAlign:"center"}}>List Book</Typography>
      <Button variant="text" startIcon={<AddIcon />} onClick={handleAdd}>{t("add book")}</Button>
      <div style={{ height: 656, width: "100%" }}>
        <DataGrid
          rowHeight={150}
          rows={tableData}
          columns={columns}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          checkboxSelection
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
              csvOptions: { fields: ["name", "selected", "rating"] },
            },
          }}
          initialState={{
            ...tableData.initialState,
          }}
          getRowHeight={() => "auto"}
          sx={{
            "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
              py: 1,
            },
            "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
              py: "15px",
            },
            "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
              py: "22px",
            },
          }}
          onCellDoubleClick={handleOnCellClick}
        />
      </div>
    </>
  );
}

export default ListBook;
