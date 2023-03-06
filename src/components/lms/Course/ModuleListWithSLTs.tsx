import {
  Box,
  Text,
  Heading,
  Stack,
  UnorderedList,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import * as React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import slts from "@/src/data/slts.json";
import Link from "next/link";

const ModuleListWithSLTs = () => {
  return (
    <Accordion allowMultiple>
      {slts.modules.map((module) => (
        <AccordionItem key={module.number} bg="theme.lightGray" p="2" my="2">
          <AccordionButton>
            <Heading size="lg" py="2" style={{ display: "inline-flex" }}>
              <Heading size="lg" color="theme.blue" style={{ marginRight: 4 }}>
                {module.number}:
              </Heading>
              {module.title}
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>

            <Link href={`/modules/${module.number}`}><Text py="2" color="theme.yellow">View Module</Text></Link>
            <UnorderedList>
              {module.slts.map((slt) => (
                <ListItem key={slt.id} py="1">
                  {slt.id}: {slt.slt}
                </ListItem>
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ModuleListWithSLTs;
