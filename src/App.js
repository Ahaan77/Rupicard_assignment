import './App.css';
import { useWindowSize } from "@uidotdev/usehooks";

function App() {

  const size = useWindowSize();

  return (
    <div>
      <header className='header'>
        <div className='header-box'>
          <img className='uni' src="/logo.svg" />
          {size.width > 768 ? <div className='mt-4 cursor-pointer visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[9px] px-[30px]'>
            Uni Paychek
          </div> : <img className='h-4 mt-5' src='/hamburger.svg' alt="hamburger" />}
        </div>
      </header>
      <div>
        <div className='relative h-[100vh] w-full flex items-center justify-center'>
          <div className='flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent'>
            <img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" className='h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6' />
            <div className='z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6'>
              <h1 className='font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 tracking-wide '>
                <span>
                  <strong>NX Wave.</strong>
                  The next-gen credit card for those who love rewards
                </span>
              </h1>
              <div className='mt-4 md:mt-0'>
                <p className='font-medium text-sm md:text-base md:mb-9  '>
                  1% Cashback
                  <svg className="mx-[8px] mb-[2px] inline leading-5" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000" ></path></svg>
                  5x Rewards
                  <svg className="mx-[8px] mb-[2px] inline leading-5" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000" ></path></svg>
                  Zero Forex Markup
                </p>
              </div>
              <div className='hidden md:block'>
                <div className='flex justify-between items-center block max-w-[94vw]'>
                  <div className='flex flex-col'>
                    <form>
                      <div className='flex bg-black p-1 pl-2 rounded-xl justify-between'>
                        <div className='flex items-center'>
                          <input className='bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44' placeholder='Enter Phone Number' />
                          <span className='w-6 flex items-center justify-end h-full'></span>
                        </div>
                        <button type="submit" className='text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[#FDEF78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed'>
                          <span>Apply Now</span>
                        </button>
                      </div>
                    </form>
                    <div className='consent flex items-center py-4 px-2 max-w-xs'>
                      <input checked type='checkbox' className='bg-white' />
                      <label className='consent ml-2 text-white md:text-black text-[10px] leading-3 cursor-pointer'>
                        You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <video className='back' autoPlay muted loop playsInline>
            <source src="https://www.uni.cards/videos/nxt_wave_bg.mp4" />
          </video>
        </div>
      </div>
      <div className='py-12 md:py-[150px] bg-white'>
        <section>
          <div className='w-full max-w-7xl mx-auto px-6 md:px-4 undefined'>
            <div className='flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium'>
              <p style={{ opacity: 1, transform: 'none' }}>
                Earn 1% assured cashback<span className='head'> on your spends. Get </span>
                5X
              </p>
              <p style={{ opacity: 1, transform: 'none' }}>
                more value than cashback<span className='head mx-2'> at the Uni store. Enjoy</span>
              </p>

              <p style={{ opacity: 1, transform: 'none' }}>
                <span className='head text-[#9EA7AE] mx-2'> round the clock</span>
                Whatsapp support.<span className='head text-[#9EA7AE] mx-2'> And it's</span>
              </p>
              <p style={{ opacity: 1, transform: 'none' }}>
                lifetime free<span className='head mx-2'>; no joining fee, no annual charges.</span>
              </p>
            </div>
            <div className='flex md:justify-center py-12' style={{ opacity: 1, transform: 'none' }}>
              <div className='flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center arrow'>
                <img src="https://www.uni.cards/images/down_arrow.svg" loading='lazy' className='w-9 md:w-14 css-0' />
              </div>
            </div>
          </div>
        </section>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-4 px-8'>
          <div className='flex justify-center flex-col'>
            <div className='flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8'>
              <div className='flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]'>
                <div className='w-full md:w-[300px] lg:w-[510px]'>
                  <div>
                    <span style={{ fontWeight: 700 }}>1% assured cashbacks on your spends.
                    </span>
                    <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                      The more you spend, the more you earn.
                    </span>
                  </div>
                  <div>
                    <div className='leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]'>
                      Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.
                    </div>
                  </div>
                </div>


              </div>
              <div className='w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]'>
                <div className='flex justify-center overflow-hidden'>
                  <div className='relative w-[280px] lg:w-[448px]'>
                    <img src="https://www.uni.cards/images/one_percent_cashback.png" />

                  </div>

                </div>

              </div>
            </div>
            <div className='flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8'>
              <div className='flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]'>
                <div className='w-full md:w-[300px] lg:w-[510px]'>
                  <div>
                    <span style={{ fontWeight: 700 }}>5x more value than your cashback,
                    </span>
                    <span style={{ fontWeight: 400, color: '#9EA7AE' }}> only at the Uni Store.
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]'>
                <div className='flex justify-center overflow-hidden'>
                  <div className='relative w-[280px] lg:w-[448px]'>
                    <img src="https://www.uni.cards/images/five_x_rewards.png" alt="five_x" />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8'>
              <div className='flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]'>
                <div className='w-full md:w-[300px] lg:w-[510px]'>
                  <div>
                    <span style={{ fontWeight: 700 }}>Zero Forex Markup.
                    </span>
                    <span style={{ fontWeight: 400, color: '#9EA7AE' }}> Go international, without any fees.
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]'>
                <div className='flex justify-center overflow-hidden'>
                  <div className='relative w-[280px] lg:w-[448px]'>
                    <img src="https://www.uni.cards/images/forex_globe.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center'>
              <p>
                Lifetime
                <span className='text-uni-green ml-2'>free. </span>
                <span className='block sm:inline-block md:text-center'>No joining fee. </span>
                <span className='block md:text-center'> No annual charges.</span>
              </p>

            </div>

          </div>

        </div>

      </div>
      <section className='py-12 lg:py-[100px] bg-black py-8 relative'>
        <img src="https://www.uni.cards/images/circles.png" alt="circles" className='absolute top-0 h-auto w-[70%]' />
        <div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6'>
          <div className='mx-auto w-full flex-[50%] flex-grow-0 my-auto'>
            <p className='text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]'>
              We’ve all heard of instant groceries, now say hello to<br></br>
              <span className="bg-gradient-to-r from-[#00dcc8] to-[#fff061] bg-clip-text text-transparent"> instant credit.</span>
            </p>
            <p className='text-[#BFC9CC] text-[14px] md:text-2xl'>
              0% hassle, 100% paperless. Get your
              <br></br>
              Uni Card instantly.

            </p>

          </div>
          <div className='m-auto w-full md:w-[450px] h-auto md:flex-[50%]'>
            <img src="https://www.uni.cards/images/nx-wave/app_screen_1.webp" className='m-auto w-[80%] h-auto css-1e2fy0l' alt="aa" />

          </div>

        </div>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6'>
          <div className='mx-auto w-full flex-[50%] flex-grow-0 my-auto'>
            <p className='text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]'>
              With Uni, <br></br>
              <span className="bg-gradient-to-r from-[#00dcc8] to-[#fff061] bg-clip-text text-transparent"> you’re always in control.</span>
            </p>
            <p className='text-[#BFC9CC] text-[14px] md:text-2xl'>
              Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.

            </p>

          </div>
          <div className='m-auto w-full md:w-[450px] h-auto md:flex-[50%]'>
            <img src="https://www.uni.cards/images/nx-wave/app_screen_2.webp" className='m-auto w-[80%] h-auto css-1e2fy0l' alt="aa" />

          </div>

        </div>

      </section>
      <section className='py-12 lg:py-[100px] bg-black'>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-between'>
          <div className='flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0'>
            <div className='flex-[50%] flex-shrink-0 flex w-full'>
              <div className='w-full h-36 relative'>
                <img className='absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0' src="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp" alt="jj" />

              </div>

            </div>
            <div className='flex-[50%] flex flex-col'>
              <p className='font-medium text-base text-white leading-[18px] md:text-2xl'>
                Help, just a WhatsApp away. Anytime, Anyday.

              </p>
              <p className='text-sm text-gray-400 mt-2 md:text-lg'>
                <span>
                  During hectic work hours. On lazy sunday mornings. In the thick of
                  night. Anytime.
                </span>

              </p>


            </div>

          </div>
          <div className='flex flex-row-reverse w-full items-center md:flex-col md:max-w-xs my-12 md:my-0'>
            <div className='flex-[50%] flex-shrink-0 flex w-full'>
              <div className='w-full h-36 relative'>
                <img className='absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0' src="https://www.uni.cards/images/nx-wave/rupee_bubble.webp" alt="jj" />

              </div>

            </div>
            <div className='flex-[50%] flex flex-col'>
              <p className='font-medium text-base text-white leading-[18px] md:text-2xl'>
                No hidden charges, no last minute surprises.

              </p>
              <p className='text-sm text-gray-400 mt-2 md:text-lg'>
                <span>
                  100% money back guarantee if a charge is applied without your
                  knowledge.
                </span>

              </p>


            </div>

          </div>
          <div className='flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0'>
            <div className='flex-[50%] flex-shrink-0 flex w-full'>
              <div className='w-full h-36 relative'>
                <img className='absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0' src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp" alt="jj" />

              </div>

            </div>
            <div className='flex-[50%] flex flex-col'>
              <p className='font-medium text-base text-white leading-[18px] md:text-2xl'>
                Super secure. Because we care about your money.

              </p>
              <p className='text-sm text-gray-400 mt-2 md:text-lg'>
                <span>
                  <img className='mt-[24px]' src="https://www.uni.cards/images/pcidss_cert.svg" alt="pci" />
                </span>

              </p>


            </div>

          </div>

        </div>

      </section>
      <section className='py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]'>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:flex-col text-left md:text-center'>
          <p className='mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]'>
            <span>At Uni, we’re committed to<span className='bg-gradient-to-r from-[#00dcc8] to-[#fff061] bg-clip-text text-transparent'> delivering an unmatched credit experience </span> for millions of Indians.</span>

          </p>
          <p className='mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl'>On this mission, we’ve partnered with some of the best in the business.</p>
          <div className='md:mt-24 flex flex-row justify-center flex-wrap'>
            <div className='flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4'>
              <img className='h-full w-full' src="https://www.uni.cards/images/SBM.svg" alt="sbm" />

            </div>

          </div>

        </div>

      </section>
      <div className='flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12'>
        <p className='max-w-3xl'>
          Please note that to stay compliant with RBI guidelines, we have discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </p>

      </div>
      <section className='py-12 lg:py-[100px] bg-background-gradient lg:py-[100px] bg-cover download-bg'>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-around items-center my-4'>
          <p className='mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight'>
            Download now to get started
          </p>
          <div className='flex'>
            <a className='w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2' >
              <svg viewBox="0 0 16 16" focusable="false" className="chakra-icon css-xcmdz3"><path d="M0.813438 0C0.793438 0.062 0.773438 0.123333 0.773438 0.205333V15.6913C0.773438 15.836 0.814104 15.918 0.896104 16L8.5061 7.938L0.813438 0ZM9.01944 8.472L10.9868 10.502L8.1781 12.102C8.1781 12.102 4.6081 14.1313 2.63944 15.2613L9.01944 8.472ZM9.55344 7.918L11.6641 10.1127C11.9948 9.92867 14.5781 8.45133 14.9468 8.246C15.3361 8.02067 15.2968 7.71267 14.9661 7.54867C14.6601 7.37867 12.0768 5.89867 11.6861 5.65867L9.55077 7.92L9.55344 7.918ZM9.0181 7.38467L11.0074 5.272L8.1681 3.65133C8.1681 3.65133 3.53944 1.00333 1.99944 0.119333L9.01944 7.38467H9.0181Z" fill="black"></path></svg>
              Google Play
            </a>
            <a className='w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2' >
              <svg viewBox="0 0 16 16" focusable="false" className="chakra-icon css-xcmdz3">
                <g clip-path="url(#clip0)"><path d="M4.71676 15.6999C4.40143 15.4893 4.12143 15.2313 3.88743 14.9333C3.63209 14.6246 3.39543 14.2999 3.17809 13.9639C2.66743 13.2173 2.26809 12.4006 1.99143 11.5399C1.65809 10.5386 1.49609 9.57994 1.49609 8.64194C1.49609 7.59527 1.72276 6.68194 2.16409 5.91527C2.49076 5.31527 2.97743 4.81327 3.56409 4.4606C4.13076 4.10727 4.79076 3.91393 5.45743 3.9006C5.69076 3.9006 5.94409 3.93393 6.21076 4.0006C6.40409 4.05393 6.63743 4.1406 6.92409 4.24727C7.29076 4.38727 7.49076 4.47393 7.55743 4.49393C7.77076 4.57394 7.95076 4.60727 8.09076 4.60727C8.19743 4.60727 8.35076 4.57394 8.52076 4.5206C8.61743 4.48727 8.80076 4.42727 9.06076 4.31393C9.31809 4.2206 9.52209 4.1406 9.68409 4.0806C9.93076 4.00727 10.1694 3.9406 10.3841 3.90727C10.6441 3.86727 10.9021 3.85393 11.1494 3.87393C11.6228 3.90727 12.0561 4.00727 12.4428 4.15393C13.1228 4.42727 13.6714 4.85394 14.0808 5.4606C13.9074 5.56727 13.7474 5.69127 13.5974 5.82727C13.2728 6.11394 12.9974 6.45394 12.7774 6.8306C12.4908 7.34394 12.3441 7.92394 12.3481 8.5106C12.3581 9.2326 12.5414 9.86727 12.9081 10.4173C13.1661 10.8173 13.5108 11.1599 13.9308 11.4413C14.1374 11.5813 14.3188 11.6779 14.4908 11.7413C14.4108 11.9913 14.3228 12.2346 14.2208 12.4746C13.9894 13.0126 13.7141 13.5279 13.3874 14.0146C13.0994 14.4346 12.8728 14.7479 12.7008 14.9546C12.4328 15.2746 12.1741 15.5146 11.9141 15.6859C11.6274 15.8759 11.2908 15.9766 10.9461 15.9766C10.7128 15.9866 10.4794 15.9566 10.2568 15.8919C10.0634 15.8286 9.87276 15.7573 9.68609 15.6766C9.49076 15.5873 9.28876 15.5113 9.08276 15.4499C8.82943 15.3833 8.56943 15.3513 8.30676 15.3519C8.04009 15.3519 7.78009 15.3853 7.53343 15.4486C7.32676 15.5073 7.12676 15.5793 6.92876 15.6653C6.64876 15.7819 6.46543 15.8586 6.35876 15.8919C6.14276 15.9559 5.92143 15.9946 5.69876 16.0086C5.35209 16.0086 5.02943 15.9086 4.70809 15.7086L4.71676 15.6999ZM9.28609 3.39327C8.83276 3.61993 8.40209 3.71593 7.97076 3.68393C7.90409 3.25327 7.97076 2.8106 8.15076 2.32593C8.31076 1.9126 8.52409 1.53927 8.81743 1.20593C9.12409 0.859268 9.49076 0.572601 9.90409 0.365934C10.3441 0.139268 10.7641 0.0192676 11.1641 -0.000732422C11.2174 0.452601 11.1641 0.899268 10.9974 1.37927C10.8454 1.80593 10.6188 2.19927 10.3308 2.5526C10.0408 2.89927 9.68076 3.18593 9.27343 3.3926L9.28609 3.39327Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
              App Store
            </a>

          </div>

        </div>

      </section>
      <section>
        <div className='relative w-full bg-black-2'>
          <div className='flex items-center justify-center p-4 text-gray-400'>
            <p>Uni maintains the highest level of security standards</p>
            <img className='ml-3 w-20 css-0' src='https://www.uni.cards/images/pcidss_cert.svg' />
          </div>
        </div>
        <footer className='flex flex-col items-center bg-black-12 text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40'>
          <div className='w-full max-w-[1240px] min-h-[auto]'>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
              <div className='flex flex-col w-full lg:w-1/2 items-start'>
                <div className='mx-0 md:m-0'>
                  <svg class="Logo_logo_white__zowGB" viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z" fill="#00DCC8"></path></svg>
                </div>
                <div className='text-grey-dark text-[13px] lg:text-base'>
                  <p className='text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]'> Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony, Koramangala, Bengaluru, Karnataka 560034</p>
                  <p className='text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px] mt-4'>Contact Us: 080 68216821</p>
                  <p className='text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]'>Email: care@uni.club</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#D9D9D9] h-[1px] w-full max-w-[1240px] mt-8'>
          </div>
          <div className='py-4 w-full max-w-[1240px] min-h-[auto]'>
            <p className='text-left text-[#FFFFFF]'>
              <u>Grievance Redressal Mechanism</u> - SBM Bank India
            </p>
          </div>
          <div className='spacer-gradient h-[1px] w-full max-w-[1240px] mx-0 mb-5 md:mb-8'>
          </div>
          <div className='flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between'>
            <div className='flex w-full flex-wrap flex-1 justify-center md:justify-start'>
              <div className='h-10 w-30'>
                <a className='py-0 px-[18px] h-[60px]'>Instagram</a>
              </div>
              <div className='h-10 w-30'>
                <a className='py-0 px-[18px] h-[60px]'>LinkedIn</a>
              </div>
              <div className='h-10 w-30'>
                <a className='py-0 px-[18px] h-[60px]'>Twitter</a>
              </div>
              <div className='h-10 w-30'>
                <a className='py-0 px-[18px] h-[60px]'>Facebook</a>
              </div>
              <div className='h-10 w-30'>
                <a className='py-0 px-[18px] h-[60px]'>Careers</a>
              </div>
            </div>
            <div className='p-0 pb-5 flex justify-center flex-wrap'>
              <span data-testid="cc-kfs"><a class="h-[60px]" href="" target="_blank">Credit Card KFS</a><span class="px-2">|</span></span>
              <span data-testid="nxwave-tnc"><a class="h-[60px]" href="" target="_blank">Credit Card T&amp;Cs</a><span class="px-2">|</span></span>
              <span data-testid="uni-tnc"><a class="h-[60px]" href="" target="_blank">Uni T&amp;Cs</a><span class="px-2">|</span></span>
              <span data-testid="nbfc-tnc"><a class="h-[60px]" href="" target="_blank">Lending Partner TnCs</a></span>
            </div>
          </div>
        </footer>
      </section>
      {size.width < 768 ?
        <div className='w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r'>
          <div className='w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium'>
            <div className='flex flex-col transition-all ease-in'>
              <button className='p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]'>
                <span>
                  Apply Now
                </span>
                <img src="https://www.uni.cards/images/right_arrow.svg" alt="arrow" width="21px" className='inline ml-3 css-0' />
              </button >
            </div>
          </div>
        </div>
        : null
      }
    </div>
  );
}

export default App;
