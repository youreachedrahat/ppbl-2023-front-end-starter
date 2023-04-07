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
import Link from "next/link";

export default function LiveCoding() {
  return (
    <>
      <Head>
        <title>PPBL 2023</title>
        <meta name="description" content="Gimbalabs Live Coding Sessions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w={["95%", "70%"]} mx="auto">
        <Heading py="10" size="2xl">
          Plutus PBL Live Coding Sessions:
        </Heading>

        <Heading>Gimbalabs - English</Heading>
        <Heading size="md" py="5">Upcoming:</Heading>
        <TableContainer pb="5">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Register</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.events.filter((ev: any) => !ev.complete).map((event: any, i) => (
                <Tr key={i}>
                  <Td>{event.date}</Td>
                  <Td>{event.time}</Td>
                  <Td>{event.title}</Td>
                  {event.links && event.links[0] ? (
                    <Td color="theme.yellow"><Link href={event.links[0]}>{event.description}</Link></Td>
                    ) : (
                    <Td>{event.description}</Td>

                  )}
                  <Td>
                    <CLink href={event.regLink} target="_blank" color="theme.green">
                      Registration Link
                    </CLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Heading size="md" py="5">Past Meetings:</Heading>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Recording</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.events.filter((ev: any) => ev.complete).map((event: any, i) => (
                <Tr key={i}>
                  <Td>{event.date}</Td>
                  <Td>{event.title}</Td>
                  {event.links && event.links[0] ? (
                    <Td color="theme.yellow"><Link href={event.links[0]}>{event.description}</Link></Td>
                    ) : (
                    <Td>{event.description}</Td>
                  )}
                  <Td>
                    <CLink href={event.recordingLink} target="_blank" color="theme.yellow">
                      View Meeting Recording
                    </CLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        {/* <Divider py="5" />
        <Heading>Gimbalabs Indonesia</Heading>
        <Divider py="5" />
        <Heading>Gimbalabs Vietnam</Heading> */}
      </Box>
    </>
  );
}
