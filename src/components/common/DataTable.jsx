import React from 'react'

const DataTable = ({ columns, data, onRowClick }) => {
    return (
        <table className="patient-table">
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((row, index) => (
                        <tr
                            key={row.id || index}
                            onClick={() => onRowClick && onRowClick(row)}
                            className={onRowClick ? "clickable-row" : ""}
                        >
                            {columns.map(col => (
                                <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} style={{ textAlign: "center" }}>No data found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DataTable