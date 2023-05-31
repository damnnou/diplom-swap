import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xF9660e94377c64418435d28D0EcCB6A3d8B7B95a";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/HMHzefwZIJeG4VKqKaD7AjCltzcan0Zn",
  },
};