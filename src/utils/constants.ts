export const RESPONSIVE_MAX_W = {
  xl: 1408,
  lg: 968,
  md: 768,
  sm: '85%',
}

export const SUB_RESPONSIVE_MAX_W = {
  lg: 1024,
  md: 768,
  sm: '85%',
}

export const LP_BASE_RATE: Record<string, number> = {
  '7-10': 11,
  '7-20': 12,
  '7-30': 18,
  '7-40': 20,
  '7-50': 30,
  '7-60': 40,
  '7-70': 50,
  '7-80': 60,
  '7-90': 70,
  '14-10': 12,
  '14-20': 14,
  '14-30': 21,
  '14-40': 25,
  '14-50': 35,
  '14-60': 45,
  '14-70': 55,
  '14-80': 65,
  '14-90': 75,
  '30-10': 13,
  '30-20': 16,
  '30-30': 24,
  '30-40': 30,
  '30-50': 40,
  '30-60': 50,
  '30-70': 60,
  '30-80': 70,
  '30-90': 80,
  '60-10': 14,
  '60-20': 18,
  '60-30': 27,
  '60-40': 35,
  '60-50': 45,
  '60-60': 55,
  '60-70': 65,
  '60-80': 75,
  '60-90': 85,
  '90-10': 15,
  '90-20': 20,
  '90-30': 30,
  '90-40': 40,
  '90-50': 50,
  '90-60': 60,
  '90-70': 70,
  '90-80': 80,
  '90-90': 90,
}

export const TENORS = [7, 14, 30, 60, 90]
export const COLLATERALS = [10, 20, 30, 40, 50, 60, 70, 80, 90]
export const INITIAL_TENOR = TENORS[3]
export const INITIAL_COLLATERAL = COLLATERALS[4]

export const STEPS_DESCRIPTIONS = [
  {
    title: 'Select Collection',
    text: 'In order to open a new pool we will first Have to determine which FT Collection you will want this pool to represent. You can start searching for any collection currently listed on OpenSea, X2Y2 and LooksRare.',
  },
  {
    title: 'Select Tenor',
    text: 'Determine the Tenor length for which potential borrowers can open a loan against. We commonly see a 60-days Tenor.',
  },
  {
    title: 'Select Collateral Factor',
    text: 'Indicate the Colleteral Factor % which will help determine how much liquidity (Ethereum) borrowers can receive against the desired NFT collection. The higher the %, the more liquidity they can pull out of the pool. We typically recommend a 50% Collateral Factor.',
  },
  {
    title: 'Set the interest rate for each loan condition',
    text: `According to the limit value of the loan conditions set in steps 1 and 2, the system refers to the historical order data to generate a suggested loan interest rate for you, and the funds approved by you under this interest rate are expected to generate income soon.
If the current loan conditions and suggested interest rates do not meet your expectations, you can adjust the loan interest rate through the big slider below, and all interest rate values in the table will increase or decrease
You can also use the small sliders on the right and bottom of the table to adjust the impact of changes in the two factors of COLLATERALS fat and loan duration on the interest rate.`,
  },
]
export const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
export const contractABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_upgradedAddress', type: 'address' }],
    name: 'deprecate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'deprecated',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_evilUser', type: 'address' }],
    name: 'addBlackList',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'upgradedAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'maximumFee',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: '_totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_maker', type: 'address' }],
    name: 'getBlackListStatus',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowed',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'who', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getOwner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'newBasisPoints', type: 'uint256' },
      { name: 'newMaxFee', type: 'uint256' },
    ],
    name: 'setParams',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'issue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'redeem',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'basisPointsRate',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isBlackListed',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_clearedUser', type: 'address' }],
    name: 'removeBlackList',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX_UINT',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_blackListedUser', type: 'address' }],
    name: 'destroyBlackFunds',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: '_initialSupply', type: 'uint256' },
      { name: '_name', type: 'string' },
      { name: '_symbol', type: 'string' },
      { name: '_decimals', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'amount', type: 'uint256' }],
    name: 'Issue',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'amount', type: 'uint256' }],
    name: 'Redeem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newAddress', type: 'address' }],
    name: 'Deprecate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'feeBasisPoints', type: 'uint256' },
      { indexed: false, name: 'maxFee', type: 'uint256' },
    ],
    name: 'Params',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: '_blackListedUser', type: 'address' },
      { indexed: false, name: '_balance', type: 'uint256' },
    ],
    name: 'DestroyedBlackFunds',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: '_user', type: 'address' }],
    name: 'AddedBlackList',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: '_user', type: 'address' }],
    name: 'RemovedBlackList',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
  { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
]
