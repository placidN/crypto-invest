
import Cookies from "js-cookie";

import bitcoinLogo from '../img/asset_imgs/bitcoin.svg'
import ethereumLogo from '../img/asset_imgs/ethereum.svg'
import litecoinLogo from '../img/asset_imgs/litecoin.svg'
import tetherLogo from '../img/asset_imgs/tether.svg'
import xrpLogo from '../img/asset_imgs/xrp.svg'

import logo_white from '../img/main_logo_white.png'
import logo_black from '../img/main_logo_black.png'
import favicon from '../img/favicon.png'

export const initialState = {
    user: (Cookies.get('pbv_client') === undefined) ? null : Cookies.getJSON('pbv_client'),
    rate: 0.00,
    activeInvest: {
        status: false,
        data: null
    },
    controls: {},
    extra: {},
    images: {
        BTC: bitcoinLogo,
        ETH: ethereumLogo,
        LTC: litecoinLogo,
        XRP: xrpLogo,
        USDT: tetherLogo,
        logo_white,
        logo_black,
        favicon
    },
    AssetObj: {
        BTC: 'Bitcoin',
        ETH: 'Ethereum',
        LTC: 'Litecoin',
        XRP: 'XRP',
        USDT: 'Tether'
    },
    API_URL: (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost' ) ? 'http://127.0.0.1:5000' : 'https://api.probityvest.com'
}

const reducer = (state, action)=>{
    switch (action.type) {
        case 'SET_USER':
            Cookies.set('pbv_client', action.data)
            return {
                ...state,
                user: action.data
            }
        case 'CLEAR_USER':
            Cookies.remove('pbv_client')
            
            return {
                ...state,
                user: null
            }
        case 'SET_ADMIN':
            Cookies.set('pbv_admin', action.data)
            return {
                ...state,
                admin: action.data
            }
        case 'CLEAR_ADMIN':
            Cookies.remove('pbv_admin')
            
            return {
                ...state,
                admin: null
            }
        
        
        default:
            return state;
    }
}

export default reducer;