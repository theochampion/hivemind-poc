import React, { Component } from "react";

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

import Paper from "material-ui/Paper";

const SourceFiles = ({ files }) => {
  console.log("fe", files);
  return (
    <Paper style={{ marginTop: "2em" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell numeric>Size (byte)</TableCell>
            <TableCell>Last Modification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{file.name}</TableCell>
                <TableCell numeric>{file.size}</TableCell>
                <TableCell numeric>{file.lmd}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SourceFiles;
