const abi=[{constant:!0,inputs:[{name:"_buyer",type:"address"}],name:"contributionAmount",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"crowdsaleActive",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"withdrawOwnerEth",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"crowdsaleEnded",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"endTime",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"exchangeRate",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"tokensSold",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"setTokens",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_buyer",type:"address"}],name:"tokenPurchaseAmount",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"firstPriceChange",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"sendPurchase",outputs:[{name:"",type:"bool"}],payable:!0,type:"function"},{constant:!0,inputs:[],name:"startTime",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"withdrawTokens",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"withdrawLeftoverWei",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_exchangeRate",type:"uint256"}],name:"setTokenExchangeRate",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"tokensPerEth",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_buyer",type:"address"}],name:"leftoverWeiAmount",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"changeInterval",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"capAmount",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"ethRaised",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{inputs:[{name:"owner",type:"address"},{name:"capAmountInCents",type:"uint256"},{name:"startTime",type:"uint256"},{name:"endTime",type:"uint256"},{name:"tokenPricePoints",type:"uint256[]"},{name:"fallbackExchangeRate",type:"uint256"},{name:"changeInterval",type:"uint256"},{name:"percentBurn",type:"uint8"},{name:"token",type:"address"}],payable:!1,type:"constructor"},{payable:!0,type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"buyer",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"LogTokensBought",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"Msg",type:"string"}],name:"LogErrorMsg",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"Msg",type:"string"}],name:"LogTokenPriceChange",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_bidder",type:"address"},{indexed:!1,name:"Amount",type:"uint256"}],name:"LogTokensWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_bidder",type:"address"},{indexed:!1,name:"Amount",type:"uint256"}],name:"LogWeiWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"Msg",type:"string"}],name:"LogOwnerEthWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_buyer",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"Msg",type:"string"}],name:"LogNoticeMsg",type:"event"}];$(document).ready(function(){const c=new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/vd6jCewaT3M1yTnky71m")),d=c.eth.contract(abi).at("0xa7BAd60Aa9F853b4F3195C6964E4464eaE078410");var e=function(h){const j=6.048e8,k=8.64e7,l=1.5069672e12+j,m=l+j,n=m+j;var p=new Date().getTime();void 0!=h&&(p=h);var q=0;return q=p>l?p>m?p>n?(n+j-p)/k:(n-p)/k:(m-p)/k:(l-p)/k,Math.round(q)},f=setInterval(function(){g()},3e4),g=function(){d.tokensPerEth(function(h,i){if(h)console.error(h);else{$("#currentRate").text(i+" ENO/ETH");var j=Math.round(100*(i/172-1)),k=e();$("#bonusDaysLeft").text(k),$("#bonusPerc").text(j+"%")}}),d.tokensSold(function(h,i){if(h)console.error(h);else{var j=c.fromWei(i,"ether"),k=parseFloat(j).toFixed(2);$("#currentDistribution").text(k+" ENO")}}),d.ethRaised(function(h,i){if(h)console.error(h);else{var j=c.fromWei(i,"ether"),k=parseFloat(j).toFixed(2),l=Math.round(1e4*(parseFloat(j)/3333))/100;$("#totalRaised").text(k+" ETH"),$("#progress_percentage").text(l),$("#ico-progress").css("width",l+"%")}})};g()});
