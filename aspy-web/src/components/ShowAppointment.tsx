import { useTheme } from "@mui/material";
import { Cita } from "@/types/Cita";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

interface ShowAppointmentProps {
  citas: Cita[];
}

export default function ShowAppointment({ citas }: ShowAppointmentProps) {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  return (
    <Box className={themeClass}>
      {citas.map((cita, index) => (
        <Card key={index} className="card-citas">
          <CardContent className="card-content-citas">
            <Typography className="typography-citas" variant="body1">
              Paciente: {cita.paciente.name}
            </Typography>
            <Typography className="typography-citas" variant="body1">
              Profesional: {cita.doctor.name}
            </Typography>

            <Divider className="divider-citas" />

            <Grid container spacing={1} className="grid-citas-fecha">
              <Grid size={{ xs: 10, md: 10 }}>
                <Typography className="p-citas">{cita.horainicio}</Typography>
              </Grid>
              <Grid size={{ xs: 2, md: 2 }}>
                <Typography className="p-citas">{cita.fecha}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
