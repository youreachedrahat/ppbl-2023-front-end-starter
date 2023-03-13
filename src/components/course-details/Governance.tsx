import { Button, Container, Divider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Governance = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color="theme.blue">
        Melampaui Kontribusi adalah Tata Kelola Yang Diharapkan
      </Heading>
      <Text marginTop="1em">
        Niat kami dalam jangka panjang ialah menjadikan Anda <Text as="span" fontWeight="bold" color="theme.green">lebih dari seorang kontributor</Text> proyek.
      </Text>
      <Text marginTop="1em">
        Kami ingin anda menjadi <Text as="span" fontWeight="bold" color="theme.green">pengambil keputusan</Text>, yang membantu menjawab pertanyaan:
      </Text>

      <Heading size="2xl" color="theme.blue" my="10">
        &rdquo;Selanjutnya, apa yang akan kita lakukan?&rdquo;
      </Heading>
      <Text fontWeight="bold" color="theme.green" my="1em">
        Kami percaya bahwa pendidikan sangat penting untuk membangun sistem tata kelola yang hebat.
      </Text>
      <Text my="1em">
        Kami percaya bahwa proses pembelajaran yang baik adalah dengan mempraktekan apa yang telah dipelajari.
      </Text>
      <Text my="1em">
        Jadi&rsquo; mari kita mulai.
      </Text>
      <Link href="/modules/100">
        <Button my="10">Mulai dengan modul 100</Button>
      </Link>
    </Container>
  );
};

export default Governance;
