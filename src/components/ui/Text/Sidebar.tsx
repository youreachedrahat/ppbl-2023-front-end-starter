import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface SidebarItem {
  name: string;
  content: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [items]);


  return (
    <Flex>
      <Box
        bg="theme.gray"
        color="theme.light"
        w="60"
        minH="100vh"
        pos="fixed"
        zIndex={10}
        sx={{
          "@media screen and (max-width: 480px)": {
            position: "absolute",
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
            width: "100%",
          },
        }}
      >
        <Box p="4">
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />}
            display={{ md: "none" }}
            onClick={onClose}
            variant="outline"
            colorScheme="whiteAlpha"
            size="sm"
          />
        </Box>
        <Stack spacing={4} p="4">
          {items.map((item) => (
            <Box
              key={item.name}
              p="2"
              rounded="md"
              _hover={{
                bg: "gray.700",
                cursor: "pointer",
              }}
              bg={selectedItem?.name === item.name ? "gray.700" : ""}
              onClick={() => setSelectedItem(item)}
            >
              <Text>{item.name}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box ml={{ base: 0, md: 60 }} p="4" flex="1">
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ md: "none" }}
            onClick={onOpen}
            variant="outline"
            colorScheme="whiteAlpha"
            size="sm"
          />
        {selectedItem?.content}
      </Box>
    </Flex>
  );
};

export default Sidebar;