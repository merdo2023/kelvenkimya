type MessageTree = Record<string, unknown>

function omitKeys<T extends MessageTree>(value: T, keys: string[]): T {
  const next = { ...value }
  for (const key of keys) {
    delete next[key]
  }
  return next
}

export function pickClientMessages(messages: MessageTree): MessageTree {
  const products = messages.products as MessageTree | undefined
  const projects = messages.projects as MessageTree | undefined
  const home = messages.home as MessageTree | undefined
  const homeServices = home?.services as MessageTree | undefined

  return {
    ...messages,
    products: products ? omitKeys(products, ['categories']) : products,
    projects: projects ? omitKeys(projects, ['items']) : projects,
    home:
      home && homeServices
        ? {
            ...home,
            services: omitKeys(homeServices, ['items']),
          }
        : home,
  }
}
