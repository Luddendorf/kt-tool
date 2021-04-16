export const footerInfo = function (captainData, footerDivInfo, shipsInfo) {
  footerDivInfo.textContent = `${captainData.name},отчаянный пират, человек чести.Судно:${shipsInfo[15].className} ,"${shipsInfo[15].shipName}"`;
};
