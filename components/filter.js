import { Close } from '@mui/icons-material';
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
import theme from '../styles/theme';

const powerStatsOptions = [
  'intelligence',
  'strength',
  'speed',
  'durability',
  'power',
  'combat',
];

// Convert an Array's Values to Object Keys
const powerStats = powerStatsOptions.reduce((previousValue, currentValue) => {
  return { ...previousValue, [currentValue]: [0, 100] };
}, {});

export default function Filter({ openFilter }) {
  const [value, setValue] = useState({
    keyword: '',
    gender: '',
    alignment: '',
    powerStats,
  });

  const handleValue = ({ target }) => {
    const { value, name } = target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
      // powerStats: {
      //   [name]: value,
      // },
    }));
  };

  return (
    <Collapse in={openFilter}>
      <Divider variant="dashed" />
      <Container maxWidth="xl" sx={{ paddingTop: 18, paddingBottom: 18 }}>
        <Grid container columnSpacing={15} rowSpacing={8}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="keyword" shrink>
                Keyword
              </InputLabel>
              <Input
                placeholder="Keyword"
                id="keyword"
                name="keyword"
                fullWidth
                value={value.keyword}
                onChange={handleValue}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="gender" shrink>
                Gender
              </InputLabel>
              <NativeSelect
                id="gender"
                name="gender"
                value={value.gender}
                onChange={handleValue}
              >
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
              <InputLabel htmlFor="alignment" shrink>
                Alignment
              </InputLabel>
              <NativeSelect
                id="alignment"
                name="alignment"
                value={value.alignment}
                onChange={handleValue}
              >
                <option value="" disabled>
                  Alignment
                </option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="powerStats" shrink>
                PowerStats
              </InputLabel>
              <Autocomplete
                multiple
                id="powerStats"
                options={powerStatsOptions}
                disableClearable
                // value={value.powerStats.intelligence}
                // onChange={handleValue}
                ChipProps={{ deleteIcon: <Close /> }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" name="powerStats" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container columnSpacing={15} rowSpacing={8}>
              <Grid item xs={12} sm={3} md={3} lg={6}>
                <FormControl fullWidth>
                  <Typography
                    id="intelligence"
                    variant="body1"
                    component="p"
                    sx={{ mb: 4, textTransform: 'capitalize' }}
                  >
                    {powerStatsOptions[0]}
                  </Typography>
                  <Slider
                    aria-labelledby="intelligence"
                    name="intelligence"
                    value={value.powerStats.intelligence}
                    onChange={handleValue}
                    valueLabelDisplay="auto"
                    sx={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      maxWidth: 'calc(100% - 20px)',
                      [theme.breakpoints.up('md')]: { maxWidth: '100%' },
                    }}
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
