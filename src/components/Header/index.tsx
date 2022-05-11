import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      px="6"
      mx="auto"
      mt="4"
      align="center"
    >
      {!isWide && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />

      {isWide && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWide} />
      </Flex>
    </Flex>
  );
}
