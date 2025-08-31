import { useState } from 'react';

import {
  ContractActionBar,
  ContractStateWidget,
  TransactionForm,
} from '@openzeppelin/contracts-ui-builder-renderer';
import type {
  ContractAdapter,
  ContractSchema,
  ExecutionConfig,
  RenderFormSchema,
} from '@openzeppelin/contracts-ui-builder-types';
import { Card, CardContent } from '@openzeppelin/contracts-ui-builder-ui';

// Props for GeneratedForm
interface GeneratedFormProps {
  adapter: ContractAdapter;
  isWalletConnected?: boolean;
}

/**
 * Generated Transaction Form for mint_uint256
 *
 * This component renders a form for interacting with a blockchain contract.
 * It uses the shared renderer package which ensures consistent behavior
 * with the preview in the builder app.
 */
export default function GeneratedForm({ adapter, isWalletConnected }: GeneratedFormProps) {
  // TODO: Enable this useEffect as a fallback?
  // If the adapter supports runtime schema loading (e.g., via Etherscan)
  // and the injected schema is missing or invalid, this could attempt to load it.
  /*
  const [contractSchema, setContractSchema] = useState<ContractSchema | null>(null);
  */
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [loadError, _setLoadError] = useState<Error | null>(null);
  // Form schema generated from the builder and transformed by FormSchemaFactory
  const formSchema: RenderFormSchema = {
    layout: {
      columns: 1,
      spacing: 'normal',
      labelPosition: 'top',
    },
    validation: {
      mode: 'onChange',
      showErrors: 'inline',
    },
    theme: {},
    functionId: 'mint_uint256',
    title: 'Mint NFT',
    description: 'Max 10 NFTs per wallet.',
    contractAddress: '0xd1d9149494881bf7f1ce3141eeF7AEbA290cf582',
    id: 'form-mint_uint256',
    fields: [
      {
        id: 'field-pwjuqmd',
        name: '_numTokens',
        label: 'Num Tokens',
        type: 'number',
        placeholder: 'Enter num Tokens',
        helperText: '',
        defaultValue: 0,
        validation: {
          required: true,
        },
        width: 'full',
        originalParameterType: 'uint256',
      },
    ],
    submitButton: {
      text: 'Execute Mint NFT',
      loadingText: 'Processing...',
      variant: 'primary',
    },
    defaultValues: {
      _numTokens: 0,
    },
  }; /*@@FORM_SCHEMA_JSON@@*/

  // Contract schema injected by generator (loaded or imported by the user)
  const contractSchema: ContractSchema = {
    ecosystem: 'evm',
    name: 'Contract_0xd1d9',
    address: '0xd1d9149494881bf7f1ce3141eeF7AEbA290cf582',
    functions: [
      {
        id: 'MAX_MINT_PER_TX_',
        name: 'MAX_MINT_PER_TX',
        displayName: 'M A X_ M I N T_ P E R_ T X',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            displayName: 'Parameter (uint256)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'MAX_TOKENS_',
        name: 'MAX_TOKENS',
        displayName: 'M A X_ T O K E N S',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            displayName: 'Parameter (uint256)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'approve_address_uint256',
        name: 'approve',
        displayName: 'Approve',
        inputs: [
          {
            name: 'to',
            type: 'address',
            displayName: 'To',
          },
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'balanceOf_address',
        name: 'balanceOf',
        displayName: 'Balance Of',
        inputs: [
          {
            name: 'owner',
            type: 'address',
            displayName: 'Owner',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'uint256',
            displayName: 'Parameter (uint256)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'baseUri_',
        name: 'baseUri',
        displayName: 'Base Uri',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            displayName: 'Parameter (string)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'flipSaleState_',
        name: 'flipSaleState',
        displayName: 'Flip Sale State',
        inputs: [],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'getApproved_uint256',
        name: 'getApproved',
        displayName: 'Get Approved',
        inputs: [
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'address',
            displayName: 'Parameter (address)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'initialOwner_',
        name: 'initialOwner',
        displayName: 'Initial Owner',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            displayName: 'Parameter (address)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'isApprovedForAll_address_address',
        name: 'isApprovedForAll',
        displayName: 'Is Approved For All',
        inputs: [
          {
            name: 'owner',
            type: 'address',
            displayName: 'Owner',
          },
          {
            name: 'operator',
            type: 'address',
            displayName: 'Operator',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            displayName: 'Parameter (bool)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'isSaleActive_',
        name: 'isSaleActive',
        displayName: 'Is Sale Active',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'bool',
            displayName: 'Parameter (bool)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'mint_uint256',
        name: 'mint',
        displayName: 'Mint',
        inputs: [
          {
            name: '_numTokens',
            type: 'uint256',
            displayName: 'num Tokens',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'payable',
        modifiesState: true,
      },
      {
        id: 'name_',
        name: 'name',
        displayName: 'Name',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            displayName: 'Parameter (string)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'owner_',
        name: 'owner',
        displayName: 'Owner',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'address',
            displayName: 'Parameter (address)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'ownerOf_uint256',
        name: 'ownerOf',
        displayName: 'Owner Of',
        inputs: [
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'address',
            displayName: 'Parameter (address)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'price_',
        name: 'price',
        displayName: 'Price',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            displayName: 'Parameter (uint256)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'renounceOwnership_',
        name: 'renounceOwnership',
        displayName: 'Renounce Ownership',
        inputs: [],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'safeTransferFrom_address_address_uint256',
        name: 'safeTransferFrom',
        displayName: 'Safe Transfer From',
        inputs: [
          {
            name: 'from',
            type: 'address',
            displayName: 'From',
          },
          {
            name: 'to',
            type: 'address',
            displayName: 'To',
          },
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'safeTransferFrom_address_address_uint256_bytes',
        name: 'safeTransferFrom',
        displayName: 'Safe Transfer From',
        inputs: [
          {
            name: 'from',
            type: 'address',
            displayName: 'From',
          },
          {
            name: 'to',
            type: 'address',
            displayName: 'To',
          },
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
          {
            name: 'data',
            type: 'bytes',
            displayName: 'Data',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'setApprovalForAll_address_bool',
        name: 'setApprovalForAll',
        displayName: 'Set Approval For All',
        inputs: [
          {
            name: 'operator',
            type: 'address',
            displayName: 'Operator',
          },
          {
            name: 'approved',
            type: 'bool',
            displayName: 'Approved',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'setBaseUri_string',
        name: 'setBaseUri',
        displayName: 'Set Base Uri',
        inputs: [
          {
            name: '_baseUri',
            type: 'string',
            displayName: 'base Uri',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'setPrice_uint256',
        name: 'setPrice',
        displayName: 'Set Price',
        inputs: [
          {
            name: '_price',
            type: 'uint256',
            displayName: 'price',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'supportsInterface_bytes4',
        name: 'supportsInterface',
        displayName: 'Supports Interface',
        inputs: [
          {
            name: 'interfaceId',
            type: 'bytes4',
            displayName: 'Interface Id',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'bool',
            displayName: 'Parameter (bool)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'symbol_',
        name: 'symbol',
        displayName: 'Symbol',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'string',
            displayName: 'Parameter (string)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'tokenURI_uint256',
        name: 'tokenURI',
        displayName: 'Token U R I',
        inputs: [
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
        ],
        outputs: [
          {
            name: '',
            type: 'string',
            displayName: 'Parameter (string)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'totalSupply_',
        name: 'totalSupply',
        displayName: 'Total Supply',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'uint256',
            displayName: 'Parameter (uint256)',
          },
        ],
        type: 'function',
        stateMutability: 'view',
        modifiesState: false,
      },
      {
        id: 'transferFrom_address_address_uint256',
        name: 'transferFrom',
        displayName: 'Transfer From',
        inputs: [
          {
            name: 'from',
            type: 'address',
            displayName: 'From',
          },
          {
            name: 'to',
            type: 'address',
            displayName: 'To',
          },
          {
            name: 'tokenId',
            type: 'uint256',
            displayName: 'Token Id',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'transferOwnership_address',
        name: 'transferOwnership',
        displayName: 'Transfer Ownership',
        inputs: [
          {
            name: 'newOwner',
            type: 'address',
            displayName: 'New Owner',
          },
        ],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
      {
        id: 'withdrawAll_',
        name: 'withdrawAll',
        displayName: 'Withdraw All',
        inputs: [],
        outputs: [],
        type: 'function',
        stateMutability: 'nonpayable',
        modifiesState: true,
      },
    ],
  };

  // Execution configuration selected in the builder
  const executionConfig: ExecutionConfig | undefined = {
    method: 'eoa',
    allowAny: true,
  };

  const contractAddress = formSchema.contractAddress;

  // TODO: Enable this useEffect as a fallback?
  // If the adapter supports runtime schema loading (e.g., via Etherscan)
  // and the injected schema is missing or invalid, this could attempt to load it.
  /*
  useEffect(() => {
    setLoadError(null);
    setContractSchema(null);

    if (contractAddress) {
      adapter
        .loadContract(contractAddress)
        .then(setContractSchema)
        .catch((err: unknown) => {
          // Catch error during contract loading
          logger.error('GeneratedForm', 'Error loading contract schema:', err);
          // Create a new Error object if caught value is not already one
          const errorToSet =
            err instanceof Error ? err : new Error('Failed to load contract state');
          setLoadError(errorToSet);
          setContractSchema(null);
        });
    } else {
      setContractSchema(null);
    }
  }, [contractAddress, adapter]);
  */

  // Decide which schema to use: prioritize injected, fallback maybe later?
  const schemaToUse = contractSchema; // Sticking to injected schema for now

  const toggleWidget = () => {
    setIsWidgetVisible((prev: boolean) => !prev);
  };

  return (
    <div className="space-y-6">
      {/* Contract Action Bar - consistent with builder app */}
      {adapter.networkConfig && (
        <ContractActionBar
          networkConfig={adapter.networkConfig}
          contractAddress={contractAddress}
          onToggleContractState={toggleWidget}
          isWidgetExpanded={isWidgetVisible}
        />
      )}

      <div className="flex gap-4">
        {/* Contract State Widget on the left side - matching builder app layout */}
        {contractAddress && isWidgetVisible && (
          <div className="w-[300px] flex-shrink-0">
            <div className="sticky top-4">
              <ContractStateWidget
                contractSchema={schemaToUse}
                contractAddress={contractAddress}
                adapter={adapter}
                isVisible={isWidgetVisible}
                onToggle={toggleWidget}
                error={loadError}
              />
            </div>
          </div>
        )}

        {/* Main form on the right side */}
        <div className="flex-1">
          <Card>
            <CardContent className="space-y-4">
              <TransactionForm
                schema={formSchema}
                contractSchema={contractSchema}
                adapter={adapter}
                isWalletConnected={isWalletConnected}
                executionConfig={executionConfig}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
