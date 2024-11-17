import Image from "next/image";

export default function Home() {

  

  return (
    <main className="font-body bg-black min-h-screen">
      <nav className="py-[20px] px-[20px] flex w-[100%] justify-between bg-gradient-to-r from-blue-200 to-white">
        <div className="flex flex-col relative sm:border-r-4 sm:w-[250px] border-white ">
          <div className="flex space-x-5 sm:space-x-7 md:space-x-5">
            <a href="https://twitter.com/bungeirengo_" className="">
              <img src="/images/logo-white.png" className="h-[30px] sm:h-[40px] md:h-[30px]"></img>
            </a>
            <a href="https://www.instagram.com/kansaigakuseibungeirengou" className="">
              <img src="/images/Instagram_Glyph_White.png" className="h-[30px] sm:h-[40px] md:h-[30px]"></img>
            </a>
            <a href="https://www.youtube.com/@kanbunren" className="">
              <img src="/images/yt_icon_mono_dark.png" className="h-[30px] sm:h-[40px] md:h-[30px]"></img>
            </a>
          </div>
          <div className="hidden md:inline-block text-white text-4xl absolute bottom-[-20px] right-[70px]  ">
            links.
          </div>
        </div>
        <div className="flex self-center">
          <div className="flex self-center flex-col sm:mx-[20px]">
            <div className="sm:text-lg">
            Kansai Student Literary Union
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl">
              関西学生文芸連合
            </div>
          </div>
          <img className="sm:h-[80px] hidden md:inline-block" src="/images/関文連digitalロゴ.png"></img>
        </div>
      </nav>
      <div className="px-[10px]">
      <div className="hidden sm:inline-block text-3xl md:text-4xl my-2 md:my-5  text-white px-4 py-3">
          関文連の会員向けコンテンツ
      </div>
      <div className="px-[20px] h-max">
        
        <div className="flex flex-col sm:flex-row  sm:space-x-[30px] md:space-x-[40px] lg:space-x-[50px]">
          <div className="my-2 w-[100%] sm:w-[33%] bg-white p-1">
            <a href="">
              <img src="/images/bunhuri.png" className=""></img>
              <div className="text-xl sm:text-2xl lg:text-3xl my-1 md:my-2 mx-1 font-bold">
                編集・校正
              </div>
              <div className="md:text-lg">
                『息吹』を作れるようになろう。
              </div>
            </a>
          </div>
          <div className="my-2 w-[100%] sm:w-[33%] bg-white p-1">
            <a href="">
              <img src="/images/関文連digitalロゴ.png" className=""></img>
              <div className="text-xl sm:text-2xl lg:text-3xl my-1 md:my-2 mx-1 font-bold">
                創作
              </div>
              <div className="md:text-lg">
                文芸コンクールの情報や、作曲を始めるにあたって
                便利なサイトについて紹介しています。
              </div>
            </a>
          </div>
          <div className="my-2 w-[100%] sm:w-[33%] bg-white p-1">
            <a href=""
            > 
              <img src="/images/khb2024_last.png" className="w-[100%]"></img>
              <div className="text-xl sm:text-2xl lg:text-3xl my-1 md:my-2 mx-1 font-bold">
                Web
              </div>
              <div className="md:text-lg">
                このサイトはtailwind、typescriptを導入した環境で開発されています。
                俳句バトルのサイトを作れるようになろう。
              </div>
            </a>
          </div>
        </div>
      <div className="border-t-2 text-white border-white pt-[20px] mt-[50px] text-center">  
      <p className="text-lg mb-[7px]"><a href="." className="underline">関西学生文芸連合TOP</a> &nbsp;/&nbsp;
          <a href="" className="underline">For&nbsp;Member</a></p>
        <p>©&nbsp;2024-2025&nbsp;関西学生文芸連合&nbsp;/&nbsp;Last Managed: 2024/08/16&nbsp;04:01&nbsp;TM</p>
      </div>
      </div>
      </div>
      
    </main>
  );
}
