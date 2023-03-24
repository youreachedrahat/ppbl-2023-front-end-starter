import { CardanoWallet, useWallet } from "@meshsdk/react";
import { useState } from "react";
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Image, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const styleImage = { filter: colorMode === "light" ? "invert(1)" : "invert(1)" };
  const navBackgroud = useColorModeValue("theme.lightGray", "theme.lightGray");
  const showNavButtons = useBreakpointValue({ base: false, md: true });

  return (
    <Box>
      <Flex bg={navBackgroud} color="theme.green" minH="60px" py={{ base: 2 }} px={{ base: 4 }} borderBottom={1} borderStyle="ridge" align="center">
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant="ghost" aria-label="Toggle Navigation" />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Image src="https://gimbalabs-docs.vercel.app/img/g-black.svg" alt="gimbalabs logo" width={25} height={25} style={styleImage} />
          </Link>
          <Link href="/" textAlign={useBreakpointValue({ base: "center", md: "left" })} fontSize="md" fontWeight={900} _hover={{ textDecoration: "none" }}>
            Gimbalabs PPBL 2023
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" align="center" direction="row" spacing={6}>
          {showNavButtons && <CardanoWallet />}
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <SunIcon /> : <MoonIcon />}</Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link py={2} px={5} href={navItem.href ?? '#'} fontSize={'md'} fontWeight={900} _hover={{ textDecoration: 'none' }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.childrenHasChildren ? (
              navItem.childrenHasChildren && (
                <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'} zIndex={3}>
                  <Stack>
                    {navItem.childrenHasChildren.map((child) => (
                      <Box key={child.label}>
                        <Popover trigger={'hover'} placement={'right-start'}>
                          <PopoverTrigger>
                            <Link p={2} href={child.href ?? '#'} fontSize={'sm'} fontWeight={500} _hover={{ textDecoration: 'none' }}>
                              {child.label}
                            </Link>
                          </PopoverTrigger>
                          {child.children && (
                            <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'} zIndex={4}>
                              <Stack>{child.children.map((child2) => <DesktopSubNav key={child2.label} {...child2} />)}</Stack>
                            </PopoverContent>
                          )}
                        </Popover>
                      </Box>
                    ))}
                  </Stack>
                </PopoverContent>
              )
            ) : (
              navItem.children && (
                <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'} zIndex={4}>
                  <Stack>{navItem.children.map((child) => <DesktopSubNav key={child.label} {...child} />)}</Stack>
                </PopoverContent>
              )
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};


const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue("theme.lightGray", "black"),
                color: "white"
      }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, childrenHasChildren }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const hasChildren = children !== undefined || childrenHasChildren !== undefined;

  return (
    <Stack spacing={4}>
      <Flex py={2} as={Link} href={href ?? '#'} justify="space-between" align="center"
            _hover={{ textDecoration: 'none' }} onClick={hasChildren ? onToggle : undefined}>
        <Text fontWeight={600}>{label}</Text>
        {hasChildren && (
          <Icon as={ChevronDownIcon} transition="all .25s ease-in-out" transform={isOpen ? 'rotate(180deg)' : ''}
                w={6} h={6} />
        )}
      </Flex>

      {childrenHasChildren !== undefined ?
        (childrenHasChildren) && (
          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            {childrenHasChildren && (
              childrenHasChildren.map((child, i) => (
                (child.children) && (
                  <Collapse key={i} in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                    {child.children && (
                      <Stack mt={2} pl={4} borderLeft={1} borderStyle="solid" align="start">
                        {child.children.map((child) => (
                          <MobileNavSubItem key={child.label} {...child} />
                        ))}
                      </Stack>
                    )}
                  </Collapse>
                )
              ))
            )}
          </Collapse>
        )
        :
        (children) && (
          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            {children && (
              <Stack mt={2} pl={4} borderLeft={1} borderStyle="solid" align="start">
                {children.map((child) => (
                  <MobileNavSubItem key={child.label} {...child} />
                ))}
              </Stack>
            )}
          </Collapse>
        )
      }
    </Stack>
  );
};

const MobileNavSubItem = ({ label, href }: NavItem) => (
  <Link href={href} py={2} pl={4} pr={2} rounded={'md'} _hover={{ textDecoration: 'none' }}>
    {label}
  </Link>
);

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  childrenHasChildren?: Array<NavItem>;
  href?: string;
}

import modules from "@/src/data/nav-items/modules.json"

interface fromJsonChildren {
  children?: NavItem[];
  childrenHasChildren?: NavItem[];
}

const modulesChildren: fromJsonChildren = modules;

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Get Started',
      href: "/get-started/",
    },
    {
      label: 'Modules',
      href: "/get-started/modules",
      childrenHasChildren: modulesChildren.childrenHasChildren,
    },
    {
      label: 'Live Coding',
      href: "/live-coding"
    }
  ];