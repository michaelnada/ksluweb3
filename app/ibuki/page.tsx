import Image from "next/image";

export default function Home() {

  

  return (
    <main className="font-body bg-black min-h-screen ">
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
      <div className="w-[100%] text-white text-center">
        <a className="underline">関西学生文芸連合TOP</a>
        　`&gt;``&gt;`　『息吹』
      </div>
      <div className=" text-3xl md:text-4xl my-2 md:my-5  text-white px-4 py-3">
          『息吹』
      </div>
      <div className="px-[20px] h-max">
        
        <div className="text-white text-lg px-[30px]">
        『息吹』は、関西学生文芸連合が年に２～３冊のペースで制作・発行している文芸誌です。内容は、関西学生文芸連合メンバーの作品で、小説、短歌、俳句、詩など、文学作品であればジャンルは問うていません。メンバーにとっては、普段はあまり関わりのない他校の会員の作品を読むことで、新たな刺激を得られる貴重な機会ともなっています。また、表紙や編集、校正も全て会員の手で行っています。
なお、この『息吹』などは、「文学フリマ」（外部サイトに遷移します）などに出店した際に販売しています。文学フリマは、全国各地で開催される、文学に関係した自主制作の作品を販売できる場です。関文連では主に関西圏で開催されるものに参加しています。また、現在は、大阪・中崎町の古書店「葉ね文庫」さん（Twitter（現X）に遷移します）でも取り扱っていただいています。

過去に発行した『息吹』、および出店した「文学フリマ」などのイベントの概要は以下の通りです。

    息吹 vol.1　　2018年3月（つながるイベント@kyoto）
    息吹 vol.2　　2019年1月（第三回文学フリマ京都）
    息吹 vol.3　　2020年3月
    息吹 vol.4　　2021年1月
    息吹 vol.5　　2023年2月（文学フリマ広島5）
    息吹 vol.6　　2023年9月（文学フリマ大阪11）
    息吹 vol.7　　2024年1月（文学フリマ京都9）
    息吹 vol.8　　2024年7月（文学フリマ香川1）
    息吹 vol.9　　2025年1月　予定

        </div>
      {/* フッター */}
      <div className="border-t-2 text-white border-white pt-[20px] mt-[50px] text-center">
          <p className="text-lg mb-[7px]"><a href="" className="underline">関西学生文芸連合TOP</a> &nbsp;/&nbsp;
            <a href="ForMember" className="underline">For&nbsp;Member</a></p>
          <p>©&nbsp;2024-2025&nbsp;関西学生文芸連合&nbsp;/&nbsp;Last Managed: 2024/11/17&nbsp;16:51&nbsp;Michael</p>
        </div>
        {/* フッター終 */}
      </div>
      </div>
      
    </main>
  );
}

