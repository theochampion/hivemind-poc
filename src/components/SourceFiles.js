import React from "react";

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import FolderIcon from "material-ui-icons/Folder";
import FileIcon from "material-ui-icons/InsertDriveFile";

import Paper from "material-ui/Paper";

const SourceFiles = ({ files }) => {
  return (
    <Paper style={{ marginTop: "2em" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell numeric>Size (byte)</TableCell>
            <TableCell numeric>Last Modification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>
                  {file.isFolder ? (
                    <FolderIcon color="secondary" style={{ fontSize: 30 }} />
                  ) : (
                    <FileIcon color="disabled" style={{ fontSize: 30 }} />
                  )}
                </TableCell>

                <TableCell>{file.name}</TableCell>
                <TableCell>{file.comment}</TableCell>

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
