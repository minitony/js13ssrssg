export const dynamic = 'force-dynamic';

export default async function SsrPage() {
  // fetch() をサーバー側で実行: リクエストごとに現在時刻を取得
  const res = await fetch(
    'https://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'no-store' }
  ).catch(() => null);

  let currentTime: string;
  if (res?.ok) {
    const data = await res.json();
    currentTime = data.datetime;
  } else {
    currentTime = new Date().toISOString();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">SSR ページ</h1>
      <p className="text-xl">現在時刻 (サーバー側で fetch して毎回生成):</p>
      <p className="text-2xl font-mono text-blue-600 mt-2">{currentTime}</p>
      <p className="text-gray-600 mt-4">
        ※ ページをリロードするたびに時刻が更新されます
      </p>
    </div>
  );
}