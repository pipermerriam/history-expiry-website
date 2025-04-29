import { Heading, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='4444s - History Expiry'
        description='Ethereum History Expiry'
      />

      <main>
        <Heading as='h1' mb={10}>
          4444s and History Expiry
        </Heading>

        <Text mb={6}>
          From the genesis of the Ethereum blockchain, execution clients have
          maintained a complete historical record of the chain history.  This
          includes the chain of headers linking the chain head and the genesis
          block as well as the corresponding block bodies and receipts.  In
          2025 at the block height of 21 million, this data represents more
          than a terabyte of information that Execution clients are responsible
          for storing.
        </Text>

        <Text mb={10}>
          The term "History Expiry" refers to the effort to reduce the amount
          of this historical chain data that is stored by execution clients.
          History expiry has also been referred to as "Four Fours" which refers
          to EIP-4444 which began the effort.
        </Text>

        <Text mb={10}>
          In order to reduce the amount of data that individual clients store,
          we must allow them to no longer store this data.  This doesn't mean
          that clients are required to delete this information.  Only that they
          are allowed to.  This distinction is important because there are
          certain use cases such as serving the JSON-RPC API which benefit from
          having this data available and we want to ensure that clients are
          still free to serve these use cases.
        </Text>

        <Text mb={10}>
          It is also important to differentiate recent history from ancient
          history. Recent history is near the head of the chain and is used by
          the protocol.  Ancient history is anything that is beyond this recent
          window and is largely unused by the protocol.
        </Text>

        <Heading as='h2' mb={10}>
          What is actually changing?
        </Heading>

        <Text mb={10}>
          The main thing that is changing is the expectations on clients to
          serve data in the DevP2P protocol.  This protocol has historically
          operated under the assumption that any node on the network can serve
          block data from any point in history.  The protocol is being updated
          to remove this assumption and to allow clients to advertise to their
          peers what range of blocks they have available.
        </Text>

        <Text mb={10}>
          The client teams have agreed to allow droping block body and receipt
          data prior to the merge.  This should allow clients that choose to
          drop this data to free up approximately 450GB of disk usage.
        </Text>

        <Text mb={10}>
          A full set of changes can be found in the History Expiry Meta <Link
                  href="https://eips.ethereum.org/EIPS/eip-7927#serving-pre-merge-json-rpc"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                EIP-7927
                </Link>
        </Text>

        <Heading as='h2' mb={10}>
          FAQ
        </Heading>

        <Heading size='md' mb={5}>
          What data is being "expired"?
        </Heading>
        <Text mb={10}>
          Block bodies and receipts prior to "The Merge".
        </Text>

        <Heading size='md' mb={5}>
          What is the timeline for History Expiry going live?
        </Heading>
        <Text mb={10}>
          The first iteration goes live in the weeks following the Pectra hard fork.
        </Text>

        <Heading size='md' mb={5}>
          Are nodes required to remove this data?
        </Heading>
        <Text mb={10}>
          No.  Nodes on the network that wish to retain this data are allowed to.
        </Text>

        <Heading size='md' mb={5}>
          Won't this break JSON-RPC?
        </Heading>
        <Text mb={10}>
          No.  Nodes that want to operate as JSON-RPC providers can still
          retain this historical data.
        </Text>

        <Heading size='md' mb={5}>
          Won't this break node syncing?
        </Heading>
        <Text mb={10}>
          Nodes that perform a full block sync from genesis will need to source
          the block data from another source. Nodes that use SNAP sync will now
          only sync back to the merge block.
        </Text>

        <Heading size='md' mb={5}>
          With EL Nodes no longer storing this data, where will it be stored?
        </Heading>
        <Text mb={5}>
          The peer-to-peer solution for this is <Link
                  href="https://ethportal.net/"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >Portal Network</Link> which is Ethereum's peer-to-peer storage layer.
        </Text>
        <Text mb={5}>
          The <Link
                  href="https://eth-clients.github.io/history-endpoints/"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >Eth-Clients Website</Link> contains links to hosted
          repositories of ERA files which are a file format developed for
          bulk storage of historical data.
        </Text>
      </main>
    </>
  );
};

export default Home;
