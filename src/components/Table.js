import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { createMuiTheme, lighten, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { Button, Chip, Container, Input, InputAdornment, InputBase, SvgIcon } from "@material-ui/core";
import searchSrc from "../images/search.svg";
import filterSrc from "../images/filter.svg";
import arrowUpSrc from "../images/arrowUp.svg";
import arrowDownSrc from "../images/arrowDown.svg";
import calculateSrc from "../images/calculate.svg";

function createData(asin, price, fees, rank, rating) {
  return { asin, price, fees, rank, rating };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  search_root: {
    height: "32px",
    border: "1px solid rgba(217, 222, 229, 1)",
    borderRadius: "4px",
    padding: "8px 8px 8px 0px",
    marginRight: "32px",
  },
  search_input: {
    padding: "0px",
  },
  filter_root: {
    display: "flex",
    alignItems: "center",
    flex: "1 1 100%",
  },
  filter_title: {
    color: "rgba(61, 81, 112, 1)",
    fontSize: "13px",
    paddingTop: "5px",
  },
  rowsSelect_title: {
    whiteSpace: "nowrap",
    fontSize: "14px",
    lineHeight: "21px",
    color: "rgba(189, 194, 209, 1)",
    marginRight: "16px",
  },
  rowsSelect_root: {
    height: "20px",
    width: "62px",
    border: "1px solid rgba(217, 222, 229, 1)",
    borderRadius: "4px",
    padding: "4px 4px 4px 6px",
    fontSize: "10px",
    flexShrink: "0",
  },
  rowsSelect_input: {
    textAlign: "right",
    paddingRight: "2px",
  },
  rowsSelect_inputAdornment: {
    display: "flex",
    flexDirection: "column",
    height: "inherit",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { rowsPerPage, onChangeRowsPerPage } = props;
  const maxRows = 25;
  const minRows = 5;

  const handleUpButtonClick = () => {
    if (rowsPerPage !== maxRows) onChangeRowsPerPage(rowsPerPage + 5);
  };
  const handleDownButtonClick = () => {
    if (rowsPerPage !== minRows) onChangeRowsPerPage(rowsPerPage - 5);
  };

  return (
    <Toolbar className={classes.root}>
      {/* Search input */}
      <InputBase
        classes={{ root: classes.search_root, input: classes.search_input }}
        startAdornment={
          <InputAdornment position="start">
            <IconButton style={{ padding: "8px" }}>
              <img alt="search icon" src={searchSrc} />
            </IconButton>
          </InputAdornment>
        }
      />
      {/* Filter */}
      <div className={classes.filter_root}>
        <IconButton style={{ padding: "8px" }}>
          <img alt="filter icon" src={filterSrc} />
        </IconButton>
        <Typography className={classes.filter_title}>Фильтр</Typography>
      </div>

      {/* Select rows per page */}
      <Typography className={classes.rowsSelect_title}>Товаров в инвентаре</Typography>
      <InputBase
        value={rowsPerPage + " rows"}
        classes={{ root: classes.rowsSelect_root, input: classes.rowsSelect_input }}
        endAdornment={
          <InputAdornment className={classes.rowsSelect_inputAdornment}>
            <IconButton style={{ padding: "3px" }} onClick={handleUpButtonClick}>
              <img alt="up arrow icon" src={arrowUpSrc} />
            </IconButton>
            <IconButton style={{ padding: "3px" }} onClick={handleDownButtonClick}>
              <img alt="down arrow icon" src={arrowDownSrc} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Toolbar>
  );
};

const headCells = [
  { id: "asin", align: "center", disablePadding: true, label: "ASIN" },
  { id: "price", align: "right", disablePadding: false, label: "Price" },
  { id: "fees", align: "left", disablePadding: false, label: "Fees & Net" },
  { id: "rank", align: "right", disablePadding: false, label: "Rank" },
  { id: "rating", align: "right", disablePadding: false, label: "Rating" },
];

const useTableHeadStyles = makeStyles((theme) => ({
  root: { borderRadius: "3px", padding: "6px 8px 6px 10px", color: "rgba(0, 123, 255, 1)", backgroundColor: "rgba(237, 246, 255, 1)" },
}));

function EnhancedTableHead(props) {
  const classes = useTableHeadStyles();
  const { order, orderBy, rowCount, onRequestSort, page, rowsPerPage, onChangePage } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const handlePrevButtonClick = (event) => {
    onChangePage(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <TableHead style={{ border: "1px solid rgba(217, 222, 229, 1)" }}>
      <TableRow>
        <TableCell padding="none">
          <Typography align="center">#</Typography>
        </TableCell>
        <TableCell padding="none">
          <Typography align="center">&nbsp;</Typography>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding="none"
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={headCell.id === "fees" ? { paddingLeft: "30%" } : undefined}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}

        {/* Pagination */}
        <TableCell align="center" padding="none">
          <IconButton
            aria-label="prev page"
            onClick={handlePrevButtonClick}
            disabled={page === 0}
            classes={{ root: classes.root }}
            style={{ marginRight: "6px" }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            aria-label="next page"
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(rowCount / rowsPerPage) - 1}
            classes={{ root: classes.root }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    boxShadow: `0px 3px 12px 0px rgba(0, 0, 0, 0.15)`,
  },
  table: {
    minWidth: 750,
    "& td": {
      color: "rgba(61, 81, 112, 1)",
    },
    "& th": {
      color: "rgba(61, 81, 112, 1)",
      fontWeight: 700,
      lineHeight: "15px",
      fontSize: "13px",
    },
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  img: {
    backgroundColor: "rgba(61, 81, 112, 1)",
    height: "64px",
    width: "64px",
    borderRadius: "2px",
    verticalAlign: "middle",
    marginRight: "16px",
  },
  chip: {
    height: "20px",
    color: "rgba(61, 81, 112, 1)",
    backgroundColor: "rgba(240, 242, 244, 1)",
    fontSize: "12px",
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("price");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (rowPerPage) => {
    setRowsPerPage(rowPerPage);
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar rowsPerPage={rowsPerPage} onChangeRowsPerPage={handleChangeRowsPerPage} />
        <TableContainer>
          <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onChangePage={handleChangePage}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.asin);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.asin} selected={isItemSelected}>
                      {/* # */}
                      <TableCell align="center" style={{ fontSize: "13px", lineHeight: "15px", color: "rgba(189, 194, 209, 1)" }}>
                        <Typography>{index + 1 + page * rowsPerPage}</Typography>
                      </TableCell>
                      {/* checkbox */}
                      <TableCell padding="checkbox" onClick={(event) => handleClick(event, row.asin)}>
                        <Checkbox checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
                      </TableCell>
                      {/* ASIN */}
                      <TableCell id={labelId} scope="row" padding="none" style={{ padding: "12px 0px", height: "88px" }}>
                        <div style={{ display: "inline-flex" }}>
                          <div>
                            <img alt="placeholder" className={classes.img} src={filterSrc} />
                          </div>
                          <div>
                            <Typography style={{ fontSize: "14px", lineHeight: "18px", fontWeight: 500 }}>{row.asin}</Typography>
                            <Typography style={{ fontSize: "14px", lineHeight: "21px", color: "rgba(189, 194, 209, 1)" }}>
                              {"ASIN "}
                              <span style={{ color: "rgba(61, 81, 112, 1)" }}>{"6gdh463"}</span>
                              {" | updated today"}
                            </Typography>
                            <Chip className={classes.chip} label={"Beauty & Personal Care"} />
                          </div>
                        </div>
                      </TableCell>
                      {/* Price */}
                      <TableCell align="right">{"$ " + row.price}</TableCell>
                      {/* Fees */}
                      <TableCell align="left">
                        <div style={{ paddingLeft: "30%" }}>
                          <Typography style={{ fontSize: "14px", lineHeight: "21px", color: "rgba(189, 194, 209, 1)" }}>
                            {"Fees "}
                            <span style={{ color: "rgba(61, 81, 112, 1)" }}>{"$" + row.fees}</span>
                          </Typography>
                          <Typography style={{ fontSize: "14px", lineHeight: "21px", color: "rgba(189, 194, 209, 1)" }}>
                            {"Net "}
                            <span style={{ color: "rgba(61, 81, 112, 1)" }}>{"$" + (row.fees + 1)}</span>
                          </Typography>
                          <Button
                            disableElevation
                            style={{ color: "rgba(0, 123, 255, 1)", paddingTop: "0px", paddingBottom: "0px", textTransform: "none" }}
                            startIcon={<img alt="calculate icon" src={calculateSrc} />}
                          >
                            Calculate fees
                          </Button>
                        </div>
                      </TableCell>
                      {/* Rank */}
                      <TableCell align="right">{"#" + row.rank}</TableCell>
                      {/* Rating */}
                      <TableCell align="right">{row.rating}</TableCell>
                      {/* Delete button */}
                      <TableCell align="center">
                        <IconButton onClick={() => alert("Item deleting...")}>
                          <DeleteIcon style={{ color: "rgba(189, 194, 209, 1)" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Container style={{ padding: "16px", textAlign: "right", marginRight: "0px" }}>
          <Button disableElevation style={{ color: "rgba(61, 81, 112, 1)", marginRight: "8px", textTransform: "none" }}>
            Сбросить
          </Button>
          <Button
            disableElevation
            variant="contained"
            style={{ color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(0, 123, 255, 1)", textTransform: "none" }}
          >
            Заказать
          </Button>
        </Container>
      </Paper>
    </div>
  );
}
