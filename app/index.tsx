import Image from "next/image";

export default function Home() {
// 普通のCSSではなくtailwindCSSのため注意　使い方・環境構築はCHATGPTに聞けばなんとかなる
// https://tailwindcss.com/docs/display　本家の説明、分かりやすい　英語なので翻訳拡張機能入れるなどしてガンバレ
// （ちなみに俳バトサイトはCSSです。
// エンジニア担当はどっちも弄れるように頑張ってください。このサイトの開発者はtailwindしか知らない時に作っちゃったから……）
// typescriptで動く要素は技術力よわよわの開発者が作り方を分かっていない（笑）のでやっていない　ゴメンネ
// h- は高さ　w-は幅
// hidden sm:inline-block の記述は、スマホ版では消えることを表す。md:の場合も実質同じ
// フォントはひな明朝　layout.tsxから変えられる　複数フォントの使用も可能
// ここ以下がHTMLに変換されてシステムに送られるらしい
  return (
    // PC向けです。スマホへの対応は一部のみ　待っててください。
    // 進捗60%
    // main:全体
    // コメントは、1行下からのコードブロックへの説明。
    // ○○終　のコメントのみ、ここで1行上のコードブロックが終了したことを表す。
    <main className="font-body bg-black min-h-screen">
    {/* nav:上部ナビゲーションバー */}
    <nav className="py-[20px] px-[20px] flex w-[100%] justify-between bg-gradient-to-r from-blue-200 to-white">
        {/* リンク先 */}
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
          {/* links. の文字　スマホでは消えます */}
          <div className="hidden md:inline-block text-white text-4xl absolute bottom-[-20px] right-[70px]  ">
            links.
          </div>
        </div>
        {/* リンク先終了 */}
        {/* 名称・ロゴ */}
        <div className="flex self-center">

          <div className="flex self-center flex-col sm:mx-[20px]">
            <div className="sm:text-lg">
            Kansai Student Literary Union
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl">
              関西学生文芸連合
            </div>
          </div>
          {/* ロゴ画像 */}
          <img className="sm:h-[80px] hidden md:inline-block" src="/images/関文連digitalロゴ.png"></img>
        </div>
        {/* 名称・ロゴ終了 */}
    </nav>
    {/* ナビゲーションバー終了 */}
    {/* 記事コンテンツ */}
    <div className="px-[10px]">
      {/* タイトル　スマホでは消えます */}
        <div className="hidden sm:inline-block text-3xl md:text-4xl my-2 md:my-5  text-white px-4 py-3">
            関西学生文芸連合
        </div>
      {/* タイトル以下　側面の空白を指定 */}
      <div className="px-[20px] h-max">
        {/* 『About Us』などのカードのところ */}
        <div className="flex flex-col sm:flex-row  sm:space-x-[30px] md:space-x-[40px] lg:space-x-[50px]
          ">
          {/* About Us カーソルを乗せると色が変わります　amber- */}
          <div className="my-2 w-[100%] sm:w-[33%] bg-white p-1
          transition hover:bg-amber-100
          hover:border-solid hover:border-amber-100">
            {/* リンク先　URLではなくファイル指定 */}
            <a href="topics ">
              {/* 画像 */}
              <img src="/images/bunhuri.png" className=""></img>
              <div className="text-xl sm:text-2xl lg:text-3xl my-1 md:my-2 mx-1 font-bold">
                About Us
              </div>
              <div className="md:text-lg">
                関西学生文芸連合についての紹介です。
              </div>
            </a>
          </div>
          {/* About Us終了 */}
          {/* 俳バト2025　来年はやるなら置き換えて */}
          <div className="my-2 w-[100%] sm:w-[33%] bg-white p-1
          transition hover:bg-amber-100
          hover:border-solid hover:border-amber-100">
            {/* リンク先　外部遷移 */}
            <a href="https://kansai-student-literary-union.github.io/kslu/khb2025/index.html" target="_blank" rel="noopener noreferrer"
            > 
              <img src="/images/khb2024_last.png" className="w-[100%]"></img>
              <div className="text-xl sm:text-2xl lg:text-3xl my-1 md:my-2 mx-1 font-bold">
                関西俳句バトル2025
              </div>
              <div className="md:text-lg">
                2025年1月開催の関西俳句バトル2025に関する情報はこちら。（外部リンクへ遷移します）
              </div>
            </a>
            {/* リンク終了 */}
          </div>
          {/* 俳バト終了 */}
          {/* 息吹　ページには息吹の発売情報などを載せている */}
          {/* もし息吹のオンライン販売を始めるなら、ここはその販売先にしてもいいです。どうするかはその時の幹部たちに任せる */}
          <div className="my-2 w-[100%] sm:w-[33%] bg-white p-1
          transition hover:bg-amber-100
          hover:border-solid hover:border-amber-100">
            <a href="ibuki">
              <img src="/images/関文連digitalロゴ.png" className=""></img>
              <div className="text-xl sm:text-2xl lg:text-3xl my-1 md:my-2 mx-1 font-bold">
                『息吹』
                
              </div>
              <div className="md:text-lg">
                連合の文芸誌『息吹』について紹介しています。
              </div>
            </a>
          </div>
          {/* 息吹終了 */}
        </div>
        {/* 最初のカードのところ終 */}
        {/* お知らせ　スマホ版でのデザインとPC版のデザインが大きく異なる、注意　背景色を変えている */}
        <div className="bg-gray-400">
          {/* お知らせ、のタイトル */}
          <div className="">
            <div className="text-3xl md:text-4xl my-2 md:my-5  text-white px-4 py-3">お知らせ</div>
          </div>
          {/* お知らせの記事が入る */}
          <div className="flex overflow-x-auto sm:space-x-[30px] md:space-x-[40px] lg:space-x-[50px] px-[20px]">
            {/* 息吹9 現在リンク先無し */}
            <div className="rounded-md w-[300px] h-[300px] flex-shrink-0 border-4">
              <a>
                <img src="/images/関文連digitalロゴ.png" className="rounded-md"></img>
                <div className="text-3xl">
                  息吹9発売決定！
                </div>
                <div>2024年11月17日</div>
              </a>
            </div>
            {/* 俳バト　PDFへ */}
            <div className="rounded-md w-[300px] h-[300px] flex-shrink-0 border-4">
              <a href="https://kansai-student-literary-union.github.io/kslu/khb2025/pdf/khb2025about.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/images/khb2024_last.png" className="w-[100%] rounded-md"></img>
                
                <div className="text-3xl">
                  関西俳句バトル2025開催要項
                </div>
                <div>2024年10月20日</div>
              </a>
            </div>
            {/* 俳バト一般観戦フォーム　フォームへ */}
            <div className="rounded-md w-[300px] h-[300px] flex-shrink-0 border-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdd9Vdf2Egzto9gAN1xHqWAiiIddsDpPUSWh3Zg6bDm0CXciw/viewform" target="_blank" rel="noopener noreferrer">
                <img src="/images/khb2024_last.png" className="w-[100%] rounded-md"></img>
                
                <div className="text-3xl">
                  俳バト一般来場者申し込みフォーム
                </div>
                <div>2024年10月20日</div>
              </a>
            </div>
          </div>
          {/* お知らせの記事終 */}
        </div>
        {/*お知らせ終 背景色元に戻る */}
        <div>
          
          
        </div>
        {/* フッター */}
        <div className="border-t-2 text-white border-white pt-[20px] mt-[50px] text-center">
          <p className="text-lg mb-[7px]"><a href="" className="underline">関西学生文芸連合TOP</a> &nbsp;/&nbsp;
            <a href="ForMember" className="underline">For&nbsp;Member</a></p>
          <p>©&nbsp;2024-2025&nbsp;関西学生文芸連合&nbsp;/&nbsp;Last Managed: 2024/11/17&nbsp;16:51&nbsp;Michael</p>
        </div>
        {/* フッター終 */}
      </div>
      {/*　タイトル以下終  */}
    </div>
    {/* コンテンツ終 */}
    </main>
  );
}
