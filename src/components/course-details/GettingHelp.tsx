import { Button, Container, Divider, Heading, ListItem, OrderedList, Text, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import GetHelp from "../lms/Course/GetHelp";

const GettingHelp = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color="theme.blue">
        Bagaimana jika saya buntu ketika mencari jawaban?
      </Heading>
      <Text py="3">
        Anda mungkin akan memiliki pertanyaan-pertanyaan ketika mengerjakan kursus ini.
      </Text>
      <Text py="3">
        Kursus ini dirancang untuk menunjukan kepada Anda beberapa informasi yang penting, kemudian Anda
        harus mempraktekannya sendiri. Hal yang luar biasa dari praktek adalah ketika Anda melakukannya sendiri maka Anda akan menemukan apa yang Anda ketahui dan tidak Anda ketahui.
      </Text>
      <Text py="3">
        Ketika mempraktekannya, Anda menyadari bahwa Anda sudah memahami materi tersebut dan mendapat pengetahuan baru, tetapi di lain waktu mungkin Anda akan mengalami buntu ketika mencari jawaban. 
      </Text>
      <Text py="3">
        Jika Anda buntu, ada dua cara untuk meminta bantuan:
      </Text>
      <OrderedList ml="10" mb="10">
        <ListItem pl="3">Ajukan pertanyaan di <CLink href="https://discord.gg/Va7DXqSSn8">Gimbalabs Discord</CLink></ListItem>
        <ListItem pl="3">Ikuti <CLink><Link href="/live-coding">Plutus PBL Live Coding Session setiap Rabu atau Kamis di jam 14.30-16.00 UTC</Link></CLink></ListItem>
      </OrderedList>
      <Divider py="3" />
      <Text py="3" fontWeight="bold" color="theme.green">
        Cari tombol berikutnya di bagian bawah setiap halaman pelajaran:
      </Text>
      <GetHelp />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Berikutnya:
      </Heading>
      <Text fontSize="xl" my="5">
        Semua yang kami kerjakan mengarah pada Tata Kelola.
      </Text>
      <Link href="/get-started/governance">
        <Button>Bagaimana hubungan PPBL dengan Tata Kelola?</Button>
      </Link>
    </Container>
  );
};

export default GettingHelp;
