import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const ArtistForm = (props) => {
  return (
    <Form className='artist_form'>
      <FormGroup>
        <Label for="exampleEmail">Some basic info</Label>
        <Input plaintext value="any information you want to provide" />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleUrl">Spotify URL</Label>
        <Input
          type="url"
          name="url"
          id="exampleUrl"
          placeholder="link to spotify"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Instagram URL</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="link to instagram"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="datetime placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleColor">Color</Label>
        <Input
          type="color"
          name="color"
          id="exampleColor"
          placeholder="favorite color"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSearch">Genre/Style</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="please pick one"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Bio</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Image</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          Image is everything.  Please upload one.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Track</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          Track must be in .wav or .mp3 format
        </FormText>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" /> Option one is this and that—be sure to
          include why it's great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default ArtistForm;