/* eslint-disable */
import React, { useState } from "react";
import Form from "../ui/Form";
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import Input from "../ui/Input";
import FileUpload from "../ui/FileUpload";

function LostItem() {
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  return (
    <div>
      <Form encType='multipart/form-data'>
                <Input showLabel="true" label = "Item Name" placeholder="Enter Item" />
                <Input label="Location" showLabel="true" placeholder="Location" />
                <Textarea label="Description" showLabel="true" placeholder = "Description" row = "2" />                
                <Textarea label="Details,if any." showLabel="true" placeholder = "Any other points" row = "1" />
                {/*<input type="file"  label="Attachments, if any:" showLabel="true"/>*/}
                <FileUpload showLabel="true" multiple="multiple" label="Attachments, if any" onChange={handleChange}></FileUpload>
                <hr/>
                <br/>
                <Button className = "mx-auto">Post Item</Button>
      </Form>
    </div>
  )
}

export default LostItem

