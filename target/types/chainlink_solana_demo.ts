export type ChainlinkSolanaDemo = {
  "version": "0.1.0",
  "name": "chainlink_solana_demo",
  "instructions": [
    {
      "name": "execute",
      "accounts": [
        {
          "name": "decimal",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "chainlinkFeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "chainlinkProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "decimal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "type": "i128"
          },
          {
            "name": "decimals",
            "type": "u32"
          }
        ]
      }
    }
  ]
};

export const IDL: ChainlinkSolanaDemo = {
  "version": "0.1.0",
  "name": "chainlink_solana_demo",
  "instructions": [
    {
      "name": "execute",
      "accounts": [
        {
          "name": "decimal",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "chainlinkFeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "chainlinkProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "decimal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "type": "i128"
          },
          {
            "name": "decimals",
            "type": "u32"
          }
        ]
      }
    }
  ]
};
