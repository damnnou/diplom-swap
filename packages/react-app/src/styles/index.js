const styles = {
  app: 'flex z-10 bg-neutral-800',
  mainContainer: 'flex flex-col w-full bg-neutral-800 rounded-r-2xl bg-neutral-800',
  containerHeader: 'flex z-20 justify-between h-[10%] px-12 py-12 items-center border-neutral-700 bg-neutral-800',
  leftSideHeader: 'flex',
  rightSideHeader: 'flex ml-80',
  walletButton: 'px-4 w-56 h-12 bg-yellow-300 uppercase rounded-lg font-semibold',
  containerBody: 'flex fixed w-full h-full max-h-full overflow-y-scroll bg-neutral-800',
  swapWindow: 'cursor-pointer flex flex-col bg-neutral-900 border border-1 rounded-xl border-neutral-600 mx-auto my-auto w-[35%] h-[500px]',
  exchangeWindow: 'h-[110%] flex flex-col justify-start mx-auto mt-24 mb-0 w-[38%]',
  exchangeInput: 'flex w-full h-[120px] rounded-2xl bg-neutral-900',
  exchangeInputInside: 'bg-neutral-700 w-[97.5%] h-[85%] rounded-lg mx-auto my-auto border border-neutral-600  flex justify-between',
  chooseTokenMenu: 'z-100 flex flex-col left-1/4 top-[15%] py-6 px-36 absolute w-1/2 h-3/4 bg-neutral-800 text-white rounded-lg',
  chooseTokenDiv: 'flex w-full h-fit bg-neutral-700 hover:bg-neutral-600 p-4 border-b last:border-none border-neutral-600 cursor-pointer',
  activeSwapButton: 'px-4 w-full mt-2 h-16 bg-yellow-300 uppercase rounded-lg font-semibold',
  disabledSwapButton: 'px-4 w-full mt-2 h-16 bg-yellow-300 uppercase rounded-lg font-semibold',
};

export default styles;
