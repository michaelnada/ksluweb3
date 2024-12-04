import Image from "next/image";

export default function Home() {

  

  return (
    // 記事だけじゃなくて写真も欲しいが……　そのための右開けがあります（スマホ版ならPHOTOは下）
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
      <div className="w-[100%] text-white text-center">
        <a href="." className="underline">関西学生文芸連合TOP</a>
        　&gt;&gt;　『About Us』
      </div>
      <div className=" text-3xl md:text-4xl my-2 md:my-5  text-white px-4 py-3">
          About Us
      </div>
      <div className="px-[20px] h-max">
        
        <div className="text-white text-xl line-height-9 px-[30px] lg:w-[60%]">
          <p>
        関西学生文芸連合（通称：関文連）は、主に関西在住の文芸に興味がある中高生の団体で、現在のメンバーは約70人です。前身は2017年に設立した「関西文芸部連合」であり、メンバーも少数でしたが、部活動単位では参加できない生徒も多くいたため、2018年に個人単位でも参加できるようにし、「関西学生文芸連合」と改称しました。コロナ禍で一時期活動が途切れていましたが、2022年に再興し、現在に至っています。 会員の中には文芸以外にも本や芸術、はたまた科学など、色んな分野に興味がある中高生がおり、各々の視野を広げるきっかけにもなっています。
        関西学生文芸連合の主な活動は以下の通りです。
        </p>
        <ul　className="list-disc pl-7">
        <li>文芸誌『息吹』の制作・発行・文学フリマなどへの出店</li>
        <li>「関西俳句バトル2024」など、対外的イベントの開催</li>
        <li>連合内での交流</li>
       </ul>
      メンバーは普段から関文連のLINEグループ、オープンチャット、Discordサーバー等で交流しています。また、メンバー同士の交流を深めるイベントとして、箕面大滝や、万博記念公園などへの遠足を行っています。そのほかにも、イベント開催のノウハウや編集・校正の技術を伝承する研修会なども開催しています。 また、公式イベントではありませんが、関文連内では有志によって、TRPG、ビブリオバトル、作曲などのプロジェクトも行われています。 これらの活動は、Twitter（現X）、Instagram、YouTubeなどでも発信しています。

関西学生文芸連合には、文芸に興味のある関西圏の中高生なら、だれでも参加できます。文芸部の所属経験などは問いません。興味がある方は、ぜひご連絡ください。
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

