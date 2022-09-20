/* eslint-disable */
import React, { useState } from "react";
import Form from "../ui/Form";
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import Input from "../ui/Input";
import FileUpload from "../ui/FileUpload";

function FoundItem() {
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  return (
    <div>
      <Form encType='multipart/form-data'>
                <Input label = "Item Name" placeholder="Enter Item" showLabel="true"/>
                <Input label="Location" placeholder="Location" showLabel="true"/>
                <Textarea placeholder = "Description" row = "2" showLabel="true" label="Description"/>
                <Textarea placeholder = "Say, What is the color of the item found?"  row = "1" label="Enter a question based on item (For verification purpose):" showLabel="true"/>
                <Textarea placeholder = "Any other points" row = "1" label=" Any other relevant details:" showLabel="true" />
                <FileUpload showLabel="true" multiple="multiple" label="Attachments, if any" onChange={handleChange}></FileUpload>
                <hr/>
                <br/>
                <Button className = "mx-auto">Found Item</Button>
               
                
                
      </Form>
    </div>
  )
}

export default FoundItem