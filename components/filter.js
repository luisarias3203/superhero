import { Close } from '@mui/icons-material';
import {
  Autocomplete,
  Button,
  Collapse,
  Fade,
  FormControl,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { useContext, useEffect } from 'react';
import { initialState, superheroesInfo } from '../pages/_app';
import theme from '../styles/theme';

const powerStatsOptions = [
  'intelligence',
  'strength',
  'speed',
  'durability',
  'power',
  'combat',
];

export default function Filter(props) {
  const { searchParams, setSearchParams } = useContext(superheroesInfo);

  const handleState = ({ target }, autocompleteValue) => {
    const { value, name } = target;

    const autocompleteName =
      target.querySelector('input') !== null
        ? target.querySelector('input').name
        : null;

    setSearchParams(prev => ({
      ...prev,
      ...(name && { [name]: value }),
      ...(autocompleteName && {
        [autocompleteName]: {
          min: autocompleteValue[0],
          max: autocompleteValue[1],
        },
      }),
    }));
  };

  useEffect(() => {
    const clearButton = document.querySelector('#clear-filter');
    const filterOptions = document.querySelector('#filter-options');
    if (clearButton && filterOptions) filterOptions.prepend(clearButton);
  }, [searchParams]);

  const changedState =
    JSON.stringify(searchParams) !== JSON.stringify(initialState);

  return (
    <Collapse in={props.openFilter}>
      <Fade in={changedState} id='clear-filter'>
        <Button
          variant='text'
          sx={{
            color: common.black,
            display: { xs: 'none', md: 'inline-flex' },
          }}
          startIcon={<Close />}
          onClick={() => {
            setSearchParams(initialState);
          }}
        >
          Clear Filters
        </Button>
      </Fade>
      <Divider variant='dashed' />
      <Container maxWidth='xl' sx={{ paddingTop: 18, paddingBottom: 18 }}>
        <Grid container columnSpacing={15} rowSpacing={8}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel id='keyword' shrink>
                Keyword
              </InputLabel>
              <Input
                placeholder='Keyword'
                id='keyword'
                name='keyword'
                fullWidth
                value={searchParams.keyword}
                onChange={handleState}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor='gender' shrink>
                Gender
              </InputLabel>
              <NativeSelect
                id='gender'
                name='gender'
                value={searchParams.gender}
                onChange={handleState}
              >
                <option value=''>Gender</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
                <option value='-'>Undefined</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor='alignment' shrink>
                Alignment
              </InputLabel>
              <NativeSelect
                id='alignment'
                name='alignment'
                value={searchParams.alignment}
                onChange={handleState}
              >
                <option value=''>Alignment</option>
                <option value='Good'>Good</option>
                <option value='Bad'>Bad</option>
                <option value='Neutral'>Neutral</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor='powerStats' shrink>
                Powerstats
              </InputLabel>
              <Autocomplete
                sx={{
                  textTransform: 'capitalize',
                  path: {
                    pointerEvents: 'none',
                  },
                }}
                multiple
                id='powerStats'
                options={powerStatsOptions}
                disableClearable
                value={searchParams.powerStats}
                onChange={(event, value) => {
                  event.target.name = 'powerStats';
                  setSearchParams(prev => ({
                    ...prev,
                    powerStats: value,
                  }));
                }}
                ChipProps={{
                  deleteIcon: <Close />,
                  onDelete: event => {
                    const power = event.target.previousSibling.innerHTML;

                    // Delete slider value
                    const copyObject = { ...searchParams };
                    delete copyObject[power];
                    setSearchParams(copyObject);

                    // Delete autocomplete value
                    setSearchParams(prev => ({
                      ...prev,
                      powerStats: searchParams.powerStats.filter(
                        current => current !== power
                      ),
                    }));
                  },
                }}
                renderInput={params => (
                  <TextField {...params} variant='standard' name='powerStats' />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container columnSpacing={15} rowSpacing={8}>
              {searchParams.powerStats.map((stat, index) => (
                <Fade in key={index}>
                  <Grid item xs={12} sm={3} md={3} lg={6}>
                    <FormControl fullWidth>
                      <Typography
                        id={stat}
                        variant='body1'
                        component='p'
                        sx={{ mb: 4, textTransform: 'capitalize' }}
                      >
                        {stat}
                        {searchParams.stat}
                      </Typography>
                      <Slider
                        aria-labelledby={stat}
                        name={stat}
                        value={searchParams.stat}
                        defaultValue={[0, 100]}
                        min={0}
                        max={100}
                        onChangeCommitted={handleState}
                        valueLabelDisplay='auto'
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
