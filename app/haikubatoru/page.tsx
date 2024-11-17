import Image from "next/image";

export default function Home() {

  

  return (
    <main className="font-body bg-black h-lvh">
      <nav className="py-[20px] px-[20px] flex w-[100%] justify-between bg-gradient-to-r from-blue-200 to-white">
        <div className="flex flex-col relative border-r-4 w-[250px] border-white ">
          <div className="flex space-x-5">
            <a href="https://twitter.com/bungeirengo_" className=""><img src="/images/logo-white.png" className="h-[30px]"></img></a>
            <a href="https://www.instagram.com/kansaigakuseibungeirengou" className=""><img src="/images/Instagram_Glyph_White.png" className="h-[30px]"></img></a>
            <a href="https://www.youtube.com/@kanbunren" className=""><img src="/images/yt_icon_mono_dark.png" className="h-[30px]"></img></a>
          </div>
          <div className="text-white text-4xl absolute bottom-[-20px] right-[70px]  ">
            links.
          </div>
        </div>
        <div className="flex self-center">
          <div className="flex self-center flex-col mx-[20px]">
            <div className="text-lg">
            Kansai Student Literary Union
            </div>
            <div className="text-3xl">
              関西学生文芸連合
            </div>
          </div>
          <img className="h-[80px]" src="/images/関文連digitalロゴ.png"></img>
        </div>
      </nav>
      <div className="px-[10px]">
      <div className="text-4xl my-5  text-white px-4 py-3">
          関西学生文芸連合
      </div>
      <div className="px-[20px] h-max">
        <div className="">

        </div>
      <div className="border-t-2 text-white border-white pt-[20px] mt-[50px] text-center">  
        
      </div>
      </div>
      </div>
      
    </main>
  );
}
