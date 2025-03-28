import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Select, { SelectChangeEvent, selectClasses } from '@mui/material/Select';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import { getUserRole, setUserRole } from '@utils/auth';

const roleOptions = [
  { value: 'admin', label: 'Admin', icon: <SupervisorAccountIcon fontSize="small" /> },
  { value: 'staff', label: 'Staff', icon: <GroupsIcon fontSize="small" /> },
  { value: 'professional', label: 'Professional', icon: <LocalHospitalIcon fontSize="small" /> },
  { value: 'client', label: 'Client', icon: <PersonIcon fontSize="small" /> },
];

const StyledSelect = styled(Select)(({ theme }) => ({
  maxHeight: 56,
  width: 215,
  [`& .${selectClasses.select}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: theme.spacing(1),
  },
}));

export default function RoleSwitcher() {
  const currentRole = getUserRole();
  const [role, setRole] = React.useState(currentRole);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedRole = event.target.value as 'admin' | 'staff' | 'professional' | 'client';
    setRole(selectedRole);
    setUserRole(selectedRole); // Guarda en localStorage y recarga
  };

  return (
    <StyledSelect
      value={role}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Select user role' }}
    >
      {roleOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <ListItemIcon>{option.icon}</ListItemIcon>
          <ListItemText primary={option.label} />
        </MenuItem>
      ))}
    </StyledSelect>
  );
}
