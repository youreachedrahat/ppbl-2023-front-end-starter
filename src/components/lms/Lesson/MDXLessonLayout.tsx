import { Box, Button, IconButton, useClipboard } from "@chakra-ui/react";
import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaCopy } from "react-icons/fa";
import type { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Components } from "@mdx-js/react/lib";

type CodeProps = {
  node: {
    meta: string;
  };
  inline: boolean;
  className: string;
  children: string;
};

type mdxComponents = {
  code: React.FC<CodeProps>;
  a: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  // add other components here as needed
};

const code: React.FC<CodeProps> = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  // const { onCopy, hasCopied } = useClipboard(children);

  return !inline && match ? (
    <Box pos="relative">
      {/* <IconButton
        pos="absolute"
        top="1rem"
        right="1rem"
        size="sm"
        icon={<FaCopy />}
        aria-label="Copy code"
        onClick={onCopy}
        isDisabled={hasCopied}
      /> */}
      <SyntaxHighlighter language={match[1]} style={dracula} PreTag="div" {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </Box>
  ) : (
    <code className={className} {...props}>
      <SyntaxHighlighter
        language={match ? match[1] : undefined}
        style={nord}
        PreTag="span"
        customStyle={{
          fontSize: "medium",
          paddingTop: "0.2em",
          paddingBottom: "0.2em",
          paddingLeft: "0.5em",
          paddingRight: "0.5em",
        }}
      >
        {children.replace(/\n$/, "")}
      </SyntaxHighlighter>
    </code>
  );
};

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children, ...rest }) => (
  <a href={href} style={{ color: "#EBBA6F", fontWeight: "bold" }} {...rest}>
    {children}
  </a>
);

export const components: mdxComponents = {
  code,
  a: CustomLink,
  // add other components here as needed
};

type Props = {
  children?: React.ReactNode;
};
const MDXLessonLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box px="10" py="5" bg="#232323" className="mdx-content" color="white">
      <MDXProvider components={components as Components}>{children}</MDXProvider>
    </Box>
  );
};

export default MDXLessonLayout;
