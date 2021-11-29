import {
    CardHeader, Stack, TextField, Card, TextareaAutosize,
    FormControl, FormLabel, InputLabel, Select, Switch,
    FormGroup, Modal, Typography, FormControlLabel, Checkbox, RadioGroup, Radio, MenuItem, Button
} from '@mui/material';
import { Box } from '@mui/system';
import { React, Component } from 'react';
import SaveIcon from '@mui/icons-material/Save';

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            personName: "",
            age: "",
            open: false
        }

    }
    handleOpen = () => {
        this.setState({
            open: true
        })

    }


    render() {
        let {
            name,
            personName,
            age
        } = this.state

        return (
            <>
                <Card>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* Text Fields */}
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            label="First Name"
                            defaultValue="Name"
                            sx={{ m: 2, width: '55ch' }}
                        />
                        <TextField
                            required
                            type="password"
                            id="outlined-required"
                            label="Password"
                            defaultValue="Password"
                            sx={{ m: 2, width: '55ch' }}
                        />
                        <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                            <FormGroup>
                                {/* Checkbox button */}
                                <FormLabel component="legend">City</FormLabel>
                                <FormControlLabel
                                    control={
                                        <Checkbox name="ahme" />
                                    }
                                    label="Ahmedabad"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox name="surat" />
                                    }
                                    label="Surat"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox name="vapi" />
                                    }
                                    label="Vapi"
                                />
                            </FormGroup>
                        </FormControl>

                        {/* Radio Button */}
                        <FormControl sx={{ m: 2 }} component="fieldset">
                            <FormGroup>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>

                            </FormGroup>
                        </FormControl>

                        {/* multiple Select dropdown */}
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <FormLabel component="legend">Multiple Select dropdown</FormLabel>
                            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                // multiple
                                value={personName}
                            // onChange={handleChange}
                            // input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                            >
                                <MenuItem> Option 1</MenuItem>
                                <MenuItem>Option 2</MenuItem>
                                <MenuItem>Option 3</MenuItem>
                                <MenuItem>Option 4</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Single Select Dropdown */}
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <FormLabel component="legend">Single Select dropdown</FormLabel>
                            <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                // open={open}
                                // onClose={handleClose}
                                // onOpen={handleOpen}
                                value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value="">Select any one</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Switch Control */}
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="Active" />
                            </FormGroup>
                        </FormControl>

                        {/* File Upload Control */}
                        <TextField
                            type="file"
                            id="standard-basic"
                            label="Upload files"
                            variant="standard"
                            name="upload-file"

                        />

                        <Button onClick={this.handleOpen}>Open modal</Button>
                        <Modal
                            // open={open}
                            // onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{ width: 300 }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        <Stack direction="row" spacing={2}>
                            <Button variant="contained"
                                color="primary" >Cancel</Button>
                            <Button variant="contained" color="success"
                                startIcon={<SaveIcon />}>
                                Submit
                            </Button>

                        </Stack>

                        {/* <TextareaAutosize
                            id="outlined-required"
                            aria-label="minimum height"
                            minRows={4}
                            placeholder="Minimum 3 rows"
                            style={{ width: 200 }}
                        /> */}

                    </Box>

                </Card >
            </>
        );
    }
}

export default Tickets;