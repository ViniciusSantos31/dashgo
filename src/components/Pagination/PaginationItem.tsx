import { Button } from "@chakra-ui/react";

interface PaginationProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
        colorScheme="pink"
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bgColor: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
