const styles = {
  app: 'flex z-10 bg-primary',
  mainContainer: 'flex flex-col w-full rounded-r-2xl sm:max-lg:pb-[25%]',
  containerHeader: 'flex z-20 w-screen fixed justify-between h-[5%] px-12 max-md:invisible py-10 items-center border-[#363636] bg-[#242424] ',
  leftSideHeader: 'flex ml-[2%] my-[1%]',
  rightSideHeader: 'flex mr-[1%] my-[1%]',
  walletButton: 'px-4 w-56 h-12 bg-[#f2fe67] uppercase rounded-lg font-semibold',
  containerBody: 'flex mb-6 h-screen bg-[#242424] -translate-x-[84px] ',
  swapWindow: 'cursor-pointer flex flex-col bg-[#1f1f1f] border border-1 rounded-xl border-[#494949] mx-auto 2xl:w-[500px] md:w-[450px] 2xl:h-[450px] md:h-[400px] md:mt-[15%] 2xl:mt-[12%] lg:mt-[12%] sm:mt-[15%] translate-x-24',
  exchangeWindow: 'h-[110%]  w-[750px] flex mx-auto sm:mt-[80px] lg:mt-[90px] 2xl:mt-[120px] mb-0 lg:text-sm ',
  exchangeInput: 'flex h-[110px] rounded-2xl bg-[#1f1f1f] overflow-hidden',
  exchangeInputInside: 'bg-[#363636] w-[97.5%] h-[85%] rounded-lg overflow-hidden mx-auto my-auto border border-[#494949]  flex justify-between',
  chooseTokenMenu: 'z-20 h-fit w-screen top-0 flex flex-col left-28 sm:pt-[130px] lg:pt-[140px] 2xl:pt-[170px] pb-6 px-[35%] absolute min-h-[70%] bg-[#242424] text-white rounded-lg',
  chooseTokenDiv: 'flex w-full h-fit bg-[#363636] hover:bg-[#494949] p-4 border-b last:border-none border-[#494949] cursor-pointer',
  activeSwapButton: 'px-4 w-full mt-6 h-fit py-4 bg-[#f2fe67] uppercase rounded-lg font-semibold',
  disabledSwapButton: 'px-4 w-full mt-6 h-fit py-4 bg-[#363636] uppercase rounded-lg font-semibold',
  message: 'mx-auto mt-4 text-neutral-200 text-xl',
  scrolled: 'border-b border-[#363636] shadow-sm shadow-[#1f1f1f]',
  transactionPage: 'h-[110%] flex flex-col justify-start mx-auto sm:mt-[80px] lg:mt-[100px] 2xl:mt-[150px] mb-0 lg:text-sm lg:w-[1050px] 2xl:w-[1100px]',
  tableHeader: 'h-14 items-center flex mt-6 p-4 border-[#363636] bg-[#363636] rounded-tl-xl rounded-tr-xl border-b border-neutral-500',
  tableBody: 'h-20 items-center flex hover:bg-[#494949] cursor-pointer justify-between last: px-4 py-6 border-b border-[#494949] bg-[#363636]',
};

export default styles;
