import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  url: string;
  title: string;
  postedBy: string;
  rewardsPool: string;
  startDate: string;
  endDate: string;
}

export const CompetitionCard: FC<Props> = ({ url, title, postedBy, rewardsPool, startDate, endDate, children }) => {
  return (
    <Link href={url} _hover={{ textDecoration: 'none' }}>
      <Stack
        border='2px solid #718096'
        borderRadius='lg'
        px={6}
        py={8}
        _hover={{ borderColor: 'brand.blue', boxShadow: '2px 2px 6px #f38b75' }}
      >
        <Heading as='h2' fontSize='xl' fontWeight={600} mb={2.5}>
          {title}
        </Heading>

        <Stack>
          <Text mb={4}>{children}</Text>
        </Stack>

        <Stack>
          <Text lineHeight={1.1}>
            <strong>Posted By:</strong> {postedBy}
          </Text>
          <Text lineHeight={1.1}>
            <strong>Rewards Pool:</strong> {rewardsPool}
          </Text>
          <Text lineHeight={1.1}>
            <strong>Start Date:</strong> {startDate}
          </Text>
          <Text lineHeight={1.1}>
            <strong>End Date:</strong> {endDate}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
