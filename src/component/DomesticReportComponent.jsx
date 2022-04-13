import React, {Component, useState, useEffect} from "react";
import RicefwService from "./api/RicefwService";
import { useTable, useSortBy, usePagination } from "react-table";


class DomesticReportComponent extends Component {

    constructor(props) {
        super(props)

        // method binding to this
        this.tempNavBack = this.tempNavBack.bind(this)
        //this.refreshRicefwData = this.refreshRicefwData.bind(this)
        //this.loadTable = this.loadTable.bind(this)
        this.state = {
            ricefw: []
        }
    }

    render() {

        
        return (
            <div>
                <h1>RICEFW Id Report</h1>
                <button onClick={this.tempNavBack}>Back</button>
                <div>
                    <TableContainer />
                </div>
            </div>
        )
    }

    tempNavBack() {
        this.props.navigate(`/ricefw/dashboard`);
    }
}

function TableContainer() {
    const [domesticRicefwIds, setDomesticRicefwIds] = useState([]);
    const [loading, setLoading] = useState(false);

    // api call
    useEffect(() => {
        console.log("componentDidMount");
        setLoading(true);

        //get data from api
        RicefwService.retrieveDomesticRicefwDetails()
        .then(response => {
            const ricefwidReport = response.data;
            const data = ricefwidReport.map(ricefwIdItem => ({
                id: ricefwIdItem.id,
                ricefwId: ricefwIdItem.ricefwId,
                objectTitle: ricefwIdItem.objectTitle,
                ricefwDescription: ricefwIdItem.ricefwDescription
            }));
            setDomesticRicefwIds(data)
        })
        .catch(error => {
            setDomesticRicefwIds([]);
            console.log(error);
        })
        .finally(() => setLoading(false));
    }, []);  // Stops the constant calling of api

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id"
            },
            {
                Header: "RICEFW Id",
                accessor: "ricefwId"
            },
            {
                Header: "Object Title",
                accessor: "objectTitle"
            },
            {
                Header: "RICEFW Description",
                accessor: "ricefwDescription"
            }
        ]
    );
    
    return (
        <div>
            {loading && <span>Please wait we are fetching data</span>}
            <Table columns={columns} data={domesticRicefwIds} />
        </div>
    )
}





const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 2 },
  },
    useSortBy,
    usePagination
  );

  return (
      <>
        <table {...getTableProps()} className="table table-bordered">
            <thead className="table-dark">
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header")}
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
        */}
        <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
            </button>{' '}
            <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
            </span>
            <span>
            | Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
                }}
                style={{ width: '100px' }}
            />
            </span>{' '}
            <select
            value={pageSize}
            onChange={e => {
                setPageSize(Number(e.target.value))
            }}
            >
            {[1, 2, 3, 4, 5].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                Show {pageSize}
                </option>
            ))}
            </select>
        </div>
      </>
  );
};

export default DomesticReportComponent