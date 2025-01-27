import { Heading, Link, Stack, Text, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Team: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Team'
        description='About the team at the Ethereum Foundation'
      />

      <main>
        <Heading as='h1' mb={10}>
          Team
        </Heading>

        <Stack spacing={5}>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Donald Duck
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Resident duck
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Snoopy
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                {', '}
                <Link
                  href="https://example.org"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Website
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Resident Beagle
            </Text>
          </Stack>

        </Stack>
      </main>
    </>
  );
};

export default Team;
