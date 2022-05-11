import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controlled components
// Uncontrolled components

// Imperative vs declarative

export function SearchBox() {
  const [search, setSearch] = useState<string>("");

  // debounce concept from https://overreacted.io/making-mern-app-search-results/

  const searchInputRef = useRef<HTMLInputElement>(null);

  // console.log(searchInputRef.current.value);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        type="text"
        placeholder="Buscar na plataforma"
        color="gray.50"
        px="4"
        mr="4"
        variant="unstyled"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
