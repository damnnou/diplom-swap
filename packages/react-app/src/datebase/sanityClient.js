import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bhkpwufh',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk9vovTdm8kWscZljmbfnL5P9BDfBHYXAGBo0U0IAAG0mudFyUMItanGm8sLh8LXbSTGcjBl1r2O4HzTCV4VwOaJsalWKtLHXv0MbNdsBaClg01HOaYYrdxrLUkzlvgo5mZ896GvO6XxzmU2iJi4tyPWsS9MP6fklTChDQjF7KKowSia3GN3',
  useCdn: false,
})
