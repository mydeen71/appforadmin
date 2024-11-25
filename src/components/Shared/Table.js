import React from 'react';
import './table.scss';

const Table = ({ columns, data }) => (
  <table className="table">
    <thead>
      <tr>
        {columns.map((col, idx) => (
          <th key={idx}>{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          {Object.values(row).map((value, subIdx) => (
            <td key={subIdx}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
