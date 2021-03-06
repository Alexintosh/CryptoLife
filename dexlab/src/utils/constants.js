export const erc20Abi = [
    {
      name: 'balanceOf',
      type: 'function',
      constant: true,
      payable: false,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
      ],
      outputs: [
        {
          name: 'balance',
          type: 'uint256',
        },
      ],
    },
    {
      name: 'transfer',
      type: 'function',
      constant: false,
      payable: false,
      inputs: [
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'success',
          type: 'bool',
        },
      ],
    },
  ];
  