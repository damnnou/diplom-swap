const styles = {
  app: 'flex z-10 bg-neutral-800',
  mainContainer: 'flex flex-col w-full bg-neutral-800 rounded-r-2xl bg-neutral-800',
  containerHeader: 'flex z-20 justify-between h-[10%] px-12 py-10 items-center border-neutral-700 bg-neutral-800 border-b border-neutral-700 shadow-sm shadow-[#1f1f1f]',
  leftSideHeader: 'flex ml-[2%] my-[1%]',
  rightSideHeader: 'flex mr-[1%] my-[1%]',
  walletButton: 'px-4 w-56 h-12 bg-yellow-300 uppercase rounded-lg font-semibold',
  containerBody: 'flex fixed w-full h-full max-h-full overflow-y-scroll bg-neutral-800 static',
  swapWindow: 'cursor-pointer flex flex-col bg-[#1f1f1f] border border-1 rounded-xl border-neutral-600 mx-auto 2xl:w-[500px]  md:w-[450px] 2xl:h-[450px] md:h-[400px] md:mt-[15%] 2xl:mt-[12%] lg:mt-[12%] sm:mt-[15%]',
  exchangeWindow: 'h-[110%] flex flex-col justify-start mx-auto sm:mt-[80px] lg:mt-[100px] 2xl:mt-[150px] mb-0 lg:text-sm lg:w-[550px] 2xl:w-[600px] ',
  exchangeInput: 'flex w-full h-[120px] rounded-2xl bg-[#1f1f1f] overflow-hidden',
  exchangeInputInside: 'bg-neutral-700 w-[97.5%] h-[85%] rounded-lg overflow-hidden mx-auto my-auto border border-neutral-600  flex justify-between',
  chooseTokenMenu: 'z-100 h-fit flex flex-col sm:left-[1%] md:left-[8%] md:top-[25%] lg:top-[20%] sm:top-1/4 py-6 2xl:px-96 sm:px-12 xl:px-64 lg:px-48 md:px-36 absolute sm:w-full md:w-[88%] min-h-[70%] bg-neutral-800 text-white rounded-lg',
  chooseTokenDiv: 'flex w-full h-fit bg-neutral-700 hover:bg-neutral-600 p-4 border-b last:border-none border-neutral-600 cursor-pointer',
  activeSwapButton: 'px-4 w-full h-full mt-6 h-[60px] bg-yellow-300 uppercase rounded-lg font-semibold',
  disabledSwapButton: 'px-4 w-full mt-6 h-[60px] bg-neutral-700 uppercase rounded-lg font-semibold',
  message: 'mx-auto mt-4 text-neutral-200 text-xl',
  scrolled: 'border-b border-neutral-700 shadow-sm shadow-[#1f1f1f]',
  transactionPage: 'h-[110%] flex flex-col justify-start mx-auto sm:mt-[80px] lg:mt-[100px] 2xl:mt-[150px] mb-0 lg:text-sm lg:w-[1050px] 2xl:w-[1100px]',
  tableHeader: 'h-14 items-center flex mt-6 p-4 border-neutral-700 bg-neutral-700 rounded-tl-xl rounded-tr-xl border-b border-neutral-500',
  tableBody: 'h-20 items-center flex hover:bg-neutral-600 cursor-pointer justify-between last:rounded-bl-xl last:rounded-br-xl last:border-none px-4 py-6 border-b border-neutral-600 bg-neutral-700',

};

export default styles;
