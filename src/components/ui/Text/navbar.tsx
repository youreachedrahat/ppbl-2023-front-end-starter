import { CardanoWallet, useWallet } from "@meshsdk/react";
import { useState } from "react";

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const { connected, wallet } = useWallet();
    const [assets, setAssets] = useState<null | any>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link href="/">
              <Image src='https://gimbalabs-docs.vercel.app/img/g-black.svg' alt='gimbalabs logo' width={25} height={25} />
            </Link>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Gimbalabs
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            align={'center'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              display={{ base: 'none', lg: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', lg: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
            <CardanoWallet />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {
                navItem.childrenHasChildren ?
                  navItem.childrenHasChildren && (
                    <PopoverContent
                      border={0}
                      boxShadow={'xl'}
                      bg={popoverContentBgColor}
                      p={4}
                      rounded={'xl'}
                      minW={'sm'}
                      zIndex={3} // set the z-index to bring the second level above the first level
                    >
                      <Stack>
                        {navItem.childrenHasChildren.map((child) => (
                          <Box key={child.label}>
                            <Popover trigger={'hover'} placement={'right-start'}>
                              <PopoverTrigger>
                                <Link
                                  p={2}
                                  href={child.href ?? '#'}
                                  fontSize={'sm'}
                                  fontWeight={500}
                                  color={linkColor}
                                  _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                  }}>
                                  {child.label}
                                </Link>
                              </PopoverTrigger>
        
                              {child.children && (
                                <PopoverContent
                                  border={0}
                                  boxShadow={'xl'}
                                  bg={popoverContentBgColor}
                                  p={4}
                                  rounded={'xl'}
                                  minW={'sm'}
                                  zIndex={4} // set the z-index higher than the first level to bring the third level on top
                                >
                                  <Stack>
                                    {child.children.map((child2) => (
                                      <DesktopSubNav key={child2.label} {...child2} />
                                    ))}
                                  </Stack>
                                </PopoverContent>
                              )}
                            </Popover>
                          </Box>
                        ))}
                      </Stack>
                    </PopoverContent>
                  )
                :
                  navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={'xl'}
                      bg={popoverContentBgColor}
                      p={4}
                      rounded={'xl'}
                      minW={'sm'}
                      zIndex={4} // set the z-index higher than the first level to bring the third level on top
                    >
                      <Stack>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )
              }
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
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
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
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
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
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        onClick={hasChildren ? onToggle : undefined}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {hasChildren && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      {
        childrenHasChildren !== undefined ?
          (childrenHasChildren) && (
            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
              {childrenHasChildren && (
                  childrenHasChildren.map((child) => (
                    (child.children) && (
                      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                        {child.children && (
                          <Stack
                            mt={2}
                            pl={4}
                            borderLeft={1}
                            borderStyle={'solid'}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            color='black'
                            align={'start'}
                          >
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
                <Stack
                  mt={2}
                  pl={4}
                  borderLeft={1}
                  borderStyle={'solid'}
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                  color='black'
                  align={'start'}
                >
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

const MobileNavSubItem = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      py={2}
      pl={4}
      pr={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
      {label}
    </Link>
  );
};
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    childrenHasChildren?: Array<NavItem>;
    href?: string;
  }
  
  import modules from "@/src/data/nav-items/modules.json"
  import mastery from "@/src/data/nav-items/mastery.json"
  import plutus from "@/src/data/nav-items/plutus.json"

  interface fromJsonChildren {
    children?: NavItem[];
    childrenHasChildren?: NavItem[];
  }

  const modulesChildren: fromJsonChildren = modules;
  const masteryChildren: fromJsonChildren = mastery;
  const plutusChildren: fromJsonChildren = plutus;

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Get Started',
      href: "/get-started",
    },
    {
      label: 'Modules',
      childrenHasChildren: modulesChildren.childrenHasChildren,
    },
    {
      label: 'Mastery',
      children: masteryChildren.children,
    },
    {
      label: 'Plutus',
      children: plutusChildren.children,
    },
  ];