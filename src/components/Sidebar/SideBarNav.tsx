import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuário
        </NavLink>
      </NavSection>
    </Stack>
  );
}
