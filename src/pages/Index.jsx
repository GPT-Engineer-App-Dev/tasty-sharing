import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          RecipeShare
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/recipes">Recipes</Link>
          <Link as={RouterLink} to="/submit">Submit a Recipe</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="xl" mb={8}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg">Submit a Recipe</Button>
      </Box>

      {/* Featured Recipes Section */}
      <Box as="section" py={20}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Featured Recipes</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={10}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 1</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 2</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 3</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
          </HStack>
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;