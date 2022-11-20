import * as React from 'react';
import styles from '../../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select } from '@mui/material';
import VerticalTabs from '../components/Vtabs';
import { Box } from '@mui/system';
import TagsInput from '../components/TagsInput';
import { MuiChipsInput } from 'mui-chips-input';
import { useState } from 'react';

// const handleChange = (val) => { }
const years = [1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];


const index = () => {
    const [mfg, setMfg] = useState('');
    const [details, setDetails] = useState({
        "medicineName": "",
        "medicineBatch": "",
        "medicineAmount": 0,
        "medicineQuantity": 0,
        "medicineMfgMonth": "",
        "medicineMfgYear": "",
        "medicineExpiryMonth": "",
        "medicineExpiryYear": "",
        "contains": {
            "saltName": [],
            "saltConcentration": []
        }
    });
    const [chips, setChips] = useState([])
    const [chips2, setChips2] = useState([])

    const handleChange = (value) => {
        setChips(value)
        setDetails({ ...details, contains: { "saltName": chips } })
        console.log(chips)
        console.log(details)
    }

    function handleSelecetedTags(items) {
        console.log(items);
    }

    // React.useEffect(() => {

    // }, chips)
    return (
        <Box>
            <VerticalTabs />
            <form className={styles.main}>
                <Paper elevation={20} sx={{ padding: 6, maxWidth: 700 }}>

                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            {/* <TextField fullWidth id="outlined-basic-name" label="Medicine Name" variant="outlined" value={details.medicineName} onChange={(event) => { setDetails({ "medicineName": event.target.value }) }} /> */}
                            <FormControl fullWidth sx={{}}>
                                <InputLabel htmlFor="outlined-adornment-name">Medicine Name</InputLabel>
                                <OutlinedInput
                                    required
                                    id="outlined-adornment-name"
                                    value={details.medicineName}
                                    onChange={(event) => { setDetails({ ...details, "medicineName": event.target.value }) }}
                                    // startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                    label="Medicine Name"
                                />
                                {console.log(details)}
                            </FormControl>
                        </Grid>
                        <Grid xs={6}>
                            {/* <TextField fullWidth id="outlined-basic" label="Batch number" variant="outlined" value={details.medicineBatch} onChange={(event) => { setDetails({ "medicineBatch": event.target.value }) }} /> */}
                            <FormControl fullWidth sx={{}}>
                                <InputLabel htmlFor="outlined-adornment-batch">Batch Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-batch"
                                    required
                                    value={details.medicineBatch}
                                    onChange={(event) => { setDetails({ ...details, "medicineBatch": event.target.value }) }}
                                    // startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                    label="Batch Number"
                                />
                            </FormControl>
                            <br />
                        </Grid>
                        <Grid xs={12}>

                            <FormControl fullWidth sx={{}}>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    required
                                    value={details.medicineAmount}
                                    // value={values.amount}
                                    onChange={(event) => { setDetails({ ...details, "medicineAmount": event.target.value }) }}
                                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>

                        </Grid>
                        <Grid container xs={12}>
                            <Grid xs={8}>

                                <FormControl fullWidth sx={{}}>
                                    {/* <InputLabel htmlFor="outlined-adornment-salt">Salt Composition</InputLabel> */}
                                    {/* <OutlinedInput
                                        id="outlined-adornment-salt"
                                        // value={values.amount}
                                        onChange={handleChange('amount')}
                                        // startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                        label="Salt Composition"
                                    /> */}
                                    <MuiChipsInput required label="Salt Name" value={chips} onChange={(value) => {
                                        setChips(value);
                                        setDetails({ ...details, contains: { ...details.contains, "saltName": value } })
                                        console.log(chips);
                                        console.log(details);
                                    }} />
                                </FormControl>

                            </Grid>
                            <Grid xs={4}>

                                <FormControl fullWidth sx={{}}>
                                    {/* <InputLabel htmlFor="outlined-adornment-salt-conc">Salt Concentration</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-salt-conc"
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
                                        // startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                        label="Salt Concentration"
                                    /> */}
                                    <MuiChipsInput required label="Salt Concentration" value={chips2} onChange={(value) => {
                                        setChips2(value);
                                        setDetails({ ...details, contains: { ...details.contains, "saltConcentration": value } })
                                        console.log(chips);
                                        console.log(details);
                                    }} />
                                </FormControl>

                            </Grid>
                        </Grid>
                        <Grid xs={12}>

                            <FormControl fullWidth sx={{}}>
                                <InputLabel htmlFor="outlined-adornment-quantity">Quantity</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-quantity"
                                    required
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    onChange={(event) => { setDetails({ ...details, "medicineQuantity": event.target.value }) }}
                                    // startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                    label="Quantity"
                                />
                            </FormControl>

                        </Grid>
                        <Grid container spacing={2} >
                            <Grid container spacing={2} >

                                <Grid xs={8}>
                                    <FormControl fullWidth sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-label">Mfg Month</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={details.medicineMfgMonth}
                                            label="Mfg Month"
                                            onChange={(event) => { setDetails({ ...details, medicineMfgMonth: event.target.value }) }}
                                        >
                                            <MenuItem value={"Januaury"}>Januaury</MenuItem>
                                            <MenuItem value={"February"}>February</MenuItem>
                                            <MenuItem value={"March"}>March</MenuItem>
                                            <MenuItem value={"April"}>April</MenuItem>
                                            <MenuItem value={"May"}>May</MenuItem>
                                            <MenuItem value={"June"}>June</MenuItem>
                                            <MenuItem value={"July"}>July</MenuItem>
                                            <MenuItem value={"August"}>August</MenuItem>
                                            <MenuItem value={"September"}>September</MenuItem>
                                            <MenuItem value={"October"}>October</MenuItem>
                                            <MenuItem value={"November"}>November</MenuItem>
                                            <MenuItem value={"December"}>December</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={8}>
                                    <FormControl fullWidth sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-label">Mfg Year</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={details.medicineMfgYear}
                                            label="Mfg Year"
                                            onChange={(event) => { setDetails({ ...details, medicineMfgYear: event.target.value }) }}
                                        >
                                            {years.map((year, index) => (
                                                <MenuItem key={index} value={year}>{year}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={12}>

                                <Grid xs={8}>
                                    <FormControl fullWidth sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-label"> Expiry Month</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={details.medicineExpiryMonth}
                                            label="Expiry Month"
                                            onChange={(event) => { setDetails({ ...details, medicineExpiryMonth: event.target.value }) }}
                                        >
                                            <MenuItem value={"Januaury"}>Januaury</MenuItem>
                                            <MenuItem value={"February"}>February</MenuItem>
                                            <MenuItem value={"March"}>March</MenuItem>
                                            <MenuItem value={"April"}>April</MenuItem>
                                            <MenuItem value={"May"}>May</MenuItem>
                                            <MenuItem value={"June"}>June</MenuItem>
                                            <MenuItem value={"July"}>July</MenuItem>
                                            <MenuItem value={"August"}>August</MenuItem>
                                            <MenuItem value={"September"}>September</MenuItem>
                                            <MenuItem value={"October"}>October</MenuItem>
                                            <MenuItem value={"November"}>November</MenuItem>
                                            <MenuItem value={"December"}>December</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={8}>
                                    <FormControl fullWidth sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-label"> Expiry Year</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={details.medicineExpiryYear}
                                            label="Expiry Year"
                                            color={details.medicineMfgYear < details.medicineExpiryYear ? "primary" : "error"}
                                            onChange={(event) => { setDetails({ ...details, medicineExpiryYear: event.target.value }) }}
                                        >
                                            {years.map((year, index) => (
                                                <MenuItem key={index} value={year}>{year}</MenuItem>
                                            ))}
                                        </Select>
                                        {details.medicineMfgYear > details.medicineExpiryYear && <FormHelperText id="component-helper-text" color="error">
                                            Expiry date should be greater than Mfg date
                                        </FormHelperText>}
                                    </FormControl>
                                </Grid>
                            </Grid>

                        </Grid>

                        <br />
                        <Grid spacing={2} xs={12} sx={{ width: "100%", display: "flex", flexDirection: "row-reverse", gap: 2 }}>

                            <Button variant='contained' color="success" size="large" onClick={() => {
                                details.medicineAmount === "" ||
                                    details.medicineBatch === "" ||
                                    details.medicineExpiryMonth === "" ||
                                    details.medicineExpiryYear === "" ||
                                    details.medicineMfgMonth === "" ||
                                    details.medicineMfgYear === "" ||
                                    details.medicineName === "" ||
                                    details.medicineQuantity === "" ||
                                    details.contains.saltName.length === 0 ||
                                    details.contains.saltConcentration.length === 0 ? alert("fill all") : alert("ok");

                                details.medicineMfgYear < details.medicineExpiryYear ? alert("fine") : alert("error");
                                // details.contains.saltConcentration === [] ? alert("fill all") : alert("ok");

                            }}>Save</Button>
                            <Button size="large">Cancel</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </Box>);
}
export default index;