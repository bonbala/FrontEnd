import React, { Component } from 'react';
import { Box, Button, Card, Flex, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default class FormComponent extends Component {

  render() {
    return (
      <Box className="form">
        <Card.Root width={"50%"}>
          <Card.Header>
            <Card.Title>Create Employee Account</Card.Title>
            <Card.Description>
              Fill in the form below to create an account
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <form onSubmit={this.handleSubmit}>
              <Stack gap="4" w="full">
                <Field label="Name">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={this.handleChange}
                  />
                </Field>
                <Flex gap={5}>
                  <Field label="Phone Number">
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={this.handleChange}
                    />
                  </Field>
                  <Field label="Email">
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={this.handleChange}
                    />
                  </Field>
                </Flex>
                <Field label="Address">
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={this.handleChange}
                  />
                </Field>
              </Stack>
              <Card.Footer justifyContent="flex-end">
                <Button width={"30%"} type="submit" mt='3'>
                  Submit
                </Button>
              </Card.Footer>
            </form>
          </Card.Body>
        </Card.Root>
      </Box>
    )
  }
}
