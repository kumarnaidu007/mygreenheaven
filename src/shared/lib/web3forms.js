import { WEB3FORMS_ACCESS_KEY } from '@/shared/constants/env'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitWeb3Form(fields) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('Form service is not configured yet.')
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...fields,
    }),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to send your request right now.')
  }

  return result
}
