import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinicius Santos</Text>
          <Text color="gray.300" fontSize="small">
            vinicius@email.com
          </Text>
        </Box>
      )}

      <Avatar
        bg="pink.500"
        size="md"
        name="Vinicius Santos"
        src="https://github.com/viniciussantos31.png"
      >
        <AvatarBadge boxSize="1rem" bg="green.500" borderColor="gray.900" />
      </Avatar>
    </Flex>
  );
}
