import { Button, Container, Divider, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ModuleListWithSLTs from "../lms/Course/ModuleListWithSLTs";

const ListOfModules = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color="theme.blue">
        Garis Besar Kursus Plutus PBL
      </Heading>
      <Text fontSize="xl" pb="5">
        Setiap modul diberi nomor. Target Pembelajaran Siswa (TPS) di setiap Modul juga diberi nomor. Tujuan dari 
        sistem penomoran ini memberikan kita semua cara yang cepat untuk mereferensikan apa yang Anda pelajari.
      </Text>
      <Text fontSize="xl" pb="5">
        Saat Anda buntu, Anda dapat berkomentar, &rdquo;Saya butuh bantuan dengan TPS 102.3&rdquo;, yang merupakan indikasi cepat bahwa Anda
        sudah &rdquo;belajar membuat transaksi menggunakan cardano-cli&rdquo;. Untuk melihat gambaran menyeluruh tentang apa yang akan Anda pelajari di PPBL 2023, 
        lihat TPS di bawah ini.
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="theme.yellow" pb="5">
        Klik Modul untuk melihat Target Pembelajaran Siswa.
      </Text>
      <ModuleListWithSLTs />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Berikutnya:
      </Heading>
      <Text fontSize="xl" my="5">
        Cara mendapatkan bantuan
      </Text>
      <Link href="/get-started/getting-help">
        <Button>Apa yang harus saya lakukan ketika saya membutuhkan bantuan?</Button>
      </Link>
    </Container>
  );
};

export default ListOfModules;
