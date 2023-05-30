export const transactionSchema = {
  name: 'transactions',
  title: 'Transactions',
  type: 'document',
  fields: [
    {
      name: 'txHash',
      title: 'Transaction Hash',
      type: 'string',
    },
    {
      name: 'account',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      name: 'fromToken',
      title: 'From (Token Address)',
      type: 'string',
    },
    {
      name: 'toToken',
      title: 'To (Token Address)',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
  ],
}
