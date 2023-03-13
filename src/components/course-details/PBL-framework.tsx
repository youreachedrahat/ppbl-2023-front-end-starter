import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Center,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PBLFramework = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color="theme.blue" lineHeight="1.2em">
      Tujuan dari setiap kursus Project-Based Learning (PBL) adalah untuk mendukung orang-orang supaya menjadi kontributor 
      proyek-proyek nyata.
      </Heading>
      <Text py="5">
        <Text as="span" fontWeight="bold" color="theme.green">
          Plutus PBL 2023
        </Text>{" "}
        adalah salah satu contoh pelajaran di kursus PBL. Mungkin Anda bisa melihat beberapa pelajaran lainnya.
      </Text>
      
      <Text py="5">
        Setiap kursus Pembelajaran Berbasis Proyek terdiri dari serangkaian{" "}
        <Text as="span" fontWeight="bold" color="theme.green">
          Modul
        </Text>
        .
      </Text>
      <Text py="5">
        Pada kursus Plutus PBL ini terdapat 14 Modul. Modul baru akan diterbitkan setiap hari Senin dari sekarang hingga
        2023-05-08.
      </Text>
      <Container maxWidth="90%" bgColor="theme.lightGray" marginTop="2em" marginLeft="0">
        <Stack>
          <Heading size="md" lineHeight="1.4" mt="1em" color="white" textAlign="center">
            Modul diberi penomoran dan dikola dengan Framework PBL:
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={5} p="5">
            <GridItem colSpan={3}>
              <Box>
                <Text fontWeight="bold" m="3" color="white">
                  Orientasi (100):
                </Text>

                <Text m="3" color="white">
                  Apa itu? Bagaimana saya bisa memulai?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" m="3" color="white">
                  Membangun Latar Belakang Pengetahuan (200):
                </Text>
                <Text m="3" color="white">
                  Bagaimana cara kerjanya? Apa yang perlu saya ketahui?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" m="3" color="white">
                  Spesialisasi (300):
                </Text>
                <Text m="3" color="white">
                  Bagaimana Anda membuatnya?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" m="3" color="white">
                  Berkontribusi (400):
                </Text>
                <Text m="3" color="white">
                  Bagaimana saya bisa berkontribusi?
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Image src="/PBLFramework.png" width="100%" alt="pblframework" />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" py="2">
        Berikutnya:
      </Heading>
      <Text my="5">
        Setiap modul terdiri dari satu set Target Pembelajaran Siswa (TPS) yang memberikan gambaran apa yang akan Anda pelajari 
        di kursus ini.
      </Text>
      <Link href="/get-started/slts">
        <Button>Beritahu saya mengenai TPS</Button>
      </Link>
    </Container>
  );
};

export default PBLFramework;
