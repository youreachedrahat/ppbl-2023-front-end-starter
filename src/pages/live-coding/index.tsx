import {
  Heading,
  Box,
  Text,
  Table,
  TableContainer,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Link as CLink,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

import events from "@/src/data/live-coding/events-english.json";

export default function LiveCoding() {
  const bgColor = useColorModeValue("white", "theme.darkGray");
  const textColor = useColorModeValue("black", "white");
  return (
    <>
      <Head>
        <title>PPBL 2023</title>
        <meta name="description" content="Gimbalabs Live Coding Sessions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="70%" mx="auto">
        <Heading py="10" size="2xl">
          Plutus PBL Live Coding Sessions:
        </Heading>

        <Heading>Gimbalabs - English</Heading>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Register</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.events.map((event: any, i) => (
                <Tr key={i} bg={bgColor} color={textColor}>
                  <Td>{event.date}</Td>
                  <Td>{event.title}</Td>
                  <Td>{event.description}</Td>
                  <Td>
                    <CLink href={event.regLink} target="_blank" color="theme.cyan">
                      Registration Link
                    </CLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Divider py="5" />
        <Heading>Gimbalabs Indonesia</Heading>
        <Divider py="5" />
        <Heading>Gimbalabs Vietnam</Heading>
      </Box>
    </>
  );
}
