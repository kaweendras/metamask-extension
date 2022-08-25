/**
 * @typedef {object} FirstTimeState
 * @property {object} config Initial configuration parameters
 * @property {object} NetworkController Network controller state
 */

 import {
  MATIC_SYMBOL,
  POLYGON_CHAIN_ID,
  POLYGON_DISPLAY_NAME,
  POLYGON_RPC_URL,
} from '../../shared/constants/network';

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {},
  PreferencesController: {
    frequentRpcListDetail: [
      {
        rpcUrl: POLYGON_RPC_URL,
        chainId: POLYGON_CHAIN_ID,
        ticker: MATIC_SYMBOL,
        nickname: POLYGON_DISPLAY_NAME,
        rpcPrefs: {
          blockExplorerUrl: 'https://polygonscan.com',
        },
      },
      {
        rpcUrl: 'http://localhost:8545',
        chainId: '0x539',
        ticker: 'ETH',
        nickname: 'Localhost 8545',
        rpcPrefs: {},
      },
    ],
  },
};

export default initialState;
