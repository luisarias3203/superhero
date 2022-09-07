import { Close } from '@mui/icons-material';
import {
  Autocomplete,
  Button,
  Fade,
  FormControl,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import React, { useEffect, useState } from 'react';
import theme from '../styles/theme';

const powerStatsOptions = [
  'intelligence',
  'strength',
  'speed',
  'durability',
  'power',
  'combat',
];

const initialState = {
  keyword: '',
  gender: '',
  alignment: '',
  powerStats: [],
  powerStatsValues: {},
};

export default function Filter({ openFilter }) {
  const [value, setValue] = useState(initialState);

  const handleInputSelect = ({ target }) => {
    const { value, name } = target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutocomplete = (event, newValue) => {
    // Convert an Array's Values to Object Keys (intelligence: [0, 100])
    const powerStatsValues = newValue.reduce((previousValue, currentValue) => {
      return { ...previousValue, [currentValue]: [0, 100] };
    }, {});

    setValue((prev) => ({
      ...prev,
      powerStats: newValue,
      powerStatsValues,
    }));
  };

  const handleSlider = ({ target }) => {
    const { value, name } = target;

    setValue((prev) => ({
      ...prev,
      powerStatsValues: {
        ...prev.powerStatsValues,
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    const clearButton = document.querySelector('#clear-filter');
    const filterOptions = document.querySelector('#filter-options');
    filterOptions.prepend(clearButton);
  }, []);

  const clearFilter = () => {
    setValue(initialState);
  };

  const changedState = JSON.stringify(value) !== JSON.stringify(initialState);

  return (
    <Collapse in={openFilter}>
      <Fade in={changedState} id="clear-filter">
        <Button
          variant="text"
          sx={{
            color: common.black,
            display: { xs: 'none', md: 'inline-flex' },
          }}
          startIcon={<Close />}
          onClick={clearFilter}
        >
          Clear Filters
        </Button>
      </Fade>
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
                onChange={handleInputSelect}
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
                onChange={handleInputSelect}
              >
                <option value="">Gender</option>
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
                onChange={handleInputSelect}
              >
                <option value="">Alignment</option>
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
                sx={{ textTransform: 'capitalize' }}
                multiple
                id="powerStats"
                options={powerStatsOptions}
                disableClearable
                value={value.powerStats}
                onChange={handleAutocomplete}
                ChipProps={{ deleteIcon: <Close /> }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" name="powerStats" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container columnSpacing={15} rowSpacing={8}>
              {value.powerStats.map((stat, index) => (
                <Fade in={true} key={index}>
                  <Grid item xs={12} sm={3} md={3} lg={6}>
                    <FormControl fullWidth>
                      <Typography
                        id={stat}
                        variant="body1"
                        component="p"
                        sx={{ mb: 4, textTransform: 'capitalize' }}
                      >
                        {stat}
                      </Typography>
                      <Slider
                        aria-labelledby={stat}
                        name={stat}
                        value={value.powerStatsValues[index]}
                        defaultValue={[0, 100]}
                        min={0}
                        max={100}
                        onChange={handleSlider}
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
                </Fade>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Collapse>
  );
}
