import { ConnectWalletMessage } from "@/src/components/ui/Text/ConnectWalletMessage";
import { Box, Center, Flex, Grid, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import { useWallet } from "@meshsdk/react";

type Props = {
  masteryStatus: {
    ppblTokenName: string;
    cliWallet: string;
    successTx1: boolean;
    successTx2: boolean;
    luckyNumber: number;
  };
};

const ContributorLuckyNumber: React.FC<Props> = ({ masteryStatus }) => {
  const { connected } = useWallet();

  return (
    <Box my="3" bg="theme.lightGray">
      <Box p="3" bg="theme.yellow" color="theme.dark">You will know you are successful if you connect a browser wallet and see that your lucky number different than 5.</Box>
      <Box p="3">
      <Flex direction={["column", "row"]}>
        <Center p="5">
          <Heading color="theme.yellow">Mastery Confirmation</Heading>
        </Center>
        <Spacer />
        <Box w="50%" py="3">
          {masteryStatus.luckyNumber == 5 ? (
            <Text pb="3" fontSize="2xl">
              To demonstrate mastery of SLTs 102.4 and 102.5, complete the Mastery Assignment above.
            </Text>
          ) : (
            <Text pb="3" fontSize="2xl">
              Congratulations, you changed your lucky number! At Live Coding, we will discuss if this sufficiently
              &quot;proves&quot; that you have mastered SLTs 102.4 and 102.5.
            </Text>
          )}
        </Box>
      </Flex>
      {connected ? (
        <>
          <Grid templateColumns="repeat(2, 1fr)" gap={5} color="theme.dark">
            <Flex w="100%" direction={["column", "row"]}>
              <Center w={["100%", "50%"]} bg="theme.light">
                <Heading size="md">Contributor Token Name:</Heading>
              </Center>
              {masteryStatus.ppblTokenName.length > 0 ? (
                <Center w={["100%", "50%"]} bg="theme.green" p="5">
                  <Text fontSize="2xl">{masteryStatus.ppblTokenName}</Text>
                </Center>
              ) : (
                <Center w={["100%", "50%"]} bg="theme.orange" p="5">
                  <Text fontSize="2xl">No token found</Text>
                </Center>
              )}
            </Flex>
            <Flex w="100%" direction={["column", "row"]}>
              <Center w={["100%", "50%"]} bg="theme.light">
                <Heading size="md">Lucky Number:</Heading>
              </Center>
              {masteryStatus.luckyNumber == 5 ? (
                <Center w={["100%", "50%"]} bg="theme.orange" p="5">
                  <Text>
                    Your Lucky Number is {masteryStatus.luckyNumber}. Try to change it by completing the assignment
                    above.
                  </Text>
                </Center>
              ) : (
                <Center w={["100%", "50%"]} bg="theme.green" p="5">
                  <Text fontSize="6xl">{masteryStatus.luckyNumber}</Text>
                </Center>
              )}
            </Flex>
          </Grid>
        </>
      ) : (
        <ConnectWalletMessage />
      )}
      </Box>
    </Box>
  );
};

export default ContributorLuckyNumber;
