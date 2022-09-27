/* eslint-disable no-unused-vars */
import { Button, Container, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./App.css";

/** The Man / Month Calcultor */
function App() {

  const [price, setPrice] = useState(0);

  const handleOnchange = (e) => {

    const {value} = e.target;
    const numberValue = value.replace(/[^0-9]/g, '');
    setPrice(numberValue);

  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      handleOnClick(e);
    }
  }

  const handleOnfocus = (e) => {
    e.target.select();

  }

  const handleOnClick = (e) => {
    // 1 호밥에 2,790원
    let 분모 = 2790;

    let 호밥계산기 = Math.round((price / 분모)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    alert("About " + 호밥계산기 + " HB");
  }

  return (
    <Container className="container">
      <Grid container xs={12}>

      <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="price-select-label">Price</InputLabel>
            <Input className="select-form"
              labelId="price-select-label"
              id="select-price"
              value={price}
              label="Price"
              onChange={handleOnchange}
              onFocus={handleOnfocus}
              onKeyDown={handleKeyDown}
            >
            </Input>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleOnClick}>Convert To HB</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
