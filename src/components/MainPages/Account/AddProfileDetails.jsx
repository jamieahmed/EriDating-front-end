import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const AddProfileDetails = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    relationship_you_are_looking_for: "",
    marital_status: "",
    religion: "",
    are_you_religious: "",
    ethnicity: "",
    nationality_country: "",
    nationality_state_or_zone: "",
    nationality_city: "",
    live_in_country: "",
    live_in_state_or_zone: "",
    live_in_city: "",
    testthisname: "",
  });

  const [validForm, setValidForm] = useState(false);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const formElement = useRef();
  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddProfileDetails(formData);
  };

  console.log(formData);

  return (
    <Container>
      <form
        className="form-controller"
        autoComplete="off"
        ref={formElement}
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <TextField
          placeholder="Type your name"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* Age */}
        <TextField
          placeholder="Type your age"
          label="Age"
          variant="filled"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {/* Gender */}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Gender</InputLabel>
          <Select name="gender" value={formData.gender} onChange={handleChange}>
            <MenuItem value="">
              <em>Please Select....</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
          </Select>
        </FormControl>

        {/*Marital Status:*/}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Marital Status</InputLabel>
          <Select
            name="marital_status"
            value={formData.marital_status}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Please Select....</em>
            </MenuItem>
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="separated">Separated</MenuItem>
            <MenuItem value="divorced">Divorced</MenuItem>
            <MenuItem value="windowed">Widowed</MenuItem>
            <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        {/*Relationship you're looking for*/}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Relationship you're looking for</InputLabel>
          <Select
            name="relationship_you_are_looking_for"
            value={formData.relationship_you_are_looking_for}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Please Select....</em>
            </MenuItem>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="sex">Sex</MenuItem>
            <MenuItem value="romance/dating">Romance/Dating</MenuItem>
            <MenuItem value="friendship">Friendship</MenuItem>
            <MenuItem value="long term relationship">
              Long Term Relationship
            </MenuItem>
            <MenuItem value="marriage">Marriage</MenuItem>
          </Select>
        </FormControl>
        {/* Religion */}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Religion</InputLabel>
          <Select
            name="religion"
            value={formData.religion}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Please Select....</em>
            </MenuItem>
            <MenuItem value="islam">Islam</MenuItem>
            <MenuItem value="christian-orthodox">Christian orthodox</MenuItem>
            <MenuItem value="christian-catholic">Christian Catholic</MenuItem>
            <MenuItem value="no-religion ">No religion </MenuItem>
            <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
          </Select>
        </FormControl>
        {/* Are you religious */}
        <FormControl>
          <FormLabel>Are you religious</FormLabel>
          <RadioGroup
            row
            name="are_you_religious"
            value={formData.are_you_religious}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel
              value="prefer not to say"
              control={<Radio />}
              label="prefer not to say"
            />
          </RadioGroup>
        </FormControl>
        {/*Ethnicity:*/}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Ethnicity</InputLabel>
          <Select
            name="ethnicity"
            value={formData.ethnicity}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Please Select....</em>
            </MenuItem>
            <MenuItem value="saho">Saho</MenuItem>
            <MenuItem value="tigrinya">Tigrinya</MenuItem>
            <MenuItem value="jeberti">Jeberti</MenuItem>
            <MenuItem value="tigre">Tigre</MenuItem>
            <MenuItem value="bilen">Bilen</MenuItem>
            <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        {/* Natinality */}
        <div className="">
          <TextField
            placeholder="i.e. Eritrea"
            label="Country"
            variant="filled"
            type="text"
            name="nationality_country"
            value={formData.nationality_country}
            onChange={handleChange}
          />
          <TextField
            placeholder="i.e. zoba debub"
            label="State or Zone"
            variant="filled"
            type="text"
            name="nationality_state_or_zone"
            value={formData.nationality_state_or_zone}
            onChange={handleChange}
          />
          <TextField
            placeholder="i.e. Adi keyh"
            label="City"
            variant="filled"
            type="text"
            name="nationality_city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        {/* Lives In  */}
        <div className="">
          <TextField
            placeholder="type your country"
            label="Country"
            variant="filled"
            type="text"
            name="live_in_country"
            value={formData.live_in_country}
            onChange={handleChange}
          />
          <TextField
            placeholder="Type your state or zone"
            label="State or Zone"
            variant="filled"
            type="text"
            name="live_in_state_or_zone"
            value={formData.live_in_state_or_zone}
            onChange={handleChange}
          />
          <TextField
            placeholder="Type your city"
            label="City"
            variant="filled"
            type="text"
            name="live_in_city"
            value={formData.live_in_city}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button disabled={!validForm} type="submit" variant="contained">
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default AddProfileDetails;
