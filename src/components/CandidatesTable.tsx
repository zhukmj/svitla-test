import React, { ChangeEvent } from 'react';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Select,
  MenuItem,
} from '@material-ui/core';
import { statuses } from '../common/emuns';

type Props = {
  data: Candidate[];
  onStatusChange: (id: number, status: string) => void;
};

type Columns = keyof typeof columns;

const columns = {
  fullName: 'Full Name',
  role: 'Role',
  connectedOn: 'Connected On',
  status: 'Status',
};

function CandidatesTable({ data, onStatusChange }: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {Object.entries(columns).map(([key, label]) => (
              <TableCell key={key}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(candidate => (
            <TableRow key={candidate.id}>
              {(Object.keys(columns) as Columns[]).map(key => (
                <TableCell key={key}>
                  {key === 'status' ? (
                    <Select
                      value={candidate[key]}
                      onChange={(e: ChangeEvent<{ value: unknown }>) =>
                        onStatusChange(candidate.id, e.target.value as string)
                      }
                    >
                      {statuses.map(status => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    candidate[key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default CandidatesTable;
