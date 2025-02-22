import React from 'react'
import { Box, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";
const SearchComponent = () => {
    return (
        <HStack>
            <Input placeholder="Tìm kiếm..." />
            <Button>🔍</Button>
        </HStack>
    )
}

export default SearchComponent
