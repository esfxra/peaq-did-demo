import { Sdk } from "@peaq-network/sdk"

async function createSdkInstance(baseUrl, seed) {
  try {
    console.log('creating peaq sdk instance')
    const sdkInstance = await Sdk.createInstance({ baseUrl, seed })
    return sdkInstance
  } catch (error) {
    console.error(`failed to create peaq sdk ${error}`)
  }
}

async function main() {
  // krest -> wss://wss-krest.peaq.network
  // agung -> wss://wsspc1-qa.agung.peaq.network
  const baseUrl = "wss://wsspc1-qa.agung.peaq.network"

  // seed phrase
  const seed = ""

  // did name
  const name = "just a test name"

  const peaqSdk = await createSdkInstance(baseUrl, seed)
  if (!peaqSdk) return

  const { hash } = await peaqSdk.did.create({ name })
  console.log(`did hash: ${hash}`)
}

main()