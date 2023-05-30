const styles = {
  app: 'flex z-10 bg-neutral-800',
  mainContainer: 'flex flex-col w-full bg-neutral-800 rounded-r-2xl bg-neutral-800',
  containerHeader: 'flex z-20 justify-between h-[10%] px-12 py-12 items-center border-neutral-700 bg-neutral-800 border-b border-neutral-700 shadow-sm shadow-[#1f1f1f]',
  leftSideHeader: 'flex ml-[2%] my-[1%]',
  rightSideHeader: 'flex mr-[1%] my-[1%]',
  walletButton: 'px-4 w-56 h-12 bg-yellow-300 uppercase rounded-lg font-semibold',
  containerBody: 'flex fixed w-full h-full max-h-full overflow-y-scroll bg-neutral-800 static',
  swapWindow: 'cursor-pointer flex flex-col bg-[#1f1f1f] border border-1 rounded-xl border-neutral-600 mx-auto w-[600px] h-[500px] lg:mt-[10%] sm:mt-[15%]',
  exchangeWindow: 'h-[110%] flex flex-col justify-start ml-[33%] mt-[9%] mb-0 w-[38%] ',
  exchangeInput: 'flex w-full h-[120px] rounded-2xl bg-[#1f1f1f] overflow-hidden',
  exchangeInputInside: 'bg-neutral-700 w-[97.5%] h-[85%] rounded-lg overflow-hidden mx-auto my-auto border border-neutral-600  flex justify-between',
  chooseTokenMenu: 'z-100 h-fit flex flex-col left-[11%] top-[15%] py-6 px-96 absolute w-[80%] min-h-[70%] bg-neutral-800 text-white rounded-lg',
  chooseTokenDiv: 'flex w-full h-fit bg-neutral-700 hover:bg-neutral-600 p-4 border-b last:border-none border-neutral-600 cursor-pointer',
  activeSwapButton: 'px-4 w-full h-full mt-6 h-16 bg-yellow-300 uppercase rounded-lg font-semibold',
  disabledSwapButton: 'px-4 w-full mt-6 h-16 bg-neutral-700 uppercase rounded-lg font-semibold',
  message: 'mx-auto mt-4 text-neutral-200 text-xl',
  scrolled: 'border-b border-neutral-700 shadow-sm shadow-[#1f1f1f]',
};

export default styles;
