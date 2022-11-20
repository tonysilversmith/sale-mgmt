import { Chip, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import Grid from '@mui/material/Unstable_Grid2';
import MedName from "../components/MedName";
import * as React from 'react'
import { useState } from "react";

const index = () => {

    let temp;
    const [inputFields, setInputFields] = useState([
        { name: '', quantity: 0 }
    ])

    const addFields = () => {
        let newfield = { name: '', age: '' }

        setInputFields([...inputFields, newfield])
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }
    return (
        <Box sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
            <Paper elevation={24} sx={{ p: 5, maxWidth: 900, mt: 5, mb: 10 }}>
                <Grid container spacing={3} xs={12}>
                    {/* <Box
                        component="form"
                        // onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    > */}
                    <Grid xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Name"
                            name="Name"
                            autoComplete="email"
                            autoFocus
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Phone No."
                            // type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>

                    {inputFields.map((details, index) => (<Box key={index} sx={{ width: "100%" }}>
                        <Grid container xs={12} alignItems="center">

                            <Grid xs={8}>
                                <MedName value={temp} onChange={(temp) => { setInputFields({ ...inputFields, "name": temp }) }} />
                            </Grid>
                            <Grid xs={3}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Quantity"
                                    // type="password"
                                    // value=/
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid xs={1}><IconButton color="error" margin="normal" onClick={(index) => removeFields(index)}><CloseIcon /></IconButton></Grid>
                        </Grid>
                    </Box>))}
                    <Grid xs={2} container alignItems="center">

                        <Chip margin="normal" label="Add Field" onClick={addFields}></Chip>
                    </Grid>
                    {/* <Grid xs={12}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="qty"
                            label="Quantity"
                            // type="password"
                            id="qyt"
                            autoComplete="current-password"
                        />
                    </Grid> */}
                    <Grid xs={8}>
                        <FormControl fullWidth sx={{}} margin="normal">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                fullWidth
                                id="outlined-adornment-amount"
                                // value={details.medicineAmount}
                                // onChange={(event) => { setDetails({ ...details, "medicineAmount": event.target.value }) }}
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                label="Amount"
                                inputProps={{
                                    readOnly: true,
                                }}
                            />
                        </FormControl>
                    </Grid>
                    {/* </Box> */}

                </Grid>
            </Paper>
        </Box >
    )
}
export default index;