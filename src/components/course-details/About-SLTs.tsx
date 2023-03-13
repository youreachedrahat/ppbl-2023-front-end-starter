import {
  Box,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AboutSLTs = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color="theme.blue">
        Target Pembelajaran Siswa (TPS)
      </Heading>
      <Heading size="lg" color="theme.green">
        Berikut adalah proses pembelajaran di kursus ini:
      </Heading>
      <OrderedList marginLeft="3em">
        <ListItem fontSize="xl" py="2">
          PPBL2023 terdiri dari 14 modul
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Setiap modul dimulai dengan daftar Target Pembelajaran Siswa (TPS)
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Pelajaran di setiap modul dirancang untuk membantu Anda menguasai setiap Target Pembelajaran Siswa (TPS).
        </ListItem>
        <ListItem fontSize="xl" py="2">
          menyelesaikan proyek - proyek untuk mendapatkan pembelajaran dan pengalaman mengenai bagaimana Cardano bekerja.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Selama di kursus ini, kamu akan mendemonstrasikan penguasaan materi TPS.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Bersama - sama, kita akan mengeksplorasi cara menggunakan Cardano dan Plutus lalu membagikan catatan maupun dokumentasi mengenai apa yang telah Anda pelajari.
        </ListItem>
      </OrderedList>
      <Divider py="5" />
      <Heading size="xl" color="theme.blue">
        Apa itu Target Pembelajaran Siswa?
      </Heading>
      <Text fontSize="xl" mb="5">
        Target pembelajaran siswa menjelaskan apa yang akan Anda ketahui atau dapat lakukan di setiap akhir modul. 
      </Text>
      <Text fontSize="xl" my="5">
        TPS akan membantu Anda memahami alasan dibalik setiap modul pembelajan yang kami rancang untuk mengajarkan sesuatu yang penting.
      </Text>
      <Divider py="5" />
      <Heading size="xl" color="theme.blue">
        Berikutnya:
      </Heading>
      <Text fontSize="xl" mb="5">
        Mari kita lihat daftar modul di kursus ini dan Target Pembelajaran Siswa dalam PPBL 2023.
      </Text>
      <Link href="/get-started/modules">
        <Button>Tunjukan pada saya daftar modul pembelajaran dan TPS</Button>
      </Link>
    </Container>
  );
};

export default AboutSLTs;
