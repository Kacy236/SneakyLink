import React from "react";
import { TextInput, Box, Textarea, Group, Button, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";

const BasicDetails = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) =>
          value < 20000 ? "Must be greater than 20k naira" : null,
    },
  });

  const {title, description, price} = form.values


  const handleSubmit = ()=> {
    const {hasErrors} = form.validate()
    if(!hasErrors) {
     setPropertyDetails((prev)=> ({...prev, title, description, price}))
     nextStep()
    }
   }
  return (
    <Box maw="50%" mx="auto" my="md">
      <form  onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Name"
          {...form.getInputProps("title")}
        />
        <Textarea
          placeholder="Description"
          label="Tell us about yourself"
          withAsterisk
          {...form.getInputProps("description")}
        />
        <NumberInput
          withAsterisk
          label="Price"
          placeholder=""
          min={20000}
          {...form.getInputProps("price")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">
            Next step
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;