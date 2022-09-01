import { Autocomplete, TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const powerStats = [
  'Intelligence',
  'strength',
  'Speed',
  'Durability',
  'Power',
  'Combat',
];

export default function Filter({ openFilter }) {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Collapse in={openFilter}>
      <Divider variant="dashed" />
      <Container maxWidth="xl" sx={{ paddingTop: 18, paddingBottom: 18 }}>
        <Grid container columnSpacing={15} rowSpacing={8}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="Keyword" shrink>
                Keyword
              </InputLabel>
              <Input placeholder="Keyword" id="Keyword" fullWidth />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="Gender" shrink>
                Gender
              </InputLabel>
              <NativeSelect id="Gender">
                <option value="" disabled>
                  Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="Alignment" shrink>
                Alignment
              </InputLabel>
              <NativeSelect id="Alignment">
                <option value="" disabled>
                  Alignment
                </option>
                <option value="Good">Female</option>
                <option value="Bad">Male</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="PowerStats" shrink>
                PowerStats
              </InputLabel>
              <Autocomplete
                multiple
                id="PowerStats"
                options={powerStats}
                renderInput={(params) => (
                  <TextField {...params} placeholder="PowerStats" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container columnSpacing={15} rowSpacing={8}>
              <Grid item xs={12} sm={3} md={3} lg={6}>
                <FormControl fullWidth>
                  <Typography variant="body1" component="p" sx={{ mb: 4 }}>
                    Intelligence
                  </Typography>
                  <Slider
                    size="small"
                    getAriaLabel={() => 'Intelligence'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Collapse>
  );
}
