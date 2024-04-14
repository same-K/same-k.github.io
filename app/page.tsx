
export default function Home() {
  return (

    <main className="flex flex-col items-center">

      <header className="bg_white">
        <nav className="mx-auto flex items-center p-10 text-2xl">
          <p className="border-b-4">
            same-K&apos;s portfolio
          </p>
        </nav>
      </header>

      <div className="grid place-items-start gap-4">
        <div className="flex flex-row w-full place-content-between content-end">
          <h3 className="font-bold">About me</h3>
          <a href="https://github.com/same-K">
            <div className="flex flex-row underline">
              github
              <Arrow className="scale-75"/>
            </div>
          </a>
        </div>

        <p>
          smae-Kです。エンジニア歴約11年です。<br/>
          高校卒業後、ソフトウェアハウスに入社。<br/>
          組み込み、モバイルアプリ、Windowsアプリなどの開発を行ってきました。<br/>
          Web系技術に触ったのはこのポートフォリオの作成が初めてです。
        </p>

        <div className="w-full">
          <h3 className="font-bold">Skills</h3>
          <div className="grid grid-cols-3 grid-rows-3 border">
            <div className="p-1 font-bold border">カテゴリ</div>
            <div className="p-1 font-bold border">種別</div>
            <div className="p-1 font-bold border">備考</div>

            <div className="p-1 row-span-3 border">OS</div>
            <div className="border p-1">Windiws 10</div>
            <div className="border p-1 col-start-2">iOS</div>
            <div className="border p-1 col-start-2">Android</div>

            <div className="border p-1 row-span-3 row-start-2 col-start-3">通常使用に問題なし</div>

            <div className="p-1 row-span-6 border">言語</div>
            <div className="border p-1">C#</div>
            <div className="border p-1 col-start-2">Swift</div>
            <div className="border p-1 col-start-2">Andrid Java</div>
            <div className="border p-1 row-span-3 row-start-5 col-start-3">通常使用に問題なし</div>
            <div className="border p-1">C</div>
            <div className="border p-1 col-start-2">Objective-C</div>
            <div className="border p-1 col-start-2">Visual C++</div>
            <div className="border p-1 row-span-6 row-start-8 col-start-3">調べながらであれば開発可能</div>
          </div>
        </div>
     </div>
    </main>
  );
}
 