
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl items-center font-mono text-sm lg:flex">
          same-K's portpolio
      </div>
      <div className="relative">
        <div className="bg-white px-6 py-8">
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">About me</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            smae-Kです。エンジニア歴約11年です。<br/>
            高校卒業後、ソフトウェアハウスに入社。
            組み込み、モバイルアプリ、Windowsアプリなどの開発を行ってきました。<br/>
            Web系技術に触ったのはこのポートフォリオの作成が初めてです。
          </p>
        </div>

        <h2>
          Skills
        </h2>
        </div>
    </main>
  );
}
